const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Import routers
const homeRoutes = require("./routes/home");
app.use("/", homeRoutes);
const authRoutes = require("./routes/auth");
app.use("/register", authRoutes);

app.listen(PORT, () => {
    console.log("Sever is running on port: ", PORT);
})