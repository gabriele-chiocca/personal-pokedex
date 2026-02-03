const loader = document.getElementById('loader');
const containerpoke = document.getElementById('pokecontainer');

axios
  .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then((response) => {
    pokecontent = response.data.results;
    console.log(pokecontent);
    let containerhtml = '';

    loader.classList.add('d-none');

    for (let i = 0; i < pokecontent.length; i++) {
      const { name, url } = pokecontent[i];

      containerhtml += `<div class="col-12 col-xxl-4 col-xl-4 col-lg-6 col-md-6 gy-5">

    <div class="card" style="width: 18rem;" data-id = ${i}>
  <img class="card-img-top" alt="Card image cap">

  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <a href="#" class="btn btn-primary">More info</a>
  </div>
</div>
</div>`;
    }

    containerpoke.innerHTML = containerhtml;
  })
  .catch(function (error) {
    console.log('Error Notification');
    loader.classList.add('d-none');
  });
