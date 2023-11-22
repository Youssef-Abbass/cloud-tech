import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FaAccessibleIcon } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { SiTwitter } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";















export default function Footer(){

    library.add(faFacebook); 
    return(

        <>
         <div class="footer">
      <div class="container">
        <div class="box">
          <h3>Cloud Tech</h3>
          <ul class="social">
            <li>
              <a href="#" class="facebook">
              <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" class="twitter">
              <SiTwitter />
              </a>
            </li>
            <li>
              <a href="#" class="youtube">
              <BsYoutube />
              </a>
            </li>
          </ul>
          <p class="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p>
        </div>
        <div class="box">
          <ul class="links">
            <li><a href="#">Important Link 1</a></li>
            <li><a href="#">Important Link 2</a></li>
            <li><a href="#">Important Link 3</a></li>
            <li><a href="#">Important Link 4</a></li>
            <li><a href="#">Important Link 5</a></li>
          </ul>
        </div>
        <div class="box">
          <div class="line">
          
          <i class="fas fa-map-marker-alt fa-fw"><RiMapPin2Fill /></i>
            <div class="info">Damascus, Bahsa, AL-Halabi building F1</div>
          </div>
          <div class="line">
            <i class="far fa-clock fa-fw"><FaRegClock /></i>
            <div class="info">Business Hours: From 9:00 To 17:00</div>
          </div>
          <div class="line">
            <i class="far fa-clock fa-fw"><IoMailOpenOutline /></i>
            <div class="info">info@cloudtech-it.com</div>
          </div>
          <div class="line">
            <i class="fas fa-phone-volume fa-fw"><FaPhoneVolume /></i>
            <div class="info">
              <span>+963-933 228 568 </span>
              <span></span>
            </div>
          </div>
        </div>

      </div>
      <p class="copyright">Made With  By Eng.Youssef Abbas</p>
    </div>
        
        </>
    )




}