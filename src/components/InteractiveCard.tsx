"use client"

export default function InteractiveCard({children}: {children: React.ReactNode}){
    // function onCardSelected(){
    //     alert("Card is Clicked")
    // }
    function onCardMouseAction(event:React.SyntheticEvent){
        if(event.type == 'mouseover'){
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
            event.currentTarget.classList.add('bg-neutral-200');
            event.currentTarget.classList.remove('bg-white');
            event.currentTarget.classList.add('cursor-pointer');
  
        }
        else{
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
            event.currentTarget.classList.remove('bg-neutral-200');
            event.currentTarget.classList.add('bg-white');
            event.currentTarget.classList.remove('cursor-pointer');
 
        }
    }
    
    return(
        <div className="shadow-lg bg-white rounded-lg" 
        // onClick={()=>onCardSelected()}
        onMouseOver={(e)=>onCardMouseAction(e)}
        onMouseOut={(e)=>onCardMouseAction(e)}
        >
            {children}
        </div>
    )
}