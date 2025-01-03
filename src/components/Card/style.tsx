import styled from 'styled-components';
import { colors, shadows} from '../../StyleGuide';

export const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction:column ;
    align-items: center;
    @media (max-width: 460px) {
      margin-top: .3rem;
  }
`;
export const CardWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  background-color: ${colors.primaryWhite};
  box-shadow:${shadows.darkShadow};
  border-radius: 8px;
  padding: 20px 20px;
  text-align: center;
  @media (max-width: 460px) {
    padding: 20px 0;
    width: 98%;
    height: 98%;
  }
`;
export const Teams = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;
export const Team = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TeamDivisor = styled.div`
  padding: 1px;
  border: 1px solid #000000;
  background: #020202;
  box-sizing: border-box; 
  border-radius: 10px;
  @media (max-width: 360px) {
    display: none;
  }
`
export const FirstTeam = styled.input`
color: ${colors.primaryWhite};
background-color: ${colors.accentPink};
padding: 5px 0;
border: 1px solid transparent;
border-radius: 30px 30px 0 0;
text-align: center;
font-size: 1.5rem;
font-weight: 700;
color: white;
margin: 0 0px 10px 0px;
max-width: 9.1rem;
height: 2.7rem;
`;
export const SecondTeam = styled.input`
color: ${colors.primaryWhite};
background-color: ${colors.secondaryBlue};
padding: 5px 0;
border: 1px solid transparent;
border-radius:0 0 30px 30px ;
text-align: center;
font-size: 1.5rem;
margin: 0 0px 10px 0px;
max-width: 9.1rem;
font-weight: 700;
height: 2.7rem;
`;
export const Points = styled.div`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const PointsMatch = styled.div`
font-size: 4rem;
  font-weight: bold;
  margin-bottom: 10px;

`
export const PointButtons = styled.div`
  display: flex;

`;
export const ButtonWinner = styled.button`
  background-color: ${colors.primaryPurple};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 .5rem 0 .5rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    color: ${colors.secondaryBlue};
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0 0 0;

`;
export const TrucoSection = styled.div`
  margin: 0;
`;
export const TrucoValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;
export const ButtonsTruco = styled.button`
  background-color: ${colors.primaryPurple};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.3rem;
  margin: 0 1rem 0 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    color: ${colors.secondaryBlue};
  }
`;
export const ButtonReset= styled.div`
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
export const ButtonLearn = styled.a`
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
export const Overlay = styled.div`
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
export const Modal = styled.div`
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
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
  h2 {
    margin-bottom: 20px;
  }
`;
export const MatchCounter =  styled.div`

  svg{
    fill: #000;
  }
`
export const LearnTitle = styled.h2`
margin: 0;
`
export const ButtonLearnClose = styled.a`
  margin: 20px auto;
  background-color: #dc2ade;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s;
&:hover {
  cursor: pointer;
 }
&:active {
    transform: scale(0.98);
}
`;
export const LearnText = styled.p`
`
