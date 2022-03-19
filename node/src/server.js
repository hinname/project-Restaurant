const app = require("./app");

// Defining port number
const port = process.env.PORT || 3000;


// Server setup
app.listen(port, () => {
  console.log(`Running server on PORT ${port}...`);
})
