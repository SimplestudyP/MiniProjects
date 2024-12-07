const URL=" https://v2.jokeapi.dev/joke/Any?type=single" //cat fact
const URL2="https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Captain&apikey=af91d9e341738cd1b1e3f8458581fabc" //marvel season data

async function getCatFact()
{
    let response=await fetch(URL)
    console.log(response)
    let data=await response.json()
    console.log(data.joke); 
}
async function getMarvelData()
{
    let response=await fetch(URL2)
    console.log(response)
    let data=await response.json()
    /*let playerName="pzquare"
    data.array.forEach(name => {
        if(name.displayName==playerName)
            console.log(name.uuis);
    });*/
    console.log(data); 
}