var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

var services = require('../server/proto/dummy_grpc_pb')

function main() {
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())
    var request = new greets.GreetRequest()

    // Created a protocol buffer greeting message
    var greeting = new greets.Greeting()
    greeting.setFirstName("Jerry")
    greeting.setLastName("Tom")

    // Set the greeting
    request.setGreet(greeting)

    // Calling the server greet function
    client.greet(request, (error, response) => {
        if(!error) {
            console.log("Greeting Response ", response.getResult());
        } else {
            console.error(error);
        }
    })
}
main()