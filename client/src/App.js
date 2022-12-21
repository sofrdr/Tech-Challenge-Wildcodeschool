import Header from "./components/Header";
import Form from "./components/Form";
import MembersList from "./components/MembersList";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Form />
        <MembersList />
      </main>
    </div>
  );
}

export default App;
