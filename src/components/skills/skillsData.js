
import csssvg from "./images/css.svg";
import jssvg from "./images/js.svg";
import bootstrapsvg from "./images/bootstrap.svg";
import nodesvg from "./images/node.svg";
import reactsvg from "./images/react.svg";
import html5svg from "./images/html5.svg";



const skillsData = [
    {
        title: 'JAVASCRIPT',
        imgSrc: jssvg,
        imgPosition: 'top',
        text: [
            '3+ years experience',
            'Modren JS concepts like prototypes, closures, promises, asyn/await',
            'DOM manipulation via JS',
            'API use via fetch and Axios ',
            'Got a Hackerrank certificate',
            ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
    {
        title: 'REACT',
        imgSrc: reactsvg,
        imgPosition: 'top',
        text: [
            '2 years experience',
            'Good grasp of React core concepts',
            'Worked with class and function-based components',
            'Used hooks and React-Router',
            'employed React-Bootstrap'
            ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
    {
        title: 'CSS/CSS3',
        imgSrc: csssvg,
        imgPosition: 'top',
        text: [
            '3 years experience',
            'Advanced selectors',
            'responsive apps with flexbox and flexgrid',
            'pseudo elements and classes',
            'custom properties/variables',
            'SASS concepts',
            ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
    {
        title: 'HTML5',
        imgSrc: html5svg,
        imgPosition: 'top',
        text: [
            '3 years experience',
            'HTML5 semantic elements',
            'HTML table and lists',
            'HTML form controls (input, select etc.)',
            ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
    {
        title: 'BOOTSTRAP',
        imgSrc: bootstrapsvg,
        imgPosition: 'top',
        text: [
            'Use Bootstrap version 5',
            'Full grasp of fundamentals',
            'JS with cards, accordions',
            'HTML form controls (input, select etc.)',
            ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
    {
        title: 'NODE/NPM',
        imgSrc: nodesvg,
        imgPosition: 'top',
        text: [
            'Know core concepts/modules ',
            'Http request/response structure ',
            'Server and routing in pure Node',
            'Package.json and NPM CLI',
            'middlewares and routes concepts',
            'routing using Express',
          ],
        buttonVariant: 'success',
        buttonText: 'demo'
    },
];

export default skillsData;

  