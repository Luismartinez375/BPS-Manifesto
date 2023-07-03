import Image from 'next/image'
import Vector from '../../public/Vector.svg'
import VectorMobile from '../../public/VectorMobile.svg'
export default function Home() {
  return (
    <main className="flex flex-col justify-normal content-center min-h-screen bg-bgManifesto"> 
      <div className='mt-9 w-screen h-36 relative  bg-manifestoMobile bg-repeat-x bg-center'>
     </div>
     <div className=' '><p className=' font-montserrat text-xl text-white w-2/3 h-auto '>No one is currently signed in. Be the first to sign in.</p></div>
     
     
    </main>
  )
}
