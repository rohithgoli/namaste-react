import RestuarantCard from "./RestuarantCard";
import restuarantCardData from "../utils/mockData";
import {useState, useEffect} from 'react';


const RestuarantContainer = () => {

    // Local State Variable --> Super Powerful Variable
    const [listOfRestuarants, setListOfRestuarants] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.2438426&lng=80.1733509&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const responseData = await response.json()
        let uiParentCards = responseData?.data?.cards
        console.log(responseData)
        let desiredParentCardList = uiParentCards.filter(parentCard => parentCard?.card?.card?.id === "restaurant_grid_listing")
        console.log(desiredParentCardList)
        let restaurantList = desiredParentCardList[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(restaurantList)
        setListOfRestuarants(restaurantList)
    }

    if (listOfRestuarants.length == 0) {
        return (
            <h2>Loading....</h2>
        )
    }

    return (
        <>
        <button 
                type="button"
                className="get-top-rated-btn"
                onClick={() => {
                    const filteredList = listOfRestuarants.filter(restuarant => restuarant.info.avgRating >= 4)
                    setListOfRestuarants(filteredList);
                }}
            >
                Get Top Rated Restuarants 
        </button>
        <div className="restuarant-container">
            {
                listOfRestuarants.map(restuarantData => <RestuarantCard key={restuarantData.info.id} restuarantData={restuarantData}/>)
            }
        </div>
        </>
    )
}

export default RestuarantContainer;