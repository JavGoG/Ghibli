import React from "react";
import GhibliList from "./GhibliList";

const GhibliItem = ({ghibli})=>{
    return(
    <option value={ghibli.index}>
        {ghibli.name}
    </option>
    )
}
export default GhibliItem;