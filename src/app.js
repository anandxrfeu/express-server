const path = require("path")
const express = require("express")

const PORT = process.env.PORT || 3003

const app = express()

const PUBLIC_FOLDER_PATH = path.join(__dirname, "../public")
const TEMPLATE_FOLDER_PATH = path.join(__dirname, "../templates")

app.use(express.static(PUBLIC_FOLDER_PATH))
app.set('view engine','hbs')
app.set('views',TEMPLATE_FOLDER_PATH)

app.get('', (req, res)=>{
    res.send('Hello World! from node')
})

app.get('/help', (req, res)=>{
    res.render('help', {
        name: "Anand"
    })
})

app.listen(PORT, ()=>{
    console.log("Server started on port " + PORT)
})