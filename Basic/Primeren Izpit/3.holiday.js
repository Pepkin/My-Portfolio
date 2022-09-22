function holiday(input){
    let nights = Number(input[0]) - 1
    let room = input[1]
    let rate = input[2]
    let sum = 0

    switch(room){
        case "room for one person":
            if(nights < 10){
                sum = nights * 18
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 10 && nights <= 15){
                sum = nights * 18
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 15){
                sum = nights * 18
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }
            break
        case "apartment":
            if(nights < 10){
                sum = nights * 25
                sum = sum * 0.7
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 10 && nights <= 15){
                sum = nights * 25
                sum = sum * 0.65
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 15){
                sum = nights * 25
                sum = sum * 0.5
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }
            break
        case "president apartment":
            if(nights < 10){
                sum = nights * 35
                sum = sum * 0.9
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 10 && nights <= 15){
                sum = nights * 35
                sum = sum * 0.75
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }else if(nights > 15){
                sum = nights * 35
                sum = sum * 0.8
                if(rate === "positive"){
                    sum = sum * 1.25
                }else if(rate === "negative"){
                    sum = sum * 0.9
                }
            }
            break
    }    
    console.log(sum.toFixed(2));
}
holiday(["30",
"president apartment",
"negative"])