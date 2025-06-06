// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.2
// 	protoc        (unknown)
// source: platform/daemon/v1/wireguard.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type WireguardInterface struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id         string           `protobuf:"bytes,1,opt,name=id,proto3" json:"id" bun:"id" csv:"id" pg:"id" yaml:"id"`
	Name       string           `protobuf:"bytes,2,opt,name=name,proto3" json:"name" bun:"name" csv:"name" pg:"name" yaml:"name"`
	Ips        []string         `protobuf:"bytes,3,rep,name=ips,proto3" json:"ips" bun:"ips" csv:"ips" pg:"ips" yaml:"ips"`
	ListenPort uint32           `protobuf:"varint,4,opt,name=listen_port,json=listenPort,proto3" json:"listen_port" bun:"listen_port" csv:"listen_port" pg:"listen_port" yaml:"listenPort"`
	Peers      []*WireguardPeer `protobuf:"bytes,5,rep,name=peers,proto3" json:"peers" bun:"peers" csv:"peers" pg:"peers" yaml:"peers"`
}

func (x *WireguardInterface) Reset() {
	*x = WireguardInterface{}
	if protoimpl.UnsafeEnabled {
		mi := &file_platform_daemon_v1_wireguard_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WireguardInterface) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WireguardInterface) ProtoMessage() {}

func (x *WireguardInterface) ProtoReflect() protoreflect.Message {
	mi := &file_platform_daemon_v1_wireguard_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WireguardInterface.ProtoReflect.Descriptor instead.
func (*WireguardInterface) Descriptor() ([]byte, []int) {
	return file_platform_daemon_v1_wireguard_proto_rawDescGZIP(), []int{0}
}

func (x *WireguardInterface) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *WireguardInterface) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *WireguardInterface) GetIps() []string {
	if x != nil {
		return x.Ips
	}
	return nil
}

func (x *WireguardInterface) GetListenPort() uint32 {
	if x != nil {
		return x.ListenPort
	}
	return 0
}

func (x *WireguardInterface) GetPeers() []*WireguardPeer {
	if x != nil {
		return x.Peers
	}
	return nil
}

type WireguardPeer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PublicKey  string   `protobuf:"bytes,1,opt,name=public_key,json=publicKey,proto3" json:"public_key" bun:"public_key" csv:"public_key" pg:"public_key" yaml:"publicKey"`
	AllowedIps []string `protobuf:"bytes,2,rep,name=allowed_ips,json=allowedIps,proto3" json:"allowed_ips" bun:"allowed_ips" csv:"allowed_ips" pg:"allowed_ips" yaml:"allowedIps"`
}

func (x *WireguardPeer) Reset() {
	*x = WireguardPeer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_platform_daemon_v1_wireguard_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WireguardPeer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WireguardPeer) ProtoMessage() {}

