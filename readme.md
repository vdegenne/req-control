# req-control

Just a micro tool to check if post request params are present.

## Usage

```javascript
import * as control from 'req-control';
import * as express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));

app.post('/api/cheesburgers', (req, res) => {
  if (control.post(req, res, 'cheese', 'beef')) {
    // new cheeseburger(req.body.cheese, req.body.beef).save();
  }
});

...

```

## Installation

```bash
yarn add req-control
```
