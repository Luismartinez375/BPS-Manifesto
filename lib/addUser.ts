import { User } from '../types';
import SQLiteDB from './db';

export async function addUser(user: User, path: string): Promise<void> {
  const dbPath = path; // Replace with your database file path
  // Create and initialize the SQLiteDB instance
  const db = new SQLiteDB(dbPath);
  try {
    // Check if the email and phone already exists in the database
    const existingUser = await new Promise<User | undefined>(
      (resolve, reject) => {
        db.db.get(
          'SELECT * FROM users WHERE email = ? AND phone = ?',
          [user.Email, user.PhoneNumber],
          (err, row: any) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          }
        );
      }
    );
    if (existingUser) {
      console.log('user email and phone already exists');
    } else {
      await new Promise<void>((resolve, reject) => {
        db.db.run(
          `INSERT INTO users (name, phone, email, emergency_name, emergency_phone) VALUES (?, ?, ?, ?, ?)`,
          [
            user.Name,
            user.PhoneNumber,
            user.Email,
            user.EmergenyContactname,
            user.EmergencyContact,
          ],
          function (err) {
            if (err) {
              reject(err);
              console.log(err);
              throw err;
            } else {
              console.log(`User ${user.Name} has been added.`);
              resolve();
            }
          }
        );
      });
    }
  } catch (error) {
    throw new Error('Failed to add the user to the database.');
  }

  db.closeConnection();
}
