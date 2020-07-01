const express = require("express")
const server = express()

//pegar o banco de dados

const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))

//habilitar req body

server.use(express.urlencoded ({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})




//configurar caminhos
//pagina inicial
//req: Requisição
//res: Resposta

server.get("/", (req, res) => {
    return res.render("index.html", { title: "um titulo"})
})

//

server.get("/create-point", (req, res) => {

   return res.render("create-point.html" )
})

//

server.post("/savepoint", (req, res) => {
    //req.body: o corpo do nosso formulário
       
    //inserir dados no banco 

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]

    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
        
        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)

})



server.get("/search", (req, res) => {
   
    
    const search = req.query.search
    
    //pegar os dados do banco de dados
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            return console.log(err)
        }
        
        const total = rows.length
        

        if (search == ""){
            return res.render("search-results.html", { places: rows, total})
        }
        //mostrar a pagina html com os dados do banco de dados 

        return res.render("search-results.html", { places: rows, total})
    })

})

// ligar o servidor 
server.listen(3000)