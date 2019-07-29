import React from 'react'
import Cocktail from '../components/Cocktail'
import EditForm from '../components/EditForm'

class CocktailContainer extends React.Component{


  renderCocktails = () => {

    let cocktails = this.props.cocktails
    if(this.props.select){
      let selectedCocktails = cocktails.filter(cocktail => {

        return cocktail.base === this.props.select.toLowerCase()
      })
      return selectedCocktails.map(cocktail => {
        return <Cocktail handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} key={cocktail.id} cocktail={cocktail} />
      })
    } else if(this.props.editId){
        let editCocktail = cocktails.find(cocktail=>{
            return cocktail.id === this.props.editId
          })
        return  <EditForm updateEdit={this.props.updateEdit} editSubmit={this.props.editSubmit} editId={this.props.editId} editCocktail={editCocktail} />
    } else if(this.props.searchTerm ){
        let newCocktails = cocktails.filter(cocktail=> {
          return cocktail.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        })
        return newCocktails.map(cocktail=> {
          return <Cocktail handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} key={cocktail.id} cocktail={cocktail} />
        })
    } else {
    return cocktails.map(cocktail => {
        return <Cocktail handleEdit={this.props.handleEdit} handleDelete={this.props.handleDelete} key={cocktail.id} cocktail={cocktail} />
      })
    }
  }

  render(){

    return(
      <div>
        <h2>All available cocktails:</h2>
          {this.renderCocktails()}
      </div>
    )
  }
}



export default CocktailContainer
