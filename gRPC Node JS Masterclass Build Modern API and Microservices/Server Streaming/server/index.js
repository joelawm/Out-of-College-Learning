var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

/*
   Implment the Greet RPC Function 
*/

function greetManyTimes(call, callback) {
	var firstName = call.request.getGreet().getFirstName()

	let count = 0, intervalID = setInterval(function () {
		var greetManyTimesResponse = new greets.GreetManyTimesResponse()
		greetManyTimesResponse.setResult(firstName)

		//setup streaming
		call.write(greetManyTimesResponse)

		if (++count > 9) {
			clearInterval(intervalID)
			call.end() // Sent all of the messages
		}
	}, 1000)
}

function greet(call, callback) {
	var greeting = new greets.GreetResponse()
	greeting.setResult("Hello "+ call.request.getGreeting().getFirstName())

	callback(null, greeting)
}

function main() {
	var server = new grpc.Server()
	
	server.addService(service.GreetServiceService, {greet: greet, greetManyTimes: greetManyTimes})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

