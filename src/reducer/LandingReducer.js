import { UsersAction, OrdersAction } from '../action/ActionTypes';

const initialState = {
    users: [],
    orders: [],
}

export default function landingReducer(state = initialState, action) {
    switch (action.type) {
        case UsersAction.SET_DATA: {
            const newState = { ...state };
            newState.users = action.data;
            return newState;
        }
        case OrdersAction.SET_ORDER: {
            const newState = { ...state };
            newState.orders = action.orders;
            return newState;
        }
        default:
            return state;
    }
}