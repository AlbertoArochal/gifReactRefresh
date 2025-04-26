import {useState} from 'react';
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";


const InitialCat = ['One Punch']
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(InitialCat);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory,...categories]);
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

            <AddCategory onNewValue={event => onAddCategory(event) }/>


            <button onClick={() => onReset(InitialCat)}>Reset</button>

                {categories.map(category => (
                    <GifGrid category={category} key={category} />


                ))}


        </>
    )
}
