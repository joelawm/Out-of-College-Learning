var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

/*
   Implment the Greet RPC Function 
*/
async function sleep(interval) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), interval)
	})
}

async function greetEveryone(call, callback) {
	call.on('data', response => {
		var fullName = response.getGreet().getFirstName() + ' ' + response.getGreet().getLastName()
		console.log('Hello ' + fullName);
	})

	call.on('error', (error) => {
		console.error(error);
	})

	call.on('end', () =>{
		console.log('The end...');
	})

	for(var i = 0; i < 10; i++) {
		var request = new greets.GreetEveryoneResponse()
		request.setResult("Pabulo Dichone")

		call.write(request)
		await sleep(1000)
	}
	call.end()
}

function main() {
	var server = new grpc.Server()
	
	server.addService(service.GreetServiceService, {greetEveryone, greetEveryone})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

