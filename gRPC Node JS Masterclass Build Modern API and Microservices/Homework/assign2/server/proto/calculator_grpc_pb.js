// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_calculator_pb = require('../proto/calculator_pb.js');

function serialize_calculator_PrimeNumberDecompositionRequest(arg) {
  if (!(arg instanceof proto_calculator_pb.PrimeNumberDecompositionRequest)) {
    throw new Error('Expected argument of type calculator.PrimeNumberDecompositionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeNumberDecompositionRequest(buffer_arg) {
  return proto_calculator_pb.PrimeNumberDecompositionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_PrimeNumberDecompositionResponse(arg) {
  if (!(arg instanceof proto_calculator_pb.PrimeNumberDecompositionResponse)) {
    throw new Error('Expected argument of type calculator.PrimeNumberDecompositionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_PrimeNumberDecompositionResponse(buffer_arg) {
  return proto_calculator_pb.PrimeNumberDecompositionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // unary API
primeNumberDecomposition: {
    path: '/calculator.CalculatorService/PrimeNumberDecomposition',
    requestStream: false,
    responseStream: true,
    requestType: proto_calculator_pb.PrimeNumberDecompositionRequest,
    responseType: proto_calculator_pb.PrimeNumberDecompositionResponse,
    requestSerialize: serialize_calculator_PrimeNumberDecompositionRequest,
    requestDeserialize: deserialize_calculator_PrimeNumberDecompositionRequest,
    responseSerialize: serialize_calculator_PrimeNumberDecompositionResponse,
    responseDeserialize: deserialize_calculator_PrimeNumberDecompositionResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
