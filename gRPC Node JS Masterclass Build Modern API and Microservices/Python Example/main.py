import grpc
from concurrent import futures
import time

# import the generated classes
import proto.calc_pb2 as calc_pb2
import proto.calc_pb2_grpc as calc_pb2_grpc

# import server
import server.server as server

def main():
	# This just launches the program to esablish the root of the file structure.
	server.server_launch()

if __name__ == "__main__":
	main()