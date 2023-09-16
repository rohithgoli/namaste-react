import RestuarantCard from "./RestuarantCard";
import restuarantCardData from "../utils/mockData";
import Shimmer from "./shimmer";
import {useState, useEffect} from 'react';


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
                filteredListOfRestuarants.map(restuarantData => <RestuarantCard key={restuarantData.info.id} restuarantData={restuarantData}/>)
            }
        </div>
        </>
    )
}

export default RestuarantContainer;