import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Package } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
              Esgotado
            </div>
          )}
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
            <Package className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-white font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
          </div>

          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-yellow-400">
              R$ {product.price.toFixed(2)}
            </span>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-semibold transition-all ${
                product.inStock
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Adicionar</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;