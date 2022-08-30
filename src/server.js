const express = require("express");
const app = express();
const port = process.env.PORT || 5000

app.use(express.static("public"))

app.listen(5000, () => {
    console.log(`listening on port ${port}`)
});