import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Items from "./components/Items";
import { useEffect, useState } from "react";
import { initItems } from "./lib/constants";

function App() {
  const itemLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemLocalStorage || initItems);

  const handleAdd = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      package: false,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggle = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemove = () => {
    setItems([]);
  };

  const handleReset = () => {
    setItems(initItems);
  };

  const handleComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Background />
      <main>
        <Header
          packedItems={items.filter((item) => item.packed).length}
          totalItems={items.length}
        />
        <Items
          items={items}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
        <SideBar
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleReset={handleReset}
          handleComplete={handleComplete}
          handleIncomplete={handleIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
