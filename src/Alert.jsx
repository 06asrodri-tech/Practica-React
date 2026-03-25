// Alert.jsx
const Alert = ({ mensaje, tipo }) => {
  if (!mensaje) return null;

  // Estilo personalizado para que se parezca al de tu imagen
  const estilo = {
    backgroundColor: tipo === "success" ? "#d1e7dd" : "#f8d7da",
    color: tipo === "success" ? "#0f5132" : "#842029",
    border: "none",
    borderRadius: "10px",
    padding: "15px"
  };

  return (
    <div style={estilo} className="mt-3 text-center">
      {mensaje}
    </div>
  );
};
export default Alert;