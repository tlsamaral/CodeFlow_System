import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGateway.css';

function ProductGateway() {
  const products = [
    {
      id: 1,
      name: 'iPet',
      description: 'Sistema de gestão para petshop e/ou clínicas veterinárias',
      isComingSoon: false
    },
    {
      id: 2,
      name: 'iPet',
      description: 'Sistema de gestão para petshop e/ou clínicas veterinárias',
      isComingSoon: true
    },
    {
      id: 3,
      name: 'iPet',
      description: 'Sistema de gestão para petshop e/ou clínicas veterinárias',
      isComingSoon: true
    }
  ];

  const productInitial = products.find(p => p.id === 1);

  const [selectedProduct, setSelectedProduct] = useState(productInitial);
  const [btnMoreInfo, setBtnMoreInfo] = useState(false);

  const handleProductSelected = (productId) => {
    const product = products.find(p => p.id === productId);

    setSelectedProduct(product);
    setBtnMoreInfo(false);
  };

  useEffect(() => { 
    console.log(selectedProduct);
  }, [selectedProduct]);

  return ( 
    <div className="product-gateway">
      <h2 className="h2">Otimize sua Operação e Potencialize a Produtividade com Nossos Softwares de Automação de Processos</h2>

      <div className="products-area">
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
    </div>
  );
}

export default ProductGateway;
