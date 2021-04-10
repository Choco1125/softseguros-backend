const databaseConnection = require('./../databases/connection');

const ClientModel = {
  async save(fullname, email, birthdate) {
    try {
      const database = await databaseConnection();
      const query = "INSERT INTO clients (fullname,email,birthdate) VALUES (?,?,?)";
      await database.execute(query, [fullname, email, birthdate]);
      console.log(`✅ client saved!`);
      return true;
    } catch (error) {
      console.log(`
        ❌ Failed to save client.
        ${error}
      `);
      return false;
    }
  }
}

module.exports = ClientModel;