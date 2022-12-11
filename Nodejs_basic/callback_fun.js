//ฟังก์ชั่นปกติ
function calculate(x,y){
    return (x+y)
}

function display(ans){
    console.log(`ผลบวก = ${ans}`)
}
//ฟังก์ชั่น callback
function calculate_1(x,y,callback){
    console.log("calculating..")
    setTimeout(()=>{
        const w = x+y
        callback(w)
    },3000)
}

function display(answer){
    console.log(`ผลบวก = ${answer}`)
}


//ฟังก์ชั่นปกติ
const sum = calculate(100,50)
display(sum)
//ฟังก์ชั่น callback
calculate_1(25,50,function(answer){
    console.log(`การบวก = ${answer}`)
})