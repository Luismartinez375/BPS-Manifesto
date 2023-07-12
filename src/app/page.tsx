'use client';
import { useRouter } from 'next/navigation';
import { User } from '../../types';
import ListItem from './components/listItem/listItem';

const users: User[] = [
  {
    id: 1,
    Name: 'Luis',
    PhoneNumber: 1234567890,
    Email: 'email@email.com',
    EmergenyContactname: 'Leo',
    EmergencyContact: 1234567890,
  },
  {
    id: 2,
    Name: 'Goku',
    PhoneNumber: 1234567890,
    Email: 'goku@email.com',
    EmergenyContactname: 'Gohan',
    EmergencyContact: 1234567890,
  },
  {
    id: 3,
    Name: 'Freiza',
    PhoneNumber: 1234567890,
    Email: 'freiza@email.com',
    EmergenyContactname: 'Vegeta',
    EmergencyContact: 1234567890,
  },
  {
    id: 4,
    Name: 'Naruto',
    PhoneNumber: 1234567890,
    Email: 'naruto@email.com',
    EmergenyContactname: 'Hintata',
    EmergencyContact: 1234567890,
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col max-sm:justify-around justify-center min-h-screen bg-bgManifesto sm:bg-navbar">
      <div className=" w-screen h-36 sm:w-4/5 sm:h-40 sm:bg-manifestoWeb self-center max-sm:bg-manifestoMobile bg-repeat-x bg-center flex flex-col items-center">
        <h1 className=" font-oldStandardTT text-3xl text-transparent sm:text-orange-300 sm:relative ">
          M
        </h1>
        <p className=" font-openSans sm:text-white text-transparent text-sm">
          Manifesto
        </p>
      </div>
      <p className=" self-center font-montserrat text-xl text-white w-4/5 sm:bg-bgWeb text-center sm:p-10">
        No one is currently signed in. Be the first to sign in.
      </p>
      <ul className=" flex flex-col">
        {users.map((user) => (
          <ListItem
            key={user.id}
            Name={user.Name}
            PhoneNumber={user.PhoneNumber}
            Email={user.Email}
            EmergenyContactname={user.EmergenyContactname}
            EmergencyContact={user.EmergencyContact}
          ></ListItem>
        ))}
      </ul>

      <div className=" self-center sm:w-4/5 h-20 sm:bg-bgWeb flex flex-row justify-center">
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
