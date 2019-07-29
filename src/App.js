import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './containers/MainContainer'
import Navbar from './containers/Navbar'

class App extends React.Component {
  state = {
    cocktails: [],
    searchTerm: "",
    form: false,
    name: "",
    glass: "",
    select: null,
    deleted: "",
    editId: null
  }

  componentDidMount(){
    fetch('http://localhost:3000/cocktails')
      .then(res=>res.json())
      .then(cocktailData=>
        this.setState({
          cocktails: cocktailData
        })
      )
  }

  //This needs to live in app


  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  seeForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

   handleSelect = (event) => {
    this.setState({
      select: event.target.value.toLowerCase()
    }, () => {
      console.log(this.state.select)
    })
  }

  handleDelete = (id) => {
    return  fetch(`http://localhost:3000/cocktails/${id}`, {
      method: 'DELETE'
    })
      .then(res=>res.json())
      .then(response=> {
        this.setState({
          deleted: ""
        })
        return response
      })
  }

  handleEdit = (id) => {

    let foundCocktail = this.state.cocktails.find(cocktail=>{
      return cocktail.id === id
    })
    this.setState({
      editId: id
    })
  }

  updateEdit = (editId, newCocktail) => {
    const newArray = this.state.cocktails.map(cocktail => {
      if(editId === cocktail.id){
        return newCocktail
      } else {
        return cocktail
      }
    })

    this.setState({
      cocktails: newArray,
      editId: null
    })
    // console.log('RESET FROM APP')
  }

  updateAdd = (newCocktail) => {
    debugger;
    console.log("Updated array with new cocktail")
    const addedArray = this.state.cocktails.map(cocktail=>{
      if(newCocktail.id === cocktail.id){
        return newCocktail
      } else {
        return cocktail
      }
    })

    this.setState({
      cocktails: addedArray
    })

  }










  render() {
    console.log(this.state.cocktails)
    return (
      <div>
        <Navbar handleSelect={this.handleSelect}
        handleChange={this.handleChange}
        liquorSelect={this.state.liquorSelect}
        searchTerm={this.state.searchTerm} />
        <MainContainer updateAdd={this.updateAdd}
        updateEdit={this.updateEdit}
         editSubmit={this.editSubmit}
         editId={this.state.editId}
         handleEdit={this.handleEdit}
         handleDelete={this.handleDelete}
         select={this.state.select}
         seeForm={this.seeForm}
         form={this.state.form}
         searchTerm={this.state.searchTerm}
         cocktails={this.state.cocktails}/>
      </div>
    );
  }
}

export default App;
