import React from "react";
import GhibliContainer from "../containers/GhibliContainer";
import GhibliItem from "./GhibliItem";

const GhibliList = ({ghibli, onGhibliClick})=>{
    const GhibliItems = ghibli.map((ghibli, index) => {
        return <GhibliItem ghibli={ghibli} key={index}/>
    })

    const handleClick =(event)=>{
        event.preventDefault();
        onGhibliClick(event.target.selector.selectedIndex)
    }
    return (
        <>
            {/* <CountriesTotalPop totalPop={totalPop}/> */}
            <form onSubmit={handleClick}>
                <select name="selector">{GhibliItems}</select>
                <button>select</button>
                </form>
    
            </>
        )
}


export default GhibliList;