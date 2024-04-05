let data = [20,30,60,54,27,60,50,70];
let position = 2;
for(let i=position;i<=data.length-1;i++){
    data[i] = data[i+1];
    console.log(data[i])
}
data.length =  data.length-1
console.log(data)
