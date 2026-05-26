import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect( ()=> {
        const fetchData = async () => {
            try {
                const reponse = await fetch(import.meta.env.VITE_API_URL);
                if (!reponse.ok) {
                    throw new Error(`Statut de réponse : ${reponse.status}`);
                }

                const resultat = await reponse.json();
                setRecipes(resultat);
            } catch (erreur) {
                console.error(erreur.message);
            }
        };
        fetchData();
    }, []);

    return (
        <ul>
            {recipes.map((recipe) =>
            <li key={recipe.id}>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
                <p>{recipe.preparationTime}</p>
                <p>{recipe.ingredients}</p>
            </li>)}
        </ul>
    )
}