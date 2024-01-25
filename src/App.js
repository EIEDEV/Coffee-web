import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import Navbar from "./sections/navbar/navbar";
import Review from "./sections/review/review";
import Service from "./sections/service/service";

function App() {
    return (  
        <>
            <Navbar />
            <About />
            <Service />
            <Review />
            <Contact />  
            <Footer />
        </>
    )
}

export default App;