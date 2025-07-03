import { useEffect } from "react";
import Posts from "./components/Posts";

export default function App() {
  return (
    <div className="container">
      <h1>API Integration Example</h1>
      <Posts />
    </div>
  );
}
