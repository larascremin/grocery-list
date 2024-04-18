import Logo from "./Logo";
import Counter from "./Counter";

export default function Header({ packedItems, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter packedItems={packedItems} totalItems={totalItems} />
    </header>
  );
}
