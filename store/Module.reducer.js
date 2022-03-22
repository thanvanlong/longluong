import { ADD_FOOD_ORDERED, SET_FOOD_ORDERED } from "./Module.action";

const initState = {
    listFood: [],
}

export const foodReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FOOD_ORDERED:
            return {
                ...state,
                ...state.listFood.push(action.data),
            }
        case SET_FOOD_ORDERED:
            let updatedData = [];
            if (action.data.length == undefined) {
                const checkExistFood = state.listFood.findIndex(item => item.id == action.data.id);
                if (checkExistFood != -1) {
                    const temp = state.listFood.filter(item => item.id == action.data.id);
                    const updatedFood = {
                        name: action.data.name,
                        id: action.data.id,
                        quanity: temp[0].quanity + 1,
                    };
                    updatedData = [
                        ...state.listFood.filter(item => item.id != action.data.id),
                        updatedFood
                    ];
                } else {
                    updatedData = [...state.listFood, action.data];
                }
            } else {
                updatedData = action.data;
            }
            return {
                ...state,
                listFood: updatedData,
            }
        default: return {
            ...state
        }
    }
}