var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
    'method': 'GET',
    'hostname': 'api.brawlstars.com',
    'path': '/v1/players/%2388C8VUV',
    'headers': {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ1M2M2N2I4LThhNjQtNDJjNC05OTY4LWY4MzQxNTE4NzEyMyIsImlhdCI6MTU4NDUzOTY2Niwic3ViIjoiZGV2ZWxvcGVyL2M0MDg4ZDBhLTU3NWQtMmJlZi0yNjk5LTZkZjRhZTA2NGVhNyIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiOTAuNjQuMTUuMTk5Il0sInR5cGUiOiJjbGllbnQifV19.G2w7XEewZJaFcaNH2Oz8z6YHeTN2bHCFGUP0Zo2_l08Mk7zd4YyBrcsW_o9wNlsl9IN-IzIVhxCp-eEzbcTqXA'
    },
    'maxRedirects': 20
};

var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function (chunk) {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function (error) {
        console.error(error);
    });
});

req.end();