import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import RecipeCard from './RecipeCard'
import FilterBox from '../FilterBox/FilterBox'

const Recipes = props => {

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const handleSearchFilter = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const getRecipes = () => {
            axios
                .get('http://localhost:8000/recipes')
                .then(({data}) => {
                    setRecipes(data)
                    setSearchResults(data)
                })
        }
        getRecipes()
    },[])

    useEffect(() => {
        const results = recipes.filter(recipe => recipe.recipe_title.includes(search))
        setSearchResults(results)
        console.log(searchResults)
    },[search])

    return (
        <div>
            <FilterBox 
                handleSearchFilter={handleSearchFilter}
                search={search}
                setSearch={setSearch}
            />
            <RecipesWrapper>
                {searchResults.map((recipe) => {
                    return (
                        <RecipeCard 
                            key={recipe.recipe_title}
                            title={recipe.recipe_title}
                            source={recipe.source}
                            ingredients={recipe.ingredients}
                            method={recipe.method}
                            description={recipe.description}
                            img={recipe.img}
                        />
                    )
                }
                )}
            </RecipesWrapper>
        </div>
    )
    
}

const RecipesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 450px);
    gap: 2rem;
    justify-content: center;
    padding: .5rem;
`

export default Recipes