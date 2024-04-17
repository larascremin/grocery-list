import { useState } from "react";
import { initItems } from "../lib/constants";

export default function Items() {
  const [items, setiItems] = useState(initItems);

  return (
    <ul>
      {initItems.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input checked={item.checked} type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
