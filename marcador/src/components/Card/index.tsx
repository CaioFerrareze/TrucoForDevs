import React, { useState, useRef } from 'react';
import {
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
    Links,
    ButtonLearn,
    Modal, 
    ModalContent,
    Overlay
} from './style';

const Card: React.FC = () => {
    const [pointsTeam1, setPointsTeam1] = useState(0);
    const [pointsTeam2, setPointsTeam2] = useState(0);
    const [trucoValue, setTrucoValue] = useState(0);
    const [trucoActivated, setTrucoActivated] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const modalRef = useRef<HTMLDivElement>(null);
    const increasePoints = (setPoints: React.Dispatch<React.SetStateAction<number>>, teamName: string) => {
        
        setPoints(prev => {
            const newPoints = prev + (trucoActivated ? trucoValue : 1);
            if (newPoints >= 12) {
                setWinner(teamName); 
                return 12; 
            }
            return newPoints; 
        });
        setTrucoValue(0); 
        setTrucoActivated(false);      
    };

    const handleTruco = () => {
        if (trucoValue < 12) {
            setTrucoValue(prev => prev + 3);
            setTrucoActivated(true); 
        }
    };

    const handleCorrer = () => {
        setTrucoValue(0);
        setTrucoActivated(false);
    };

    const handleCloseModal = () => {
        setWinner(null); 
        setPointsTeam1(0);
        setPointsTeam2(0);
    };
    
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            handleCloseModal(); // Fecha o modal se o clique for fora
        }
    };
    const openModal = () => {
        setShowModal(true);
      };

    const closeModal = () => {
        setShowModal(false);
      };
    

    return (
        <Container>
            <CardWrapper>
                <Teams>
                    <Team>
                        <FirstTeam>Back-End</FirstTeam>
                        <Points>{pointsTeam1}</Points>
                        <ButtonWinner onClick={() => increasePoints(setPointsTeam1, "Back-End")}>Vencedor</ButtonWinner>
                    </Team>
                    <Team>
                        <SecondTeam>Front-End</SecondTeam>
                        <Points>{pointsTeam2}</Points>
                        <ButtonWinner onClick={() => increasePoints(setPointsTeam2, "Front-End")}>Vencedor</ButtonWinner>
                    </Team>
                </Teams>
                <Links>
                    <TrucoSection>
                        <ButtonsTruco onClick={handleTruco}>{trucoValue === 0 ? 'TRUCO' : trucoValue}</ButtonsTruco>
                        {trucoActivated && <ButtonsTruco onClick={handleCorrer}>Correr</ButtonsTruco>}
                    </TrucoSection>
                    <ButtonLearn><a onClick={openModal}>Aprenda a Jogar</a></ButtonLearn>
                    {showModal && (
                        <Overlay>
                            <Modal>
                                <ModalContent>
                                    <h2>Este é o <b>Truco Paulista</b></h2>
                                    <p>Hierarquia das Cartas: 4 - 5 - 6 - 7 - Q - J - K - A - 2 - 3. </p>
                                    <p>Manilha é a carta mais forte. A manilha é a carta imediatamente superior à "vira" ex.: se vira 7, a manilha é Q.</p>
                                    <p>Rodada normal vale 1 ponto. Pedir "Truco" aumenta a aposta para 3 pontos. </p>
                                    <p>O adversário pode aceitar, correr perde 1 ponto, ou aumentar para 6, 9 ou 12 pontos.</p>
                                    
                                </ModalContent>
                                <button onClick={closeModal}>Fechar</button>
                            </Modal>
                        </Overlay>
                    )}
                </Links>
            </CardWrapper>
            {winner && (
                <Overlay onClick={handleCloseModal}>
                    <Modal ref={modalRef}>
                        <ModalContent>
                            <h2>{winner} Ganhou!</h2>
                            <ButtonWinner onClick={handleCloseModal}>Novo Jogo</ButtonWinner>
                        </ModalContent>
                    </Modal>
                </Overlay>
            )}
        </Container>
    );
};

export default Card;
