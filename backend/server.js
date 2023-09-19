const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())

const PORT = 8000

app.use(
    cors({
        origin: "*"
    })
)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use('/vechile', (req, res) => {
    try {
        const url = 'http://vehicletrack.biz/api/companyvehiclelatestinfo/?token=C_3BD0B0A02B'
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                res.status(200).send({
                    status:200,
                    message:'API Fetched',
                    data:data
                })
            })
    }catch(err){
        console.log(err)
    }
})