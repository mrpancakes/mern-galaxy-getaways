import axios from "axios";

export default {

  // Registers a user to the database
  createUser: function(userData) {
    return axios.post("api/users/sign-up", userData);
  },

  // Logs in a user
  loginUser: function(loginData) {
    return axios.post("/api/auth/login", loginData);
  },

  // User books a trip
  // bookTrip: function(loginData) {
  //   return axios.post("/api/users/book-trip", loginData);
  // },

  bookTrip: async (tripData) => {
    try {
        let loadedUser;
        // If no token return fail status
        if (!localStorage.userToken) {
            // localStorage.removeItem('token')
            return { status: 401, message: "Unauthorized Token" };
        }
        // Calling out to backend for userdata with their token in the header
        console.log(tripData);
        loadedUser = await axios.post('/api/users/book-trip', tripData, {
            headers: {
                'x-auth-token': localStorage.userToken
            }
        });
        // If no user found return fail status
        if (!loadedUser) return { status: 401, message: "Unauthorized User" }

        // Otherwise return succesfully found userdata
        console.log (loadedUser.data);
        return { status: 200, user: loadedUser.data };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
},

getUserTrips: async () => {
  try {
      let loadedUser;
      // If no token return fail status
      if (!localStorage.userToken) {
          // localStorage.removeItem('token')
          return { status: 401, message: "Unauthorized Token" };
      }
      // Calling out to backend for userdata with their token in the header
      
      loadedUser = await axios.get('/api/users//my-trips', {
          headers: {
              'x-auth-token': localStorage.userToken
          }
      });
      // If no user found return fail status
      if (!loadedUser) return { status: 401, message: "Unauthorized User" }

      // Otherwise return succesfully found userdata
      console.log (loadedUser.data.trips);
      return { status: 200, user: loadedUser.data };
  } catch (error) {
      console.log(error);
      throw new Error(error);
  }
},

deleteTrip: async (tripData) => {
  try {
      let loadedUser;
      // If no token return fail status
      if (!localStorage.userToken) {
          // localStorage.removeItem('token')
          return { status: 401, message: "Unauthorized Token" };
      }
      // Calling out to backend for userdata with their token in the header
      console.log(tripData);
      loadedUser = await axios.delete('/api/users/my-trips/'+tripData, {
          headers: {
              'x-auth-token': localStorage.userToken
          }
      });
      console.log(loadedUser);
      // If no user found return fail status
      if (!loadedUser) return { status: 401, message: "Unauthorized User" }

      // Otherwise return succesfully found userdata
      console.log (loadedUser.data);
      return { status: 200, user: loadedUser.data };
  } catch (error) {
      console.log(error);
      throw new Error(error);
  }
},



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