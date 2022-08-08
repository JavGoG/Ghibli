import React from "react";
import SelectedItem from "./SelectedItem";


const GhibliSelected = ({ghibli})=>{
    const selectedItems = ghibli.map((selected, index)=>{
        return <SelectedItem selected={selected} key={index}/>
    
    })
    return (<>
    <h3>selected countries list:</h3>
        {selectedItems}
    </>)
}

export default GhibliSelected;