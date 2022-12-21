import Header from "./components/Header";
import Form from "./components/Form";
import MembersList from "./components/MembersList";
import Footer from "./components/Footer";
import GlobalStyle from "./style/GlobalStyle";
import { AppProvider } from "./utils/context";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppProvider>
        <Header />
        <main>
          <Form />
          <MembersList />
        </main>
        <Footer />
      </AppProvider>
    </div>
  );
}

export default App;
