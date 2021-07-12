import axios from "axios";

export default {

  // Registers a user to the database
  createUser: function(userData) {
    return axios.post("api/users/sign-up", userData);
  },

  // Logs in a user
  loginUser: function(loginData) {
    return axios.post("/api/auth/login", loginData);
  }




    // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },


};