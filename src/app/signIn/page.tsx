'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import back from '../../../public/back.svg';
import UserForm from '../components/signInForm/signInForm';
export default function Page() {
  const router = useRouter();
  return (
    <main className=" bg-gray-4 w-full h-screen bg-bgForm flex flex-col justify-between items-center">
      <button
        className="flex flex-row z-0 p-4 text-orange-300 relative self-start text-xl font-montserrat"
        onClick={() => router.back()}
      >
        <Image src={back} alt={'back'}></Image>
        Back
      </button>
      <UserForm sampleTextProp=""></UserForm>
      <div className=" h-1/6 w-full bg-manifestoMobile2 bg-repeat-x bg-center"></div>
    </main>
  );
}
