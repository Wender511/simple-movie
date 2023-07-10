import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout({ children }) {
  return (
    <div className="app">
      <Header></Header>
      <main> {children}</main>
    </div>
  );
}

export default MainLayout;
