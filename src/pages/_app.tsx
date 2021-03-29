//aqui fica tudo que for repetir sempre/com frequência.
import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;

// Todos os elementos dentro do provider terão acesso aos dados armazenados daquele contexto
