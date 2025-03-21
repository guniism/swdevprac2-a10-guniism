"use client"
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel(){
    const listReducer = (list:Map<string, number>, action:{type:string, venueName:string, value:number}) => {
        switch(action.type){
            case 'add': {
                const newList = new Map(list);
                newList.set(action.venueName, action.value);
                return newList;
            }
            case 'remove': {
                const newList = new Map(list);
                newList.delete(action.venueName);
                return newList;
            }
            default: return list;
        }
    }
    const initialMap = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

      
    const [ mapList, dispatchCompare ] = useReducer(listReducer, initialMap);
    
    /*
     * Mock Data for Demontration only 
     */
    const mockVenueRepo = [
        {vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg"},
        {vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg"},
        {vid: "003", name: "The Grand Table", image: "/img/grandtable.jpg"}
    ]

    return(
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", gap: "20px"}}>
                {/* <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" onUpdateList={(name: string, value: number) => dispatchCompare({ type: "add", venueName: name, value: value })}/>
                <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" onUpdateList={(name: string, value: number) => dispatchCompare({ type: "add", venueName: name, value: value })}/>
                <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" onUpdateList={(name: string, value: number) => dispatchCompare({ type: "add", venueName: name, value: value })}/> */}
                {
                    mockVenueRepo.map((venueItem) => (
                        <Link key={venueItem.vid}  href={`/venue/${venueItem.vid}`}>
                            <Card venueName={venueItem.name} imgSrc={venueItem.image} 
                                onUpdateList={(name: string, value: number) => dispatchCompare({ type: "add", venueName: name, value: value })}
                            />
                        </Link>
                    ))
                }
            </div>
            <div>
                <b>Venue List with Ratings : {3}</b>
                {Array.from(mapList.entries()).map(([venueName, rating]) => (
                    <p key={venueName} data-testid={venueName} onClick={()=> dispatchCompare({ type: "remove", venueName: venueName, value: rating })} className="hover:cursor-pointer">
                        {venueName}: {rating}
                    </p>
                ))}
            </div>
        </div>
    )
}