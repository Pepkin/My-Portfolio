function fishTank(input) {

    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let procentSpaceTaken = Number(input[3]) / 100 ;

    let tankVolume = l * w * h 
    let tankVolumeInLiters = tankVolume / 1000
    let VolumeForWater = tankVolumeInLiters * (1 - procentSpaceTaken);

    console.log(VolumeForWater)


}

fishTank(
    [
        "85 ",
        "75 ",
        "47 ",
        "17 "
    ]
)