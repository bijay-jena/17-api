import axios from "axios";

// export async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// }

export async function getPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data; // Axios auto parses JSON
}
