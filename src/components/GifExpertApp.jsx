import { useState } from "react"


export const GifExpertApp = () => {
    

    const [ categories, setCategories ] = useState([ 'One Piece', 'Naruto', 'Bleach' ]);

    const onAddCategory = () => {
        //Agregar categoria
        setCategories([ ...categories, 'Slam Dunk']);
        console.log(categories);
    } 

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <ol>
            { categories.map( category => {
                return <li key={ category }>{ category }</li>
            }) 
        }
        <button onClick={onAddCategory}>Agregar</button>
        </ol>
         {/* Listado de Gif */}
         
             {/* Gif Item */}

    </>
  )
}
