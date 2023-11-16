import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGateway.css';
import ProductView from '../ProductView/ProductView';
import ProductViewLoading from '../ProductViewLoading/ProductViewLoading';

async function fetchData(setProducts) {
  const baseUrl = 'http://localhost:3001/products';
  try {
    const response = await axios.get(baseUrl);
    setProducts(response.data);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

function ProductGateway() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [btnMoreInfo, setBtnMoreInfo] = useState(false);

  useEffect(() => {
    fetchData(setProducts);
  }, []); // Dependência vazia para executar apenas na montagem inicial

  const handleProductSelected = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setBtnMoreInfo(false);
  };

  return ( 
    <div className="product-gateway" id="productGateway">
      <h2 className="h2">Otimize sua Operação e Potencialize a Produtividade com Nossos Softwares de Automação de Processos</h2>

      <div className="products-area container">
        {products.map(product => 
          <ProductCard 
            key={product.id} 
            {...product} 
            isSelected={selectedProduct && selectedProduct.id === product.id}
            onClick={() => handleProductSelected(product.id)}
            btnMoreInfo={btnMoreInfo}
            setBtnMoreInfo={setBtnMoreInfo}
          /> 
        )}
      </div>

      {selectedProduct && !selectedProduct.isComingSoon ? (
        <ProductView product={selectedProduct}/>
      ) : (
        <ProductViewLoading />
      )}
    </div>
  );
}

export default ProductGateway;
