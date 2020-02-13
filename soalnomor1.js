const Faktorial=(num)=>{
    output=1
    for(i=num;i>0;i--){
       output*=i
    }
    return output
}
console.log(Faktorial(5)) //120
console.log(Faktorial(4)) //24
console.log(Faktorial(10)) //3628800
console.log(Faktorial(3))
console.log(Faktorial(2))