# Eternis ID

## Proof-of-humanity protocol

Prove that you are a human and create your onchain eternid ID, leveraging Zero-knowledge technology.

## Install 
```
$npm run all:install
```

## Run the backend 

### Note your server IP
```
$ ifconfig
```

### Edit `backend/.env`
```
PORT=8000
CALLBACK_URL=http://<ip from ifconfig>:8000
```
### Run server
```
npm run back
```

## Run the frontend

### Edit `frontend/.env`
```
REACT_APP_BACKEND_BASE_URL=http://<ip from ifconfig>:8000
```
### Run app server
```
npm run front
```
note: if viem/wagmi cause issues, install them with --force
Open app on http://localhost:3000

## Test smart contracts
```
npm run contracts:test
```


# Playing around
You'll need a mobile device with [Reclaim Wallet Mobile App](https://play.google.com/store/apps/details?id=com.reclaim.protocol) installed.
Then follow on screen instructions.

 

