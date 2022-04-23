//Example fetch using pokemonapi.co




/*
to get from fetch: 
Pokemon name
pokemon img
pokemon id
type
stats (Attack, hp, defense, etc.)
base abilities


*/


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        console.log(data.forms[0].url)
        

        // pokemon name
        


        // pokemon img
        document.querySelector('img').src = data.sprites.other["official-artwork"].front_default


        // pokemon id
        console.log(data.id)



        // abilities
        data.abilities.forEach((item, i) => {
          console.log(item.ability.name)
        })




       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

