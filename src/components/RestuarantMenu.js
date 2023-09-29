
import Shimmer from './shimmer';
import { useParams } from 'react-router-dom';
import useRestuarantMenu from '../utils/useRestuarantMenu';

const RestuarantMenu = () => {
    const {resId} = useParams();
    console.log(resId)

    const resInfo = useRestuarantMenu(resId)

    if (resInfo === null) {
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(item => <li key={item.card.info.id}>
                        {item.card.info.name}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default RestuarantMenu;