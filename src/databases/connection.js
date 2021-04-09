const mysql = require('mysql2/promise');
const { host, user, password, database } = require('./settings.json');

module.exports = async function databaseConnection() {
  try {
    const connection = mysql.createConnection({
      host,
      user,
      password,
      database
    });
  } catch (error) {
    console.log(`
      ❌ Failed database connection 
      ${error}
    `);
  }
}