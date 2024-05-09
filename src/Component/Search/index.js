import SearchStyle from "./style";
import { useEffect, useState } from "react";
import api from "../../Helpers/api";
import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';


export default function Search() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({data: []});
    const [searchParams, setSearchParams] = useSearchParams();
    const onType = async (event) => {
        request(event.target.value);
    };
    useEffect(() => {
        window.scrollTo(0,0);
        if (searchParams.get("q") && searchParams.get("q") === "") {
            request(searchParams.get("q"));
        }
    }, []);
    const request = async (value) => {
        try {
            setLoading(true)
            const response = await api.get("movies", {
                params: {
                    q: value,
                },
            });
            setSearchParams(createSearchParams({q: value}));
            setData(response.data);
            setLoading(false);
        } catch(e) {
            setLoading(false);
        } 
    };
    function renderResult() {
        return data.data.map(function({id,poster,title}) {
            return(
                <li key={id}>
                    <Link to={`/m/${id}`}>
                        <div className="poster"><img src={poster} /></div>
                        <h4 className="title">{title}</h4>
                    </Link>
                </li>
            );
        });
    };
    return(
        <SearchStyle>
            <div className="wrapper">
                <div className="input">
                    <Input className="input-box" onChange={onType} defaultValue={searchParams.get("q")} placeholder="Search" size="small" prefix={<SearchOutlined />} />
                </div>
                <div className="result">
                    {data.data.length === 0 ? (<div className="not-found"><h2>No Result</h2><p>There were no results found on Apple TV+. Try a new search. </p></div>) : (<ul>{renderResult()}</ul>) }
                </div>
            </div>
        </SearchStyle>
    );
}
    
    