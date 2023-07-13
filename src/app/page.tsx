'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '../../types';
import ListItem from './components/listItem/listItem';
const users: User[] = [
  {
    id: 1,
    Name: 'Luis',
    PhoneNumber: '1234567890',
    Email: 'email@email.com',
    EmergenyContactname: 'Leo',
    EmergencyContact: '1234567890',
  },
  {
    id: 2,
    Name: 'Goku',
    PhoneNumber: '1234567890',
    Email: 'goku@email.com',
    EmergenyContactname: 'Gohan',
    EmergencyContact: '1234567890',
  },
  {
    id: 3,
    Name: 'Freiza',
    PhoneNumber: '1234567890',
    Email: 'freiza@email.com',
    EmergenyContactname: 'Vegeta',
    EmergencyContact: '1234567890',
  },
  {
    id: 4,
    Name: 'Naruto',
    PhoneNumber: '1234567890',
    Email: 'naruto@email.com',
    EmergenyContactname: 'Hintata',
    EmergencyContact: '1234567890',
  },
  {
    id: 5,
    Name: 'John Doe',
    PhoneNumber: '1234567890',
    Email: 'john@example.com',
    EmergenyContactname: 'Jane Smith',
    EmergencyContact: '9876543210',
  },
  {
    id: 6,
    Name: 'Alice Johnson',
    PhoneNumber: '5551234567',
    Email: 'alice@example.com',
    EmergenyContactname: 'Bob Williams',
    EmergencyContact: '5559876543',
  },
];

export default function Home() {
  const router = useRouter();
  const [localUsers, setLocalUsers] = useState<User[]>([]);

  useEffect(() => {
    setLocalUsers(users);
    const localUsers: User[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );
    if (localUsers) {
      setLocalUsers(localUsers);
    } else {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);
  return (
    <main className="flex flex-col max-sm:justify-around justify-center min-h-screen bg-bgManifesto sm:bg-navbar ">
      <div className=" w-screen h-36 sm:w-4/5 sm:h-40 sm:bg-manifestoWeb self-center max-sm:bg-manifestoMobile bg-repeat-x bg-center flex flex-col items-center max-sm:relative">
        <h1 className=" font-oldStandardTT text-3xl text-transparent sm:text-orange-300 sm:relative">
          M
        </h1>
        <p className=" font-openSans sm:text-white text-transparent text-sm">
          Manifesto
        </p>
      </div>
      {/* <p className=" self-center font-montserrat text-xl text-white w-4/5 sm:bg-bgWeb text-center sm:p-10">
        No one is currently signed in. Be the first to sign in.
      </p> */}
      <div className="self-center w-full flex flex-col items-center max-sm:relative ">
        <p className=" font-montserrat text-xl text-white w-4/5 sm:bg-bgWeb text-center p-6 sm:p-10">
          Sign in at the registry.
        </p>
        <ul className=" w-full flex flex-col items-center h-72 sm:h-58 overflow-y-auto">
          {localUsers.map((user) => (
            <ListItem
              key={user.id}
              id={user.id}
              Name={user.Name}
              PhoneNumber={user.PhoneNumber}
              Email={user.Email}
              EmergenyContactname={user.EmergenyContactname}
              EmergencyContact={user.EmergencyContact}
            ></ListItem>
          ))}
        </ul>
      </div>
      <div className=" self-center sm:w-4/5 h-20 sm:bg-bgWeb flex flex-row justify-center sm:h-52 sm:p-20">
        <button
          className=" bg-orange-300 w-44 h-14 text-black origin-center font-inter"
          onClick={() => router.push('/signIn')}
        >
          Sign In
        </button>
      </div>
    </main>
  );
}
