import React, {useState} from 'react';
import openai from 'openai';

const RecipeSearch = () => {
    const [preference, setPreference] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [chosenRecipe, setChosenRecipe] = useState(null);

    openai.api_key = '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';
    const getRecipes = async (preference) => {
        try {
            const response = await openai.Completions.create({
                prompt: `find recipes for ${preference}`,
                model: "text-davinci-003",
                temperature: 0.7,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
            const result = response.choices[0].text;
            return result;
        } catch (error) {
            console.log(error);
        }
    };
    const handleRecipeSelect = async () => {
        const res = await getRecipes(preference);
        setRecipes(res);
    };

    return (
        <div>
            <input type="text" placeholder="Enter preference" onChange={event => setPreference(event.target.value)}/>
            <button onClick={() => handleRecipeSelect(preference)}>Find Recipes</button>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index} onClick={() => setChosenRecipe(recipe)}>
                        {recipe}
                    </li>
                ))}
            </ul>
            {chosenRecipe && <div>{chosenRecipe}</div>}
        </div>
    )
};
export default RecipeSearch
