var grpc = require('grpc')
var greets = require('../server/proto/greet_pb')
var service = require('../server/proto/greet_grpc_pb')

// Client Streaming
async function callBiDirect () {

    console.log('Hello I am a gRPC client');
    var client = new service.GreetServiceClient('localhost:50051', grpc.credentials.createInsecure())

    var call = client.greetEveryone(request, (error, response) => {
        console.log('Server Response: ' + response);
    })

    call.on('data', response => {
        console.log('Hello Client: ' + response.getResult());
    })

    call.on('error', error => {
        console.error(error);
    })

    call.on('end', () =>{
        console.log('Client The End');
    })

    for (var i = 0; i < 10; i++) {
        var greeting = new greets.Greeting()
        greeting.setFirstName('Stephan')
        greeting.setLastName('Mareek')

        var request = new greets.GreetEveryoneRequest()
        request.setGreet(greeting)

        call.write(request)

        await sleep(1500)
    }

    call.end()
}

async function sleep(interval) {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), interval)
	})
}

function main() {
    callBiDirect()
}
main()