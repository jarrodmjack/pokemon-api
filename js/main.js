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
        console.log(data.name)
        document.querySelector('#pokemonName').innerText = data.name.toUpperCase()

        // pokemon HP
        console.log(data.stats[0].base_stat)
        let hp = data.stats[0].base_stat
        document.querySelector('#pokemonHp').innerText = `${hp} HP`

        // pokemon img
        document.querySelector('img').src = data.sprites.other["official-artwork"].front_default





        // abilities
        console.log(data.abilities[0].ability.name)
        console.log(data.abilities[1].ability.name)
        // data.abilities.forEach((item, i) => {
        //   console.log(item.ability.name)
        // })


        // pokemon stats (attack, def, speed)
        console.log(data.stats[1].base_stat)
        console.log(data.stats[2].base_stat)
        console.log(data.stats[5].base_stat)



       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

