import RestuarantCard from "./RestuarantCard";
import restuarantCardData from "../utils/mockData";
import {useState} from 'react';


const RestuarantContainer = () => {

    // Local State Variable --> Super Powerful Variable
    const [listOfRestuarants, setListOfRestuarants] = useState(restuarantCardData);


    return (
        <div className="restuarant-container">
            <button 
                type="button" 
                onClick={() => {
                    const filteredList = listOfRestuarants.filter(restuarant => restuarant.data.avgRating >= 4)
                    setListOfRestuarants(filteredList);
                }}
            >
                Get Top Rated Restuarants 
            </button>
            {
                listOfRestuarants.map(restuarantData => <RestuarantCard key={restuarantData.data.uuid} restuarantData={restuarantData}/>)
            }
        </div>
    )
}

export default RestuarantContainer;