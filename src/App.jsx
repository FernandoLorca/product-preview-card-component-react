import TypeOfProduct from "./components/TypeOfProduct";
import ProductTitle from "./components/ProductTitle";
import ProductDescription from "./components/ProductDescription";
import Price from "./components/Price";
import Button from "./components/Button/Button";
import ProductImage from "./components/ProductImage";

function App() {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex max-w-2xl bg-white rounded-lg">
        <ProductImage
          src="./src/assets/image-product-desktop.jpg"
          alt="Product image"
        />
        <div className="flex flex-col w-1/2 p-7 dark-grayish-blue">
          <TypeOfProduct text="PERFUME" />
          <ProductTitle text="Gabrielle Essence Eau De Parfum" />
          <ProductDescription
            text="A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House CHANEL."
          />
          <Price text="$169.99" discount="$149.99" />
          <Button text="Add to cart" />
        </div>
      </div>
    </section>
  );
}

export default App;
