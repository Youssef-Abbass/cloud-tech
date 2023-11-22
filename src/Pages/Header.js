
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export  default function Header (){


    return(
        <>
           
    <div class="header" id="header">
      <div class="container">
        <a href="#" class="logo">Cloud Tech</a>
        <ul class="main-nav">
          <li><a href="#articles">Home</a></li>
          <li><a href="#gallery">Our Products</a></li>
          <li><a href="#features">Sign in</a></li>
          <li>
            <a href="#">Our Clients</a>
           
            <div class="mega-menu">
              <div class="image">
                <img  decoding="async" src="imgs/megamenu.png" alt="" />
              </div>
              <ul class="links">
                <li>
                 <div className='divclient'> <img className='imgclient' src={require('./view.jpg')}></img> <a href="#testimonials">View</a> </div>
                </li>
                <li>
                  <a href="#team"><i class="far fa-user fa-fw"></i> Emma Tel</a>
                </li>
                <li>
                  <a href="#services"><i class="far fa-building fa-fw"></i> DHL</a>
                </li>
                <li>
                  <a href="#our-skills"><i class="far fa-check-circle fa-fw"></i> Sama Net</a>
                </li>
                <li>
                  <a href="#work-steps"><i class="far fa-clipboard fa-fw"></i> Raki</a>
                </li>
              </ul>
              <ul class="links">
                <li>
                  <a href="#events"><i class="far fa-calendar-alt fa-fw"></i> Bahri</a>
                </li>
                <li>
                  <a href="#pricing"><i class="fas fa-server fa-fw"></i> Haram</a>
                </li>
                <li>
                  <a href="#video"><i class="far fa-play-circle fa-fw"></i> Stral</a>
                </li>
                <li>
                  <a href="#stats"><i class="far fa-chart-bar fa-fw"></i> View</a>
                </li>
                <li>
                  <a href="#discount"><i class="fas fa-percent fa-fw"></i> View</a>
                </li>
              </ul>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
    <div class="landing">
      <div class="container">
        <div class="text">
          <h1>Welcome, To Cloud Tech</h1>
          <p>Cloud Tech is a leading company in the field of technology and IT solutions.
we have provided a remarkable service for a big slide of the companies, agencies, banks, trademarks, global plus local organizations and VIP customers successfully since the company launch till now, we and our customers are so satisfied, relief and proud with the results and work done.
</p>
        </div>
        <div class="image">
          <img decoding="async" src={require('./header.jpg')} alt="" />
        </div>
      </div>
      <a href="#articles" class="go-down">
      
      </a>
    </div>
        </>
    )
} 