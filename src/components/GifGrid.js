import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    // console.log(state);

    //const [images, setImages] = useState([]);

    //Sólo se ejecuta cuando el componente es renderizado por primera vez
    // ponemos como dependencias [] 
    //useEffect(() => {
    //    getGifs(category).then(imgs => setImages(imgs));
    //}, [category]);
    
   

    //getGifs();

    return (
        <>
        <h3>{category}</h3>
        { loading && <p>Loading</p> }
        { <div className="card-grid">
                {
                    data.map(img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
        </div> }
        </>
    );
}
