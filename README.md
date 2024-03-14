# Eternis ID

## Proof-of-humanity protocol

Prove that you are a human and create your onchain eternid ID.


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
npm install
npm run back
```

## Run the frontend
 
```
npm run front
```
note: if viem/wagmi cause issues, install them with --force

### Edit `frontend.env`
```
REACT_APP_BACKEND_BASE_URL=http://<ip from ifconfig>:8000
```
### Run app server
```
npm start
```
Open app on http://localhost:3000

## Test smart contracts
```
npm run contracts:test
```


# Playing around
You'll need a mobile device with Reclaim Wallet Mobile App installed
Follow on screen instructions