var Web3 = require('web3');

// my infura websocket address from infura (project endpoints ropsten)
var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/v3/f54a0bf77bc744299c32a493ee6d038c'));

// my smart contract address from etherscan (to)
web3.eth.getCode("0xb62112aff30d3d36a311afde2900ad1faeaf429f", function(error, result) {
	if (!error) {
		console.log(result);
	}
});

