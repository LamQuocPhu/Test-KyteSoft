import React, {useState} from "react";
import '../styles/ScrollToTopBtn.scss';

export default function ScrollToTopBtn() {
    const ScrollBtn = () => {
        const [visble, setVisble] = useState(false);
        const toggleVisble = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300){
                setVisble(true);
            }
            else if (scrolled < 300 ) {
                setVisble(false);
            }
        };
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
                // behavior: 'auto'
            })
        };
        window.addEventListener('scroll', toggleVisble);
    }
    return (
        <button onclick="scrollToTop()" className="btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
            <i class="fa fa-arrow-up"></i>
        </button>
    );
}