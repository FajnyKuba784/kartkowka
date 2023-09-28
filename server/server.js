const expres = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = expres()

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database: "zawodowe"


})

con.connect((err)=>{

    if(err){
        console.log(err)


    }
    else console.log("Połączono")

})


app.get("/select",(req,res)=>{

    const sql = `SELECT * FROM kartkowka`

    con.query(sql,(err,result,fields)=>{

        if(err) console.log(err)

        else{
            res.send(result)
            console.log(fields)


        }

    })

})

app.get("/add/:nazwa/:cena",(req,res)=>{

    const nazwa = req.params.nazwa
    const cena = req.params.cena


    const sql = `INSERT INTO kartkowka (Nazwa, Cena) VALUES ("${nazwa}",${cena})`

    con.query(sql,(err,result,fields)=>{

        if(err) console.log(err)

        else{
            
            console.log("Dodano")


        }

    })

})

app.get("/select/minmax/min",(req,res)=>{

    const ez = req.params.ez
    
    
    const sql = `SELECT * FROM kartkowka WHERE 1 ORDER BY Cena `
    
    con.query(sql,(err,result,fields)=>{

        if(err) console.log(err)

        else{
            res.send(result)
            console.log(fields)


        }

    })

})

app.get("/select/minmax/max",(req,res)=>{

    const ez = req.params.ez

    
    const sql = `SELECT * FROM kartkowka WHERE 1 ORDER BY Cena DESC`
    
    con.query(sql,(err,result,fields)=>{

        if(err) console.log(err)

        else{
            res.send(result)
            console.log(fields)


        }

    })

})









app.listen(3000)