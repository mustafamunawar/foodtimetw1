import Foods from "../components/foods/Foods";

export default function Lunch({addToCart}) {
  return <Foods type="Lunch" addToCart={addToCart} />;
}
