import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({categorias}) => {
    
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            categorias(cats => [inputValue, ...cats]) ;
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          ></input>
        </form>
    )
}

AddCategory.propTypes = {
    categorias: PropTypes.func.isRequired
}
