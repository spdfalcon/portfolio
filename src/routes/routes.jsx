import Home from "../pages/Home/Home"
import AboutMe from "../pages/About Me/AboutMe"
import Work from "../pages/Work/Work"
import SingleWork from "../pages/SingleWork/SingleWork"
import ContactUs from "../pages/ContactUs/ContactUs"

const routes = [
{path:'/' , element:<Home></Home>},
{path:'/about-me' , element:<AboutMe></AboutMe>},
{path:'/work' , element:<Work></Work>},
{path:'/contact-us' , element:<ContactUs></ContactUs>},
{path:'/work/:workID' , element:<SingleWork></SingleWork> }
]


export default routes