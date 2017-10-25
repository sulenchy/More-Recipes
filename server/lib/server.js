import express from 'express';

// Initialize http server
const app = express();

// Handle / route
app.get('/', (req, res) =>
  res.send('Hello sulenchy!')
)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});