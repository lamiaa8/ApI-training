

let allRecipes = []

let httpReq = new XMLHttpRequest()

httpReq.open("GET" , "https://forkify-api.herokuapp.com/api/search?q=pizza")
httpReq.send()
httpReq.addEventListener("readystatechange" , function(){
    if( httpReq.status == 200 && httpReq.readyState == 4 ){
        allRecipes = JSON.parse(httpReq.response).recipes
        
        displayAllRecipes(1)
        localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
    }
})


function displayAllRecipes(l){
    let allRecipesBox = "" ;
    if( l == 1 ){
        for (let i = 0; i < 6; i++) {
            allRecipesBox+=`
            <div class="col-lg-4">
            <div class="card"  >
                <img src="${allRecipes[i].image_url}" class="card-img-top img_item" onclick="clickevent(${i})" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[i].publisher}</h5>
                    <p class="card-text">${allRecipes[i].title}</p>
                    <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("row").innerHTML = allRecipesBox
        document.getElementById("butTwo").classList.remove("active")
        document.getElementById("butOne").classList.add("active");
        document.getElementById("butThree").classList.remove("active")
        document.getElementById("butFour").classList.remove("active")

    }
    else if (l == 2) {
        for (let i = 6; i < 12; i++) {
            allRecipesBox+=`
            <div class="col-lg-4">
            <div class="card"  >
                <img src="${allRecipes[i].image_url}" class="card-img-top img_item" onclick="clickevent(${i})" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[i].publisher}</h5>
                    <p class="card-text">${allRecipes[i].title}</p>
                    <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("row").innerHTML = allRecipesBox;
        document.getElementById("butOne").classList.remove("active")
        document.getElementById("butTwo").classList.add("active");
        document.getElementById("butThree").classList.remove("active")
        document.getElementById("butFour").classList.remove("active")



        
    } else if (l == 3){
        for (let i = 12; i < 18; i++) {
            allRecipesBox+=`
            <div class="col-lg-4">
            <div class="card"  >
                <img src="${allRecipes[i].image_url}" class="card-img-top img_item" onclick="clickevent(${i})" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[i].publisher}</h5>
                    <p class="card-text">${allRecipes[i].title}</p>
                    <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("row").innerHTML = allRecipesBox;
        document.getElementById("butOne").classList.remove("active")
        document.getElementById("butTwo").classList.remove("active");
        document.getElementById("butThree").classList.add("active")
        document.getElementById("butFour").classList.remove("active")



    }
    else{
        for (let i = 18; i < allRecipes.length; i++) {
            allRecipesBox+=`
            <div class="col-lg-4">
            <div class="card"  >
                <img src="${allRecipes[i].image_url}" class="card-img-top img_item" onclick="clickevent(${i})" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[i].publisher}</h5>
                    <p class="card-text">${allRecipes[i].title}</p>
                    <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("row").innerHTML = allRecipesBox
        document.getElementById("butOne").classList.remove("active")
        document.getElementById("butTwo").classList.remove("active");
        document.getElementById("butThree").classList.remove("active")
        document.getElementById("butFour").classList.add("active")


    }
        
    

    }
    



    

// /////////////////////////////////////

let imgs = Array.from(document.getElementsByClassName("img_item"))
let lightBoxContainer = document.getElementById("lightBoxContainer")
let lightBoxItem = document.getElementById("lightBoxItem")


var currentIndexSlid = 0 ;

