import java from './images/java.jpg'
import python from './images/python.jpg'
import javascript from './images/javascript.jpg'
import react from './images/react.jpg'
import debugMug from './images/debug-mug.png'
import stackOverflowMug from './images/stackoverflow-mug.png'

const dummyData = [
    {
        id: 663,
        title: 'Java',
        category: 'tshirts',
        price: 19.99,
        searchTerms: ['java', 'coffee'],
        img: java,
        productInfo: 'A great Java-themed shirt'
    },

    {
        id: 456,
        title: 'Python',
        category: 'tshirts',
        price: 19.99,
        searchTerms: ['python', 'snake'],
        img: python,
        productInfo: 'A great Python-themed shirt'
    },

    {
        id: 789,
        title: 'JavaScript',
        category: 'tshirts',
        price: 19.99,
        searchTerms: ['javascript', 'js'],
        img: javascript,
        productInfo: 'A great JavaScript-themed shirt'
    },

    {
        id: 12345,
        title: 'React',
        category: 'tshirts',
        price: 19.99,
        searchTerms: ['react', 'hello world'],
        img: react,
        productInfo: 'A great React-themed shirt'
    },

    {
        id: 5462,
        title: 'Debug Mug',
        category: 'mugs',
        price: 9.99,
        searchTerms: ['mug', 'debug'],
        img: debugMug,
        productInfo: 'Help debug with this relatable mug'
    },

    {
        id: 8946,
        title: 'Stack Overflow Mug',
        category: 'mugs',
        price: 9.99,
        searchTerms: ['stackoverflow', 'mug'],
        img: stackOverflowMug,
        productInfo: 'Drink your coffee in a tribute to the real coding MVP'
    },


]

export default dummyData;