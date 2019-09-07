

const callbackReadFile = (err, data) => {
    const extension = /(.md)$/;
    
if(extension.exec(path)){
    let urls = [];
    urls =  geturls(err, data)
    //console.log(urls);
    //urls.forEach(element => {
        resolve(urls);
        
    //});
}
else{
    let error = new Error('Error de lectura, no se trata de un archivo con extensión .md');
    reject(error)
}


}