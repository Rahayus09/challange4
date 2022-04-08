import React from 'react'

function Header() {
    return (
 <nav class="navbar navbar-expand-sm" >
     <div class="container">
         <div class="navbar-collapse justify-content-end">
             <ul class="navbar-nav ms-auto mb-2 mb-lg-1">
                 <div class="navbar-collapse justify-content-end">
                     <ul class="navbar-nav ms-auto mb-2 mb-lg-1">
                         <li class="nav-item">
                             <a class="nav-link" href="# ">Our Service</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link" href="#Why Us">Why Us</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link" href="#Testimonial">Testimonial</a>
                         </li>
                         <li class="nav-item">
                             <a class="nav-link" href="#FAQ">FAQ</a>
                         </li>
                         <li class="nav-item">
                             <button class="btn btn-success">Register</button>
                         </li>
                     </ul>
                 </div>
            </ul>
     </div>
     </div>
 </nav>

    )
}
export default Header;