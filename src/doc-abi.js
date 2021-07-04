var docAbi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "add",
      "outputs": [
        {
          "name": "dateAdded",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "hash",
          "type": "string"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "name": "dateAdded",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];