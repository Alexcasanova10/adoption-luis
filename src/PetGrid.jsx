import React from "react";

function PetGrid({ pets }) {
  const handleAdopt = (pet) => {
    alert(`${pet.name} ha sido adoptado/a 🐾`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mascotas Disponibles</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white shadow-md rounded p-4 text-center cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleAdopt(pet)}
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{pet.name}</h3>
            <p className="text-gray-600 capitalize">
              {pet.type === "dog" ? "Perro" : "Gato"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetGrid;
