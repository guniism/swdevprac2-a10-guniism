import Link from "next/link";

interface Props{
    menuName: string;
    link: string;
}

export default function TopMenuItem(item:Props){
    return(
    <Link href={item.link} className="w-28 h-full flex items-center justify-center">
        <div className="border hover:text-white text-[#055D70] hover:bg-neutral-200 h-5/6 w-11/12 flex items-center justify-center rounded-lg">
            <b className="font-semibold ">{item.menuName}</b>
        </div>       
    </Link>

    )
}