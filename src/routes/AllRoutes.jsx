// export const AllRoutes = [
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> },
//   { name: "", path: "", comp: <>empty</> }
// ];

import SignUp from "../pages/authentication/SignUp";
import SignIn from "../pages/authentication/SignIn";
import ForgotPass from "../pages/authentication/ForgotPass";
import ResetPass from "../pages/authentication/ResetPass";
import Home from "../pages/basic/Home";
import ProductUploads from "../pages/admin/ProductUploads";
import ProductDescription from "../pages/ProductDescription";
import Description1 from "../pages/Description1";
import UserProfile from "../pages/UserProfile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
//Access to all child props:RoutesObj.home.path
export const RoutesObj = {
  //Basic

  // Auth
  singleProd: { name: "Product", path: "prod/:cat/:subCat/:prodId", comp: <ProductDescription />, ex: false },
  About: { name: "About", path: "/About", comp: <About />, ex: true },
  Contact: { name: "Contact us", path: "/Contact", comp: <Contact />, ex: true },
  FAQ: { name: "FAQ", path: "/FAQ", comp: <FAQ />, ex: true },
  UserProfile: { name: "User Profile", path: "/UserProfile", comp: <UserProfile />, ex: true },
  admin: { name: "Admin", path: "/admin", comp: <ProductUploads />, ex: true }, //Admin
  forgot_pass: { name: "Forgot Password", path: "/ForgotPass", comp: <ForgotPass />, ex: true },
  reset_pass: { name: "Reset Password", path: "/ResetPass", comp: <ResetPass />, ex: true },
  sign_in: { name: "Sign In", path: "/SignIn", comp: <SignIn />, ex: true },
  sign_up: { name: "Sign up", path: "/SignUp", comp: <SignUp />, ex: true },
  home: { name: "Home", path: "/", comp: <Home />, ex: true }
  // catsLanding: { name: "Cats Landing", path: "/cat/:type", comp: <CategoryCard />, ex: false },
};

//convert to an Array using built in JS function
/* Takes obj iterates over it and pushes each value into an array and returns the array back to us to use*/
export const AllRoutes = Object.values(RoutesObj);
