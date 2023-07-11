import { User } from '../types';
import SQLiteDB from './db';
export async function getAllUsers(path: string): Promise<User[]> {
  // Create and initialize the SQLiteDB instance

  const db = new SQLiteDB(path);

  const users: User[] = await new Promise((resolve, reject) =>
    db.db.all('SELECT * FROM users', (err, rows: any) => {
      console.log(rows);
      if (err) {
        reject(err);
        throw err;
      } else {
        resolve(rows);
        return rows.map((row: any) => ({
          id: row.id,
          Name: row.name,
          PhoneNumber: row.phone,
          Email: row.email,
          EmergenyContactname: row.emergency_name,
          EmergencyContact: row.emergency_phone,
        }));
      }
    })
  );

  db.closeConnection();
  return users;
}
