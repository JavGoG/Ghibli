import React from 'react'
import GhibliSelected from './GhibliSelected'

const SelectedItem = ({selected})=> {
return (<>
    {/* <div>SelectedItem</div> */}
    <p>{selected.vehicule_class}</p>
    </>
  )
}
export default SelectedItem
