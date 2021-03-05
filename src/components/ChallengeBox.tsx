import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActivateChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActivateChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 500xp</header>

          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Alongue os braços.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>

            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
