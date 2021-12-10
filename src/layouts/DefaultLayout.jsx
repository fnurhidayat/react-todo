import style from "./DefaultLayout.module.css";

const DefaultLayout = ({ children, className }) => (
  <div className={`${className} ${style.DefaultLayout}`}>
    <header className="DefaultLayout-header">
      <div className="DefaultLayout-container">{children}</div>
    </header>
  </div>
);

export default DefaultLayout;
