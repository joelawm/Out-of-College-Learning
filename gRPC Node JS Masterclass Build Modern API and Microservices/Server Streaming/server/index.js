var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

/*
   Implment the Greet RPC Function 
*/

function greetMany() {
	
}

function greet(call, callback) {
	var greeting = new greets.GreetResponse()
	greeting.setResult("Hello "+ call.request.getGreet().getFirstName())

	callback(null, greeting)
}

function main(){
	var server = new grpc.Server()
	
	server.addService(service.GreetServiceService, {greet: greet})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

