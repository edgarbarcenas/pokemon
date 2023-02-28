////////////////// cURL para Obtener todos los pokemones //////////////////
curl --location 'localhost:3000/pokemon'
`
`
////////////////// cURL para obtener las habilidades de un pokemon //////////////////
curl --location --request GET 'localhost:3000/pokemon/ability/' \
--header 'Content-Type: application/json' \
--data '  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  }'