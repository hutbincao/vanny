const http = require('http');  

 
 
(async () => { 
  const requestHandler = (request, response) => {  
       console.log(request.url)
       response.end('Hello World')
  }
       
  const server = http.createServer(requestHandler)

  server.listen(process.env.PORT, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }

    console.log(`server is listening`)
  })
 
})();


const puppeteer = require('puppeteer');
function kiusi(){
  (async () => {
  console.log('-----kiusi00000-----------');
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  
  const page = await browser.newPage();
  await page.goto('https://milubeau.github.io/trang/chayomine.html'); 
  console.log('----XONG0--------');
  setTimeout(async () => await await page.close(), 85000);
  setTimeout(async () => await browser.close(), 93000);
  console.log('----XONG--------');
  
  })();
}



function f() { 
    console.log('-111111111111-------trong f -----------');
    kiusi();
    console.log(Date()); 
    setTimeout( f, 100000 ); 
    console.log('--tttttttttt--') 
}



f();
 
