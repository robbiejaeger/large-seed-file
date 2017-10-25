const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('Hello');
});

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});