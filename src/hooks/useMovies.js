import { useState } from "react";

import setMovies from "../server/setMovies";

function useMovies() {
    const [pelis, setPelis] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const datos = async (event) => {
        event.preventDefault();
        const movies = await setMovies(busqueda)
        setPelis(movies.Search);

    }


    const cambiarState = (event) => {
        setBusqueda(event.target.value)
    }



    return { pelis, cambiarState, datos, busqueda }
}

export default useMovies;
