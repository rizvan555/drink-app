import { Link } from "react-router-dom";
import Logo from "../../resource/images/Logo.png";
import styled from "styled-components";

const HomeButtonStyled = styled(Link)`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border: none;
  background-color: orange;
  text-align: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px auto;
  }
`;

const HomeButton = ({ icon, width, padding }) => {
  return (
    <HomeButtonStyled to="/" width={width} padding={padding}>
      <img src={Logo} alt="logo" />
    </HomeButtonStyled>
  );
};

export default HomeButton;
