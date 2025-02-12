import React, { useEffect, useState } from "react";
import "./App.css";

// components
import ImageCard from "./components/ImageCard/ImageCard";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

// firebase
import { getAuth } from "firebase/auth";
import ImageUpload from "./components/ImageUpload/ImageUpload";

const imageCardData = [
  {
    id: 1,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Test name",
    phoneNumber: "9999999999",
    email: "test@email.com",
    date: "5 July",
    share: false,
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  // const [images, setImages] = useState([]);
  // const [newImage, setNewImage] = useState(null);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged((user) => {
      console.log("user", user);
      // if user is authenticated
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    fetch("https://image-crud-be-o64a.onrender.com/fetch")
      .then((data) => data.json())
      .then((response) => console.log("response", response));
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (file) {
  //     const formData = new FormData();
  //     formData.append("pic", file);

  //     try {
  //       const response = await fetch(
  //         "https://image-crud-be.onrender.com/upload",
  //         {
  //           method: "POST",
  //           body: formData,
  //         }
  //       );

  //       if (response.ok) {
  //         const result = await response.json();
  //         setMessage("Image uploaded successfully");
  //         console.log("Image uploaded successfully:", result);
  //       } else {
  //         setMessage("Image upload failed");
  //         console.error("Image upload failed:", response.statusText);
  //       }
  //     } catch (error) {
  //       setMessage("Error uploading image");
  //       console.error("Error uploading image:", error);
  //     }
  //   } else {
  //     setMessage("No file selected");
  //     console.error("No file selected");
  //   }
  // };

  return (
    <div className="App">
      <ImageUpload />
      {isUserLoggedIn ? (
        <div>
          <Navbar setIsUserLoggedIn={setIsUserLoggedIn} />
          <div className="image-card-parent-container">
            {" "}
            {imageCardData.map((card, key) => (
              <ImageCard key={key} cardDetails={card} />
            ))}
          </div>
        </div>
      ) : (
        <Login setIsUserLoggedIn={setIsUserLoggedIn} />
      )}
    </div>
  );
}

export default App;
