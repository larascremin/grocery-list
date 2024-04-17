import Background from "./components/Background";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Items from "./components/Items";

function App() {
  return (
    <>
      <Background />
      <main>
        <Header />
        <Items />
        <SideBar />
      </main>
      <Footer />
    </>
  );
}

export default App;
