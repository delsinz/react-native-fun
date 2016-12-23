export const selectItem = (itemId) => {
    return {
        type: 'select_item',
        payload: itemId
    };
};
