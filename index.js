import express from "express"
import cors from "cors"

const app = express()
const port = 3000

var corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    const json = JSON.stringify({
        nome: "Bem vindo" +  " " + req.query.nome,
        idade: req.query.idade > 30 ? `Rapaaz, ta velinho em!! Já está com ${req.query.idade}` : `Rico bem noviim, só ${req.query.idade} anos`
    })
  res.send(json)
})

app.listen(port, () => {
  console.log(`Backend rodando no local e porta ${port}`)
})


