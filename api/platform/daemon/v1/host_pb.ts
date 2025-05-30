// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file platform/daemon/v1/host.proto (package platform.daemon.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message platform.daemon.v1.ShutdownAlertRequest
 */
export class ShutdownAlertRequest extends Message<ShutdownAlertRequest> {
  constructor(data?: PartialMessage<ShutdownAlertRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.daemon.v1.ShutdownAlertRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShutdownAlertRequest {
    return new ShutdownAlertRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShutdownAlertRequest {
    return new ShutdownAlertRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShutdownAlertRequest {
    return new ShutdownAlertRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ShutdownAlertRequest | PlainMessage<ShutdownAlertRequest> | undefined, b: ShutdownAlertRequest | PlainMessage<ShutdownAlertRequest> | undefined): boolean {
    return proto3.util.equals(ShutdownAlertRequest, a, b);
  }
}

/**
 * @generated from message platform.daemon.v1.ShutdownAlertResponse
 */
export class ShutdownAlertResponse extends Message<ShutdownAlertResponse> {
  constructor(data?: PartialMessage<ShutdownAlertResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "platform.daemon.v1.ShutdownAlertResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ShutdownAlertResponse {
    return new ShutdownAlertResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ShutdownAlertResponse {
    return new ShutdownAlertResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ShutdownAlertResponse {
    return new ShutdownAlertResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ShutdownAlertResponse | PlainMessage<ShutdownAlertResponse> | undefined, b: ShutdownAlertResponse | PlainMessage<ShutdownAlertResponse> | undefined): boolean {
    return proto3.util.equals(ShutdownAlertResponse, a, b);
  }
}

