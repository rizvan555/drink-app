import styled from "styled-components";
import img1 from "../resource/images/img1.png";
import img2 from "../resource/images/img2.jpg";
import { Link } from "react-router-dom";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  gap: 5vh;
  .top-section,
  .bottom-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    img {
      width: 40vw;
    }
    a {
      font-size: 50px;
      background-color: orange;
      text-decoration: none;
      color: white;
      width: 40vw;
      height: 10vh;
    }
    p {
      width: 40vw;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <section className="top-section">
        <img src={img1} alt="img1" />
        <Link to="/allBeersList">All Beers</Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facilis temporibus ab a iure at autem quibusdam explicabo non,
          molestias accusamus, distinctio quisquam sequi enim quae quasi maxime
          perspiciatis sunt!
        </p>
      </section>

      <section className="bottom-section">
        <img src={img2} alt="img2" />
        <Link to="/random">Random Beers</Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          facilis temporibus ab a iure at autem quibusdam explicabo non,
          molestias accusamus, distinctio quisquam sequi enim quae quasi maxime
          perspiciatis sunt!
        </p>
      </section>
    </HomeStyled>
  );
};

export default Home;
