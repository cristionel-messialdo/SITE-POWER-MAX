import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, Package, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Produto não encontrado</h2>
          <p className="text-gray-400 mb-4">O produto que você está procurando não existe.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Ver Produtos
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            {!product.inStock && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Esgotado
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category === 'supplements' ? 'Suplemento' : 'Acessório'}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-400 ml-2">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-yellow-400">
                R$ {product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                  product.inStock
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black transform hover:scale-105'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="h-6 w-6" />
                <span>
                  {product.inStock ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}
                </span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <Shield className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">Original</p>
                  <p className="text-gray-400 text-sm">100% Autêntico</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <Truck className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">Frete Grátis</p>
                  <p className="text-gray-400 text-sm">Acima de R$ 99</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
                <Package className="h-6 w-6 text-yellow-400" />
                <div>
                  <p className="text-white font-semibold">Entrega</p>
                  <p className="text-gray-400 text-sm">2-5 dias úteis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;