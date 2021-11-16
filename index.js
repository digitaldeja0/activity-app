
document.getElementById('btn').addEventListener("click", function(){
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById('bored-api-text').innerHTML = `
        <h3> "${data.activity}" <h3/>
        `
      })

})
