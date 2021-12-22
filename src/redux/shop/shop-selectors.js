import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.shopItems
);

export const selectShopItemsByCategory = category =>
    createSelector(
    [selectShopItems],
    shopItems => shopItems.find(i => i.routeName === category)
);