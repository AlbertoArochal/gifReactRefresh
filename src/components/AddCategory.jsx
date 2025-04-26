import {useState} from "react";


export const AddCategory = ({onNewValue}) => {



    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) {
            return;
        } else {        onNewValue(inputValue);
            setInputValue('');}

    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
        </form>
    );
}

