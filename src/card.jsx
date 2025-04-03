const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img alt="product image" src={image} className="product-img" />
      <span>{title}</span>
    </div>
  );
};

export default ProductCard;
