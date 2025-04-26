import { getGifs } from "../helpers/getGifs.js";
import { useState, useEffect } from "react";
import {GifGridItem} from "./GifGridItem.jsx";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (

        <><h3>{category}</h3>
            <div>
            {images.map(({url, id, title}) => (

                <GifGridItem key={id} url={url} title={title} />
            ))}</div>

        </>



    );
};





