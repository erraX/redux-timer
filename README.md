# redux-timer
Log re-render duration when redux state changed.

## Installation
``` javascript
npm i --save redux-naive-timer
```

## Development
``` javascript
npm run dev
```

## Build
``` javascript
npm run build
```

## Usage
``` javascript
import reduxTimer from 'redux-naive-timer';

// Apply middleware
applyMiddleware(reduxTimer)(createStore);
```