// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file platform/locator/v1/locator.proto (package platform.locator.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message platform.locator.v1.RegisterRequest
 */
export class RegisterRequest extends Message<RegisterRequest> {
  /**
   * @generated from field: string account_token = 1;
   */
  accountToken = "";

  /**
   * @generated from field: string server_id = 2;
   */
  serverId = "";

  constructor(data?: PartialMessage<RegisterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.RegisterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "account_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "server_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterRequest {
    return new RegisterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterRequest {
    return new RegisterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterRequest | PlainMessage<RegisterRequest> | undefined, b: RegisterRequest | PlainMessage<RegisterRequest> | undefined): boolean {
    return proto3.util.equals(RegisterRequest, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.RegisterResponse
 */
export class RegisterResponse extends Message<RegisterResponse> {
  /**
   * @generated from field: string refresh_token = 1;
   */
  refreshToken = "";

  /**
   * @generated from field: string access_token = 2;
   */
  accessToken = "";

  constructor(data?: PartialMessage<RegisterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.RegisterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "refresh_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterResponse {
    return new RegisterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterResponse {
    return new RegisterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterResponse | PlainMessage<RegisterResponse> | undefined, b: RegisterResponse | PlainMessage<RegisterResponse> | undefined): boolean {
    return proto3.util.equals(RegisterResponse, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.LocateRequest
 */
export class LocateRequest extends Message<LocateRequest> {
  /**
   * @generated from field: string server_id = 1;
   */
  serverId = "";

  /**
   * body is of type LocateRequestBody
   *
   * @generated from field: platform.locator.v1.EncryptedMessage body = 2;
   */
  body?: EncryptedMessage;

  constructor(data?: PartialMessage<LocateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.LocateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "server_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "message", T: EncryptedMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocateRequest {
    return new LocateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocateRequest {
    return new LocateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocateRequest {
    return new LocateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: LocateRequest | PlainMessage<LocateRequest> | undefined, b: LocateRequest | PlainMessage<LocateRequest> | undefined): boolean {
    return proto3.util.equals(LocateRequest, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.LocateRequestBody
 */
export class LocateRequestBody extends Message<LocateRequestBody> {
  /**
   * @generated from field: string server_id = 1;
   */
  serverId = "";

  /**
   * @generated from field: string address = 2;
   */
  address = "";

  /**
   * @generated from field: uint32 port = 3;
   */
  port = 0;

  constructor(data?: PartialMessage<LocateRequestBody>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.LocateRequestBody";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "server_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocateRequestBody {
    return new LocateRequestBody().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocateRequestBody {
    return new LocateRequestBody().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocateRequestBody {
    return new LocateRequestBody().fromJsonString(jsonString, options);
  }

  static equals(a: LocateRequestBody | PlainMessage<LocateRequestBody> | undefined, b: LocateRequestBody | PlainMessage<LocateRequestBody> | undefined): boolean {
    return proto3.util.equals(LocateRequestBody, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.LocateResponse
 */
export class LocateResponse extends Message<LocateResponse> {
  /**
   * body is of type LocateResponseBody
   *
   * @generated from field: platform.locator.v1.EncryptedMessage body = 1;
   */
  body?: EncryptedMessage;

  constructor(data?: PartialMessage<LocateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.LocateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "body", kind: "message", T: EncryptedMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocateResponse {
    return new LocateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocateResponse {
    return new LocateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocateResponse {
    return new LocateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: LocateResponse | PlainMessage<LocateResponse> | undefined, b: LocateResponse | PlainMessage<LocateResponse> | undefined): boolean {
    return proto3.util.equals(LocateResponse, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.LocateResponseBody
 */
export class LocateResponseBody extends Message<LocateResponseBody> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: uint32 port = 2;
   */
  port = 0;

  constructor(data?: PartialMessage<LocateResponseBody>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.LocateResponseBody";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocateResponseBody {
    return new LocateResponseBody().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocateResponseBody {
    return new LocateResponseBody().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocateResponseBody {
    return new LocateResponseBody().fromJsonString(jsonString, options);
  }

  static equals(a: LocateResponseBody | PlainMessage<LocateResponseBody> | undefined, b: LocateResponseBody | PlainMessage<LocateResponseBody> | undefined): boolean {
    return proto3.util.equals(LocateResponseBody, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.ServerMessage
 */
export class ServerMessage extends Message<ServerMessage> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken = "";

  /**
   * @generated from oneof platform.locator.v1.ServerMessage.body
   */
  body: {
    /**
     * @generated from field: platform.locator.v1.Initialize initialize = 2;
     */
    value: Initialize;
    case: "initialize";
  } | {
    /**
     * @generated from field: platform.locator.v1.Accept accept = 3;
     */
    value: Accept;
    case: "accept";
  } | {
    /**
     * @generated from field: platform.locator.v1.Reject reject = 4;
     */
    value: Reject;
    case: "reject";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<ServerMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.ServerMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "initialize", kind: "message", T: Initialize, oneof: "body" },
    { no: 3, name: "accept", kind: "message", T: Accept, oneof: "body" },
    { no: 4, name: "reject", kind: "message", T: Reject, oneof: "body" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerMessage {
    return new ServerMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerMessage {
    return new ServerMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerMessage {
    return new ServerMessage().fromJsonString(jsonString, options);
  }

  static equals(a: ServerMessage | PlainMessage<ServerMessage> | undefined, b: ServerMessage | PlainMessage<ServerMessage> | undefined): boolean {
    return proto3.util.equals(ServerMessage, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.Initialize
 */
export class Initialize extends Message<Initialize> {
  /**
   * @generated from field: string server_id = 1;
   */
  serverId = "";

  constructor(data?: PartialMessage<Initialize>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.Initialize";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "server_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Initialize {
    return new Initialize().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Initialize {
    return new Initialize().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Initialize {
    return new Initialize().fromJsonString(jsonString, options);
  }

  static equals(a: Initialize | PlainMessage<Initialize> | undefined, b: Initialize | PlainMessage<Initialize> | undefined): boolean {
    return proto3.util.equals(Initialize, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.Accept
 */
export class Accept extends Message<Accept> {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId = "";

  /**
   * body is of type LocateResponseBody
   *
   * @generated from field: platform.locator.v1.EncryptedMessage body = 2;
   */
  body?: EncryptedMessage;

  constructor(data?: PartialMessage<Accept>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.Accept";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "message", T: EncryptedMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Accept {
    return new Accept().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Accept {
    return new Accept().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Accept {
    return new Accept().fromJsonString(jsonString, options);
  }

  static equals(a: Accept | PlainMessage<Accept> | undefined, b: Accept | PlainMessage<Accept> | undefined): boolean {
    return proto3.util.equals(Accept, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.Reject
 */
export class Reject extends Message<Reject> {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId = "";

  constructor(data?: PartialMessage<Reject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.Reject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reject {
    return new Reject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reject {
    return new Reject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reject {
    return new Reject().fromJsonString(jsonString, options);
  }

  static equals(a: Reject | PlainMessage<Reject> | undefined, b: Reject | PlainMessage<Reject> | undefined): boolean {
    return proto3.util.equals(Reject, a, b);
  }
}

/**
 * LocatorMessage prompts the server to send a valid address and port for a client connection.
 * The server can choose to accept or reject the locate request.
 *
 * @generated from message platform.locator.v1.LocatorMessage
 */
export class LocatorMessage extends Message<LocatorMessage> {
  /**
   * @generated from oneof platform.locator.v1.LocatorMessage.body
   */
  body: {
    /**
     * @generated from field: platform.locator.v1.Locate locate = 1;
     */
    value: Locate;
    case: "locate";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<LocatorMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.LocatorMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "locate", kind: "message", T: Locate, oneof: "body" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocatorMessage {
    return new LocatorMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocatorMessage {
    return new LocatorMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocatorMessage {
    return new LocatorMessage().fromJsonString(jsonString, options);
  }

  static equals(a: LocatorMessage | PlainMessage<LocatorMessage> | undefined, b: LocatorMessage | PlainMessage<LocatorMessage> | undefined): boolean {
    return proto3.util.equals(LocatorMessage, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.Locate
 */
export class Locate extends Message<Locate> {
  /**
   * @generated from field: string request_id = 1;
   */
  requestId = "";

  /**
   * body is of type LocateRequestBody
   *
   * @generated from field: platform.locator.v1.EncryptedMessage body = 2;
   */
  body?: EncryptedMessage;

  constructor(data?: PartialMessage<Locate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.Locate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "message", T: EncryptedMessage },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Locate {
    return new Locate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Locate {
    return new Locate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Locate {
    return new Locate().fromJsonString(jsonString, options);
  }

  static equals(a: Locate | PlainMessage<Locate> | undefined, b: Locate | PlainMessage<Locate> | undefined): boolean {
    return proto3.util.equals(Locate, a, b);
  }
}

/**
 * @generated from message platform.locator.v1.EncryptedMessage
 */
export class EncryptedMessage extends Message<EncryptedMessage> {
  /**
   * @generated from field: string public_key = 1;
   */
  publicKey = "";

  /**
   * body is an encrypted protobuf message that can be decrypted using the given public key
   *
   * @generated from field: bytes body = 2;
   */
  body = new Uint8Array(0);

  constructor(data?: PartialMessage<EncryptedMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.locator.v1.EncryptedMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "body", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EncryptedMessage {
    return new EncryptedMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EncryptedMessage {
    return new EncryptedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EncryptedMessage {
    return new EncryptedMessage().fromJsonString(jsonString, options);
  }

  static equals(a: EncryptedMessage | PlainMessage<EncryptedMessage> | undefined, b: EncryptedMessage | PlainMessage<EncryptedMessage> | undefined): boolean {
    return proto3.util.equals(EncryptedMessage, a, b);
  }
}

