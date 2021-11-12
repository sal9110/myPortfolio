require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 4001 || process.env.PORT

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((e) => console.log(e))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
