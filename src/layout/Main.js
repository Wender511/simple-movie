import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout({ childrend }) {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
