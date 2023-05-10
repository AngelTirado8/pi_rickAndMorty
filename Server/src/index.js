const express = require('express');
const router = require("./routes")
const server = express();

const PORT = 3001;

server.use((req, res, next) =>{
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   next();
});

server.use(express.json())

server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

//1h7


// const http= require('http');
// const characters = require('./utils/data.js');
// const getCharById = require("./controllers/getCharById.js")

// const PORT = 3001;


// http.createServer((req, res) =>{
//     console.log('active port')
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url}= req;
    

//         // promesas-----------------
        
//         if(url.includes('/rickandmorty/character/')){
//             const urlId = parseInt(url.split("/").pop())
//             getCharById(res, urlId);
//         }
// })

// .listen(PORT, "localhost")
// //  ()=>console.log('Escuchando en el puerto ' + PORT))
                    