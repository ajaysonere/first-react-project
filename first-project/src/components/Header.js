import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'

export function Header(){
    return(
       <>
         <nav>
             <h1>TECH STAR.</h1>
             <main>
                 <ul>
                   <li><HashLink to="/#home"> Home </HashLink></li>
                    <li><Link to="/contect"> Contect </Link></li>
                    <li><HashLink to="/#about"> About </HashLink></li>
                    <li><HashLink to="/#brands"> Brands</HashLink></li>
                    <li><Link to="/services"> Services </Link></li>
                 </ul>
             </main>
         </nav>
       </>
    );
}