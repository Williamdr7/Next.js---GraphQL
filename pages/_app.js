import { GlobalStyle, theme } from "@theme/styledSettings";
import { CharacterWrapper } from "contexts/CharacterContext";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <CharacterWrapper>
          <Component {...pageProps} />
        </CharacterWrapper>
      </ThemeProvider>
    </>
  );
}
