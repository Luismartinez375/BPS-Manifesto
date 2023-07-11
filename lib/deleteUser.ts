import SQLiteDB from './db';

export async function deleteUser(userId: number, path: string): Promise<void> {
  const dbPath = path; // Replace with your database file path

  // Create and initialize the SQLiteDB instance
  const db = new SQLiteDB(dbPath);

  try {
    await new Promise<void>((resolve, reject) => {
      db.db.run(`DELETE FROM users WHERE id = ?`, [userId], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
          if (this.changes > 0) {
            console.log(`User with ID ${userId} has been deleted.`);
          } else {
            console.log(`User with ID ${userId} not found.`);
          }
        }
      });
    });
  } catch (error) {
    throw new Error('Failed to delete the user from the database.');
  }
  db.closeConnection();
}
