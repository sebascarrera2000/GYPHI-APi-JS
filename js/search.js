/* Creating a constant variable called SearchGifs and assigning it the value of the element with the id
of SearchGifs. */
const SearchGifs =document.getElementById("SearchGifs");
const Searches =document.getElementById("SearchsRecent");
const LastQuerrys = JSON.parse(localStorage.getItem("Searches")) || [];


/**
 * This function takes an object as an argument and returns an image element with the source and alt
 * attributes set to the original url and title of the object.
 * @param element - the object that contains the gif information
 * @returns the img element with the src and alt attributes set.
 */

const  makeGif = (element) => {
  const myGif = document.createElement("img");
  myGif.src=element.images.original.url;
  myGif.alt=element.title;
  return myGif;
};

const  makeTextSearch = (element) => {
  const mytext = document.createElement("p");
  mytext.txt= element.value;
  return mytext;
};


/**
 * It takes the user input, makes a request to the Giphy API, and then displays the results on the
 * page.
 * @returns the data.json()
 */
function SearchEndPointRequest() {


    var userInput = document.getElementById("TextSearch").value
    LastQuerrys.push(userInput)
    LastQuerrys.length > 3 ? LastQuerrys.shift() : LastQuerrys
    localStorage.setItem("searches", JSON.stringify(LastQuerrys))

    var Key = "yuQwH8hWO9znSX8hxsApoJFuvEr6HDBY"
    var apiUrlBase = `https://api.giphy.com/v1/gifs`;
    var giphyApiURL = `${apiUrlBase}/search?q=${userInput}&api_key=${Key}&limit=10`
    fetch(giphyApiURL).then(function(data) {
        return data.json()
       
    })
    .then(function(json){
      var {data}=json
      /**
      La prueba es con el searchworkey fernanfloo debido a que no existe
      */
      if (data!=0)
      {
        const convertData = data.map((myGif) => makeGif(myGif));
        SearchGifs.append(...convertData);
      }

      else
      {
        const image = document.createElement('img')
        image.src  = 'img/triste.gif'
        SearchGifs.append(" Lo siento no existe ningun gif con esa con la busqueda ","  ",userInput," " ,  );
        SearchGifs.appendChild(image)
      }

    })

    document.getElementById("TextSearch").value="";

  };


function clearGuiphy()
{
  SearchGifs.innerHTML="";
};


function GMlocalStorage ()
{
        Searches.append(LastQuerrys)

};



function SearchEndPointRecent() {


    var userInput = document.getElementById("Searchs").value
    var Key = "yuQwH8hWO9znSX8hxsApoJFuvEr6HDBY"
    var apiUrlBase = `https://api.giphy.com/v1/gifs`;
    var giphyApiURL = `${apiUrlBase}/search?q=${userInput}&api_key=${Key}&limit=10`
    fetch(giphyApiURL).then(function(data) {
        return data.json()
       
    })
    .then(function(json){
      var {data}=json
      /**
      La prueba es con el searchworkey fernanfloo debido a que no existe
      */
      if (data!=0)
      {
        const convertData = data.map((myGif) => makeGif(myGif));
        SearchGifs.append(...convertData);
      }

      else
      {
        const image = document.createElement('img')
        image.src  = 'img/triste.gif'
        SearchGifs.append(" Lo siento no existe ningun gif con esa con la busqueda ","  ",userInput," " ,  );
        SearchGifs.appendChild(image)
      }

    })


  };
