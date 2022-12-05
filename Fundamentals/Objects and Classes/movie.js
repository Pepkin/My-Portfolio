function movieList(list){
    
    let movies = [];
    let movie = 0

    list.forEach(line =>{
        if(line.includes('addMovie ')){
            let name = line.split('addMovie ')[1];
            movies.push({name});
        }else if(line.includes(' directedBy ')){
            let [name, director] = line.split(' directedBy ');
            movie = movies.find(el => el.name === name)

            if(movie){
                movie.director = director;
            }


        }else if(line.includes(' onDate ')){
            let [name, date] = line.split(' onDate ')
            movie = movies.find(el => el.name === name)

            if(movie){
                movie.date = date;
            }
        }
    })

    console.log(movies);
}
movie([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]
)