// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_calculator_pb = require('../proto/calculator_pb.js');

function serialize_calculator_SquareRootRequest(arg) {
  if (!(arg instanceof proto_calculator_pb.SquareRootRequest)) {
    throw new Error('Expected argument of type calculator.SquareRootRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SquareRootRequest(buffer_arg) {
  return proto_calculator_pb.SquareRootRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_SquareRootResponse(arg) {
  if (!(arg instanceof proto_calculator_pb.SquareRootResponse)) {
    throw new Error('Expected argument of type calculator.SquareRootResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_SquareRootResponse(buffer_arg) {
  return proto_calculator_pb.SquareRootResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  // unary API
squareRoot: {
    path: '/calculator.CalculatorService/SquareRoot',
    requestStream: false,
    responseStream: false,
    requestType: proto_calculator_pb.SquareRootRequest,
    responseType: proto_calculator_pb.SquareRootResponse,
    requestSerialize: serialize_calculator_SquareRootRequest,
    requestDeserialize: deserialize_calculator_SquareRootRequest,
    responseSerialize: serialize_calculator_SquareRootResponse,
    responseDeserialize: deserialize_calculator_SquareRootResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
