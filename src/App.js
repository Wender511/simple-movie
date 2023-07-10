import { Fragment } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import MovieDetailPage from "./pages/MovieDetailPage";
export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/movies"
          element={
            <MainLayout>
              <MoviePage></MoviePage>
            </MainLayout>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <MainLayout>
              <MovieDetailPage></MovieDetailPage>
            </MainLayout>
          }
        />
      </Routes>
    </Fragment>
  );
}
