import React from 'react';
import LastProduct from './LastProduct';
import LastUser from './LastUser';
import TotalCategory from './TotalCategory';
import ProductsList from './ProductsList';

function ContentRowCenter() {
    return (
        <div className="row">
            <LastProduct />
            <LastUser />
            <TotalCategory />
            <ProductsList />
        </div>
    )
}

export default ContentRowCenter;