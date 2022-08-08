import React, { useState, useEffect } from 'react';
import GhibliList from '../components/GhibliList';
import GhibliDetail from '../components/GhibliDetail';
import GhibliItem from '../components/GhibliItem';
import GhibliSelected from '../components/GhibliSelected';

const GhibliContainer = ()=>{
    const [ghibli, setGhibli] = useState([]);
    const [selectedGhibli, setSelectedGhibli] = useState(null)



    useEffect(() => {
        getGhibli();
    }, [])

    const getGhibli = function(){
        fetch('https://ghibliapi.herokuapp.com/Vehicles')
        .then(res => res.json())
        .then(ghibli => setGhibli(ghibli))
    }
    const onGhibliClick = (ghibliIndex) =>{
        setSelectedGhibli(ghibli[ghibliIndex])
        // getBorderingCountries(selectedCountry)
    }
    const onGhibliSelected = function(ghibli){
        setSelectedGhibli(ghibli);
    }

    return (
        <div className="main-container">
            <p>Hi GHIBLI</p>
            { <GhibliList ghibli={ghibli} onGhibliClick={onGhibliClick} /> }
            {<GhibliSelected ghibli={ghibli} onGhibliSelected={onGhibliSelected} />}
            {selectedGhibli ? <GhibliDetail selectedGhibli={selectedGhibli} /> : null} 
            
        </div>
)
}
export default GhibliContainer; 