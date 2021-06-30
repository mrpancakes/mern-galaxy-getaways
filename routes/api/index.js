const router = require("express").Router();
const bookRoutes = require("./books"); // change to the actual name of the local /api file

// Update to actual name required in
router.use("/books", bookRoutes);

module.exports = router;
