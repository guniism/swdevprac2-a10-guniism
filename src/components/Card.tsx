"use client"
import Image from 'next/image'
// import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({venueName, imgSrc, onUpdateList} : {venueName:string, imgSrc:string, onUpdateList?:Function}){
    function ratingChangeHandler(newValue: number | null) {
        // console.log(newValue)
        if(onUpdateList){
            if (newValue != null) {         
                onUpdateList(venueName, newValue)
            }
            else{
                onUpdateList(venueName, 0)
            }
        }
    }

    return (
        // <div className="w-[250px] h-[300px] bg-white shadow-lg rounded-[10px] p-[5px]" onClick={() => alert("You Select" + card.venueName)}>
        <InteractiveCard>
            <div className='w-[250px] h-[300px] p-[5px]'>          
                <div className="w-full h-[70%] relative">
                    <Image src={imgSrc} 
                        alt="Card Picture"
                        fill={true}
                        priority
                        // objectFit='cover'
                        style={{ objectFit: 'cover' }} 
                        className="rounded-[5px] w-auto h-auto"
                    />
                </div>
                <div className="h-[30%] p-[10px] space-y-2">
                    <h4 className="font-semibold text-[16px] text-[#055D70]">"{venueName}</h4>
                    {/* <p className="text-xs">A stunning bouquet hall where love blossoms and unforgettable memories are made.</p> */}
                    {
                        onUpdateList ?
                        <Rating         
                            onChange={(event, newValue) => {
                                ratingChangeHandler(newValue);
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                                // event.preventDefault();
                            }}
                            
                            name={venueName + " Rating"}
                            precision={1}
                            id={venueName + " Rating"}
                            data-testid={venueName + " Rating"}
                        /> : ""
                    }
                </div>
            </div>
        </InteractiveCard>
        // </div>
    )
}