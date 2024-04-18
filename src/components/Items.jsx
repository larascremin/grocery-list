import { useMemo, useState } from "react";
import Empty from "./Empty";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function Items({ items, handleDelete, handleToggle }) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul>
      {items.length === 0 && <Empty />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDelete, handleToggle }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggle(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
