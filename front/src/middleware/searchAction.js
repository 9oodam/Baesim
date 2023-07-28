import axios from 'axios'

function searchChk(search) {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/case/search/${search}`, {
                withCredentials : true
            });

            dispatch({type : "SEARCH", payload : data});

        } catch (error) {
            console.log(error);
        }
    }
}

function selectCase(id) {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/case/detail/${id}`);

            dispatch({type : "SELECT_CASE", payload : data});

        } catch (error) {
            console.log(error);
        }
    }
}

export const searchAction = {searchChk, selectCase}