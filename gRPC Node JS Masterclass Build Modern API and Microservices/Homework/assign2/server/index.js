var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

/*
   Implment the Calculator RPC Function 
*/

// This is the algorithm written from psudo code for the assingment
function alogrithm(number) {
	var k = 2
	var N = number
	array = []; 
	while(N > 1) {
		if(N % k == 0) {
			array.push(k)
			N = N / k
		} else {
			k = k + 1
		}
	}
	return array
}

function PrimeNumberDecomposition(call, callback) {
	var number = call.request.getNumber()

	var PrimeNumberDecompositionResponse = new calculator.PrimeNumberDecompositionResponse()

	// iterate through the loop and output each number
	array = alogrithm(number)
	for (index = 0; index < array.length; index++) { 
		PrimeNumberDecompositionResponse.setResult(number)
		 
		//setup streaming
		call.write(greetManyTimesResponse)
	}
	call.end() // Sent all of the messages
}

function main(){
	var server = new grpc.Server()
	
	// Add the function to the services 
	server.addService(service.CalculatorServiceService, {PrimeNumberDecomposition: PrimeNumberDecomposition})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

