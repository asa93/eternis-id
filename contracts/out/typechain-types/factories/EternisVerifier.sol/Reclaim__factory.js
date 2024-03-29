"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reclaim__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "provider",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "parameters",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "context",
                                type: "string",
                            },
                        ],
                        internalType: "struct Reclaim.ClaimInfo",
                        name: "claimInfo",
                        type: "tuple",
                    },
                    {
                        components: [
                            {
                                components: [
                                    {
                                        internalType: "bytes32",
                                        name: "identifier",
                                        type: "bytes32",
                                    },
                                    {
                                        internalType: "address",
                                        name: "owner",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint32",
                                        name: "timestampS",
                                        type: "uint32",
                                    },
                                    {
                                        internalType: "uint32",
                                        name: "epoch",
                                        type: "uint32",
                                    },
                                ],
                                internalType: "struct Reclaim.CompleteClaimData",
                                name: "claim",
                                type: "tuple",
                            },
                            {
                                internalType: "bytes[]",
                                name: "signatures",
                                type: "bytes[]",
                            },
                        ],
                        internalType: "struct Reclaim.SignedClaim",
                        name: "signedClaim",
                        type: "tuple",
                    },
                ],
                internalType: "struct Reclaim.Proof",
                name: "proof",
                type: "tuple",
            },
        ],
        name: "verifyProof",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
var Reclaim__factory = /** @class */ (function () {
    function Reclaim__factory() {
    }
    Reclaim__factory.createInterface = function () {
        return new ethers_1.Interface(_abi);
    };
    Reclaim__factory.connect = function (address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    };
    Reclaim__factory.abi = _abi;
    return Reclaim__factory;
}());
exports.Reclaim__factory = Reclaim__factory;
