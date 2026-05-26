// Load the built-in HTTP module to create a network server
const http = require('http');

// Define the port number where our server will look for connections
const PORT = 3000;

// Variables that live safely on the server side
let serverWalletBalance = 1000;

const server = http.createServer((req, res) => {
    // Enable CORS so our frontend index.html file can talk to this server safely
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/get-balance' && req.method === 'GET') {
        // Send the secure balance data back to the phone screen
        res.writeHead(200);
        res.end(JSON.stringify({ balance: serverWalletBalance }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running securely on http://localhost:${PORT}`);
});
