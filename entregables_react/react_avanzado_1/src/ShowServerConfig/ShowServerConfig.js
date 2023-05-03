const ShowServerConfig = ({ config }) => {
  const { minConnections, maxConnections, restartAlways, environment, SSL } =
    config;

  if (
    typeof minConnections !== "number" ||
    typeof maxConnections !== "number" ||
    typeof restartAlways !== "boolean" ||
    !["dev", "play", "live"].includes(environment)
  ) {
    return <div>Configuración del servidor inválida</div>;
  }

  if (environment === "live" && SSL !== true) {
    return (
      <div>
        SSL es obligatorio en el entorno "live"
      </div>
    );
  }

  return (
    <div>
      <p>minConnections: {minConnections}</p>
      <p>maxConnections: {maxConnections}</p>
      <p>restartAlways: {restartAlways ? "Sí" : "No"}</p>
      <p>environment: {environment}</p>
      <p>SSL: {SSL ? "Sí" : "No"}</p>
    </div>
  );
};

export default ShowServerConfig;