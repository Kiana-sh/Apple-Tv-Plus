import SingleMovieStyle from "./style";
import { useEffect, useState } from "react";
import api from "../../Helpers/api";
import { useParams } from "react-router-dom";

export default function SingleMovie() {
    const {name} = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        api.get(`movies/${name}`)
        .then(function(response) {
            setData(response.data);
            window.scrollTo(0,0);
        })
        .catch(function(error) {})
    }, []);
    const renderImage = () => {
        if (data.images && data.images.length > 0) {
          return data.images.map((imageUrl, index) => (
            <img key={index} src={imageUrl} />
          ));
        } else {
          return null; 
        }
      };
    function convertRunTime(time) {
        const minutes = parseInt(time);
        const hours = Math.round(minutes/60);
        const remainingMin = minutes % 60;
        return `${hours}h ${remainingMin}min` ;
    };  
    return(
        <SingleMovieStyle>
            <div className="wrapper">
                <div className="poster">
                    <img src={data.poster} />
                    <div className="text">
                        <div className="subscribe">
                            <p className="free">7 days free, then $12.99/month.</p>
                            <button type="button" className="trial">
                                <p>Accept Free Trial</p>
                            </button>
                            <br />
                            <button type="button">
                                <p>+ Add to Up Next</p>
                            </button>
                        </div>
                        <div className="exp">
                            <p className="plot">{data.plot}</p>
                            <p>{data.genres?.join(" . ")} . {data.year} . {data.runtime ? convertRunTime(data.runtime) : "N/A"}</p>
                        </div>
                        <div className="cast">
                            <p><span className="title">Starring</span> {data.actors}</p>
                            <p><span className="title">Director</span> {data.director}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper-small">
                <div className="images">
                    <h3>Bonus Content</h3>
                    <div>{renderImage()}</div>
                </div>
                <div className="divider"></div>
                <div className="watch">
                    <h3>How to Watch</h3>
                    <div className="logo">
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/DB8YqlVtN7M8YvGvgsP2eg/400x225.png" />
                        <a className="img-text" href="#">
                            <p>Accept Free Trial</p>
                        </a>
                        <p className="try">7 days free, then $12.99/month.</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="cast">
                    <h3>Cast & Crew</h3>
                    <p className="actors">{data.actors}</p>
                </div>
            </div>
            <div className="diff-bg">
                <div className="wrapper-small">
                <div className="about">
                    <h3>About</h3>
                    <div className="about-box">
                        <h4>{data.title}</h4>
                        <p className="genre">{data.genres?.join(" . ")}</p>
                        <p className="exp">{data.plot}</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="extra">
                    <div className="information">
                        <h3>Information</h3>
                        <div>
                            <p className="title">Released</p>
                            <p className="answer">{data.released}</p>
                        </div>
                        <div>
                            <p className="title">Run Time</p>
                            <p className="answer">{data.runtime ? convertRunTime(data.runtime) : 'N/A'}</p>
                        </div>
                        <div>
                            <p className="title">Rated</p>
                            <p className="answer">{data.rated}</p>
                        </div>
                        <div>
                            <p className="title">Region of Origin</p>
                            <p className="answer">{data.country}</p>
                        </div>
                    </div>
                    <div className="score">
                        <h3>Score</h3>
                        <div>
                            <p className="title">Meta Score</p>
                            <p className="answer">{data.metascore}</p>
                        </div>
                        <div>
                            <p className="title">IMDB Rating</p>
                            <p className="answer">{data.imdb_rating}</p>
                        </div>
                        <div>
                            <p className="title">IMDB Votes</p>
                            <p className="answer">{data.imdb_votes}</p>
                        </div>
                        <div>
                            <p className="title">Awards</p>
                            <p className="answer">{data.awards}</p>
                        </div>
                    </div>
                    <div className="accessibility">
                        <h3>Accessibility</h3>
                        <div>
                            <p className="title">CC</p>
                            <p className="answer">Closed captions (CC) refer to subtitles in the available language with the addition of relevant non-dialogue information.</p>
                        </div>
                        <div>
                            <p className="title">AD</p>
                            <p className="answer">Audio descriptions (AD) refer to a narration track describing what is happening on screen, to provide context for those who are blind or have low vision.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </SingleMovieStyle>
    );
}