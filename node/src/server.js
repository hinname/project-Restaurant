const app = require("./app");

// Defining port number
const PORT = 3000;


// Server setup
app.listen(PORT, () => {
  console.log(`Running server on PORT ${PORT}...`);
})
