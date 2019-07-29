import React from 'react'
import Search from '../components/Search'
import Sort from '../components/Sort'

class Navbar extends React.Component {

  render(){
    return(
      <div>
        <Search liquorSelect={this.props.liquorSelect} handleChange={this.props.handleChange} searchTerm={this.props.searchTerm} />
        <Sort handleSelect={this.props.handleSelect}/>
      </div>
    )
  }
}

export default Navbar
