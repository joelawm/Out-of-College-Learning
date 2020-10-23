var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

function callSum() {
    var client = new service.CalculatorServiceClient('localhost:50051', grpc.credentials.createInsecure())

    var number1 = 10
    var number2 = 3
    var SumRequest = new calculator.SumRequest()
    SumRequest.setFirstnumber(number1)
    SumRequest.setSecondnumber(number2)

    client.sum(SumRequest, (error, response) => {
        if (!error) {
            console.log("The Sum is: ", response.getSumResult());
        } else {
            console.log(error);
        }
    })
}

function main() {
    callSum()
}
main()