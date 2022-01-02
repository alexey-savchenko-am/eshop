import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectShopItemsForPreview = createSelector(
    [selectShopItems],
    shopItems => Object.keys(shopItems).map(key => shopItems[key])
);

export const selectShopItemsByCategory = category => {
    return createSelector(
        [selectShopItems],
        shopItems => shopItems[category]);
};