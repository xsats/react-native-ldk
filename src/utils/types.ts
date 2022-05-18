export enum ENetworks {
	regtest = 'regtest',
	testnet = 'testnet',
	mainnet = 'mainnet'
}

export enum EEventTypes {
	ldk_log = 'ldk_log',
	swift_log = 'swift_log',
	register_tx = 'register_tx',
	register_output = 'register_output',
	broadcast_transaction = 'broadcast_transaction',
	persist_manager = 'persist_manager',
	persist_new_channel = 'persist_new_channel',
	channel_manager_event = 'channel_manager_event',
	persist_graph = 'persist_graph',
	update_persisted_channel = 'update_persisted_channel'
}

//LDK event responses
export type TChannelBackupEvent = { id: string; data: string };
export type TRegisterTxEvent = { txid: string; script_pubkey: string };
export type TRegisterOutputEvent = { block_hash: string; index: number; script_pubkey: string };
export type TPersistManagerEvent = { channel_manager: string };
export type TPersistGraphEvent = { network_graph: string };
export type TBroadcastTransactionEvent = { tx: string };
export type TChannelManagerEvent = { event: string };

export type TLogListener = {
	id: string;
	callback: (log: string) => void;
};

export type TFeeUpdateReq = {
	highPriority: number;
	normal: number;
	background: number;
};

export type TSyncTipReq = {
	header: string;
	height: number;
};

export type TAddPeerReq = {
	address: string;
	port: number;
	pubKey: string;
};

export type TInitChannelManagerReq = {
	network: ENetworks;
	serializedChannelManager: string;
	bestBlock: {
		hash: string;
		height: number;
	};
};

export type TInitConfig = {
	acceptInboundChannels: boolean;
	manuallyAcceptInboundChannels: boolean;
	announcedChannels: boolean;
	minChannelHandshakeDepth: number;
};

export enum ELdkLogLevels {
	trace = 1, //LDKLevel_Trace
	debug = 2, //LDKLevel_Debug
	info = 3, //LDKLevel_Info
	warn = 4, //LDKLevel_Warn
	error = 5 //LDKLevel_Error
}
