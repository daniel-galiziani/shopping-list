import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from 'uuid';


export default initialShop => {
    const [shop, setShop] = useLocalStorageState("shop", initialShop);

    return {
        shop,
        addShop: newShopText => {
            setShop ([...shop, { id: uuidv4(), task: newShopText, completed: false }]);
        },
        removeShop: shopId => {
            const updatedShop = shop.filter(shop => shop.id !== shopId);
            setShop(updatedShop);
        },
        toggleShop: shopId => {
            const updatedShop = shop.map(shop =>
                shop.id === shopId ? { ...shop, completed: !shop.completed} : shop );
                setShop(updatedShop);
        },
        editShop: (shopId, newTask) => {
            const updatedShop = shop.map(shop =>
                shop.id === shopId ? { ...shop, task: newTask} : shop );
                setShop(updatedShop);
        }
    }
}
