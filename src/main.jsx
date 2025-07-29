import { createRoot } from "react-dom/client"
import Navbar from "./components/Navbar"
import { MainContent } from "./components/MainContent"
import "./index.css"

createRoot(document.querySelector("#root")).render(
  <div className="container">
    <Navbar />
    <MainContent />
  </div>
)
