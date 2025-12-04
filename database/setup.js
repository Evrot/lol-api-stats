const sequelize = require('./index');
require('./models/Player');
require('./models/Match');
require('./models/PlayerMatchStats');

// Function to set up the database
const setupDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // force:true drops tables if they exist
    console.log('Database & tables created!');
    process.exit();
  } catch (err) {
    console.error('Error setting up the database', err);
  }
};

// Run the setup
setupDatabase();
