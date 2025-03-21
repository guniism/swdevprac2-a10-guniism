import Link from "next/link";
import Card from "./Card";
import { VenueItem, VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson}: {venuesJson:Promise<VenueJson>}){
    const venueJsonReady = await venuesJson;
    return(
        <>
            <h1 className='text-3xl font-bold text-center mt-5'>Select yout Venue</h1>
            <h3 className='text-lg font-semibold text-center'>Explore {venueJsonReady.count} fabulous venues in our venue catalog</h3>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", gap: "20px"}}> 
                {
                    venueJsonReady.data.map((venueItem: VenueItem) => (
                        <Link key={venueItem.id}  href={`/venue/${venueItem.id}`}>
                            <Card venueName={venueItem.name} imgSrc={venueItem.picture}/>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}