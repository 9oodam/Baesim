import axios from 'axios'

function loginChk(user_id, user_pw) {
    console.log("loginChk : ", user_id, user_pw);

    return async (dispatch) => {
        if(user_id == "") {
            dispatch({type : "EMPTYID"});
        }else if (user_pw == "") {
            dispatch({type : "EMPTYPW"});
        }else {
            const {data} = await axios.get(`http://localhost:8080/login/${user_id}/${user_pw}`,
                {
                    withCredentials : true
                }
            );
            console.log(data);
    
            if(data == "wrongID") {
                dispatch({type : "WRONGID"})
            }else if(data == "wrongPW") {
                dispatch({type : "WRONGPW"})
            }else {
                dispatch({type : "LOGIN", payload : data})
                //window.location.href = '/board'
            }
        }
    }
}

export const loginAction = {loginChk}