func (x *WireguardPeer) ProtoReflect() protoreflect.Message {
	mi := &file_platform_daemon_v1_wireguard_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WireguardPeer.ProtoReflect.Descriptor instead.
func (*WireguardPeer) Descriptor() ([]byte, []int) {
	return file_platform_daemon_v1_wireguard_proto_rawDescGZIP(), []int{1}
}

func (x *WireguardPeer) GetPublicKey() string {
	if x != nil {
		return x.PublicKey
	}
	return ""
}

func (x *WireguardPeer) GetAllowedIps() []string {
	if x != nil {
		return x.AllowedIps
	}
	return nil
}

var File_platform_daemon_v1_wireguard_proto protoreflect.FileDescriptor

var file_platform_daemon_v1_wireguard_proto_rawDesc = []byte{
	0x0a, 0x22, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x2f, 0x64, 0x61, 0x65, 0x6d, 0x6f,
	0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x77, 0x69, 0x72, 0x65, 0x67, 0x75, 0x61, 0x72, 0x64, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x12, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x2e, 0x64,
	0x61, 0x65, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x22, 0xa4, 0x01, 0x0a, 0x12, 0x57, 0x69, 0x72,
	0x65, 0x67, 0x75, 0x61, 0x72, 0x64, 0x49, 0x6e, 0x74, 0x65, 0x72, 0x66, 0x61, 0x63, 0x65, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x70, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x03, 0x69, 0x70, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x6c, 0x69, 0x73, 0x74, 0x65, 0x6e, 0x5f,
	0x70, 0x6f, 0x72, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0a, 0x6c, 0x69, 0x73, 0x74,
	0x65, 0x6e, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x37, 0x0a, 0x05, 0x70, 0x65, 0x65, 0x72, 0x73, 0x18,
	0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d,
	0x2e, 0x64, 0x61, 0x65, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x57, 0x69, 0x72, 0x65, 0x67,
	0x75, 0x61, 0x72, 0x64, 0x50, 0x65, 0x65, 0x72, 0x52, 0x05, 0x70, 0x65, 0x65, 0x72, 0x73, 0x22,
	0x4f, 0x0a, 0x0d, 0x57, 0x69, 0x72, 0x65, 0x67, 0x75, 0x61, 0x72, 0x64, 0x50, 0x65, 0x65, 0x72,
	0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x75, 0x62, 0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x12,
	0x1f, 0x0a, 0x0b, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x65, 0x64, 0x5f, 0x69, 0x70, 0x73, 0x18, 0x02,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x6c, 0x6c, 0x6f, 0x77, 0x65, 0x64, 0x49, 0x70, 0x73,
	0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x68,
	0x6f, 0x6d, 0x65, 0x2d, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x2d, 0x69, 0x6f, 0x2f, 0x63, 0x6f, 0x72,
	0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x70, 0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x2f, 0x64,
	0x61, 0x65, 0x6d, 0x6f, 0x6e, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_platform_daemon_v1_wireguard_proto_rawDescOnce sync.Once
	file_platform_daemon_v1_wireguard_proto_rawDescData = file_platform_daemon_v1_wireguard_proto_rawDesc
)

func file_platform_daemon_v1_wireguard_proto_rawDescGZIP() []byte {
	file_platform_daemon_v1_wireguard_proto_rawDescOnce.Do(func() {
		file_platform_daemon_v1_wireguard_proto_rawDescData = protoimpl.X.CompressGZIP(file_platform_daemon_v1_wireguard_proto_rawDescData)
	})
	return file_platform_daemon_v1_wireguard_proto_rawDescData
}

var file_platform_daemon_v1_wireguard_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_platform_daemon_v1_wireguard_proto_goTypes = []any{
	(*WireguardInterface)(nil), // 0: platform.daemon.v1.WireguardInterface
	(*WireguardPeer)(nil),      // 1: platform.daemon.v1.WireguardPeer
}
var file_platform_daemon_v1_wireguard_proto_depIdxs = []int32{
	1, // 0: platform.daemon.v1.WireguardInterface.peers:type_name -> platform.daemon.v1.WireguardPeer
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_platform_daemon_v1_wireguard_proto_init() }
func file_platform_daemon_v1_wireguard_proto_init() {
	if File_platform_daemon_v1_wireguard_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_platform_daemon_v1_wireguard_proto_msgTypes[0].Exporter = func(v any, i int) any {
			switch v := v.(*WireguardInterface); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_platform_daemon_v1_wireguard_proto_msgTypes[1].Exporter = func(v any, i int) any {
			switch v := v.(*WireguardPeer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_platform_daemon_v1_wireguard_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_platform_daemon_v1_wireguard_proto_goTypes,
		DependencyIndexes: file_platform_daemon_v1_wireguard_proto_depIdxs,
		MessageInfos:      file_platform_daemon_v1_wireguard_proto_msgTypes,
	}.Build()
	File_platform_daemon_v1_wireguard_proto = out.File
	file_platform_daemon_v1_wireguard_proto_rawDesc = nil
	file_platform_daemon_v1_wireguard_proto_goTypes = nil
	file_platform_daemon_v1_wireguard_proto_depIdxs = nil
}
