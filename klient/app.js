var json = []
async function getData(){

    const data = await fetch("http://localhost:3000/select")
    const json = await data.json()

    console.log(json)

    zrob()

    function zrob(){
    
        document.getElementById("divy").innerHTML = ""
    
        for(let i=0; i<=json.length-1; i++){
    
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const h2 = document.createElement("h2")
        const divy = document.getElementById("divy")
        divy.appendChild(div)
        h1.innerHTML = json[i].Nazwa
        h2.innerHTML = json[i].Cena
        div.appendChild(h1)
        div.appendChild(h2)
        console.log("sperma")
        }
    }
}



getData()


async function zrob(id){



    const data = await fetch(`http://localhost:3000/select/minmax/${id}`)
    const json = await data.json()

    zrob()

    console.log(json)

    function zrob(){
    
        document.getElementById("divy").innerHTML = ""
    
        for(let i=0; i<=json.length-1; i++){
    
        const div = document.createElement("div")
        const h1 = document.createElement("h1")
        const h2 = document.createElement("h2")
        const divy = document.getElementById("divy")
        divy.appendChild(div)
        h1.innerHTML = json[i].Nazwa
        h2.innerHTML = json[i].Cena
        div.appendChild(h1)
        div.appendChild(h2)
        console.log("sperma")
        }
    }


}


async function dodaj(){

    const nazwa = document.getElementById("nazwa").value
    const cena = parseInt(document.getElementById("cena").value)

    const data = await fetch(`http://localhost:3000/add/${nazwa}/${cena}`)
    




}


