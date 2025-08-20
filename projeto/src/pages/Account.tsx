import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Account: React.FC = () => {
  const { user, updateUser, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user || {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 text-gray-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Acesso Negado</h2>
          <p className="text-gray-400">Você precisa estar logado para acessar esta página.</p>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Minha{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Conta
              </span>
            </h1>
            <p className="text-gray-400">
              Gerencie suas informações pessoais e preferências
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Informações Pessoais</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <Edit2 className="h-4 w-4" />
                  <span>Editar</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    <span>Salvar</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded transition-colors"
                  >
                    <X className="h-4 w-4" />
                    <span>Cancelar</span>
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Nome Completo
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    />
                  ) : (
                    <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    />
                  ) : (
                    <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Telefone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  />
                ) : (
                  <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.phone}</p>
                )}
              </div>

              {/* Address Information */}
              <div className="border-t border-gray-600 pt-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-yellow-400" />
                  Endereço de Entrega
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold mb-2">
                      Endereço Completo
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      />
                    ) : (
                      <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.address.street}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Cidade
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      />
                    ) : (
                      <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.address.city}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Estado
                    </label>
                    {isEditing ? (
                      <select
                        name="address.state"
                        value={formData.address.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      >
                        <option value="">Selecione o estado</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="PR">Paraná</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="BA">Bahia</option>
                        <option value="GO">Goiás</option>
                        <option value="PE">Pernambuco</option>
                        <option value="CE">Ceará</option>
                      </select>
                    ) : (
                      <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.address.state}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold mb-2">
                      CEP
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address.zipCode"
                        value={formData.address.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      />
                    ) : (
                      <p className="text-gray-300 bg-gray-700 px-4 py-3 rounded-lg">{user.address.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6 mt-8">
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Sair da Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;