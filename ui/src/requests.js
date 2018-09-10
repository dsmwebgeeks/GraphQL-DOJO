const endPoint = 'http://localhost:3000/'

export async function graphqlRequest(query, variables = {}) {
  try {
    let response = await fetch(endPoint, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({query, variables})
    });
    let responseBody = await response.json()
    return responseBody.data
  }
  catch(e) {
    console.log('Error!', e);
  }
}

export async function loadPokemon(id) {
  const query = `query Pokemon($id: ID!) {
    Pokemon(id: $id) {
      id
      name
      ThumbnailImage
    }
  }`;
  const pokemon = await graphqlRequest(query, {id});
  return pokemon;
}

