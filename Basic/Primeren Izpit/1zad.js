function PcStore(input){
    let processorPrice = Number(input[0])
    let GPUPrice = Number(input[1])
    let RAMPrice = Number(input[2])
    let RAMNumber = Number(input[3])
    let discount = Number(input[4])
    let sumInDollar = 0

    let processorPriceInLeva = processorPrice * 1.57
    let GPUPriceInLeva = GPUPrice * 1.57
    let RAMPriceInLeva = RAMPrice * 1.57
    RAMPriceInLeva *= RAMNumber
    let discountProcessor = processorPriceInLeva * (1 - discount)
    let discountGPU = GPUPriceInLeva * (1 - discount)

    sumInLeva = discountGPU + discountProcessor + RAMPriceInLeva 

    console.log(`Money needed - ${sumInLeva.toFixed(2)} leva.`);



}
PcStore(["1200",
"850",
"120",
"4",
"0.1"])