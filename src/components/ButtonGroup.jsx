import Button from "./Button";

export default function ButtonGroup({ handleRemove }) {
  return (
    <section className="button-group">
      <Button btnType="secondary">Mark all as complete</Button>
      <Button btnType="secondary">Mark all as incomplete</Button>
      <Button btnType="secondary">Reset to initial</Button>
      <Button onClick={handleRemove} btnType="secondary">
        Remove all itens
      </Button>
    </section>
  );
}
