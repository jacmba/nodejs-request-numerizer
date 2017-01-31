# nodejs-request-numerizer
Simple middleware to convert any numeric request-body string to number.
Feel free to use it with Express or Restify servers.

## Usage
```npm i request-numerizer```

```
let Express = require('express);
let app = Express();

let numerizer = require('request-numerizer');

app.use(numerizer);
```

## Run the module tests
```npm test```

## License
[MIT](LICENSE)