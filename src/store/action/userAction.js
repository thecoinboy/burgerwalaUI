import axios from 'axios'

export const LoadUser = () => async(dispatch) =>{
    try {
        dispatch({
            type:"LOAD_USER",
        })
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/me`)
        const res = data.json
        console.log(res)
        
        dispatch({
            type:"LOAD_USER_SUCCESS",
            payload:data.user
        })   
    } catch (error) {
        dispatch({
            type:"LOAD_USER_FAILED",
            payload:error.response.data.message,
        });
    }
}