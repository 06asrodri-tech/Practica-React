import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // El nuevo campo

  const validarDatos = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "" || password === "" || confirmPassword === "") {
      setAlert({ msg: "Debes completar todos los campos !", color: "error" });
      return;
    }
    if (!emailRegex.test(email)) {
      setAlert({ msg: "Email no válido !", color: "error" });
      return;
    }
    if (password !== confirmPassword) {
      setAlert({ msg: "Las contraseñas no coinciden !", color: "error" });
      return;
    }

    setAlert({ msg: "Registro exitoso !", color: "success" });
  };

  return (
    <form onSubmit={validarDatos}>
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
      </div>
      <button type="submit" className="btn btn-success w-100 fw-bold py-2">Registrarse</button>
    </form>
  );
};

export default Formulario;