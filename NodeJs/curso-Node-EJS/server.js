const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicacões/servicos de forma facil"
        },
        { 
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        { 
            title: "M",
            message: "uito facil de usar"
        },
        { 
            title: "A",
            message: "morzinho"
        },
        { 
            title: "I",
            message: "nstall EJS"
        },
        { 
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criacão de HTML utiizando JavaScript"
    res.render("pages/index",{
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Servidor funcinando!")