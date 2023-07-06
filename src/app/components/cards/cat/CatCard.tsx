import Image from 'next/image';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  return (
    <div className=" m-4">
      <div className=" flex flex-col w-1/3 overflow-hidden shadow rounded-2xl bg-[#ece9e6] bg-gradient-to-r ">
        <div className=" text-2xl ">
          <Image
            src="https://picsum.photos/600/400"
            alt="card__image"
            className=" w-full block bg-cover"
            width="600"
            height="400"
          />
        </div>
        <div className=" p-4 flex flex-col gap-2">
          <span className=" self-start w-12 pt-1 pb-3 rounded-xl text-xs bg-[#56ccf2] bg-gradient-to-b text-[rgb(250,250,250)]">
            {tag}
          </span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className=" flex p-4 mt-auto">
          <div className=" flex gap-2">
            <Image
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className=" rounded-full"
              width="40"
              height="40"
            />
            <div className=" text-[#666]">
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
