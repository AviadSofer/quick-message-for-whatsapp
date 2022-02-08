import express from "express";
import path from "path";

const app = express();

// port
const port = process.env.PORT || 5000;

// add middleware
app.use(express.static(path.join(path.resolve(), "client", "dist")));
app.use(express.static("public"));

// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});
