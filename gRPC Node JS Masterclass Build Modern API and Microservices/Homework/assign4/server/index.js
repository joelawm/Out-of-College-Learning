var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

/*
   Implment the Calculator RPC Function 
*/
function squareRoot(call, callback) {
	var number = call.request.getNumber()

	if(number >= 0) {
		var numberRoot = Math.sqrt(number)
		var response = new calculator.SquareRootResponse()
		response.setNumberRoot(numberRoot)

		callback(null, response)
	} else {
		return callback({code: grpc.status.INVALID_ARGUMENT, message: 'The Number being sent is not positive. Number Sent: ' + number})
	}
}

function main(){
	var server = new grpc.Server()
	
	server.addService(service.CalculatorServiceService, {squareRoot: squareRoot})
	server.bind("127.0.0.1:50051", grpc.ServerCredentials.createInsecure())
	server.start()

	console.log("Server runnning on ip 127.0.0.1:50051");
}
main()

