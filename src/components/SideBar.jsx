import AddItem from "./AddItem";
import ButtonGroup from "./ButtonGroup";

export default function SideBar({
  handleAdd,
  handleRemove,
  handleReset,
  handleComplete,
  handleIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItem handleAdd={handleAdd} />
      <ButtonGroup
        handleRemove={handleRemove}
        handleReset={handleReset}
        handleComplete={handleComplete}
        handleIncomplete={handleIncomplete}
      />
    </div>
  );
}
