import RestuarantCard from "./RestuarantCard";
import restuarantCardData from "../utils/mockData";
import {useState, useEffect} from 'react';


const RestuarantContainer = () => {

    // Local State Variable --> Super Powerful Variable
    const [listOfRestuarants, setListOfRestuarants] = useState(restuarantCardData);

    useEffect(() => {
        console.log('useEffect Called')
    }, [])

    return (
        <>
        <button 
                type="button"
                className="get-top-rated-btn"
                onClick={() => {
                    const filteredList = listOfRestuarants.filter(restuarant => restuarant.data.avgRating >= 4)
                    setListOfRestuarants(filteredList);
                }}
            >
                Get Top Rated Restuarants 
            </button>
        <div className="restuarant-container">
            
            {
                listOfRestuarants.map(restuarantData => <RestuarantCard key={restuarantData.data.uuid} restuarantData={restuarantData}/>)
            }
        </div>
        </>
    )
}

export default RestuarantContainer;