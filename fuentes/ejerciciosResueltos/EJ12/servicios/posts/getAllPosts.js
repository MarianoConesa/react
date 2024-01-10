export function getAllPosts () {

      // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
      // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
      // una promesa, la respuesta de la REST API es los que devolvemos
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const data = response.json();
            console.log(data);
            return data;
      })
}