import Home from '../PorfolioContainer/Home/Home.js'
import About from '../PorfolioContainer/About/About.js';
import Resume from '../PorfolioContainer/Resume/Resume.js';
import ContactInfo from '../PorfolioContainer/ContactInfo/ContactInfo.js';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "About",
        component: About,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Contact Me",
        component: ContactInfo,
    }, 
];

export const GET_SCREEN_INDEX = (screen_name)=>{
    if(!screen_name) return -1;

    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return -1;
};