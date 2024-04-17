import AddItem from "./AddItem";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({ handleAdd, handleRemove, handleReset }) {
  return (
    <div className="sidebar">
      <AddItem handleAdd={handleAdd} />
      <ButtonGroup handleRemove={handleRemove} handleReset={handleReset} />
    </div>
  );
}
