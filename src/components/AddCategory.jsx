import {useState} from "react";
import PropTypes from "prop-types";


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
        <form onSubmit={onSubmit} aria-label="form">
            <input type="text" placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
        </form>
    );
}

AddCategory.propTypes = {
    onNewValue: PropTypes.func.required
}