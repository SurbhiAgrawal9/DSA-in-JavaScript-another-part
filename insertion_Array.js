//element insert in Array
let data = [60, 30, 10, 67, 40];
        let newElement = 50;
        let possition = 2;
        console.log(data)
        for (let i = data.length - 1; i >= possition; i--) {
            data[i + 1] = data[i]
            if (i == possition) {
               // data[possition] = newElement  
                    data[i] = newElement;
            }

        }
        console.log(data)
