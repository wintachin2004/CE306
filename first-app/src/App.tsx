import React from 'react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar'; 

const mockProducts = [
  {
    id: 1,
    imageUrl: 'https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_1280.jpg',
    title: 'ตัวอย่างสินค้า1',
    description: 'คำอธิบาย',
    price: 199.99,
  },
  {
    id: 2,
    imageUrl: 'https://cdn.pixabay.com/photo/2018/02/24/20/39/clock-3179167_1280.jpg',
    title: 'ตัวอย่างสินค้า2',
    description: 'คำอธิบาย',
    price: 79.50,
  },
  {
    id: 3,
    imageUrl: 'https://cdn.pixabay.com/photo/2015/10/01/15/14/beads-967179_1280.jpg',
    title: 'ตัวอย่างสินค้า3',
    description: 'คำอธิบาย.',
    price: 1200,
  },
];

const App: React.FC = () => {
  const handleAddToCart = (productId: number) => {
    alert(`Product ${productId} has been added to cart!`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          รายการสินค้า
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;