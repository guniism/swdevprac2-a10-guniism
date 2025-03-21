"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css'
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Banner(){
    const [index, setIndex] = useState(0);
    const covers: string[] = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg",];
    const router = useRouter();

    const { data: session } = useSession();
    // console.log(session)
    console.log(session?.user.token)

    return(
        <div className={styles.banner}>
            <Image src={covers[index%4]} 
                alt="Cover"
                fill={true}
                priority
                // objectFit='cover'
                style={{ objectFit: 'cover' }}
                onClick={()=>setIndex(index+1)}
                className='hover:cursor-pointer'
            />
            <div className={styles.bannerText}>
                <h1 className='text-3xl font-bold'>where every event finds its venue</h1>
                <h3 className='text-lg font-semibold'>Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
            </div>
            {
                session ? <div className='z-30 absolute top-5 right-5 font-semibold text-white' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    Welcome {session.user?.name}
                </div> 
                : null
            }
            <button className="bg-white text-[#055D70] border border-[#055D70] 
                font-semibold py-2 px-2 m-3 rounded-lg z-30 absolute 
                bottom-0 right-0 hover:bg-[#055D70] hover:text-white 
                hover:border-transparent" onClick={(e) => {e.stopPropagation; router.push("/venue")}}>
                Select Venue
            </button>
        </div>
    );
}