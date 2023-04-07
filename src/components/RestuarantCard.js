import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
    const {restuarantData} = props
    const {data} = restuarantData
    const {name, cloudinaryImageId, cuisines, costForTwoString, slaString, avgRating} = data;
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
                    <p>{slaString}</p>
                    <p>{costForTwoString}</p>
                </div>
            </div>
        </div>
    )
}

export default RestuarantCard;