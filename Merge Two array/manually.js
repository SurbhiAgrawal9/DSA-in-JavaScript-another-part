let data = [2,3,60,48,20];
let data2 = [40,21,45,60];
let data3 = [];

for(i=0;i<data.length;i++){
    data3[i] = data[i];
    
}

for(i=0;i<data2.length;i++){
    data3[data.length] = data2[i];
    console.log(data.length)
}
console.log(data3)
