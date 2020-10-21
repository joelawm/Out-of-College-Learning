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

const client = new GreetPackageDefinition.GreetService('localhost:50051', grpc.credentials.createInsecure())

function callGreetings() {
	var request = {
		greeting: {
			first_name: "Jerry",
			last_name: "Tom"
		}
	}
	client.greet(request, (error, response) => {
		if(!error){
			console.log("Greeting Response ", response.result);
		} else {
			console.log(error);
		}
	});
}

function main() {
	callGreetings()
}
main()