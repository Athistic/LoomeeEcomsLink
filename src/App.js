import Routing from "./routes/Routing";
// import { HomeStyle } from "./themes/Home.css";
import { newHomeStyle } from "./themes/newHome.css";
import { HomeHeaderStyle } from "./themes/HomeHeader.css";
import { NavBarStyle } from "./themes/NavBar.css";
import { HomeFooterStyle } from "./themes/HomeFooter.css";
import { SigninStyle } from "./themes/SignIn.css";
import { SignUpStyle } from "./themes/SignUp.css";
import { ResetStyle } from "./themes/ResetPass.css";
import { ForgotStyle } from "./themes/ForgotPass.css";
import { SignUpFooterStyle } from "./themes/FooterSignUp.css";
import { NovelStyle } from "./themes/Novels.css";
import Novels from "./pages/Novels";
import Educational from "./pages/Educational";
import { EducationalStyle } from "./themes/Educational.css";
import Kids from "./pages/Kids";
import { KidsStyle } from "./themes/Kids.css";
import { Description1Style } from "./themes/Description1.css";
import { Description2Style } from "./themes/Description2.css";
import { Description3Style } from "./themes/Description3.css";
import { Description4Style } from "./themes/Description4.css";
import { Description5Style } from "./themes/Description5.css";
import { Description6Style } from "./themes/Description6.css";
import { Description7Style } from "./themes/Description7.css";
import { Description8Style } from "./themes/Description8.css";
import { Description9Style } from "./themes/Description9.css";
import SignUp from "./pages/authentication/SignUp";
import { AuthFormStyle } from "./themes/AuthForm.css";
import { AuthFormFooterStyle } from "./themes/AuthFormFooter.css";
import { BackButtonStyle } from "./themes/BackButton.css";
import FirebaseAuthHookProvider from "./firebase/FireBaseAuthHook";
import FirebaseDataHookProvider from "./firebase/FirebaseDataHook";
import { ProductUploadsStyle } from "./themes/ProductUploads.css";
import { CategoryViewStyle } from "./themes/CategoryView.css";
import { ForgotPasswordFooterStyle } from "./themes/ForgotPasswordFooter.css";
import { UserProfileStyle } from "./themes/UserProfile.css";
import { AboutStyle } from "./themes/About.css";
import { ContactStyle } from "./themes/Contact.css";
import { MoreInfoStyle } from "./themes/MoreInfo.css";
import { FAQSstyle } from "./themes/FAQ.css";
import { ProductDescriptionStyle } from "./themes/ProductDescription.css";
import { ProductDescriptionFooterStyle } from "./themes/ProductDescFooter.css";
import { menuBarStyle } from "./themes/MenuBar.css";

function App() {
  return (
    <div className="App">
      <FirebaseDataHookProvider>
        <FirebaseAuthHookProvider>
          <Routing />
        </FirebaseAuthHookProvider>
      </FirebaseDataHookProvider>
    </div>
  );
}

export default App;
