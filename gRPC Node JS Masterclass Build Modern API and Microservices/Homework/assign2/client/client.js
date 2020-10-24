var grpc = require('grpc')
var calculator = require('../server/proto/calculator_pb')
var service = require('../server/proto/calculator_grpc_pb')

function callPrimeNumberDecomposition() {
    var client = new service.CalculatorServiceClient('localhost:50051', grpc.credentials.createInsecure())
    var number = 120
    // Create the request
    var request = new calculator.PrimeNumberDecompositionRequest()

    // Set the number
    request.setNumber(number)

    var call = client.PrimeNumberDecomposition(request, () => {})

    call.on('data', (response) => {
        console.log('Client Streaming Response: ', response.getResultBuffer());
    })

    call.on('status', (status) => {
        console.log(status.details);
    })

    call.on('error', (error) => {
        console.error(error.details);
    })

    call.on('end', () => {
        console.log('Streaming Ended.');
    })

}

function main() {
    callPrimeNumberDecomposition()
}
main()