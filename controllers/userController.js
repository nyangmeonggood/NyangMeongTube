import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home,
  });
};

export const logout = (req, res) => {
  //To do: Process Logout;
  res.redirect(routes.home);
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      //To Do : Resister User
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
    //To Do : User Login
  }
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const usersDetail = (req, res) =>
  res.render("usersDetail", { pageTitle: "Users Detail" });
