const databaseConnection = require('./../databases/connection');

const ClientModel = {
  async findById(id) {
    try {
      const database = await databaseConnection();

      const query = "SELECT * FROM clients WHERE id = ?";
      const [rows] = await database.execute(query, [id]);

      return rows;
    } catch (error) {
      console.log(`
        ❌ Failed to find client ${id}.
        ${error}
      `);
      return null;
    }
  },
  async getAll() {
    try {
      const database = await databaseConnection();

      const query = "SELECT * FROM clients";
      const [rows] = await database.query(query);

      return rows;
    } catch (error) {
      console.log(`
        ❌ Failed to get all clients.
        ${error}
      `);
      return null;
    }
  },
  async save(fullname, email, birthdate) {
    try {
      const database = await databaseConnection();

      const query = "INSERT INTO clients (fullname,email,birthdate) VALUES (?,?,?)";
      await database.execute(query, [fullname, email, birthdate]);

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