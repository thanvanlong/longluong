export const ADD_FOOD_ORDERED = 'ADD_FOOD_ORDERED';
export const SET_FOOD_ORDERED = 'SUB_FOOD_ORDERED';
export const setFoodOrdered = (payload) =>({
    type: SET_FOOD_ORDERED,
    data: payload,
})
export const addFoodOrdered = (payload) =>({
    type: ADD_FOOD_ORDERED,
    data: payload,
})
