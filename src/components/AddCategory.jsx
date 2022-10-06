import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputValue = ( event ) => {
        setInputValue( event.target.value );
    };

    const onSubmit = ( event ) => {
        event.preventDefault();
        //onAddCategories( categories => [...categories, inputValue ] );
        onNewCategory( inputValue )
        setInputValue('');
    };
  
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputValue }
            />  
        </form>
  )
}
