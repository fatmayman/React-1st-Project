import { createRoot } from "react-dom/client"
import Navbar from "./components/Navbar.jsx"
import { MainContent } from "./components/MainContent.jsx"
import "./index.css"

createRoot(document.querySelector("#root")).render(
  <div className="container">
    <Navbar />
    <MainContent />
  </div>
)
