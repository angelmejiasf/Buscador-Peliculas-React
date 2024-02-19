import useMovies from "../hooks/useMovies";

export function Movies() {

    const { datos, cambiarState, pelis, busqueda } = useMovies();


    return (
        <div className='container'>
            <header className='header'>
                <h1>Buscador de películas</h1>
                <form className='form' onSubmit={datos}>
                    <input placeholder='Busca una película' className='form__input' name='film' onChange={cambiarState}></input>
                    <button type='submit'>Buscar</button>
                </form>

            </header>
            <main className='main'>

                {pelis === null || pelis === undefined ?
                    <p>No hay peliculas</p>
                    : pelis.map(pelicula => {
                        return (
                            <ul key={pelicula.imdbID}>
                                <h3>Titulo:<br></br>
                                    {pelicula.Title}</h3>
                                <h4>Año<br></br>{pelicula.Year}</h4>
                                <img src={pelicula.Poster}></img>
                            </ul>
                        )


                    })}



            </main>
        </div>
    );


}