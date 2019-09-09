const path = require('path');

//System file
const fs = require('fs');

//Markdownit
const MarkdownIt = require('markdown-it');
md = new MarkdownIt();

//url
const url = require("url");

//request
const request = require('request');

//fetch
const fetch = require('node-fetch');

const inputPath = process.argv[2]; 
// console.log(inputPath)

//convierte la ruta relativa en absoluta
const base = path.resolve('./');
const file = base + inputPath;
console.log(file)
const fileMd = path.extname(file);
console.log(fileMd);

//Leer el archivo
const readArchivo = fs.readFile(file, 'utf-8', (err, data) =>{
    if(err) throw err;
    const mapear = md.parseInline(data, {});
    const tokens = mapear[0].children;
    console.log(tokens.length);
    let linkTokens = [];
    // console.log(tokens)


    tokens.forEach(element =>{
        if(element.type === 'link_open'){
            linkTokens.push({
                href: element.attrs[0][1],
            })
        }
    })
    // console.log(linkTokens)




        let linkUrl =[];
        
        linkTokens.forEach(element =>{
            linkUrl.push(url.parse(element.href)) 
        })
        // console.log(linkUrl)


//obtiene las direcciones href
        let hrefArray = [];
        linkUrl.forEach(element =>{
            if(element.protocol === 'https:'){
                hrefArray.push((element.href))
            }
        })
        // console.log(hrefArray)

//Verifica el status de la dirección

        const verificado = hrefArray.forEach(element =>{
            fetch(element)
            .then(function(response){
                    
                    if(response.ok){
                        let linkOk = [];
                        linkOk.push('Yes')
                    //  return response.status;                        
                        console.log('ok')
                    }else{
                        console.log('fail')
                    }
                    // console.log(linkOk.length)
                })
                .catch(function(err){
                    console.error(err);
                })
        })

        console.log(verificado)

        // let linksOk = [];
        // let linkFail = [];
        // const stadistics = verificado.forEach(element => {           
        //     if(element === 'ok'){
        //         linksOk.push(element)
        //     }else{
        //         linkFail.push(element)
        //     }
        //     console.log(linksOk.length)
        // })

       
            // fetch('https://www.genbeta.com/desarrollo/node-js-y-npm')
            //     .then(function(response){
            //              if(response.ok){
            //                 //  return response.status;
            //                  console.log('ok')
            //              }else{
            //                  console.log('fail')
            //              }

            //             // return response.status;
            //     })
            //     .catch(function(err){
            //         console.error(err);
            //     })
})