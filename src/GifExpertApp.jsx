import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import Logo from './img/logo.svg';



export const GifExpertApp = () => {
    

    const [ categories, setCategories ] = useState([]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        //Agregar categoria
        setCategories([ ...categories, newCategory ]);
    } 

  return (
    <>  

        <img className="logo" src={Logo} alt="BigCo Inc. logo"/>
        {/* Titulo */}
        <h1>Buscador de Gifs</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={ value => onAddCategory(value)  }
        />

        {/* Listado de Gif */}
            { 
                categories.map( category => 
                    (
                        <GifGrid 
                            key={ category } 
                            category={ category } />
                    )
                ) 
            }
         
            

    </>
  )
}
