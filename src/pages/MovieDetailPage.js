import { useParams } from "react-router";

function MovieDetailPage() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <h2>MovieDetailPage</h2>
    </>
  );
}

export default MovieDetailPage;
