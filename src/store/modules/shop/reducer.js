const INITIAL_STATE = {
    custumer: {},
}

function shop (state = INITIAL_STATE , action) {
    switch(action.type) {
        case 'SET_CUSTUMER': {
            //LÓGICA  
        }
        default:
            return state;
    }
}

export default shop;