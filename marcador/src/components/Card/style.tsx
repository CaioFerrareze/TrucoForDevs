import styled from 'styled-components';
import { colors, shadows} from '../../StyleGuide';

const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction:column ;
    align-items: center;
`;
const CardWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: ${colors.primaryWhite};
  box-shadow:${shadows.darkShadow};
  border-radius: 8px;
  padding: 20px 20px;
  text-align: center;
  @media (max-width: 680px) {
    padding: 20px 0;
  }
`;
const Teams = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;
const Team = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;
const TeamDivisor = styled.div`
  padding: 1px;
  border: 1px solid #000000;
  background: #020202;
  box-sizing: border-box; 
  border-radius: 10px;
  @media (max-width: 380px) {
    display: none;
  }
`
const TeamCounter = styled.div`
`
const FirstTeam = styled.h2`
color: ${colors.primaryWhite};
background-color: ${colors.accentPink};
padding: 5px;
border: 5px solid transparent;
border-radius: 30px 30px 0 0;
box-sizing: border-box;
`;
const SecondTeam = styled.h2`
color: ${colors.primaryWhite};
background-color: ${colors.secondaryBlue};
padding: 5px;
border: 5px solid transparent;
border-radius:0 0 30px 30px ;
box-sizing: border-box;
`;
const Points = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
const ButtonWinner = styled.button`
  background-color: ${colors.primaryPurple};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  margin: 0 1rem 0 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    color: ${colors.secondaryBlue};
  }
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0 0 0;

`;
const TrucoSection = styled.div`
  margin: 0;
`;
const TrucoValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
const ButtonsTruco = styled.button`
  background-color: ${colors.primaryPurple};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.5rem;
  margin: 0 1rem 0 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    color: ${colors.secondaryBlue};
  }
`;
const ButtonReset= styled.div`
 margin: 20px 0;
 a{
  background-color: ${colors.orange};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin: 0 1rem 0 1rem;
} 
&:active {
    transform: scale(0.98);
  }
`;
const ButtonLearn = styled.a`
 margin: 20px 0 20px 0;
  a{background-color: #dc2ade;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
}
&:active {
    transform: scale(0.98);
    color: ${colors.secondaryBlue};
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 8rem;
  @media (max-width: 720px) {
    margin: 0 1rem;
  }
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  h2 {
    margin-bottom: 20px;
  }
`;
const LearnTitle = styled.h2`
margin: 0;
`
const ButtonLearnClose = styled.a`
  margin: 20px auto;
  background-color: #dc2ade;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;

&:active {
    transform: scale(0.98);
}
`;
const LearnText = styled.p`
`

export {
    Container,
    CardWrapper,
    Teams,
    Team,
    FirstTeam,
    SecondTeam,
    Points,
    ButtonWinner,
    TrucoSection,
    ButtonsTruco,
    ButtonReset,
    Links,
    ButtonLearn,
    Overlay,
    Modal,
    ModalContent,
    LearnTitle,
    ButtonLearnClose,
    TeamDivisor,
    TrucoValue,
    LearnText,
    TeamCounter
  }