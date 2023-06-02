import Foods from "../components/foods/Foods";

export default function Breakfast( {addToCart} ) {
  return <Foods type="Breakfast" addToCart={addToCart} />;
}
