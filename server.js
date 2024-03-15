// Connect to the WebSocket server
const socketProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const mainPort = 8081;
const secondaryPort = 25565;
const mainSocketUrl = `${socketProtocol}//${window.location.hostname}:${mainPort}/my-websocket`;
const secondarySocketUrl = `${socketProtocol}//${window.location.hostname}:${secondaryPort}/my-websocket`;

const mainSocket = new WebSocket(mainSocketUrl);
const secondarySocket = new WebSocket(secondarySocketUrl);

// Handle events (onopen, onmessage, etc.) for both sockets
// ...

// Note: When the user changes pages, the connection will be lost and re-established.
