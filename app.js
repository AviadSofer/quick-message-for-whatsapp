import express from "express";
import path from "path";
import messages from "./routes/messages";

const app = express();

// port
const port = process.env.PORT || 5000;

// add middleware
app.use(express.json());
app.use('/api/messages', messages);
app.use(express.static(path.join(path.resolve(), "client", "dist")));

// start express server on port 5000
app.listen(port, () => {
  console.log("server started on port 5000");
});
