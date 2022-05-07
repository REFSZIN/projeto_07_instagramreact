import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App (){
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));