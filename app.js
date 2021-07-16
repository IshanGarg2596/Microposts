import "regenerator-runtime/runtime";
import { http } from "./http";

//Get Posts on Dom load
document.addEventListener("DOMContentLoaded", getposts);

function getposts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
