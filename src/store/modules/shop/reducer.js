import { produce } from 'immer'
import types from './types'


const INITIAL_STATE = {
    custumer: {},
}

function shop (state = INITIAL_STATE , action) {
    switch(action.type) {
        case types.SET_CUSTOMER: {
            return produce(state, (draft) => {
                draft.custumer = action.custumer
            }) 
        }
        default:
            return state;
    }
}

export default shop;