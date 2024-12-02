import React, { useState } from "react";
import Form from "./Form";
import PetGrid from "./PetGrid";

function AppPrincipal() {
  const [userDetails, setUserDetails] = useState(null);
  const pets = [
    { id: 1, name: "Buddy", type: "dog", image: "https://eq2imhfmrcc.exactdn.com/wp-content/uploads/2012/01/perro-cachorro.jpg?strip=all&lossy=1&w=480&ssl=1" },
    { id: 2, name: "Max", type: "dog", image: "https://verdecora.es/blog/wp-content/uploads/2019/01/como-socializar-cachorro.jpg" },
    { id: 3, name: "Rocky", type: "dog", image: "https://cdn.dogsplanet.com/wp-content/uploads/2022/07/black-dog-portrait.jpg" },
    { id: 4, name: "Whiskers", type: "cat", image: "https://static.nationalgeographicla.com/files/styles/image_3200/public/nationalgeographic_1468962.webp?w=1450&h=816" },
    { id: 5, name: "Luna", type: "cat", image: "https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png" },
    { id: 6, name: "Mittens", type: "cat", image: "https://content.elmueble.com/medio/2022/06/07/gato-erik-jan-leusink-ibpxglgjimi-unsplash_21d35523_1280x853.jpg" },
  ];

  const handleFormSubmit = (details) => {
    setUserDetails(details);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {!userDetails ? (
          <Form onSubmit={handleFormSubmit} />
        ) : (
          <PetGrid pets={pets} />
        )}
      </div>
    </div>
  );
}

export default AppPrincipal;
