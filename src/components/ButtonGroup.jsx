import Button from "./Button";

export default function ButtonGroup({
  handleRemove,
  handleReset,
  handleComplete,
  handleIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onClick={handleComplete} btnType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleIncomplete} btnType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleReset} btnType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemove} btnType="secondary">
        Remove all itens
      </Button>
    </section>
  );
}
