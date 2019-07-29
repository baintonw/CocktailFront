import React from 'react'

function Sort(props){
  return(
    <div>
      <select onChange={props.handleSelect}>
        <option value="Whiskey">Whiskey</option>
        <option value="Gin">Gin</option>
        <option value="Rum">Rum</option>
        <option value="Vodka">Vodka</option>

      </select>
    </div>
  )
}

export default Sort
