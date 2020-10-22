var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

function doErrorCall() {
    var client = new service.CalculatorServiceClient('localhost:50051', grpc.credentials.createInsecure())

    var number = -1
    var SquareRootRequest = new calculator.SquareRootRequest()
    SquareRootRequest.setNumber(number)

    client.squareRoot(SquareRootRequest, (error, response) => {
        if (!error) {
            console.log("The Square Root is: ", response.getNumberRoot());
        } else {
            console.log(error.message);
        }
    })
}

function main() {
    doErrorCall()
}
main()