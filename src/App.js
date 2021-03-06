import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Recipes from './components/Recipes/Recipes'
import RecipeForm from './components/RecipeForm/RecipeForm'
import HomePage from './components/HomePage/HomePage'
import AddRecipe from './components/AddRecipe/AddRecipe'
import Nav from './components/Nav'
import SignUpForm from './components/SignUp/SignUpForm'

function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={HomePage} />
      <Route path='/add-a-recipe' component={AddRecipe} />
      <Route path='/sign-up' component={SignUpForm} />
    </div>
  );
}

export default App;
