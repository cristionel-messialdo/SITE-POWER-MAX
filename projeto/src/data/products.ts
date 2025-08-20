export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'supplements' | 'accessories';
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Supplements
  {
    id: '1',
    name: 'Whey Protein Gold Standard',
    price: 89.90,
    image: 'https://images.pexels.com/photos/4099116/pexels-photo-4099116.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Whey Protein de alta qualidade com 24g de proteína por porção. Ideal para ganho de massa muscular.',
    inStock: true,
    rating: 4.8,
    reviews: 150
  },
  {
    id: '2',
    name: 'Creatina Monohidratada 300g',
    price: 45.50,
    image: 'https://images.pexels.com/photos/4099230/pexels-photo-4099230.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Creatina pura para aumento de força e explosão muscular.',
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'BCAA 2:1:1 - 120 Cápsulas',
    price: 32.90,
    image: 'https://images.pexels.com/photos/4099125/pexels-photo-4099125.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Aminoácidos essenciais para recuperação muscular e redução do catabolismo.',
    inStock: true,
    rating: 4.6,
    reviews: 76
  },
  {
    id: '4',
    name: 'Pré-Treino Nitro Pump',
    price: 56.90,
    image: 'https://images.pexels.com/photos/4099232/pexels-photo-4099232.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Fórmula avançada com cafeína, arginina e beta-alanina para máxima performance.',
    inStock: true,
    rating: 4.9,
    reviews: 112
  },
  {
    id: '5',
    name: 'Multivitamínico Complete',
    price: 38.90,
    image: 'https://images.pexels.com/photos/4099145/pexels-photo-4099145.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Complexo vitamínico completo com 26 vitaminas e minerais essenciais.',
    inStock: true,
    rating: 4.5,
    reviews: 64
  },
  {
    id: '6',
    name: 'Omega 3 1000mg',
    price: 29.90,
    image: 'https://images.pexels.com/photos/4099163/pexels-photo-4099163.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'supplements',
    description: 'Ácidos graxos essenciais para saúde cardiovascular e cognitiva.',
    inStock: false,
    rating: 4.4,
    reviews: 45
  },
  // Accessories
  {
    id: '7',
    name: 'Coqueteleira Premium 700ml',
    price: 24.90,
    image: 'https://images.pexels.com/photos/4162486/pexels-photo-4162486.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Coqueteleira com sistema de mistura avançado e compartimento para suplementos.',
    inStock: true,
    rating: 4.6,
    reviews: 92
  },
  {
    id: '8',
    name: 'Luvas de Treino Pro Grip',
    price: 35.90,
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Luvas ergonômicas com grip antiderrapante para treinos intensos.',
    inStock: true,
    rating: 4.7,
    reviews: 68
  },
  {
    id: '9',
    name: 'Cinto de Musculação Leather',
    price: 89.90,
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Cinto em couro legítimo com fivela dupla para máximo suporte.',
    inStock: true,
    rating: 4.8,
    reviews: 54
  },
  {
    id: '10',
    name: 'Straps de Levantamento',
    price: 19.90,
    image: 'https://images.pexels.com/photos/1552251/pexels-photo-1552251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Straps resistentes para levantamento de cargas pesadas.',
    inStock: true,
    rating: 4.5,
    reviews: 38
  },
  {
    id: '11',
    name: 'Faixa Elástica Kit 3 Resistências',
    price: 42.90,
    image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Kit com 3 faixas de resistência diferentes para treino funcional.',
    inStock: true,
    rating: 4.6,
    reviews: 71
  },
  {
    id: '12',
    name: 'Squeeze Esportivo 1L',
    price: 16.90,
    image: 'https://images.pexels.com/photos/4162494/pexels-photo-4162494.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'accessories',
    description: 'Squeeze livre de BPA com marcação de medida e bico dosador.',
    inStock: true,
    rating: 4.3,
    reviews: 29
  }
];