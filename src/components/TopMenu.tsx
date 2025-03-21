import TopMenuItem from './TopMenuItem'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import Link from 'next/link'

export default async function TopMenu(){
    const session = await getServerSession(authOptions );

    return(
        <div className="bg-white shadow-sm">
            <div className="w-full mx-auto px-2 flex justify-between">
                {
                    session ? <Link href="/api/auth/signout" className='flex items-center text-[#055D70] hover:text-[#0d7c94]'>
                        <div>
                            <b className="font-semibold ">Sign-Out of {session.user.name}</b>
                        </div>
                    </Link> 
                    : <Link href="/api/auth/signin" className='flex items-center text-[#055D70] hover:text-[#0d7c94]'>
                        <div>
                            <b className="font-semibold ">Sign-In</b>
                        </div>
                    </Link>

                }


                <div className="h-14 flex flex-row-reverse ">
                    <div className="px-1 h-full flex items-center justify-center">
                        <Image src="/img/logo.png"
                            alt="Card Picture"
                            width="100"
                            height="100"
                            className="h-5/6 w-auto rounded-lg"
                        />
                    </div>
                    <TopMenuItem menuName="Booking" link="/booking"/>
                </div>
            </div>
        </div>
    )
}