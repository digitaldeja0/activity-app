
document.getElementById('btn').addEventListener("click", function(){
  fetch("http://www.boredapi.com/api/activity/")
      .then(response => response.json())
      .then(data => {
        document.getElementById('bored-api-text').innerHTML = `
        <h3> "${data.activity}" <h3/>
        `
      })

})
