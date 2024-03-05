import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import NotFound from "./NotFound";

function ContentRowProducts() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUser] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4200/api/products/list")
      .then((response) => response.json())
      .then((data) => {
        setTotalProducts(data.meta.count);

        // Calcular el total de categorías
        const categories = data.products.map((product) => product.category);
        const uniqueCategories = new Set(categories);
        setTotalCategories(uniqueCategories.size);
      })
      .catch((error) => {
        <NotFound />
      });

    fetch("http://localhost:4200/api/users/list")
      .then((response) => response.json())
      .then((data) => {
        setTotalUser(data.meta.count);
      })
      .catch((error) => {
        <NotFound />
      });
  }, []);

  const totalProduct = {
    title: "Total de Productos",
    color: "primary",
    cuantity: totalProducts,
    icon: "fa-clipboard-list",
  };

  const totalCategory = {
    title: "Total de Categorias",
    color: "success",
    cuantity: totalCategories,
    icon: "fa-solid fa-list",
  };

  const totalUser = {
    title: "Total de Usuarios",
    color: "warning",
    cuantity: totalUsers,
    icon: "fa-user-check",
  };

  const cartProps = [totalProduct, totalCategory, totalUser];

  return (
    <div className="row">
      {cartProps.map((product, i) => {
        return <SmallCard {...product} key={i} />;
      })}
    </div>
  );
}

export default ContentRowProducts;
