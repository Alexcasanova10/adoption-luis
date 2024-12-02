import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    card: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="bg-white shadow-md rounded px-8 py-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Formulario de Adopción</h2>
      {["name", "address", "email", "card"].map((field) => (
        <div className="mb-4" key={field}>
          <label className="block text-gray-700 text-sm font-bold mb-2 capitalize">
            {field === "name" && "Nombre"}
            {field === "address" && "Dirección"}
            {field === "email" && "Correo Electrónico"}
            {field === "card" && "Tarjeta"}
          </label>
          <input
            type={field === "card" ? "password" : "text"}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  );
}

export default Form;
