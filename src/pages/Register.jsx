import Image from "react-bootstrap/Image";
import { Form, Button } from "react-bootstrap";
import CarsImage from "../assets/img_cars2.svg";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginGoogle } from "../config/redux/actions/authAction";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { dataLogin } = useSelector((state) => state.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const {dataLogin} = useSelector((store) => store.authReducer);
  // console.log(dataLogin);
  // const dataUsers = dataLogin.user;
  // console.log(dataUsers);

  const handleLoginGoogle = async () => {
    const data = await dispatch(LoginGoogle());
    if (data) navigate("/home"); //di return di bagian actionnya
  };

  const handleRegister = () => {
    axios
      .post(`${process.env.REACT_APP_ADMIN_REGISTER_URL}`, {
        email: email,
        password: password,
        role: "admin",
      })
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
    if (dataLogin !== null && dataLogin?.email !== "admin@admin.com")
      navigate("/home");
  }, []);

  return (
    <>
      <div className="login d-flex align-items-center ">
        <div className="log-img">
          <Image
            src={CarsImage}
            alt="cars image"
            className="img-login w-100 vh-100 img-fluid"
          />
        </div>

        <div className="login-form m-auto font-weight-bold">
          <p className="w-0 login-logo"></p>
          <h1>Create new Account.</h1>
          <div className="form">
            <div className="form-outline mb-4 mt-4">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="form2Example18"
                className="placeholders form-control form-control-lg"
                placeholder="Contoh: johndee@gmail.com"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="form2Example28"
                className="form-control form-control-lg"
                placeholder="6+ karakter"
              />
            </div>
            <div className="pt-1 mb-4">
              <Link to="/home">
                <Button
                  onClick={handleRegister}
                  className="btn btn-clicks btn-test font-weight-bold"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            <Link to="/login">Already have an account? Login.</Link>
            <br />
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <button onClick={handleLoginGoogle} className="btn-login-google">
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
