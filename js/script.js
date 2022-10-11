function getJoke(){
    const apiURL = "https://icanhazdadjoke.com/"
    
    //fetches the api from the url Above, below is an old format of fetch
        fetch(apiURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type" : "Application/json",
            }
        })
        //function that works after fetch, 
        //the response will be the data received when clicking the button 
        .then(function(response){
           return response.json()
        })
        //function that will get the data to be placed on the ID "joke"
        .then(function(data){   
        document.getElementById('joke').innerText = data.joke;
        })
        //logs if an error occurs
        .catch(err=>{
            console.log(err)
        })
    }