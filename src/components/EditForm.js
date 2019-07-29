import React from 'react'

class EditForm extends React.Component {
  state = {
    name: "",
    glass: "",
    base: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state.base)
    })
  }


  editSubmit = (event) => {
    event.preventDefault()
    let editedCocktail = {
      name: this.state.name,
      glass: this.state.glass,
      base: this.state.base
    }
    fetch(`http://localhost:3000/cocktails/${this.props.editCocktail.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(editedCocktail)
    })
      .then(res=> res.json())
      .then(newCocktail => {
        this.props.updateEdit(this.props.editId, newCocktail)
      })
  }



  render(){
    console.log(this.props.updateEdit)
    return(
      <div>
      <h2>Feel free to edit a cocktail:</h2>
      <form>
        <label>
          Name:
          <input onChange={this.handleChange} name="name"/>
          Glass:
          <input onChange={this.handleChange} name="glass"/>
          Base:
          <input onChange={this.handleChange} name="base"/>
        </label>
        <input onClick={this.editSubmit} type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default EditForm
