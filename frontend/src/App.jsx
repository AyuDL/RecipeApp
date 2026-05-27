import './App.css'
import ListRecipe from "./ListRecipe.jsx";
import RecipeForm from "./RecipeForm.jsx";
import {useState} from "react";

function App() {
    const [recipes, setRecipes] = useState([]);         //On définit un état initial qui va permettre, à chaque modification, de re-render la page.

    return (
          <div>
            <RecipeForm setRecipes={setRecipes} recipes={recipes} />     {/*On appelle le composant avec les paramètres de ce même composant.*/}
            <ListRecipe recipes={recipes} setRecipes={setRecipes} />
          </div>
      )
}

export default App