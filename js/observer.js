/* Importing the functionTrending function from the index.js file. */
import { functionTrending} from "./index.js"

/**
 * If the last element is intersecting, then call the functionTrending() function.
 */

const viewport =([e]) => {

    const {isIntersecting,target}=e;

    if(isIntersecting)
    {
        functionTrending()

    }
};

/* Creating a new IntersectionObserver and then exporting it. */

const obsever=new IntersectionObserver(viewport);

/**
 * The getObserver function takes a node as an argument and returns the observer object.
 * @param node - The DOM node to observe.
 */
export const getObserver = (node)=> {
    obsever.observe(node);
};