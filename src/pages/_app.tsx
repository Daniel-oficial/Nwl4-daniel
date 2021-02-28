import '../styles/global.css';

import { ChallengeProvider } from '../contexts/challengesContext'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp
