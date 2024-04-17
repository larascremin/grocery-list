import Button from "./Button";
import { secondaryBtn } from "../lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryBtn.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
