const url1 ="file.dev/file.js"

function downloading(url,callback){
    //console.log(`Downloadin = ${url}`)
    console.log(`Downloading from ${url}`)
    setTimeout(()=>{
        
        callback()
    },5000)
}

function complete(){
    console.log("complete download")
}

downloading(url1,complete)