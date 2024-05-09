import ErrorStyle from "./style";


export default function Error404() {
    return(
        <ErrorStyle>
            <div className="wrapper">
                <div className="text">
                    <h2>The page you're looking for cannot be found.</h2>
                </div>
            </div>
        </ErrorStyle>
        
    )
}