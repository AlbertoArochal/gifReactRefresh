import { getGifs } from "../helpers/getGifs.js";
import { useState, useEffect } from "react";
import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({ category }) => {
const {images, isLoading} = useFetchGifs(category);

    return (

        <>

            {isLoading && (<p>Loading...</p>)}

            <h3>{category}</h3>
            <div className="card-grid">
            {images.map((image) => (

                <GifGridItem {...image} />
            ))}</div>

        </>



    );
};





