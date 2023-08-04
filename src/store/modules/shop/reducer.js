import { produce } from 'immer'


const INITIAL_STATE = {
    custumer: {},
}

function shop (state = INITIAL_STATE , action) {
    switch(action.type) {
        case 'SET_CUSTUMER': {
            return produce(state, (draft) => {
                draft.custumer = action.custumer
            }) 
        }
        default:
            return state;
    }
}

export default shop;