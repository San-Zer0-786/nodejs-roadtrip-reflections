/** */
import axios from 'axios'

//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

export function loadPosts () {
    return (dispatch) => {
        axios.get(`${url}posts`)
        .then((res) => {
            let posts = res.data
            dispatch({type:'LOAD_POSTS', posts})
        }).catch((err) => {
            console.log(err)
        })
    }
}
export function getUser (_id) {
    return axios.get(`${url}user/${_id}`).then((res)=>{
        return res.data
    }).catch(err=>console.log(err))
}

export function getUserProfile (_id) {
    return (dispatch) => {
        axios.get(`${url}user/profile/${_id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'SET_PROFILE', profile})
        }).catch(err=>console.log(err))
    }
}

export function getPost (post_id) {
    return (dispatch) => {
        axios.get(`${url}post/${post_id}`)
        .then((res) => {
            let post = res.data
            dispatch({type: 'VIEW_POST', post})
        }).catch((err) => console.log(err))
    }
}
// post_id, author_id, comment
export function comment () {
    return (dispatch) => {

    }
}
//req.body.post_id
export function clap (post_id) {
    return (dispatch) => {
        console.log('clapping...')
        axios.post(`${url}post/clap`,{ post_id }).then((res) => {
            dispatch({type:'CLAP_POST'})
        }).catch((err)=>console.log(err))
    }
}
//id, user_id
export function follow (id, user_id) {
    console.log(`${id} following ${user_id}`)
    return (dispatch) => {
        axios.post(`${url}user/follow`,{ id, user_id }).then((res) => {
            dispatch({type:'FOLLOW_USER', user_id})
        }).catch((err)=>console.log(err))        
    }
}

export function SignInUser (user_data) {
    return (dispatch) => {
        console.log('signing in...')
        axios.post(`${url}user`,user_data).then((res)=>{
            let user = res.data
            console.log('==================signin=======')
            console.log(user)
            console.log('==================signin=======')
            localStorage.setItem('Auth', JSON.stringify(user))
            dispatch({type: 'SET_USER', user})
        }).catch((err)=>console.log(err))
    }
}

export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})        
    }    
}
