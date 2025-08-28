import RandomQuote from "./component/Execise05"
import ShoppingCart from "./component/Execise01"
import RenderCounter from "./component/Execise03"
import RegistrationForm from "./component/Execise04"
import { ThemeProvider } from "./component/Execise02/ThemeProvider";
import Header from "./component/Execise02/Header";
import Content from "./component/Execise02/Content";

function App() {

  return (
    <>
      {/* <ShoppingCart></ShoppingCart> */}
      {/* <RandomQuote></RandomQuote> */}
      {/* <RenderCounter></RenderCounter> */}
      {/* <RegistrationForm></RegistrationForm> */}
      <ThemeProvider>
      <h1>My Themed App</h1>
      <Header />
      <Content />
    </ThemeProvider>

    </>
  )
}

export default App
