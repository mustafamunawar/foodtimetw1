import Foods from "../components/foods/Foods";

export default function Dinner({addToCart}) {
  return <Foods type="Dinner" addToCart={addToCart} />;
}
