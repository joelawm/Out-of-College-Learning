var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

/*
   Implment the Calculator RPC Function 
*/
function sum(call, callback) {
	// This grabs the sum the the client sends over
	var number1 = call.request.getFirstnumber()
	var number2 = call.request.getSecondnumber()

	var sumTotal = number1 + number2
	var response = new calculator.SumResponse()
	response.setSumResult(sumTotal)

	callback(null, response)
}

function main(){
	var server = new grpc.Server()
	
	server.addService(service.CalculatorServiceService, {sum: sum})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

