import {useState} from 'react';
import {AddCategory} from "./components/AddCategory.jsx";


const InitialCat = ['One Punch']
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(InitialCat);

    const onAddCategory = (category) => {
        setCategories( (categories) => categories.concat(category));
    }
    const onReset = (newCat) => {
        setCategories(newCat);
    }


    return (
        <>
            {/*titulo*/}
        <h1>
            GifExpertApp
        </h1>
            {/*input*/}
            <AddCategory />
            {/*Listado de gifs*/}
            <button onClick={() => onAddCategory('One Punch')}>Agregar</button>
            <button onClick={() => onReset(InitialCat)}>Reset</button>
            <ol>
                {categories.map(category => (
                    <li key={category}>
                        {category}
                    </li>
                ))}
            </ol>
                {/*Gif item*/}
        </>
    )
}
