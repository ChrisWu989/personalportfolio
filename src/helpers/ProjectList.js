import Recipe from "../assets/recipe.PNG";
import Number from "../assets/number.PNG";
import Portfolio from "../assets/Portfolio.PNG";
import Dog from "../assets/dog.PNG";

export const ProjectList = [
    {
        name: "Personal Website",
        image: Portfolio,
        description: "Personal Website",
        skills: "ReactJS, NodeJS, CSS, HTML",
        github: "https://github.com/ChrisWu989/personalportfolio",
        demo: "https://chriswu.netlify.app"
    },
    {
        name: "API Recipe Finder",
        image: Recipe,
        description: "Recipe Finder Using API",
        skills: "ReactJS, HTML, CSS, BootStrap, SpoonacularAPI",
        github: "https://github.com/ChrisWu989/recipefinder",
        demo: "https://recipefinder-seven.vercel.app"
    },
    {
        name: "Number Guesser",
        image: Number,
        description: "Practicing Using Python and Flask",
        skills: "Python, Flask, CSS, HTML",
        github: "https://replit.com/@ChrisWu989/guess-the-number#main.py",
        demo: "https://guess-the-number.chriswu989.repl.co"
    },
    {
        name: "Dog Generator",
        image: Dog,
        description: "Practicing Databases and Sessions with Python",
        skills: "Python, Flask, CSS, HTML, Sessions/Cookies",
        github: "https://replit.com/@ChrisWu989/RandomDog#main.py",
        demo: "https://randomdog.chriswu989.repl.co"
    }
];