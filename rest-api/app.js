const express = require("express");
const cors = require("cors");
const scoreController = require("./controllers/score_controller");

const app = express();
app.use(cors());
  

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/score", scoreController);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
