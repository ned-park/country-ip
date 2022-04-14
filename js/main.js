
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  let ip = document.querySelector('input').value
  fetch(`https://get.geojs.io/v1/ip/country/${ip}.json?`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `${data.ip} is from ${data.name}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}