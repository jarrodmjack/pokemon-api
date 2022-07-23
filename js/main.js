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

        // pokemon type 
        // Adding switch statement to change the background color of the card based on the pokemon type
        console.log(data.types[0].type.name)
        let type = data.types[0].type.name
        let background = document.querySelector('.cardContainer')
        document.querySelector('#pokemonType').innerText = type.toUpperCase()

        switch(type){
          case 'normal':
            background.style.backgroundColor = '#a7a677'
          break;
          case 'water':
            background.style.backgroundColor = '#1f93f6'
          break;
          case 'fight':
            background.style.backgroundColor = '#c13129'
          break;
          case 'flying':
            background.style.backgroundColor = '#98a4e0'
          break;
          case 'poison':
            background.style.backgroundColor = '#bb5a9f'
          break;
          case 'ground':
            background.style.backgroundColor = '#e7d4a9'
          break;
          case 'rock':
            background.style.backgroundColor = '#bea563'
          break;
          case 'bug':
            background.style.backgroundColor = '#aabe42'
          break;
          case 'ghost':
            background.style.backgroundColor = '#6762b2'
          break;
          case 'steel':
            background.style.backgroundColor = '#6762b2'
          break;
          case 'fire':
            background.style.backgroundColor = '#fe4833'
          break;
          case 'grass':
            background.style.backgroundColor = '#78d66c'
          break;
          case 'electric':
            background.style.backgroundColor = '#fec446'
          break;
          case 'psychic':
            background.style.backgroundColor = '#fd6fa1'
          break;
          case 'ice':
            background.style.backgroundColor = '#47cee4'
          break;
          case 'dragon':
            background.style.backgroundColor = '#8566f1'
          break;
          case 'dark':
            background.style.backgroundColor = '#765a4e'
          break;
          case 'fairy':
            background.style.backgroundColor = '#fdb6f2'
          break;
        }


// if statement to determine if card needs to be hidden or not
let hide = document.querySelector('.hidden')

if(hide.classList.contains('hidden')){
  hide.classList.remove('hidden')
}



        // abilities
        console.log(data.abilities[0].ability.name)
        console.log(data.abilities[1].ability.name)
        document.querySelector('#ability1').innerText = data.abilities[0].ability.name.toUpperCase()
        document.querySelector('#ability2').innerText = data.abilities[1].ability.name.toUpperCase()
        // data.abilities.forEach((item, i) => {
        //   console.log(item.ability.name)
        // })


        // pokemon stats (attack, def, speed)
        console.log(data.stats[1].base_stat)
        console.log(data.stats[2].base_stat)
        console.log(data.stats[5].base_stat)

        document.querySelector('#attack').innerText = data.stats[1].base_stat
        document.querySelector('#defense').innerText = data.stats[2].base_stat
        document.querySelector('#speed').innerText = data.stats[5].base_stat
      


       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}





