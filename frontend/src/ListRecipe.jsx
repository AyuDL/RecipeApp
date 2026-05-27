import { useEffect } from 'react';

function ListRecipe({ recipes, setRecipes }) {      //On met les paramètres (props) pour que la gestion du composant soit gérer par l'app et non pas par le composant.

    useEffect(() => {                   //On définit le comportement du code au chargement du composant
        const fetchData = async () => {     //async() permet de dire au navigateur de ne pas bloquer le site pendant qu'il va faire la requête.
            try {
                const reponse = await fetch(import.meta.env.VITE_API_URL);  //async nous permet d'utiliser await qui dit au site d'attendre jusqu'à qu'il parvienne à se connecter.
                const resultat = await reponse.json();
                setRecipes(resultat);                                                //le résultat du json lu par le site va être incorporé à recipes via setRecipes et ensuite se faire afficher.
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

export default ListRecipe;