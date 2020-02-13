const cekkoin=(koin)=>{
    var a=Math.floor(koin/25)
    var b=Math.floor((koin%25)/10)
    var c=Math.floor(((koin%25)%10)/5)
    var d=Math.floor((((koin%25)%10)%5)/1)
    return a+b+c+d
}
console.log(cekkoin(49)) //7
console.log(cekkoin(31)) //3
console.log(cekkoin(50)) //2
console.log(cekkoin(193))
