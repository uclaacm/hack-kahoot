const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("hello ")
})

app.listen(PORT, () => {
  console.log("Server live at port:", PORT)
})
