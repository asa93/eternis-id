# Eternis ID

Proof-of-humanity app.

## Run the backend 
```
cd backend
```
### Note your server IP
```
$ ifconfig
```

### Edit `.env`
```
PORT=8000
CALLBACK_URL=http://<ip from ifconfig>:8000
```
### Run server
```
npm install
npm run build
npm start
```

## Run the frontend
(React project)
```
cd frontend
npm run dev
```
note: if viem/wagmi cause issues, install them with --force

### Edit .env
```
REACT_APP_BACKEND_BASE_URL=http://<ip from ifconfig>:8000
```
### Run app server
```
npm start
```
Open app on http://localhost:3000

# Playing around
You'll need a mobile device with Reclaim Wallet Mobile App installed
Follow on screen instructions