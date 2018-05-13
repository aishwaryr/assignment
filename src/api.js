import axios from "axios";

const URL = "https://api.myjson.com/bins/1dlper";

export function fetchStudents() {
  const request = axios.get(URL);
  request
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  return request;
}
