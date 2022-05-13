import SidebarAdmin from "../components/SidebarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../config/redux/actions/authAction";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { dataLogin } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (sessionStorage.getItem("token") == null) navigate("/");
  }, []);

  return (
    <>
      <SidebarAdmin />
    </>
  );
};
export default DashboardAdmin;
