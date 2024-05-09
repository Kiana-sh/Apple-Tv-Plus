import { useEffect, useState } from "react";
import api from "../../Helpers/api";
import { MovieListStyle } from "./style";
import GlobalStyle from "../Style/GlobalStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

export default function MovieList(props) {
    const {genreId, title} = props;
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
        api.get(`genres/${genreId}/movies?page={page}`)
        .then(function(response) {
            setMovieData(response.data);
        })
        .catch(function(error) {})
    }, []);
    
    const renderFarm = () => {
        return movieData.data.map(({id, poster, title}) => {
            return(
                <SwiperSlide className="swiperSlide" key={id}>
                    <div>
                        <Link to={`/m/${id}`}><img src={poster} /></Link>
                        <Link to={`/m/${id}`}>
                            <div className="info">
                                <div className="id">{id}</div>
                                <div className="title">{title}</div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            );
        });
    };
    return(
        <MovieListStyle>
            <Link to={`/genre/${genreId}`} className="big-title">
                {title}
                <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <path d="m2.6 15.6c-.3.3-.6.4-1 .4-.9 0-1.6-.7-1.6-1.5 0-.4.2-.8.5-1.1l5.9-5.4-5.9-5.4c-.3-.3-.5-.7-.5-1.1 0-.9.7-1.5 1.6-1.5.4 0 .7.1 1 .4l6.8 6.4c.4.4.6.7.6 1.2s-.2.8-.6 1.2z" opacity=".95"></path>
                </svg>
            </Link>
            <Swiper
            slidesPerView={5}
            spaceBetween={30}
            keyboard={{
            enabled: true,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            className="mySwiper"
            >
                {renderFarm()}
            </Swiper>
        </MovieListStyle>
    );
    
}