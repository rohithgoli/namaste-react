import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
    const {restuarantData} = props
    const {info} = restuarantData
    const {name, cloudinaryImageId, cuisines, costForTwo, areaName, avgRating} = info;
    return (
        <div className="restuarant-card-container">
            <img 
                src={`${CDN_URL}${cloudinaryImageId}`} 
                className="card-logo"    
            />
            <div className="restuarant-card-details-container">
                <h3 className="restuarant-name">{name}</h3>
                <p className="restuarant-cuisines">{cuisines.join(", ")}</p>
                <div className="restuarant-delivery-details-container">
                    <p>{avgRating}</p>
                    <p>{areaName}</p>
                    <p>{costForTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default RestuarantCard;