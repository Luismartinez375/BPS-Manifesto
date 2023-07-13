'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteIcon from '../../../../public/delete.svg';
import edit from '../../../../public/edit.svg';
import { User } from '../../../../types';
export interface IListItem {
  sampleTextProp: string;
}

export default function ListItem(user: User) {
  const router = useRouter();
  const { id, Name } = user;
  const remove = (id: number) => {
    let dataList: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].id === id) {
        dataList.splice(i, 1);
        localStorage.setItem('users', JSON.stringify(dataList));
      }
    }
  };
  const editUser = (id: number) => {
    localStorage.setItem('editId', id.toString());
    window.location.href = '/editUser';
  };
  return (
    <>
      <main className="flex flex-col items-center sm:bg-bgWeb w-4/5 max-sm:w-full">
        <div className=" font-montserrat text-white flex flex-row justify-between items-center w-1/2">
          <h1 className="">{Name}</h1>
          <div className=" w-20">
            <button
              className=" pr-4 w-auto h-auto"
              onClick={() => {
                editUser(id);
              }}
            >
              <Image src={edit} alt={'edit icon'}></Image>
            </button>

            <button
              className=" w-auto h-auto"
              onClick={() => {
                remove(id);
                router.refresh();
              }}
            >
              <Image src={deleteIcon} alt={'delete icon'}></Image>
            </button>
          </div>
        </div>
        <div className=" max-md:w-5/6 h-px m-3 bg-slate-700 self-center sm:w-7/12"></div>
      </main>
    </>
  );
}
