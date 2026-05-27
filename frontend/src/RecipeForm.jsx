import {useEffect} from "react";
import {useState} from "react";
import ListRecipe from "./ListRecipe.jsx";

function RecipeForm( {recipes, setRecipes} ) {
    const [formData, setFormData] = useState({
        name: '',
        description:'',
        preparationTime:'' ,
        ingredients:''
    });

    const handleChange = (e) => {     //C'est un "composant contrôlé" il va permettre de lier les champs du formulaire à un état. e c'est c'est l'évènement.
        setFormData({
            ...formData,                    //les 3 petits points sont le spread operator, ça permet de prendre en copie de toutes les données du formulaire représenté par formData.
            [e.target.name]: e.target.value //[e.target.name] est le champ précis du formulaire et la valeur c'est ce qu'à taper l'utilisateur.
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();                                  //Par défaut, lors de l'envoi d'un formulaire, la page se recharge. Ici, on annule ce rechargement.

        await fetch(import.meta.env.VITE_API_URL, {         //Lance la requête vers l'API
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },    //Indique au serveur que ce qu'on envoie, c'est du json.
            body: JSON.stringify(formData)                      //Transforme la donnée qu'on ajoute en json.
        });

        setRecipes([...recipes, formData]);                     //On réutilise le spread operateur pour prendre la copie des recettes déjà présente et on rajoute celle qui va être ajouté par l'utilisateur.
    };

    return (
        <div>
            <h2 className="title"> Set your recipe : </h2>
            <form onSubmit={handleSubmit}>
                <label> Name : </label>
                <input name="name" value={formData.name} onChange={handleChange} />
                <label> Description : </label>
                <textarea name="description" value={formData.description} onChange={handleChange} />
                <label> Time to prepare : </label>
                <input name="preparationTime" value={formData.preparationTime} onChange={handleChange} />
                <label> Ingredient : </label>
                <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RecipeForm;