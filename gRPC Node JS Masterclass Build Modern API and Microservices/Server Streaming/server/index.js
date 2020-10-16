const path = require('path')
const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc');
const { request } = require('http');

// grpc service defintion for greet

const greetProtoPath = path.join(__dirname, "..", "proto", "greet.proto")
const greetProtoDefintion = protoLoader.loadSync(greetProtoPath, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true
});

const GreetPackageDefinition = grpc.loadPackageDefinition(greetProtoDefintion).greet;

function greet(call, callback) {
	var firtName = call.request.greeting.first_name;
	var lastName = call.request.greeting.last_name;

	callback(null, {result: "Hello " + firtName + " "  + lastName})
}

function main() {
	const server = new grpc.Server()

	server.addService(GreetPackageDefinition.GreetService.service, {
		greet: greet
	})

	server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
	server.start()
	console.log("Server Running at 127.0.0.1:50051");
}
main()