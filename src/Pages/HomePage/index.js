import { Fragment } from "react";
import Layout from "../../Component/Layout"
import MovieList from "../../Component/MovieList";
import BigLogo from "../../Component/BigLogo";
import QA from "../../Component/QA";
import SeasonPass from "../../Component/SeasonPass";

export default function HomePage() {
    return(
        <Fragment>
            <Layout>
                <BigLogo />
                <MovieList genreId="1" title="Crime"/>
                <MovieList genreId="2" title="Drama" />
                <MovieList genreId="3" title="Action"/>
                <MovieList genreId="4" title="Biography"/>
                <MovieList genreId="5" title="History"/>
                <MovieList genreId="6" title="Adventure"/>
                <MovieList genreId="7" title="Fantasy"/>
                <MovieList genreId="8" title="Western"/>
                <MovieList genreId="9" title="Comedy"/>
                <MovieList genreId="10" title="Sci-Fi"/>
                <MovieList genreId="11" title="Mystery"/>
                <SeasonPass />
                <QA />
            </Layout>
        </Fragment>
    );
}