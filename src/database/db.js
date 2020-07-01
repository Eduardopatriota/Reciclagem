//importar dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar objeto que irá fazer operação no banco de dados 

const db = new sqlite3.Database("./src/database/database.db")

module.exports =db

//utilizar banco de dados para nossas operações


db.serialize(() => {
/*
    // com comandos sql eu vou:

    // 1 - criar uma tabel
    
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );  
    `)
    // 2 inserir dados

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
    "http://embalagensdealuminio.com.br/wp-content/uploads/2015/11/img-reciclagem.png",
        "paperside",
        "Rua Adriatico",
        "numero 260",
        "santa catarina",
        "Rio do sul",
        "Residuos eletronicos, lampadas"
]

    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
    
    // 3 consultar dados
    
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }
        console.log("aqui estão seus registros: ")
        console.log(rows)
    })
    
    
    // 4 deletar dados
    
    db.run(`DELETE FROM places WHERE id = ? `, [11], function (err){
        if(err){
            return console.log(err)
        }
        console.log("deletado com sucesso")
    })
    
    */
    
    

}) 

