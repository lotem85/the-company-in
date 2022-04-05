const express = require("express");


const routes = require("./routes/routes");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("dist"));
app.use(express.static("public"));


app.use("/api", routes);

const port = 3000;
const server = app.listen(port, () => {
	console.log(`Server is listenning on port http://localhost:${port}`);
});

