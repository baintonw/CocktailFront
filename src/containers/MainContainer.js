import React from 'react'
import CocktailContainer from './CocktailContainer'
import CocktailForm from '../components/AddForm'

class MainContainer extends React.Component {



  render(){
    console.log(this.props.select)
    return(
      <div>
        <button onClick={() => this.props.seeForm()}>{this.props.form ? "back" : "add a cocktail"}</button>
        {
          this.props.form
          ?
          <CocktailForm updateAdd={this.props.updateAdd}
          cocktails={this.props.cocktails} />
          :
          <CocktailContainer
          updateAdd={this.props.updateAdd}
          updateEdit={this.props.updateEdit}
          editSubmit={this.props.editSubmit}
          editId={this.props.editId}
          handleEdit={this.props.handleEdit}
          handleDelete={this.props.handleDelete}
          select={this.props.select}
          searchTerm={this.props.searchTerm}
          cocktails={this.props.cocktails} />}


      </div>
    )
  }

}

export default MainContainer
