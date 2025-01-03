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
    Modal, 
    ModalContent,
    Overlay,
    TeamDivisor,
    TrucoValue,
    PointsMatch,
    MatchCounter,
    PointButtons
} from './style';

const Card: React.FC = () => {
    const [pointsTeam1, setPointsTeam1] = useState(0);
    const [pointsTeam2, setPointsTeam2] = useState(0);
    const [trucoValue, setTrucoValue] = useState(0);
    const [actualValue, setActualValue] = useState(0);
    const [trucoActivated, setTrucoActivated] = useState(false);
    const [winner, setWinner] = useState<string | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);

    const increasePoints = (
        setPoints: React.Dispatch<React.SetStateAction<number>>, 
        teamName: string
    ) => {
        setPoints(prev => {
            const newPoints = prev + (trucoActivated ? trucoValue : 1);

            if (newPoints >= 12 ) { 
                setWinner(teamName);   
            }
            return Math.min(newPoints, 12); // Garante que o valor máximo seja 12
        });
    
        setTrucoValue(0); 
        setTrucoActivated(false);  
        setActualValue(0);    
    };
    const decreasePoints = (
        setPoints: React.Dispatch<React.SetStateAction<number>>, 
        teamName: string
    ) => {
        setPoints(prev => {
            let newPoints = prev 

            if (newPoints > 0) {
                newPoints -= 1 
                
            } else{
                console.log(teamName)
            }
            
            return Math.min(newPoints, 12); // Garante que o valor máximo seja 12
        });
    
        setTrucoValue(0); 
        setTrucoActivated(false);  
        setActualValue(0);    
    };
    const handleTruco = () => {
        if (trucoValue < 12) {
            setTrucoValue(prev => prev + 3);
            setActualValue(prev => prev + 3);
            setTrucoActivated(true); 
        }
    };
    const handleCorrer = () => {
        setTrucoValue(0);
        setTrucoActivated(false);
        setActualValue(0);  
    };
    const handleCloseModal = () => {
        setWinner(null); 
        setPointsTeam1(0);
        setPointsTeam2(0);
    };
    const checkNumber = (number: number) => {
        switch (number) {
          case 6:
            return "6";
          case 9:
            return "9";
          case 12:
            return "12";
          default:
            return "TRUCO";
        }
    };

                
    return (
        <Container>
            <CardWrapper>
                <Teams>
                    <Team>
                        <FirstTeam maxLength={8} ></FirstTeam>
                        <Points>{pointsTeam1}</Points>
                        <PointButtons>
                            <ButtonWinner onClick={() => increasePoints(setPointsTeam1, "Back-End")}>+</ButtonWinner>
                            <ButtonWinner onClick={() => decreasePoints(setPointsTeam1, "Back-End")}>-</ButtonWinner>
                        </PointButtons>
                        <MatchCounter>
                            <img src="../../assets/circle.svg" alt="" />
                            <img src="../../assets/circle.svg" alt="" />
                            <img src="../../assets/circle.svg" alt="" />
                        </MatchCounter>
                    </Team>
                    <TeamDivisor> </TeamDivisor>
                    <Team>
                        <SecondTeam maxLength={8}></SecondTeam>
                        <Points>{pointsTeam2} </Points>
                        <PointButtons>
                            <ButtonWinner onClick={() => increasePoints(setPointsTeam2, "Front-End")}>+</ButtonWinner>
                            <ButtonWinner onClick={() => decreasePoints(setPointsTeam2, "Front-End")}>-</ButtonWinner>
                        </PointButtons>
                    </Team>
                </Teams>
                <Links>
                    <TrucoSection>
                        <TrucoValue>Rodada Vale:</TrucoValue>
                        <PointsMatch>{actualValue === 0 ? actualValue + 1 : actualValue}</PointsMatch>
                        <ButtonsTruco onClick={handleTruco}>{trucoValue === 0 ? 'TRUCO' : (trucoValue < 12 ? checkNumber(trucoValue + 3) : (checkNumber(12)))}</ButtonsTruco>
                        {trucoActivated && <ButtonsTruco onClick={handleCorrer}>Correr</ButtonsTruco>}
                    </TrucoSection>
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
