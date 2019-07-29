import React from 'react'

class Cocktail extends React.Component {
  state = {
    clicked: false
  }


  handleClick = () => {
    console.log(this.props.cocktail)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  renderCard = () => {
    return (
      <div>
        {this.props.cocktail.name}
      </div>
    )
  }

  renderDetails = () => {
    return(
      <div>
        <h1>{this.props.cocktail.name}</h1>
          <p>{this.props.cocktail.glass}</p>
            <p>{
                this.props.cocktail.ingredients.map(ingredient => {
                  return <li>{ingredient.name}</li>
                })
              }
            </p>
          <h4>Liquor base of cocktail: {this.props.cocktail.base}</h4>

          <button onClick={() => this.props.handleEdit(this.props.cocktail.id)}>Edit a cocktail</button>
          <button onClick={() => this.props.handleDelete(this.props.cocktail.id)}>Delete cocktail</button>
      </div>
    )
  }

  render(){

    return (
      <div onClick = {this.handleClick} className="card">
          {this.state.clicked ? this.renderDetails() : this.renderCard()}
      </div>
    )
  }

}

export default Cocktail
