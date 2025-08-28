import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Dumbbell } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg">
              <Dumbbell className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              POWER MAX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              Início
            </Link>
            <Link to="/products" className="hover:text-yellow-400 transition-colors">
              Produtos
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-full transition-colors">
                  <User className="h-6 w-6" />
                  <span className="hidden md:block">{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-700 rounded-t-lg transition-colors"
                  >
                    Minha Conta
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-b-lg transition-colors"
                  >
                    Sair
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-4 py-2 rounded-lg font-semibold transition-all"
              >
                Entrar
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <Link
              to="/"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/products"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;