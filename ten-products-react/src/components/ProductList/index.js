import React from 'react';
import Product from '../Product';

const ProductList = (props) => {
    const { products } = props;
    return (
        <div className="box container">
            {
                products.map(product => {
                    return <Product key={product.id} product={product} />
                })
            }
        </div>
    );
};

export default ProductList;