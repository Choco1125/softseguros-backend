const databaseConnection = require('./../databases/connection');

const ClientModel = {
  async findByDocuement(document) {
    try {
      const database = await databaseConnection();

      const query = "SELECT * FROM clients WHERE document = ?";
      const [rows] = await database.execute(query, [document]);
      database.end();
      return rows;
    } catch (error) {
      console.log(`
        ❌ Failed to find client ${document}.
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
      database.end();

      return rows;
    } catch (error) {
      console.log(`
        ❌ Failed to get all clients.
        ${error}
      `);
      return null;
    }
  },
  async save(document, fullname, email, birthdate) {
    try {
      const database = await databaseConnection();

      const query = "INSERT INTO clients (document,fullname,email,birthdate) VALUES (?,?,?,?)";
      await database.execute(query, [document, fullname, email, birthdate]);
      database.end();

      return true;
    } catch (error) {
      console.log(`
        ❌ Failed to save client.
        ${error}
      `);
      return false;
    }
  },
  async update(document, fullname, email, birthdate) {
    try {
      const database = await databaseConnection();

      const query = "UPDATE clients SET fullname = ?,email = ?,birthdate = ? WHERE document = ?";
      await database.execute(query, [fullname, email, birthdate, document]);
      database.end();

      return true;
    } catch (error) {
      console.log(`
        ❌ Failed to update client.
        ${error}
      `);
      return false;
    }
  },
  async delete(document) {
    try {
      const database = await databaseConnection();

      const query = "DELETE FROM clients WHERE document = ?";
      await database.execute(query, [document]);
      database.end();

      return true;
    } catch (error) {
      console.log(`
        ❌ Failed to delete client.
        ${error}
      `);
      return false;
    }
  },
}

module.exports = ClientModel;