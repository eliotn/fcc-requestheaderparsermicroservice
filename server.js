var express = require('express');
var uaparser = require('ua-parser');
var forwarded = require('forwarded-for')
var app = express();
function n(val) {
    return (val)?val:null;
}
app.get('/*', function (req, res) {
  var uadata = uaparser.parse(req.get('user-agent'));
  var ipaddress = forwarded(req, req.headers).ip;
  res.set({'Content-Type': 'application/json'});
  res.send({"ipaddress":n(ipaddress),
    "language":n(req.get('accept-language')),
    "browser":n(uadata.ua.toString()),
    "os":n(uadata.os.toString()),
    "device":n(uadata.device.family)
  });
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT + '!');
});