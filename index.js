const http = require('http')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
  else if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }
else if (req.url === '/contact') {
  fs.readFile(
    path.join(__dirname, 'public', 'contact-me.html'),
    (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  );
}
else
{
fs.readFile(
  path.join(__dirname, 'public', '404.html'),
  (err, content) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  }
);
}
})




server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})