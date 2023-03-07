

const actuator = (text) => {



    if (text.toLowerCase().includes("hi") || text.toLowerCase().includes("hello") || text.toLowerCase().includes("hey")) {
       
        return ('Hi how may I help you today? \n \
            1. Balance inquiry \n \
            2. Change pincode \n  \
            3. Learn JavaScript \n \
            4. Make a server')

    } else {
        return ('Sorry I could not get it')
    }






}



module.exports = { actuator }