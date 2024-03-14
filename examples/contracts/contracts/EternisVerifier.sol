// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "hardhat/console.sol";

library Addresses {
    address public constant BASE_MAINNET =
        0xACE04E6DeB9567C1B8F37D113F2Da9E690Fc128d;
    address public constant BNB_MAINNET =
        0x1bbb0896aC6F4E32a89157C73Fb830325a441cb9;
    address public constant POLYGON_MAINNET =
        0xd6534f52CEB3d0139b915bc0C3278a94687fA5C7;
    address public constant ARBITRUM_MAINNET =
        0xe79A453bD088F4A58656b315a7C1f8Ea3473CCf1;
    address public constant OPTIMISM_MAINNET =
        0xe79A453bD088F4A58656b315a7C1f8Ea3473CCf1;
    address public constant OPTIMISM_GOERLI_TESTNET =
        0x2f0306D698685BEf7ff50745BFF7178F0d117ba8;
    address public constant LINEA_TESTNET =
        0xf223E215B2c9A2E5FE1B2971d5694684b2E734C1;
    address public constant PLOYGON_MUMBAI_TESTNET =
        0xd6534f52CEB3d0139b915bc0C3278a94687fA5C7;
}

interface Reclaim {
    struct ClaimInfo {
        string provider;
        string parameters;
        string context;
    }
    struct CompleteClaimData {
        bytes32 identifier;
        address owner;
        uint32 timestampS;
        uint32 epoch;
    }

    /** Claim with signatures & signer */
    struct SignedClaim {
        CompleteClaimData claim;
        bytes[] signatures;
    }

    struct Proof {
        ClaimInfo claimInfo;
        SignedClaim signedClaim;
    }

    function verifyProof(Proof memory proof) external view;
}

contract Verifier {
    address public reclaimAddress;

    struct Identity {
        uint identifier; // related to the proof generated
        bytes8 jurisdiction;
    }

    mapping(uint => uint) public identifierToId;
    mapping(uint => Identity) public eternisId;
    uint public userCount;

    struct Proof {
        Reclaim.ClaimInfo claimInfo;
        Reclaim.SignedClaim signedClaim;
    }

    constructor() {
        // TODO: Replace with network you are deploying on
        reclaimAddress = address(Addresses.PLOYGON_MUMBAI_TESTNET);

        //user count starts at one, so total users = userCount-1
        unchecked {
            userCount++;
        }
    }

    function verifyProof(Reclaim.Proof memory proof) public returns (uint) {
        //🚨 uncomment before deployment
        //Reclaim(reclaimAddress).verifyProof(proof);

        uint identifier = uint(proof.signedClaim.claim.identifier);
        require(
            identifierToId[identifier] == 0,
            "this identity already exists"
        );

        identifierToId[identifier] = userCount;
        eternisId[userCount] = Identity(
            identifier,
            decodeJuridictionid(proof.claimInfo.context)
        );
        unchecked {
            userCount++;
        }

        return identifierToId[identifier];
    }

    function totalUsers() public view returns (uint) {
        return userCount - 1;
    }

    function getIdentity(uint id) public view returns (uint, string memory) {
        return (
            eternisId[id].identifier,
            bytes8toString(eternisId[id].jurisdiction)
        );
    }
    function bytes8toString(bytes8 val) internal pure returns (string memory) {
        return string(abi.encodePacked(val));
    }

    function decodeJuridictionid(
        string memory context
    ) internal pure returns (bytes8) {
        bytes memory juridictionId = new bytes(8);

        for (uint256 i; i < 8; ) {
            juridictionId[i] = bytes(context)[42 + i];
            unchecked {
                ++i;
            }
        }
        return bytes8(juridictionId);
    }
}
