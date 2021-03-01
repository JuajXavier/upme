import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25 * 60); // 25 * 60 pra passar 25 minutos pra segundos.
    const [active, setActive] = useState(false); // estado que armazena a atividade ou não do timer.

    const minutes = Math.floor(time/60); // Math.floor para arredondar o número pra baixo, 24.3 pra 24, por exemplo.
    const seconds = time % 60 // resto da divisão pra ver quantos segundos faltam.

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); //padStart = se a string não tiver 2 caracteres, vai adicionar um 0 no início. Split('') para criar um array separando os números por espaço.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); //minutos e segundso dividos entre esquerda e direita em [] = desestruturação js.

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => { // setTimeout = pra algo acontecer depois de x tempo.
                setTime(time - 1)
            }, 1000) // função executada depois de 1segundo.
        }
    }, [active, time]) // disparado quando o active for atualizado pelo valor armazenado em setActive e time em setTime.

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}