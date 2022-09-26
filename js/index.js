/* Importing the function getObserver from the file observer.js */
import {getObserver} from "./observer.js"

/* A constant variable that stores the API key. */
const key = "yuQwH8hWO9znSX8hxsApoJFuvEr6HDBY";
/* A constant variable that stores the API url. */
const apiUrlBase = `https://api.giphy.com/v1/gifs`;

/* Getting the element with the id "trendingGifs" and storing it in the variable trendingGifs. */

const trendingGifs=document.getElementById("trendingGifs");
    


let offset =0;

/**
 * This function takes an element and returns an image element with the source and alt attributes set
 * to the original url and title of the element.
 * @param element - the object that contains the gif information
 * @returns the img element.
 */
const  makeGif = (element) => {
    const myGif = document.createElement("img");
    myGif.src=element.images.original.url;
    myGif.alt=element.title;
    return myGif;
};

/**
 * This function fetches data from the Giphy API and returns the data as a JSON object.
 * @returns An array of objects.
 */
const  fetchTrendingData = async () => {
    const  response = await fetch(`${apiUrlBase}/trending?api_key=${key}&limit=10&offset=${offset}`);
    const {data} = await response.json();
    offset+=10;
    return data;
};


/**
 * It fetches data from the Giphy API, converts the data into HTML elements, and appends the elements
 * to the DOM.
 */
export const  functionTrending = async () => {
    const data = await fetchTrendingData();   
    const lastGif =data.pop();
    const lastConvert=makeGif(lastGif);
    getObserver(lastConvert);
    const convertData = data.map((myGif) => makeGif(myGif));
    trendingGifs.append(...convertData);
    trendingGifs.append(lastConvert);
};
    
window.addEventListener("load",functionTrending)




