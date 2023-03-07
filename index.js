

const { controller1 } = require("./controller/controller1")

const express = require("express")

const app = express()
app.use(express.json())


const port = 5000



app.listen(port, () => {

    app.get("/", (req, res) => { res.send("running") })

    app.post("/question", controller1)


})