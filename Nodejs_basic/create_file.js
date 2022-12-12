const url1 ="file.dev/file.js"
const url2 ="happy.dev/file.js"
const url3 ="resident.dev/file.js"

function downloading(url,callback){
    //console.log(`Downloadin = ${url}`)
    console.log(`Downloading from ${url}`)
    setTimeout(()=>{
        
        callback(url)
    },2000)
}

downloading(url1,function(result){
    console.log(`Download ${result} completed`)
    downloading(url2,function(result){
        console.log(`Download ${result} completed`)
        downloading(url3,function(result){
            console.log(`Download ${result} completed`)
        })
    })
})
