(() => {

    //* make an AJAX request using Fetch API
    fetch('./data/classData.json')  //* get the data 
        .then(res => res.json())//* convert it to json
        .then(data => {
            
            //* handleData
            //* Heres where you would call the function thats puts the pieces on the page           
            
            let classInfo = document.querySelector('.profPanelText').children;
            let profImg = document.querySelector('.profPanel img');            
            
            let courseCode = document.querySelector('.text-primary');
            courseCode.innerHTML = data.coursecode;                      
            
            console.log(data);            

            //* ____Pop up section____
            profImg.src = `images/${data.profimg}`;
            
            classInfo[0].textContent = (data.coursename + " - ");
            classInfo[0].appendChild(courseCode);        
            classInfo[1].textContent = data.profname;
            
            //* I added li's to the ul in html
            classInfo[2].children[0].textContent = data.classtime[0];
            classInfo[2].children[1].textContent = data.classtime[1];            
            
            
            //* ____description section section____
            let ClassInfoLarge = document.querySelector('.courseInfo').children;

            console.log(ClassInfoLarge);

            ClassInfoLarge[0].textContent = data.coursename + " - " + data.coursecode;
            ClassInfoLarge[2].textContent = data.coursedesc;

        })

        //* if theres an error catch it and log it
        .catch((err) => {
            console.log(err);
        })

})();