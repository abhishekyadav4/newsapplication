import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchData = ({cat}) => {
    const [Data, setData] = useState("")
    const fetchData = async () => {
        await axios.get(
            cat ? 
            `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=03c4cca1bcef44b3b65770eba1e30441`:
            "https://newsapi.org/v2/top-headlines?country=in&apiKey=03c4cca1bcef44b3b65770eba1e30441"
        )
            .then((res) => {
                // console.log(res.data.articles)
                setData(res.data.articles)
            })
    }

    useEffect(() => {
        fetchData()
    }, [cat]);
    return (
        <div className="container my-4">
            <h3><u>Top Headlines</u> </h3>
            <div className="container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>
                {
                    Data ? Data.map((items, index)=>
                    <>
                    <div className="container my-3" 
                     style={{width:"500px",
                     boxShadow:"2px 2px 10px silver"}}>
                    <h5>{items.title}</h5>
                    <img src={items.urlToImage} alt="Error..."
                    className="img-fluid" style={{width:"auto", height:"300px", objectFit:"cover"}}/>
                    <p>{items.description}</p>
                    <Link to={items.url} target="blank">View More</Link> 
                    {/* by doing target blank page will open in another tab  */}
                    </div>
                    </>
                    
                    ): "Loading..."
                }
            </div>
        </div>
    )
}
export default FetchData;