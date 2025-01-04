
interface ProductsProps {
    productName: string;
    productPrice: number;
  }
  

const Products: React.FC<ProductsProps> = ({productName, productPrice}) => {
    const formatPrice = (price: number) => {
        return `$${price.toLocaleString()}`;
      };
      
  return (
    <div>
        <h2>Product : {productName}</h2>
        <p>Price: {formatPrice(productPrice)}</p>
        <p></p>
    </div>
  )
}

export default Products