import sqlite3 from 'sqlite3';

class SQLiteDB {
  public db: sqlite3.Database;

  constructor(private dbPath: string) {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Connected to SQLite database.');
    });
  }

  public createTable() {
    const sql = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT, email TEXT, emergency_name TEXT, emergency_phone TEXT)`;
    this.db.run(sql, (err) => {
      if (err) {
        console.error(err.message);
        return;
      } else {
        console.log('Table created successfully.');
      }
    });
  }

  public closeConnection() {
    this.db.close((err) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Closed the database connection.');
    });
  }
}

export default SQLiteDB;
