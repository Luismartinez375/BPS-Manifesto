export default function Home() {
  // const path = '../../database.sqlite';
  // const db = new SQLiteDB(path);
  // db.createTable();
  // const users = getAllUsers(path);
  return (
    <main className="flex flex-col justify-around min-h-screen bg-bgManifesto">
      <div className=" w-screen h-36 bg-manifestoMobile bg-repeat-x bg-center"></div>
      <p className=" self-center font-montserrat text-xl text-white w-4/5 h-auto text-center">
        No one is currently signed in. Be the first to sign in.
      </p>

      <button className=" bg-orange-300 w-44 h-14 text-black font-inter align-middle self-center">
        Sign In
      </button>
    </main>
  );
}
