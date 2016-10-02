var express = require('express');
var app = express();

app.get('/*', function (req, res) {
  res.send(JSON.stringify({"ipaddress":req.get('Remote_Addr'),
    "language":req.get('Accept-Language'),
    "software":req.get('User-Agent')}));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});