function gramophone(band, album, song){

    let rotationInSeconds = (album.length * band.length) * song.length / 2
    let rotation = rotationInSeconds / 2.5
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')