const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose
  .connect(
    "mongodb+srv://dvkrishna142000:RYsjhqRbvT5Q4bCw@cluster0.zfkr7.mongodb.net/ProductWebsite?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("MongoDB is connected....");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
const userRoutes = require("./routes/user.route");
const cartRoutes = require("./routes/cart.route");
const wishlistRoutes = require("./routes/wishlist.route");

app.use("/api/users", userRoutes);
app.use("/api/addtocart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);

// Error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(5000, () => {
  console.log("Server is running.....");
});
