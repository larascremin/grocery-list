import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Items from "./components/Items";
import { useState } from "react";
import { initItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initItems);

  const handleAdd = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      package: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemove = () => {
    setItems([]);
  };

  const handleReset = () => {
    setItems(initItems);
  };

  return (
    <>
      <Background />
      <main>
        <Header />
        <Items items={items} />
        <SideBar
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleReset={handleReset}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
