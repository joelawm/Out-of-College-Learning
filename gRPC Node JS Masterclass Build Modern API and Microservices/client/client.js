var grpc = require('grpc')

var services = require('../server/proto/dummy_grpc_pb')

function main() {
    console.log("Hello from client")
    var client = new services.DummyServiceClient('localhost:50051', grpc.credentials.createInsecure())

    // More code after this
    console.log("client", client);
}
main()