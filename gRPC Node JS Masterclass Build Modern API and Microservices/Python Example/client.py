"""
Client isn't neccesaryy to the overall program, its just to connect and send data to the server.

"""
import grpc

# import the generated classes
import proto.calc_pb2 as calc_pb2
import proto.calc_pb2_grpc as calc_pb2_grpc

# open a gRPC channel
channel = grpc.insecure_channel('localhost:50051')

# create a stub (client)
stub = calc_pb2_grpc.CalculatorStub(channel)

# create a valid request message
number = calc_pb2.Number(value=16)

# make the call
response = stub.SquareRoot(number)

response2 = stub.Addition(number)

# et voilà
print(response.value)
print(response2.value)