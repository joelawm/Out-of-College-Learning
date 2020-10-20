var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

/*
   Implment the Greet RPC Function 
*/

function longGreet(call, callback) {
	call.on('data', request => {
		var fullName = request.getGreet().getFirstName() + ' ' + request.getGreet().getLastName()
		console.log('Hello ' + fullName);
	})

	call.on('error', (error) => {
		console.error(error);
	})

	call.on('end', () =>{
		var response = new greets.LongGreetResponse()
		response.setResult("Long Greet Client Streaming.....")

		callback(null, response)
	})
}

function main() {
	var server = new grpc.Server()
	
	server.addService(service.GreetServiceService, {longGreet, longGreet})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

