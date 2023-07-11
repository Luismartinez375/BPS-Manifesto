import Image from 'next/image';
import deleteIcon from '../../../../public/delete.svg';
import edit from '../../../../public/edit.svg';
export interface IlistItem {
  sampleTextProp: string;
}

export default function ListItem({ sampleTextProp }: IlistItem) {
  return (
    <>
      <main className="flex flex-col">
        <div className=" font-montserrat text-black flex flex-row justify-around">
          <h1>sampleTextProp</h1>
          <div>
            <button className=" pr-4 w-auto h-auto">
              <Image src={edit} alt={'edit icon'}></Image>
            </button>

            <button className=" w-auto h-auto">
              <Image src={deleteIcon} alt={'delete icon'}></Image>
            </button>
          </div>
        </div>
        <div className=" max-md:w-5/6 h-0.5 m-3 bg-slate-800"></div>
      </main>
    </>
  );
}
