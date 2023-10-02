import SearchContainer from "./SearchContainer";
import RestuarantContainer from "./RestuarantContainer";
import {useState, useEffect} from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // Local State Variable --> Super Powerful Variable

    const [listOfRestuarants, setListOfRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredListOfRestuarants, setFilteredListOfRestuarants] = useState(listOfRestuarants);

    const updateSearchText = (updatedSearchTextValue) => {
        setSearchText(updatedSearchTextValue);
    }

    const displaySearchResults = () => {
        const filteredRestuarants = listOfRestuarants.filter(
            restuarant => restuarant.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredListOfRestuarants(filteredRestuarants)
    }

    const getTopRatedRestuarants = () => {
        setSearchText("")
        const filteredList = listOfRestuarants.filter(restuarant => restuarant.info.avgRating >= 4)
        setFilteredListOfRestuarants(filteredList);
    }

    const getAllRestuarants = () => {
        setSearchText("");
        setFilteredListOfRestuarants(listOfRestuarants)
    }

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
        setFilteredListOfRestuarants(restaurantList)
    }

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return (
            <h1>You are Offline ! Please check your Network connection</h1>
        )
    }

    return (
        <div className="body-container">
            <SearchContainer 
                searchText={searchText}
                updateSearchText={updateSearchText} 
                displaySearchResults={displaySearchResults}
            />
            <RestuarantContainer 
                listOfRestuarants={listOfRestuarants}
                filteredListOfRestuarants={filteredListOfRestuarants}    
                getTopRatedRestuarants={getTopRatedRestuarants}
                getAllRestuarants={getAllRestuarants}
            />
        </div>
    )
}

export default Body;