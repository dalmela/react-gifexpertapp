
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One punch','Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    //const handleAdd = (e) => {
        //setCategories([...categories, 'HunterXHunter']);
        //setCategories( cats => [...cats, 'HunterXHunter']);
    //};

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory categorias={setCategories}/>
        <hr />
        <ol>
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category} />
                })
            }
        </ol>
        </>
    );
}

export default GifExpertApp;