//global
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//user
const USERS = "/users";
const EDIT_PROFILE = "/editProfile";
const CHANGE_PASSWORD = "/changePassword";
const USER_DETAIL = "/:id";

//video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home:HOME,
    search:SEARCH,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    users:USERS,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    userDetail: id =>{
        if(id){
            return `/users/${id}`
        }else{
            return USER_DETAIL
        }
    },
    videos:VIDEOS,
    upload:UPLOAD,
    videoDetail: id =>{
        if(id){
            return `/videos/${id}`
        }else{
            return VIDEO_DETAIL
        }
    },
    editVideo:id => {
        if(id){
            return `/videos/${id}/edit`
        }else{
            return EDIT_VIDEO
        }
    },
    deleteVideo:id => {
        if(id){
            return `/videos/${id}/delete`
        }else{
            return DELETE_VIDEO
        }
    }
}

export default routes;