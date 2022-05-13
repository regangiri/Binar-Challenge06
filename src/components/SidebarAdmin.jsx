import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import "../styles/SidebarAdmin.css";
import NavbarAdmin from "./NavbarAdmin";
import IconHome from "../assets/icon_home.svg";
import IconTruck from "../assets/icon_truck.svg";
import TableAdmin from "./TableAdmin";
import PaginationTable from "./PaginationTable";
import ContentAdmin from "./ContentAdmin";

const SidebarAdmin = () => {
  return (
    <>
      <div className="divide-side d-flex w-100">
        <div className="left-side d-flex">
          <div className="nav-icon d-flex flex-column">
            <div className="sidebar-logo">
              <p className="icon-sidebar"></p>
            </div>
            <Link to="#" className="items-sidebar-menu-active" />
            <Image
              src={IconHome}
              width={50}
              height={50}
              alt="icon home"
              className="icon-sidebar-menu"
            />
            <p className="text-icon-dashboard">Dashboard</p>

            <Link to="/list-cars" className="items-sidebar-menu">
              <Image
                width={50}
                height={50}
                src={IconTruck}
                alt="icon cars"
                className="icon-sidebar-menu"
              />
              <p className="text-icon-cars">Cars</p>
            </Link>
          </div>
        </div>
        <div className="right-side w-100">
          <NavbarAdmin />
          <div className="container-fluid">
            <TableAdmin />
            <PaginationTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
