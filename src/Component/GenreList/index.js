import { useEffect, useState } from "react";
import GenreListStyle from "./style";
import api from "../../Helpers/api";
import { Link, useParams } from "react-router-dom";
import MovieList from "../MovieList";

export default function GenreList () {
    const {genre_id} = useParams();
    const [movieData, setMovieData] = useState({
        data: [],
        metadata: {
            current_page: 1,
            per_page: 2,
            page_count: 25,
            total_count: 250
        } 
    });
    useEffect(() => {
        window.scrollTo(0,0);
        api.get(`genres/${genre_id}/movies?page={page}`)
        .then(function (response) {
            setMovieData(response.data);
        })
        .catch(function (error) {})
    }, []);
    console.log(genre_id);
    const renderGenre = () => {
        return movieData.data.map(({poster, title, id}) => {
            return(
                <div className="movie" key={id}>
                    <Link to={`/m/${id}`}>
                       <div className="poster"><img src={poster} /></div> 
                        <h5>{title}</h5>
                    </Link>
                </div>
            );
        });
    };
    const [genreName , setGenreName] = useState("");
    useEffect(() => {
        api.get("genres")
        .then(function(response) {
            const genre = response.data.find(genre => genre.id === parseInt(genre_id));
            if (genre) {
                setGenreName(genre.name);
            }
        })
        .catch(function(error) {})
    }, []);
    return(
        <GenreListStyle>
            <div className="wrapper">
                <h2 className="genre-title">{genreName}</h2>
                <div className="genre-list">{renderGenre()}</div>
            </div>
        </GenreListStyle>
    );
}