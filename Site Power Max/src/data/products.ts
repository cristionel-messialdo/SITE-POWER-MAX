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
    name: 'Whey Protein 1kg',
    price: 119.99,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157682-1920-0/whey-pro-max-titanium-1kg-chocolate-1.jpg?v=638351515709130000',
    category: 'supplements',
    description: 'Whey Protein de alta qualidade com 24g de proteína por porção. Ideal para ganho de massa muscular.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '2',
    name: 'Creatina Monohidratada 300g e Coqueteleira',
    price: 74.62,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/158059-1920-0/MAX-Imagem_Coque-Creatina-1.jpg?v=638543956690900000',
    category: 'supplements',
    description: 'Creatina pura para aumento de força e explosão muscular.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '3',
    name: 'BCAA 2400 - 200 Cápsulas',
    price: 32.90,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157311-1920-0/BCAA-DRINK-LIMAO.png?v=638343722046670000',
    category: 'supplements',
    description: 'Aminoácidos essenciais para recuperação muscular e redução do catabolismo.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '4',
    name: 'Pré-Treino Night Train',
    price: 56.90,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157632-1920-0/night-train-max-titanium-300g-frutas-vermelhas-1.jpg?v=638351478086870000',
    category: 'supplements',
    description: 'Fórmula avançada com cafeína, arginina e beta-alanina para máxima performance.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '5',
    name: 'Termogênico Sabor Taurina',
    price: 38.90,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157574-1920-0/shot-dry-max-titanium-150g-frutas-vermelhas-1.jpg?v=638351349891700000',
    category: 'supplements',
    description: 'Complexo vitamínico completo com 26 vitaminas e minerais essenciais.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '6',
    name: 'Omega 3 90 Cápsula',
    price: 49.99,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/158054-1920-0/Omega3-90capsulas.png?v=638524930904500000',
    category: 'supplements',
    description: 'Ácidos graxos essenciais para saúde cardiovascular e cognitiva.',
    inStock: false,
    rating: 0,
    reviews: 0
  },
  // Accessories
  {
    id: '7',
    name: 'Galão 2,2 L',
    price: 24.90,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155797-600-0/6bddb4afe1.jpg?v=637577209106000000',
    category: 'accessories',
    description: 'Coqueteleira com sistema de mistura avançado e compartimento para suplementos.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
  {
    id: '10',
    name: 'Straps de Levantamento',
    price: 19.90,
    image: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/155932-1920-0/IMG_8552.png?v=637691273057670000',
    category: 'accessories',
    description: 'Straps resistentes para levantamento de cargas pesadas.',
    inStock: true,
    rating: 0,
    reviews: 0
  },
];