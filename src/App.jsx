import { useState } from "react";
import Formulario from "./Formulario.jsx";
import Alert from "./Alert.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm text-center" style={{ width: "400px", borderRadius: "15px" }}>
        <h1 className="fw-bold mb-3">Crea una cuenta</h1>
        
        {/* Sección de Iconos */}
        <div className="d-flex justify-content-center gap-3 mb-3">
          <div className="rounded-circle border border-dark p-3" style={{ width: "55px", height: "55px" }}>
            <i className="fa-brands fa-facebook-f fs-4"></i>
          </div>
          <div className="rounded-circle border border-dark p-3" style={{ width: "55px", height: "55px" }}>
            <i className="fa-brands fa-github fs-4"></i>
          </div>
          <div className="rounded-circle border border-dark p-3" style={{ width: "55px", height: "55px" }}>
            <i className="fa-brands fa-linkedin-in fs-4"></i>
          </div>
        </div>

        <p className="text-secondary small">O usa tu email para registrarte</p>

        <Formulario setAlert={setAlert} />
        <Alert mensaje={alert.msg} tipo={alert.color} />
      </div>
    </div>
  );
}
export default App;