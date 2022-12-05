function loading(number){
    if(number >= 0 && number < 10){
        console.log("0% [..........]");
        console.log("Still loading...");
    }else if(number >= 10 && number < 20){
        console.log("10% [%.........]");
        console.log("Still loading...");
    }else if(number >= 20 && number < 30){
        console.log("20% [%%........]");
        console.log("Still loading...");
    }else if(number >= 30 && number < 40){
        console.log("30% [%%%.......]");
        console.log("Still loading...");
    }else if(number >= 40 && number < 50){
        console.log("40% [%%%%......]");
        console.log("Still loading...");
    }else if(number >= 50 && number < 60){
        console.log("50% [%%%%%.....]");
        console.log("Still loading...");
    }else if(number >= 60 && number < 70){
        console.log("60% [%%%%%%....]");
        console.log("Still loading...");
    }else if(number >= 70 && number < 80){
        console.log("70% [%%%%%%%...]");
        console.log("Still loading...");
    }else if(number >= 80 && number < 90){
        console.log("80% [%%%%%%%%..]");
        console.log("Still loading...");
    }else if(number >= 90 && number < 100){
        console.log("90% [%%%%%%%%%.]");
        console.log("Still loading...");
    }else if(number >= 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}
loading(35)