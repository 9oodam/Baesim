let init = {
    searchArr : [],
    selected : {},
    isLogin : false,
    isInterested : false
}

function reducer(state = init, action) {
    const {type, payload} = action;

    switch (type) {
        case "SEARCH":
            return {...state, searchArr : payload};

        case "SELECT_CASE":
            return {...state, selected : payload.case, isLogin : payload.isLogin, isInterested : payload.isInterested}

        default:
            return state;
    }
}

export default reducer