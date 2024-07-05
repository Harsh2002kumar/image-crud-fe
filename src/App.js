import "./App.css";
import ImageCard from "./components/ImageCard/ImageCard";

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
  return (
    <div className="App">
      <div className="image-card-parent-container">
        {" "}
        {imageCardData.map((card, key) => (
          <ImageCard key={key} cardDetails={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
