const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const templates = [];

router.post('/saveTemplate', (request, response) => {
  const templateData = request.body;
  templates.push(templateData);
});

// add router in the Express app.
app.use("/", router);

router.get("/templates", (req, res) => {
  res.json(templates);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});