import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-400 mb-6">Adicione alguns produtos incríveis ao seu carrinho!</p>
          <Link
            to="/products"
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center"
          >
            Ver Produtos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Seu{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Carrinho
            </span>
          </h1>
          <p className="text-gray-400">
            {items.length} {items.length === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {item.category === 'supplements' ? 'Suplemento' : 'Acessório'}
                      </p>
                      <p className="text-yellow-400 font-bold">
                        R$ {item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors"
                      >
                        <Minus className="h-4 w-4 text-white" />
                      </button>
                      
                      <span className="text-white font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors"
                      >
                        <Plus className="h-4 w-4 text-white" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-white font-bold mb-2">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-600">
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Frete</span>
                  <span>{total >= 99 ? 'Grátis' : 'R$ 15,00'}</span>
                </div>
                <div className="border-t border-gray-600 pt-3">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-yellow-400">
                      R$ {(total >= 99 ? total : total + 15).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {total < 99 && (
                <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-lg p-3 mb-6">
                  <p className="text-yellow-400 text-sm">
                    Adicione mais R$ {(99 - total).toFixed(2)} para ganhar frete grátis!
                  </p>
                </div>
              )}

              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                Finalizar Compra
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/products"
                className="w-full mt-3 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;