var express = require('express');
var uaparser = require('ua-parser');
var forwarded = require('forwarded-for')
var app = express();

app.get('/*', function (req, res) {
  var uadata = uaparser.parse(req.get('user-agent'));
  var ipaddress = forwarded(req, req.headers).ip;
  res.send(JSON.stringify({"ipaddress":ipaddress,
    "language":req.get('accept-language'),
    "browser":uadata.ua.toString(),
    "os":uadata.os.toString(),
    "device":uadata.device.family
  }));
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});