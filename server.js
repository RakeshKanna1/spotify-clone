const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Strip query parameters or hash from URL
  const queryIndex = filePath.indexOf('?');
  if (queryIndex !== -1) filePath = filePath.substring(0, queryIndex);
  const hashIndex = filePath.indexOf('#');
  if (hashIndex !== -1) filePath = filePath.substring(0, hashIndex);

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback for single page app routes
        fs.readFile(path.join(__dirname, 'index.html'), (errHtml, contentHtml) => {
          if (errHtml) {
            res.writeHead(500);
            res.end('Error loading index.html');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(contentHtml, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*' // Enable CORS
      });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('======================================================');
  console.log(`[Start] BeatFlow Server running at http://localhost:${PORT}/`);
  console.log(`[Serve] Serving directory: ${__dirname}`);
  console.log('⌨️  Press Ctrl+C to stop the server');
  console.log('======================================================');
});
