import { useState } from 'react';
import ProductCard from './ProductCard';
import { useToast } from '@/hooks/use-toast';
import Navbar from './Navbar';
import Cart, { CartItem } from './Cart';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const { toast } = useToast();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products] = useState<Product[]>([
    // Women's Products
    {
      id: 'w1',
      name: 'Elegant Evening Dress',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
      category: 'Women'
    },
    {
      id: 'w2',
      name: 'Designer Handbag',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      category: 'Women'
    },
    {
      id: 'w3',
      name: 'Summer Dress',
      price: 11999,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
      category: 'Women'
    },
    {
      id: 'w4',
      name: 'Casual Blazer',
      price: 13999,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      category: 'Women'
    },
    // Men's Products
    {
      id: 'm1',
      name: 'Classic Suit',
      price: 39999,
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7',
      category: 'Men'
    },
    {
      id: 'm2',
      name: 'Leather Boots',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
      category: 'Men'
    },
    {
      id: 'm3',
      name: 'Casual Shirt',
      price: 6999,
      image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157',
      category: 'Men'
    },
    {
      id: 'm4',
      name: 'Designer Watch',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
      category: 'Men'
    },
    // Kids' Products
    {
      id: 'k1',
      name: 'Children\'s Party Dress',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4',
      category: 'Kids'
    },
    {
      id: 'k2',
      name: 'Kids Sports Set',
      price: 4499,
      image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d',
      category: 'Kids'
    },
    {
      id: 'k3',
      name: 'School Backpack',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc',
      category: 'Kids'
    },
    {
      id: 'k4',
      name: 'Kids Sneakers',
      price: 5499,
      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782',
      category: 'Kids'
    },
    // Accessories
    {
      id: 'a1',
      name: 'Designer Watch',
      price: 32999,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d',
      category: 'Accessories'
    },
    {
      id: 'a2',
      name: 'Silk Scarf',
      price: 7499,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
      category: 'Accessories'
    },
    {
      id: 'a3',
      name: 'Leather Belt',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      category: 'Accessories'
    },
    {
      id: 'a4',
      name: 'Sunglasses',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      category: 'Accessories'
    },
  ]);

  const filteredProducts = products.filter(product => product.category === category);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      // Check if the item already exists in the cart
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        // If it exists, increment its quantity
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If it doesn't exist, add it with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev => 
      quantity === 0
        ? prev.filter(item => item.id !== id)
        : prev.map(item => 
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-richblack mb-8">{category}</h2>
          <p className="text-gray-600 mb-8">Showing {filteredProducts.length} products in {category}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </div>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default CategoryPage;