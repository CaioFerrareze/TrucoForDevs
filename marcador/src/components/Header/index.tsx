import React,{ useState }from 'react';
import styled from 'styled-components';
import { colors, shadows} from '../../StyleGuide';
import ResetIcon  from '../../assets/ResetIcon.svg';



const HeaderContainer = styled.header`
  background: linear-gradient(130deg, ${colors.primaryPurple}, ${colors.primaryPurple}, ${colors.accentPink});
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: ${shadows.lightShadow};
  p{
    color: ${colors.primaryWhite};
    text-align: center;
    flex-grow: 1;
    margin: 0 auto;
  }
  a{
    margin-left: auto;
  }
`;




const Header: React.FC = () => {
  const [pointsTeam1, setPointsTeam1] = useState(0);
  const [pointsTeam2, setPointsTeam2] = useState(0);
  const [trucoValue, setTrucoValue] = useState(0);
  const [trucoActivated, setTrucoActivated] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  console.log(pointsTeam1,pointsTeam2,trucoValue,trucoActivated,winner)
  const handleResetGame = () => {
    setWinner(null); 
    setPointsTeam1(0);
    setPointsTeam2(0);
    setTrucoValue(0); 
    setTrucoActivated(false); 
};
  return (
    <HeaderContainer>
      <p >Truco For Developers</p> 
      <a href="" onClick={handleResetGame}><img src={ResetIcon} alt="Logo" /></a>
    </HeaderContainer>
  );
};

export default Header;

