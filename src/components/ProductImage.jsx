const ProductImage = ({ src, alt }) => {
  return (
    <div className="w-1/2">
      <img src={src} alt={alt} className="w-full rounded-l-lg" />
    </div>
  );
};

export default ProductImage;
