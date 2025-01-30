import { useState } from 'react';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const ProductCard = ({ id, name, price, image, onAddToCart }: ProductCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md card-hover">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`h-full w-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse">
            <div className="shimmer" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-richblack truncate">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{formatPrice(price)}</p>
        <Button
          onClick={onAddToCart}
          className="mt-4 w-full bg-richblack hover:bg-richblack/90 transition-colors duration-200"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;