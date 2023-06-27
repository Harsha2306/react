import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My home page</h1>
      <button onClick={navigateHandler}>Navigate to products</button>
    </>
  );
};

export default Home;
