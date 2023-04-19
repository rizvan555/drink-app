import { useEffect, useState } from "react";
import beerList from "../data/beerList.json";
import styled from "styled-components";
import HomeButton from "../components/Buttons/HomeButton";
import Back from "../resource/icons/Back.png";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";

const BeerDetailsStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40vw;
  margin: 20px auto;
  border: 1px solid #e3e3e3;
  text-align: center;
  .main-image {
    width: 10vw;
    height: 40vh;
    margin: 2vh auto;
  }

  .bottom-container {
    width: 35vw;
    text-align: start;
    h1 {
      font-size: 40px;
    }
    h2 {
      color: orange;
    }
    .date-box {
      display: block;
      text-align: start;
      width: 40vw;
      color: gray;
    }
    .back-button  {
      margin: 4vh 0;
    }
    p {
      font-weight: bold;
    }
  }
`;

const BeerDetails = (props) => {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    setBeers(beerList);
  }, []);

  const idParams = useParams();
  const filtered = beers.find((beer) => beer._id === idParams.id);

  return (
    <BeerDetailsStyled>
      {filtered && (
        <div key={uuidv4()}>
          <img src={filtered.image_url} alt="" className="main-image" />
          <div className="bottom-container">
            <h1>{filtered.name}</h1>
            <h2>{filtered.tagline}</h2>
            <div className="date-box">
              <h6>First brewed: {filtered.first_brewed}</h6>
              <h6>First brewed: {filtered.attenuation_level}</h6>
            </div>
            <p>{filtered.description}</p>
            <Link to="/allBeersList">
              <img src={Back} alt="backImage" className="back-button" />
            </Link>
          </div>
        </div>
      )}
      <HomeButton width="40vw" />
    </BeerDetailsStyled>
  );
};

export default BeerDetails;
