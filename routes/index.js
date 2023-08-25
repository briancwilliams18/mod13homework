const express = require('express');
const routes = require('./routes');
const sequelize = require('./models'); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => { // Use sync() method to sync models
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});