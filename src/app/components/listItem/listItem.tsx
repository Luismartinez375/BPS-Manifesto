import Image from 'next/image';
import deleteIcon from '../../../../public/delete.svg';
import edit from '../../../../public/edit.svg';
import { User } from '../../../../types';
export interface IListItem {
  sampleTextProp: string;
}

export default function ListItem(user: User) {
  const { Name, PhoneNumber, Email, EmergenyContactname, EmergencyContact } =
    user;
  return (
    <>
      <main className="flex flex-col sm:bg-bgWeb sm:w-4/5 sm:self-center">
        <div className=" font-montserrat text-white flex flex-row justify-around">
          <h1>{Name}</h1>
          <div>
            <button className=" pr-4 w-auto h-auto">
              <Image src={edit} alt={'edit icon'}></Image>
            </button>

            <button className=" w-auto h-auto">
              <Image src={deleteIcon} alt={'delete icon'}></Image>
            </button>
          </div>
        </div>
        <div className=" max-md:w-5/6 h-px m-3 bg-slate-800 self-center sm:w-4/5"></div>
      </main>
    </>
  );
}
