var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

// Client Streaming
function callLongGreeting () {
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())

    // Create requests
    var request = new greets.LongGreetRequest()

    var call = client.longGreet(request, (error, message) => {
        if (!error)
        {
            console.log('Server Response: ', message.getResult());
        } else {
            console.error(error);
        }
    })

    let count = 0, intervalID = setInterval(function() {
        console.log('Sending Message ' + count);
        
        var request = new greets.LongGreetRequest()
        var greeting = new greets.Greeting()
        greeting.setFirstName('Pabulo')
        greeting.setLastName('Dichone')

        request.setGreet(greeting)

        var requestTwo = new greets.LongGreetRequest()
        var greetingTwo = new greets.Greeting()
        greetingTwo.setFirstName('Stephan')
        greetingTwo.setLastName('Mareek')

        requestTwo.setGreet(greetingTwo)

        call.write(request)
        call.write(requestTwo)


        if (++count > 3) {
            clearInterval(intervalID)
            call.end() // Sent all of the messages
        }
    }, 1000)
}

function main() {
    callLongGreeting()
}
main()