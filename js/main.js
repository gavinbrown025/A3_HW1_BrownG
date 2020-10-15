(() => {

    //* make an AJAX request using Fetch API
    fetch('./data/classData.json')  //* get the data 
    .then(res => res.json())//* convert it to json
    .then(data => {
        debugger;
        console.log(data);
        //* handleData
        //* Heres where you would call the function thats puts the pieces on the page 
    })

    //* if theres an error catch it and log it
    .catch((err) => {  
        console.log(err);
    })

})();