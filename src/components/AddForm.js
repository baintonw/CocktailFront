import React from 'react'

class CocktailForm extends React.Component{
  state = {
    name: "",
    glass: "",
    base: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: ""

  }

  handleChange = (event)=> {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {
      console.log(this.state.ingredient1)
    })
  }


  submitCocktail = () => {
    let newCocktail = {
      name: this.state.name,
      glass: this.state.glass,
      base: this.state.base,
      ingredient1:this.state.ingredient1,
      ingredient2: this.state.ingredient2,
      ingredient3: this.state.ingredient3
    }

    // let newIngredient = {
    //   name: this.state.ingredients
    // }
    // debugger;
    // fetch('http://localhost:3000/ingredients', {
    //   method: "POST",
    //   headers: {"Content-type": "application/json",
    //     "Accept": "application/json"},
    //   body: JSON.stringify(newIngredient)
    // })
    //   .then(res=> res.json())
    //   .then(console.log)

    fetch('http://localhost:3000/cocktails', {
      method: "POST",
      headers: {"Content-type": "application/json",
        "Accept": "application/json"},
      body: JSON.stringify(newCocktail)
    })
      .then(res=> res.json())
      .then(newCocktail => {
        this.props.updateAdd(newCocktail)
        this.setState({
          name: ""
        })
      })
  }

  //See Mod 2 cats project for how to add ingredients (i.e. relationships to Cocktails and Ingredients)



  render() {
    // console.log(this.props.updateAdd)
    return(
      <form>
        <label>
          Name:
            <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
          Glass:
            <input onChange={this.handleChange} value={this.state.glass} type="text" name="glass" />
          Base Liquor:
            <input onChange={this.handleChange} value={this.state.base} type="text" name="base" />
          Ingredients:
            <input onChange={this.handleChange} value={this.state.ingredient1} type="text" name="ingredient1" />
            <input onChange={this.handleChange} value={this.state.ingredient2} type="text" name="ingredient2" />
            <input onChange={this.handleChange} value={this.state.ingredient3} type="text" name="ingredient3" />

        </label>
        <input onClick={this.submitCocktail} type="submit" value="Submit" />
      </form>
    )
  }
}

export default CocktailForm
