import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import {
    loadFixture,
    time,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Verifier", () => {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deployOneYearLockFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const Verifier = await ethers.getContractFactory("Verifier");

        const verifier = await Verifier.deploy();

        const proof_ = transformProof(proof);

        return { verifier, owner, otherAccount, proof_ };
    }

    describe("Verify", function () {
        it("Should deploy successfully", async function () {
            const { verifier } = await loadFixture(deployOneYearLockFixture);
            await expect(await verifier.totalUsers()).to.be.equal(ethers.toBigInt(0));
        });
        it("Should verify correct proof & create identity", async function () {
            const { verifier, proof_ } = await loadFixture(deployOneYearLockFixture);

            await verifier.verifyProof(proof_);

            await expect(await verifier.totalUsers()).to.be.equal(ethers.toBigInt(1));

            const identity = await verifier.getIdentity(1);

            console.log("✅ Identity created:", ethers.toBeHex(identity[0]), identity[1]);

            await expect(ethers.toBeHex(identity[0])).to.be.equal(proof.identifier);


        });

        it("Should not be able to use the same proof to create 2 identities", async function () {
            const { verifier, proof_ } = await loadFixture(deployOneYearLockFixture);

            await verifier.verifyProof(proof_);

            await expect(verifier.verifyProof(proof_)).to.be.revertedWith("this identity already exists");
        });
    });
});

const transformProof = (proof: any) => {
    const claimInfoBuilder = new Map([
        ["context", proof["claimData"]["context"]],
        ["parameters", proof["claimData"]["parameters"]],
        ["provider", proof["claimData"]["provider"]],
    ]);
    const claimInfo = Object.fromEntries(claimInfoBuilder);
    const claimBuilder = new Map([
        ["epoch", proof["claimData"]["epoch"]],
        ["identifier", proof["claimData"]["identifier"]],
        ["owner", proof["claimData"]["owner"]],
        ["timestampS", proof["claimData"]["timestampS"]],
    ]);
    const signedClaim = {
        claim: Object.fromEntries(claimBuilder),
        signatures: proof["signatures"],
    };
    return { claimInfo, signedClaim };
};

const proof = {
    identifier:
        "0xcf327f8d984d1ad1dd3e4de32a54c72d5bb9c134859b596469c5fdd3dbd4f880",
    claimData: {
        provider: "http",
        parameters:
            '{"body":"","geoLocation":"FR","method":"GET","responseMatches":[{"type":"contains","value":"span class=\\"blocNumSecu\\">"}],"responseRedactions":[{"jsonPath":"","regex":"span class=\\"(.*)\\">","xPath":"id(\\"pageAssure\\")/div[@class=\\"tabrow\\"]/div[@class=\\"infoDroite\\"]/span[@class=\\"blocNumSecu\\"]"}],"url":"https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_nfpb=true&_pageLabel=as_info_perso_page"}',
        owner: "0x19bba175815678ad5021e5a835e8e36d688aa1fe",
        timestampS: 1710420385,
        context: '{"contextAddress":"","contextMessage":"0098967F"}',
        identifier:
            "0xcf327f8d984d1ad1dd3e4de32a54c72d5bb9c134859b596469c5fdd3dbd4f880",
        epoch: 1,
    },
    signatures: [
        "0xa523309453a4af345739190d4977bc30e3201681eb49b3824999f07a334e3f9161b2a0c2b34147a93ff4d50c5666872b79371b28f0bada47d8212d2bc7ea8cdc1b",
    ],
    witnesses: [
        {
            id: "0x244897572368eadf65bfbc5aec98d8e5443a9072",
            url: "https://reclaim-node.questbook.app",
        },
    ],
    extractedParameterValues: {
        social_number: "blocNumSecu",
    },
};;

const incorrectProof = {
    identifier:
        "0x9fdad87498b0d98d2bd3ff2cb6bac0e8fdb039512f18161b6b7f665c937354fc",
    claimData: {
        provider: "http",
        parameters:
            '{"body":"","geoLocation":null,"method":"GET","responseMatches":[{"type":"contains","value":"num-orders\\">0 orders</span>"}],"responseRedactions":[{"jsonPath":"","regex":"num\\\\-orders\\">(.*)</span>","xPath":"id(\\"a-page\\")/section[@class=\\"your-orders-content-container aok-relative js-yo-container\\"]/div[@class=\\"your-orders-content-container__content js-yo-main-content\\"]/div[@class=\\"a-row a-spacing-base\\"]/form[@class=\\"js-time-filter-form a-spacing-none\\"]/label[@class=\\"a-form-label time-filter__label aok-inline-block a-text-normal\\"]/span[@class=\\"num-orders\\"]"}],"url":"https://www.amazon.in/your-orders/orders?timeFilter=year-2023&ref_=ppx_yo2ov_dt_b_filter_all_y2023"}',
        owner: "0x7c41fb617ade58d9702f5a352961dd8027c87db0",
        timestampS: 1710328552,
        context: '{"contextAddress":"0x0","contextMessage":"0098967F"}',
        identifier:
            "0x9fdad87498b0d98d2bd3ff2cb6bac0e8fdb039512f18161b6b7f665c937354fc",
        epoch: 1,
    },
    signatures: [
        "0x13b73cfa3c2f538519e9d7717257421c97360357b101a2ef288b0a261ddb3e201fc237ca98de94f0b425e26c195ddf36e086533b5bc99380fb68794c5bdd60961b",
    ],
    witnesses: [
        {
            id: "0x244897572368eadf65bfbc5aec98d8e5443a9072",
            url: "https://reclaim-node.questbook.app",
        },
    ],
    extractedParameterValues: {
        CLAIM_DATA: "0 orders",
    },
};
