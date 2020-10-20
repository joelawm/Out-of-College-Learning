var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

function callGreetings() {
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())
    var request = new greets.GreetRequest()

    // Created a protocol buffer greeting message
    var greeting = new greets.Greeting()
    greeting.setFirstName("Jerry")
    greeting.setLastName("Tom")

    // Set the greeting
    request.setGreeting(greeting)

    // Calling the server greet function
    client.greet(request, (error, response) => {
        if(!error) {
            console.log("Greeting Response ", response.getResult());
        } else {
            console.error(error);
        }
    })
}

function callGreetingsManyTimes() {
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())

    // Create requests
    var request = new greets.GreetManyTimesRequest()

    var greeting = new greets.Greeting()
    greeting.setFirstName('Pabulo')
    greeting.setLastName('Dichone')

    request.setGreet(greeting)

    var call = client.greetManyTimes(request, () => {})

     call.on('data', (response) => {
         console.log('Client Streaming Response: ', response.getResult());
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
    //callGreetings()
    callGreetingsManyTimes()
}
main()