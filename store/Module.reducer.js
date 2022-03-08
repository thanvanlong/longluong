import { SET_FOOD_ORDERED } from "./Module.action";

const initState = {
    listFood: [],
}

export const foodReducer = (state = initState, action) =>{
    switch(action.type){
        case SET_FOOD_ORDERED:
            
            return {
                ...state,
                ...state.listFood.push(action.data),
            }
    }
}