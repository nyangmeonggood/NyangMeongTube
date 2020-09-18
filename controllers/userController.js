import routes from "../routes";

export const getLogin = (req, res) => res.render("login", { pageTitle:"Login" });
export const postLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    //To do: Process Logout;
    res.redirect(routes.home)
};

export const getJoin = (req, res) => {
    res.render("join", { pageTitle:"Join" });
}

export const postJoin = (req, res) => {
    const {
        body : {name, email, password, password2}
    } = req;
    
    if(password !== password2){
        res.status(400);
        res.render("join", { pageTitle:"Join" });
    }else{
        //To Do : Resister User
        //To Do : User Login
        res.redirect(routes.home)
    }
}

export const users = (req, res) => res.render("users", { pageTitle:"Users" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle:"Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle:"Change Password" });
export const usersDetail = (req, res) => res.render("usersDetail", { pageTitle:"Users Detail" });
