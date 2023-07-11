import { User } from '../types';
import SQLiteDB from './db';

export async function getUser(userId: number, path: string): Promise<User> {
  // Create and initialize the SQLiteDB instance

  const db = new SQLiteDB(path);

  const user: User = await new Promise(() =>
    db.db.all(`SELECT ${userId} FROM users`, (err, rows: any) => {
      console.log(rows);
      if (err) {
        throw err;
      }
      return rows.map((row: any) => ({
        id: row.id,
        Name: row.name,
        PhoneNumber: row.phone,
        Email: row.email,
        EmergenyContactname: row.emergency_name,
        EmergencyContact: row.emergency_phone,
      }));
    })
  );
  db.closeConnection();

  return user;
}
