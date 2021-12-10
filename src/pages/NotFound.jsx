import logo from "../assets/images/logo.svg";
import DefaultLayout from "../layouts/DefaultLayout";
import style from "./NotFound.module.css";

const NotFound = () => (
  <DefaultLayout className={style.NotFound}>
    <img src={logo} className="NotFound-logo" alt="logo" />
    <div className="NotFound-text">
      <h1>404</h1>
      <h5>Not Found!</h5>
    </div>
  </DefaultLayout>
);

export default NotFound;
