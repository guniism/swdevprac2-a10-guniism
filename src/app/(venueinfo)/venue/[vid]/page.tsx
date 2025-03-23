import Image from "next/image";
import getVenue from "@/libs/getVenue";
import Link from "next/link";
export default async function VenueDetailPage( {params} : {params: {vid:string}}){
    const venueDetail = await getVenue(params.vid);
    
    /**
     * Mock Data for Demonstration Only
     */
    // const mockVenueRepo = new Map();
    // mockVenueRepo.set("001", {name: "The Bloom Pavilion", image: "/img/bloom.jpg"});
    // mockVenueRepo.set("002", {name: "Spark Space", image: "/img/sparkspace.jpg"});
    // mockVenueRepo.set("003", {name: "The Grand Table", image: "/img/grandtable.jpg"});
  
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-semibold">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={venueDetail.data.picture}
                    alt="Venue Image"
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-left mx-5">
                    <div className="text-md">Name: {venueDetail.data.name}</div>
                    <div className="text-md">Address: {venueDetail.data.address}</div>
                    <div className="text-md">District: {venueDetail.data.district}</div>
                    <div className="text-md">Postal Code: {venueDetail.data.postalcode}</div>
                    <div className="text-md">Tel: {venueDetail.data.tel}</div>
                    <div className="text-md">Daily Rate: {venueDetail.data.dailyrate}</div>
                    <Link href={`/booking?id=${params.vid}`}>
                    <button className="rounded bg-[#055D70] text-white font-medium h-10 w-32 hover:bg-[#277381]">
                        Book Venue
                    </button>
                </Link>   
                </div>    
                
            </div>
        </main>
    )
}

// export async function generateStaticParams(){
//     return [{vid:"001"}, {vid:"002"}, {vid:"003"}]
// }