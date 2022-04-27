import { useState, useEffect } from "react"
import axios from "axios"
import SpinnerLoader from "../components/Spinner"
import MoviesList from "../components/MoviesList"

function InfoPanel () {
    const [loaded, setDataLoaded] = useState(false)
    const [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (!loaded) {
                const result = await axios.get('https://run.mocky.io/v3/23e8c094-1cfe-4127-89b2-60f550452bd9')
                if (result.data) {
                    setDataLoaded(true)
                    setMoviesData(result.data)
                }
            }
        }
        fetchData()
    })

    return (
        <div className="App">
            <SpinnerLoader dataLoaded={loaded} />
            <MoviesList movies={moviesData} />
        </div>
    )
}

export default InfoPanel