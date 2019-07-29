import React from 'react'
//need to finish liquor select sort
function Search(props) {
  return(
    <div>
      <h3>This nav bar will contain 1. a search bar, and 2. buttons</h3>
        <p>Search cocktails:<input onChange={props.handleChange} value={props.searchTerm}></input></p>
    </div>
  )
}

export default Search
