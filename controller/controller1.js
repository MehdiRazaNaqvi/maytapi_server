
const axios = require("axios")

const { actuator } = require("../actuators/actuator")


const secret_token = "bb15064c-45a3-4a3e-90ab-2289cef60483"

const headers = { "x-maytapi-key": secret_token }

const product_id = "a4da7f87-db91-4374-a246-f707d38c7e4c"

const phone_id = "27172"



const controller1 = (req, res) => {

    axios.post(`https://api.maytapi.com/api/${product_id}/${phone_id}/sendMessage`, {

        to_number: req.body.phone,
        message: actuator(req.body.question)

        ,
        type: "text"

    }, { headers })

        .then(response => res.send({ data: response.data, msg: actuator(req.body.question) }))
        .catch(err => res.send({ err: "something went wrong" }))








}



module.exports = { controller1 }