function clickevent(i){
    currentIndexSlid = i ;
    lightBoxContainer.style.opacity = "1";
    lightBoxContainer.style.visibility = "visible";
    // // lightBoxItem.style.width="650px";
    // // lightBoxItem.style.height = "500px";
    lightBoxItem.classList.add("action");
    if(i+6 <= allRecipes.length){
        lightBoxItem.innerHTML = `
    <div>
                    <div class="mySlides">
                        <img src="${allRecipes[i].image_url}" alt=" ">
                    </div>
                    <i id="prev" class="cursor far m-2 fa-arrow-alt-circle-left" onclick ="prevSlide()"></i> 
                    <i id="next" class="cursor far m-2 fa-arrow-alt-circle-right" onclick ="nextSlide()"></i> 
                    <i id="close" class="cursor far fa-times-circle"onclick ="closeSlide()"></i>
    
                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>
                
                    <div class="row row-img-slider">
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+1].image_url}"  onclick="clickevent(${i+1})" alt="The Woods">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+2].image_url}"  onclick="clickevent(${i+2})" alt="Cinque Terre">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+3].image_url}"  onclick="clickevent(${i+3})" alt="Mountains and fjords">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+4].image_url}" onclick="clickevent(${i+4})" alt="Northern Lights">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+5].image_url}"  onclick="clickevent(${i+5})" alt="Nature and sunrise">
                        </div>    
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i+6].image_url}"  onclick="clickevent(${i+6})" alt="Snowy Mountains">
                        </div>
                    </div>
                </div>
    ` ;

    }
    else{
        lightBoxItem.innerHTML = `
    <div>
                    <div class="mySlides">
                        <img src="${allRecipes[i].image_url}" alt=" ">
                    </div>
                    <i id="prev" class="cursor far m-2 fa-arrow-alt-circle-left" onclick ="prevSlide()"></i> 
                    <i id="next" class="cursor far m-2 fa-arrow-alt-circle-right" onclick ="nextSlide()"></i> 
                    <i id="close" class="cursor far fa-times-circle"onclick ="closeSlide()"></i>
                    <div class="row row-img-slider">
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-1].image_url}"  onclick="clickevent(${i-1})" alt="The Woods">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-2].image_url}"  onclick="clickevent(${i-2})" alt="Cinque Terre">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-3].image_url}"  onclick="clickevent(${i-3})" alt="Mountains and fjords">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-4].image_url}" onclick="clickevent(${i-4})" alt="Northern Lights">
                        </div>
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-5].image_url}"  onclick="clickevent(${i-5})" alt="Nature and sunrise">
                        </div>    
                        <div class="column">
                            <img class="demo cursor" src="${allRecipes[i-6].image_url}"  onclick="clickevent(${i-6})" alt="Snowy Mountains">
                        </div>
                    </div>
                </div>
    ` ;
    }
}








// nextSlide
function nextSlide(){
    currentIndexSlid++
    if (currentIndexSlid == allRecipes.length   ){
        currentIndexSlid = 0
    }
    clickevent(currentIndexSlid)
}

//closeSlide
function closeSlide(){
    lightBoxContainer.style.opacity = "0";
    lightBoxContainer.style.visibility = "hidden";
    lightBoxItem.classList.remove("action");
    lightBoxItem.innerHTML = "";
}

//prev
function prevSlide(){
    currentIndexSlid--
    if (currentIndexSlid <  0  ){
        currentIndexSlid = allRecipes.length -1
    }
    clickevent(currentIndexSlid);
}

// 
document.addEventListener("keydown" , function(e){
    if(e.keyCode == 39){
    nextSlide()
    }
    else if (e.keyCode == 37){
    prevSlide()
    }
    else if (e.keyCode == 27 ){
    closeSlide()
    }
})





/// Search funtion 

function searchProduct(term) {
    let productList = ""
    for (let i = 0; i < allRecipes.length; i++) {
        if (allRecipes[i].publisher.includes(term.trim()) == true) {
            productList+=`
            <div class="col-lg-6">
            <div class="card"  >
                <img src="${allRecipes[i].image_url}" class="card-img-top img_item" onclick="clickevent(${i})" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${allRecipes[i].publisher}</h5>
                    <p class="card-text">${allRecipes[i].title}</p>
                    <a href="${allRecipes[i].publisher_url}" class="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
            `
        }
        document.getElementById("row").innerHTML = productList;

    }
}
