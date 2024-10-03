import React,{ useState}from 'react';
import styled from 'styled-components';
import { colors, shadows} from '../../StyleGuide';
import ResetIcon  from '../../assets/ResetIcon.svg';
import HelpIcon from '../../assets/HelpIcon.svg'
import {
  Overlay,
  Modal,
  ModalContent,
  LearnTitle,
  ButtonLearnClose,
  LearnText
} from '../Card/style'
const HeaderContainer = styled.header`
  background: linear-gradient(130deg, ${colors.primaryPurple}, ${colors.primaryPurple}, ${colors.accentPink});
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: ${shadows.lightShadow};
  p{
    
  }
  a{
    margin-left: auto;
  }
  h5{
    color: ${colors.primaryWhite};
    text-align: center;
    flex-grow: 1;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Header: React.FC = () => {
  const [pointsTeam1, setPointsTeam1] = useState(0);
  const [pointsTeam2, setPointsTeam2] = useState(0);
  const [trucoValue, setTrucoValue] = useState(0);
  const [trucoActivated, setTrucoActivated] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  console.log(pointsTeam1,pointsTeam2,trucoValue,trucoActivated,winner)

  const handleResetGame = () => {
    setWinner(null); 
    setPointsTeam1(0);
    setPointsTeam2(0);
    setTrucoValue(0); 
    setTrucoActivated(false); 
};
const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};
  return (
    <HeaderContainer>
      <a  onClick={openModal}><img src={HelpIcon} alt="Ajuda" /></a>
      {showModal && (
          <Overlay>
              <Modal>
                  <ModalContent>
                      <LearnTitle>Este é o Truco Paulista</LearnTitle>
                      <LearnText>Hierarquia das Cartas:<b> 4 - 5 - 6 - 7 - Q - J - K - A - 2 - 3.</b></LearnText>
                      <p>Manilha é a carta mais forte. A manilha é a carta imediatamente superior à "vira" ex.: se vira 7, a manilha é Q.</p>
                      <p>Rodada normal vale 1 ponto. Pedir <b>"Truco"</b> aumenta a aposta para 3 pontos. </p>
                      <p>O adversário pode aceitar, correr perde 1 ponto, ou aumentar para 6, 9 ou 12 pontos.</p>
                  </ModalContent>
                  <ButtonLearnClose onClick={closeModal}>Fechar</ButtonLearnClose>
              </Modal>
          </Overlay>
        )}
      <h5 >Truco For Developers</h5> 
      <a href="" onClick={handleResetGame}><img src={ResetIcon} alt="Logo" /></a>
    </HeaderContainer>
  );
};

export default Header;

