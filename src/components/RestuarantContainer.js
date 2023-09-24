import RestuarantCard from "./RestuarantCard";
import Shimmer from "./shimmer";
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const RestuarantContainer = (props) => {
    const {listOfRestuarants, filteredListOfRestuarants, getTopRatedRestuarants, getAllRestuarants} = props;

    const [isShowTopRatedOnly, setIsShowTopRatedOnly] = useState(false);
    useEffect(() => {
        isShowTopRatedOnly ? getTopRatedRestuarants() : getAllRestuarants()
    }, [isShowTopRatedOnly])

    return (
        <>
        <button 
                type="button"
                className="get-top-rated-btn"
                onClick={() => {
                    setIsShowTopRatedOnly(!isShowTopRatedOnly)
                }}
            >
                {isShowTopRatedOnly? "Get All Restuarants": "Get Top Rated Restuarants"} 
        </button>
        <div className="restuarant-container">
            {
                filteredListOfRestuarants.length === 0 ?
                <>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                    <Shimmer/>
                </>
                :
                filteredListOfRestuarants.map(restuarantData => 
                    <Link
                        to={`/restuarant/${restuarantData.info.id}`}
                        key={restuarantData.info.id}
                    >
                        <RestuarantCard restuarantData={restuarantData}/>
                    </Link>
                )
            }
        </div>
        </>
    )
}

export default RestuarantContainer;