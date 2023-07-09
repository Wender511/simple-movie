import { Fragment } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/Main";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}
