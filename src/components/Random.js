import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import HomeButton from "./Buttons/HomeButton";
import { Link } from "react-router-dom";
import Back from "../resource/icons/Back.png";

const RandomStyled = styled.div`
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

const Random = () => {
  const randomList = [
    {
      image_url: "https://images.punkapi.com/v2/keg.png",
      _id: "643f0cbe3c7bdc001468066c",
      name: "Hoptimus Prime",
      tagline: "Transforming Taste Buds, One Pint at a Time",
      description:
        "Our Hoptimus Prime is a hilariously refreshing, hop-forward brew with a hint of robot fuel that's guaranteed to energize your taste buds. This smooth and deceptively powerful IPA is brewed with only the finest extraterrestrial ingredients to deliver an otherworldly experience for humans and robots alike. Enjoy responsibly, or you might find yourself in a galaxy far, far away.",
      expireAt: "2023-04-18T21:33:50.928Z",
      __v: 0,
    },
  ];
  return (
    <>
      <RandomStyled>
        {randomList.map((beer) => {
          return (
            <div key={uuidv4()}>
              <img src={beer.image_url} alt="" />
              <div className="bottom-container">
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <div className="date-box">
                  <h6>Attenuation level: {beer.expireAt}</h6>
                </div>
                <p>{beer.description}</p>
                <Link to="/">
                  <img src={Back} alt="backImage" className="back-button" />
                </Link>
              </div>
            </div>
          );
        })}
        <HomeButton width="40vw" />
      </RandomStyled>
    </>
  );
};

export default Random;
