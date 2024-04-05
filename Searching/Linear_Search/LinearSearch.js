 let data = [30, 45, 7, 6, 12, 8, 50];
        let serchEl = 12;
        let index = [];
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i] === serchEl) {
                index = i;
                
                // console.log(data[i])
                break;
                
            }
        }
        console.log(index)

  // by Default function 
  console.log(data.indexOf(50))  // 6
