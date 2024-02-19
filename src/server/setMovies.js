const setMovies = async(busqueda)=> {
    
    const results= await fetch(`https://www.omdbapi.com/?apikey=fda40cbe&s=${busqueda}`)
    const movies= await results.json();
        
    return movies;

}

export default setMovies;