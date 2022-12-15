import Header from "./components/Header";
import Form from "./components/Form";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
