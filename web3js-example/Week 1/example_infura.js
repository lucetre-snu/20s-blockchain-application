let Web3 = require('web3');

let web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/f54a0bf77bc744299c32a493ee6d038c'));

// lecturer wallet
web3.eth.getBalance('0xD9FE9091B58459f4b0f565fc3D77b4B70AC7Bd67', function(err, result) {
    console.log(result);
});

web3.eth.subscribe('newBlockHeaders', (error, result) => {
	if (!error) {
		console.log(result);
	} else {
		console.log('error', error);
	}
}).on('data', function (transaction) {
	console.log('block: ', transaction);
})

