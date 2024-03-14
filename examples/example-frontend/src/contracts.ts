

export const verifierAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "userCount",
				"type": "uint256"
			}
		],
		"name": "IdentityCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "eternisId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "identifier",
				"type": "uint256"
			},
			{
				"internalType": "bytes8",
				"name": "jurisdiction",
				"type": "bytes8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getIdentity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "identifierToId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reclaimAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "userCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "string",
								"name": "provider",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "parameters",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "context",
								"type": "string"
							}
						],
						"internalType": "struct Reclaim.ClaimInfo",
						"name": "claimInfo",
						"type": "tuple"
					},
					{
						"components": [
							{
								"components": [
									{
										"internalType": "bytes32",
										"name": "identifier",
										"type": "bytes32"
									},
									{
										"internalType": "address",
										"name": "owner",
										"type": "address"
									},
									{
										"internalType": "uint32",
										"name": "timestampS",
										"type": "uint32"
									},
									{
										"internalType": "uint32",
										"name": "epoch",
										"type": "uint32"
									}
								],
								"internalType": "struct Reclaim.CompleteClaimData",
								"name": "claim",
								"type": "tuple"
							},
							{
								"internalType": "bytes[]",
								"name": "signatures",
								"type": "bytes[]"
							}
						],
						"internalType": "struct Reclaim.SignedClaim",
						"name": "signedClaim",
						"type": "tuple"
					}
				],
				"internalType": "struct Reclaim.Proof",
				"name": "proof",
				"type": "tuple"
			}
		],
		"name": "verifyProof",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const reclaimAbi = [
	{ "inputs": [], "name": "Reclaim__GroupAlreadyExists", "type": "error" }, { "inputs": [], "name": "Reclaim__UserAlreadyMerkelized", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "dappId", "type": "bytes32" }], "name": "DappCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "components": [{ "internalType": "uint32", "name": "id", "type": "uint32" }, { "internalType": "uint32", "name": "timestampStart", "type": "uint32" }, { "internalType": "uint32", "name": "timestampEnd", "type": "uint32" }, { "components": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "string", "name": "host", "type": "string" }], "internalType": "struct Reclaim.Witness[]", "name": "witnesses", "type": "tuple[]" }, { "internalType": "uint8", "name": "minimumWitnessesForClaimCreation", "type": "uint8" }], "indexed": false, "internalType": "struct Reclaim.Epoch", "name": "epoch", "type": "tuple" }], "name": "EpochAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "groupId", "type": "uint256" }, { "indexed": true, "internalType": "string", "name": "provider", "type": "string" }], "name": "GroupCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint8", "name": "version", "type": "uint8" }], "name": "Initialized", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "string", "name": "host", "type": "string" }], "internalType": "struct Reclaim.Witness[]", "name": "witnesses", "type": "tuple[]" }, { "internalType": "uint8", "name": "requisiteWitnessesForClaimCreate", "type": "uint8" }], "name": "addNewEpoch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "createDapp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "uint256", "name": "merkleTreeDepth", "type": "uint256" }], "name": "createGroup", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "currentEpoch", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "epochDurationS", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "epochs", "outputs": [{ "internalType": "uint32", "name": "id", "type": "uint32" }, { "internalType": "uint32", "name": "timestampStart", "type": "uint32" }, { "internalType": "uint32", "name": "timestampEnd", "type": "uint32" }, { "internalType": "uint8", "name": "minimumWitnessesForClaimCreation", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint32", "name": "epoch", "type": "uint32" }], "name": "fetchEpoch", "outputs": [{ "components": [{ "internalType": "uint32", "name": "id", "type": "uint32" }, { "internalType": "uint32", "name": "timestampStart", "type": "uint32" }, { "internalType": "uint32", "name": "timestampEnd", "type": "uint32" }, { "components": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "string", "name": "host", "type": "string" }], "internalType": "struct Reclaim.Witness[]", "name": "witnesses", "type": "tuple[]" }, { "internalType": "uint8", "name": "minimumWitnessesForClaimCreation", "type": "uint8" }], "internalType": "struct Reclaim.Epoch", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint32", "name": "epoch", "type": "uint32" }, { "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }], "name": "fetchWitnessesForClaim", "outputs": [{ "components": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "string", "name": "host", "type": "string" }], "internalType": "struct Reclaim.Witness[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "parameters", "type": "string" }, { "internalType": "string", "name": "context", "type": "string" }], "internalType": "struct Claims.ClaimInfo", "name": "claimInfo", "type": "tuple" }, { "components": [{ "components": [{ "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }, { "internalType": "uint32", "name": "epoch", "type": "uint32" }], "internalType": "struct Claims.CompleteClaimData", "name": "claim", "type": "tuple" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }], "internalType": "struct Claims.SignedClaim", "name": "signedClaim", "type": "tuple" }], "internalType": "struct Reclaim.Proof", "name": "proof", "type": "tuple" }], "name": "getContextAddressFromProof", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "parameters", "type": "string" }, { "internalType": "string", "name": "context", "type": "string" }], "internalType": "struct Claims.ClaimInfo", "name": "claimInfo", "type": "tuple" }, { "components": [{ "components": [{ "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }, { "internalType": "uint32", "name": "epoch", "type": "uint32" }], "internalType": "struct Claims.CompleteClaimData", "name": "claim", "type": "tuple" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }], "internalType": "struct Claims.SignedClaim", "name": "signedClaim", "type": "tuple" }], "internalType": "struct Reclaim.Proof", "name": "proof", "type": "tuple" }], "name": "getContextMessageFromProof", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "params", "type": "string" }], "name": "getMerkelizedUserParams", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "parameters", "type": "string" }, { "internalType": "string", "name": "context", "type": "string" }], "internalType": "struct Claims.ClaimInfo", "name": "claimInfo", "type": "tuple" }, { "components": [{ "components": [{ "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }, { "internalType": "uint32", "name": "epoch", "type": "uint32" }], "internalType": "struct Claims.CompleteClaimData", "name": "claim", "type": "tuple" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }], "internalType": "struct Claims.SignedClaim", "name": "signedClaim", "type": "tuple" }], "internalType": "struct Reclaim.Proof", "name": "proof", "type": "tuple" }], "name": "getProviderFromProof", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_semaphoreAddress", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "parameters", "type": "string" }, { "internalType": "string", "name": "context", "type": "string" }], "internalType": "struct Claims.ClaimInfo", "name": "claimInfo", "type": "tuple" }, { "components": [{ "components": [{ "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }, { "internalType": "uint32", "name": "epoch", "type": "uint32" }], "internalType": "struct Claims.CompleteClaimData", "name": "claim", "type": "tuple" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }], "internalType": "struct Claims.SignedClaim", "name": "signedClaim", "type": "tuple" }], "internalType": "struct Reclaim.Proof", "name": "proof", "type": "tuple" }, { "internalType": "uint256", "name": "_identityCommitment", "type": "uint256" }], "name": "merkelizeUser", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "proxiableUUID", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "semaphoreAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "uint256", "name": "_merkleTreeRoot", "type": "uint256" }, { "internalType": "uint256", "name": "_signal", "type": "uint256" }, { "internalType": "uint256", "name": "_nullifierHash", "type": "uint256" }, { "internalType": "uint256", "name": "_externalNullifier", "type": "uint256" }, { "internalType": "bytes32", "name": "dappId", "type": "bytes32" }, { "internalType": "uint256[8]", "name": "_proof", "type": "uint256[8]" }], "name": "verifyMerkelIdentity", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "provider", "type": "string" }, { "internalType": "string", "name": "parameters", "type": "string" }, { "internalType": "string", "name": "context", "type": "string" }], "internalType": "struct Claims.ClaimInfo", "name": "claimInfo", "type": "tuple" }, { "components": [{ "components": [{ "internalType": "bytes32", "name": "identifier", "type": "bytes32" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint32", "name": "timestampS", "type": "uint32" }, { "internalType": "uint32", "name": "epoch", "type": "uint32" }], "internalType": "struct Claims.CompleteClaimData", "name": "claim", "type": "tuple" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }], "internalType": "struct Claims.SignedClaim", "name": "signedClaim", "type": "tuple" }], "internalType": "struct Reclaim.Proof", "name": "proof", "type": "tuple" }], "name": "verifyProof", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]

export const erc20Abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "platformFeeRecipient", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "platformFeeBps", "type": "uint256" }], "name": "PlatformFeeInfoUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "recipient", "type": "address" }], "name": "PrimarySaleRecipientUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "previousAdminRole", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32" }], "name": "RoleAdminChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleGranted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }], "name": "RoleRevoked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "mintedTo", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "quantityMinted", "type": "uint256" }], "name": "TokensMinted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "signer", "type": "address" }, { "indexed": true, "internalType": "address", "name": "mintedTo", "type": "address" }, { "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "address", "name": "primarySaleRecipient", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "currency", "type": "address" }, { "internalType": "uint128", "name": "validityStartTimestamp", "type": "uint128" }, { "internalType": "uint128", "name": "validityEndTimestamp", "type": "uint128" }, { "internalType": "bytes32", "name": "uid", "type": "bytes32" }], "indexed": false, "internalType": "struct ITokenERC20.MintRequest", "name": "mintRequest", "type": "tuple" }], "name": "TokensMintedWithSignature", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DEFAULT_ADMIN_ROLE", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint32", "name": "pos", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "components": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint224", "name": "votes", "type": "uint224" }], "internalType": "struct ERC20VotesUpgradeable.Checkpoint", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "contractType", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "contractURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "contractVersion", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastTotalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPastVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getPlatformFeeInfo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint16", "name": "", "type": "uint16" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleAdmin", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "getRoleMember", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }], "name": "getRoleMemberCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "hasRole", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_defaultAdmin", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "string", "name": "_contractURI", "type": "string" }, { "internalType": "address[]", "name": "_trustedForwarders", "type": "address[]" }, { "internalType": "address", "name": "_primarySaleRecipient", "type": "address" }, { "internalType": "address", "name": "_platformFeeRecipient", "type": "address" }, { "internalType": "uint256", "name": "_platformFeeBps", "type": "uint256" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "forwarder", "type": "address" }], "name": "isTrustedForwarder", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mintTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "address", "name": "primarySaleRecipient", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "currency", "type": "address" }, { "internalType": "uint128", "name": "validityStartTimestamp", "type": "uint128" }, { "internalType": "uint128", "name": "validityEndTimestamp", "type": "uint128" }, { "internalType": "bytes32", "name": "uid", "type": "bytes32" }], "internalType": "struct ITokenERC20.MintRequest", "name": "_req", "type": "tuple" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "mintWithSignature", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "bytes[]", "name": "data", "type": "bytes[]" }], "name": "multicall", "outputs": [{ "internalType": "bytes[]", "name": "results", "type": "bytes[]" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "primarySaleRecipient", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes32", "name": "role", "type": "bytes32" }, { "internalType": "address", "name": "account", "type": "address" }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_uri", "type": "string" }], "name": "setContractURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_platformFeeRecipient", "type": "address" }, { "internalType": "uint256", "name": "_platformFeeBps", "type": "uint256" }], "name": "setPlatformFeeInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_saleRecipient", "type": "address" }], "name": "setPrimarySaleRecipient", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "address", "name": "primarySaleRecipient", "type": "address" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "price", "type": "uint256" }, { "internalType": "address", "name": "currency", "type": "address" }, { "internalType": "uint128", "name": "validityStartTimestamp", "type": "uint128" }, { "internalType": "uint128", "name": "validityEndTimestamp", "type": "uint128" }, { "internalType": "bytes32", "name": "uid", "type": "bytes32" }], "internalType": "struct ITokenERC20.MintRequest", "name": "_req", "type": "tuple" }, { "internalType": "bytes", "name": "_signature", "type": "bytes" }], "name": "verify", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
]



export const reclaimContract = {
	address: "0xd6534f52CEB3d0139b915bc0C3278a94687fA5C7",
	abi: reclaimAbi,
} as const;

export const verifierContract = {
	address: "0x72F1C311F18003D87666dC7141b525dD94bbF895",
	abi: verifierAbi,
} as const;

