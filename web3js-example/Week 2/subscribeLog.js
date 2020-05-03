var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/v3/f54a0bf77bc744299c32a493ee6d038c'));

// watch my smart contract (events, ...)
web3.eth.subscribe('logs', {
    // smart contract address
    address: '0xb62112aff30d3d36a311afde2900ad1faeaf429f',
    // for new contract Deposit1
	// address: '0xfd857a7580c690543bf451ff7d6f2189793fc0c7',
	topics : [null]
}, function(error, result) {
	if (error) {
		console.log("error", error);
	}
}).on("connected", function(subscriptionId) {
	console.log("subscrpitionId : ", subscriptionId);
}).on("data", function(log) {
	console.log("log", log);
});

// in metamask, send 0.3 eth to smart contract (0xb62112aff30d3d36a311afde2900ad1faeaf429f)
// check printed log

// data: non-indexed
// 0x429d069189e0000 = 300000000000000000wei = 0.3eth

// topics: indexed
// event signature (Keccak-256), wallet address (indexed from)
// 0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c
// = 'Deposit(address,uint256)'

// in remix, withdraw 100
// check printed log
// data: 100wei = 0x64
// topics: [Withdrawal(address,uint256), my wallet]

// Deposit1 for uint indexed, uint
// in remix, new smart contract deploy & modify contract address
// demon restart (node subscribeLog.js)
// in metamask, send 0.1eth
// data: [0.1eth (0x16345785d8a0000), uint b]
// topics: [Deposit1(address,uint256,uint256,uint256), my wallet, uint indexed a]