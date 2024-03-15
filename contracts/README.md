# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## Types

To generate contract types run 
```shell
    npx hardhat compile 
```

If you don't want to compile you can just run
```shell
    npx hardhat typechain  
```
The types will be generated at the root of the project