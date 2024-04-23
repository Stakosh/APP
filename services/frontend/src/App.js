import "./App.css";
import Messages from "./components/Messages";
import TextField from "./components/TextField";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App() {
  // Puedes agregar aquí la URL de la imagen que quieres mostrar
  const imageUrl = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.abc.es%2Fsociedad%2Fmascotas%2Fabci-mas-barato-mantener-perro-o-gato-201910100240_noticia.html&psig=AOvVaw21VeBJ_aPTlLG0ycKvK1dX&ust=1713925610123000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDE3dOk14UDFQAAAAAdAAAAABAE"; // Reemplaza con la URL de tu imagen
  return (
    <div className="App">
      <h1>Funcionando</h1>
      <img src={imageUrl} alt="Imagen descriptiva" style={{ width: "100%", height: "auto" }} />
    </div>
  );
}

export default App;
