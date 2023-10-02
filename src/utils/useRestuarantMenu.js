import {useState, useEffect} from 'react';
import { MENU_API_URL } from './constants';

const useRestuarantMenu = (resId) => {
    // fetchData
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData(resId);
    }, [])

    const fetchData = async (resId) => {
        const data = await fetch(`${MENU_API_URL}${resId}`);
        const json = await data.json()
        setResInfo(json.data)
    }

    return resInfo
}

export default useRestuarantMenu;