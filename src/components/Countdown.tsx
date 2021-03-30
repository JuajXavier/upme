import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

// let countdownTimeout: NodeJS.Timeout; // variável global do js

export function Countdown() {
  const {
    minutes,
    seconds,
    finished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);
  // const { startNewChallenge } = useContext(ChallengesContext);

  /* const [time, setTime] = useState(0.05 * 60); // 25 * 60 pra passar 25 minutos pra segundos.
  const [isActive, setIsActive] = useState(false); // estado que armazena a atividade ou não do timer.
  const [finished, setFinished] = useState(false);

  const minutes = Math.floor(time / 60); // Math.floor para arredondar o número pra baixo, 24.3 pra 24, por exemplo.
  const seconds = time % 60; // resto da divisão pra ver quantos segundos faltam. */

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split(""); //padStart = se a string não tiver 2 caracteres, vai adicionar um 0 no início. Split('') para criar um array separando os números por espaço.
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split(""); //minutos e segundso dividos entre esquerda e direita em [] = desestruturação js.

  /* function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout); // para cortar o timeout atual.
    setIsActive(false);
    setTime(25 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        // setTimeout = pra algo acontecer depois de x tempo.
        setTime(time - 1);
      }, 1000); // função executada depois de 1segundo.
    } else if (isActive && time === 0) {
      setFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]); // disparado quando o active for atualizado pelo valor armazenado em setActive e time em setTime. */

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

      {finished ? ( // "finished && ()" = if -> then, dessa forma faz uma condicional que pula o "else".
        <button
          disabled
          className={styles.countdownButton} // Concatenando estilos.
        >
          Ciclo finalizado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`} // Concatenando estilos.
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
