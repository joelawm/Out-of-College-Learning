var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

// Client Streaming
function callLongGreeting () {
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())

    // Create requests
    var request = new greets.LongGreetRequest()

    var call = client.longGreet(request, (error, message) => {
        v
    })
}

function main() {
    callLongGreeting()
}
main()