import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'debit'>('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const finalTotal = total >= 99 ? total : total + 15;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Lock className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Login Necessário</h2>
          <p className="text-gray-400 mb-6">Você precisa estar logado para finalizar a compra.</p>
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Fazer Login
          </button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Pedido Realizado com Sucesso!</h2>
          <p className="text-gray-400 mb-6">
            Seu pedido foi processado e você receberá um e-mail de confirmação em breve.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/cart')}
          className="flex items-center text-yellow-400 hover:text-yellow-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar ao Carrinho
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Finalizar{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Compra
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-6">Forma de Pagamento</h3>
            
            <form onSubmit={handleSubmit}>
              {/* Payment Method Selection */}
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'pix'
                        ? 'border-yellow-500 bg-yellow-500 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <Smartphone className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">PIX</p>
                    <p className="text-gray-400 text-sm">Instantâneo</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('credit')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'credit'
                        ? 'border-yellow-500 bg-yellow-500 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Crédito</p>
                    <p className="text-gray-400 text-sm">Até 12x</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('debit')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'debit'
                        ? 'border-yellow-500 bg-yellow-500 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <CreditCard className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Débito</p>
                    <p className="text-gray-400 text-sm">À vista</p>
                  </button>
                </div>
              </div>

              {/* Card Details (for credit/debit) */}
              {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Número do Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Validade
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Nome no Cartão
                    </label>
                    <input
                      type="text"
                      placeholder="Nome como está no cartão"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  {paymentMethod === 'credit' && (
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Parcelas
                      </label>
                      <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500">
                        <option>1x de R$ {finalTotal.toFixed(2)} sem juros</option>
                        <option>2x de R$ {(finalTotal / 2).toFixed(2)} sem juros</option>
                        <option>3x de R$ {(finalTotal / 3).toFixed(2)} sem juros</option>
                        <option>6x de R$ {(finalTotal / 6).toFixed(2)} sem juros</option>
                        <option>12x de R$ {(finalTotal / 12).toFixed(2)} sem juros</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              {/* PIX Instructions */}
              {paymentMethod === 'pix' && (
                <div className="bg-yellow-500 bg-opacity-10 border border-yellow-500 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400 font-semibold mb-2">Pagamento via PIX</p>
                  <p className="text-gray-300 text-sm">
                    Após confirmar o pedido, você receberá o código PIX para pagamento.
                    O pagamento é processado instantaneamente.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                  isProcessing
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black'
                }`}
              >
                {isProcessing ? 'Processando...' : `Pagar R$ ${finalTotal.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-gray-400 text-sm">Qtd: {item.quantity}</p>
                    </div>
                    <p className="text-yellow-400 font-bold">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-4 space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Frete</span>
                  <span>{total >= 99 ? 'Grátis' : 'R$ 15,00'}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-yellow-400">R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Endereço de Entrega</h3>
              <div className="text-gray-300">
                <p className="font-semibold">{user.name}</p>
                <p>{user.address.street}</p>
                <p>{user.address.city}, {user.address.state}</p>
                <p>CEP: {user.address.zipCode}</p>
                <p className="mt-2">Tel: {user.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;