import RestuarantCard from "./RestuarantCard";
import restuarantCardData from "../utils/mockData";

const RestuarantContainer = () => {
    return (
        <div className="restuarant-container">
            {
                restuarantCardData.map(restuarantData => <RestuarantCard key={restuarantData.data.uuid} restuarantData={restuarantData}/>)
            }
        </div>
    )
}

export default RestuarantContainer;