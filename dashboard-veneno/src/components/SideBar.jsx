import React from "react";
import image from "../assets/img/logo.jpeg";
import ContentWrapper from "./ContentWrapper";
import LastUser from "./LastUser";
import LastProduct from "./LastProduct";
import ContentRowProducts from "./ContentRowProducts";
import NotFound from "./NotFound";
import TotalCategory from "./TotalCategory";
import { Link, Route, Routes } from "react-router-dom";
import ProductsList from "./ProductsList";

function SideBar() {
  return (
    <>
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style={{ background: "#202020", color: "#9bcf29" }}>

        <li className="nav-item active">
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
            <div className="sidebar-brand-icon" style={{ padding: "55px" }}>
              <img className="w-100" src={image} alt="Veneno" />
            </div>
          </Link>
        </li>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" style={{ color: "#9bcf29" }}></i>
            <span style={{ color: "#9bcf29" }}>Dashboard - Veneno</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <li className="nav-item">
          <div className="sidebar-heading" style={{ color: "#9bcf29" }}>Acciones</div>
        </li>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastUser">
            <span style={{ color: "#9bcf29" }}>Ultimo Usuario Creado</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProduct">
            <span style={{ color: "#9bcf29" }}>Ultimo Producto Creado</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/TotalCategory">
            <span style={{ color: "#9bcf29" }}>Total de Productos por Categoria</span>
          </Link>
        </li>

        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ProductList">
            <span style={{ color: "#9bcf29" }}>Listado de Productos</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Routes>
        <Route exact path="/" element={<ContentWrapper />} />
        <Route exact path="/LastUser" element={<LastUser />} />
        <Route exact path="/LastProduct" element={<LastProduct />} />
        <Route exact path="/ContentRowProducts" element={<ContentRowProducts />} />
        <Route exact path="/TotalCategory" element={<TotalCategory />} />
        <Route exact path="/ProductList" element={<ProductsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default SideBar;
