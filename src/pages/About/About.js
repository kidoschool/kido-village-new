import React, {useState ,useEffect} from 'react';
import AboutBanner from '../../assets/about_banner1.jpg';
import SchoolNetwork from '../../assets/school-network-bn.jpg';
import Map3 from "../../components/Map/Map3";
import { isMobile } from "react-device-detect";

function About(props){

    const centerContents1 = {"centers" : [
        {
            "id": 7106,
            "name": "Safari Kid Chembur Preschool and Day care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Crystal III, Sindhi Society, Chembur, Mumbai -400071</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:chembur@safarikidindia.com\">chembur@safarikidindia.com</a><br><a href=\"tel:9817769817\">9817769817</a><br></p>",
            "img": "https://china.kido.school/assets/Safari-Kid-Chembur-1.jpg",
            "lng": 72.89224,
            "lat": 19.04276,
            "city": 6863,
            
        },
        {
            "id": 7081,
            "name": "Safari Kid Indiranagar Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>NO 1074-G, MAIN ROAD HAL 2ND STAGE, INDIRANAGAR,Bengaluru  Urban, Karnataka, 560038</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:indiranagar@safarikidindia.com\">indiranagar@safarikidindia.com</a><br><a href=\"tel:6364338080/ 6364337070\">6364338080/ 6364337070</a><br></p>",
            "img": "https://china.kido.school/assets/IMG-20180111-WA0000.jpg",
            "lng": 77.63844,
            "lat": 12.97094,
            "city": 6863
            
        },
        {
            "id": 7078,
            "name": "Safari Kid Kalyan Nagar Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>No 5C-705, 5th Cross Rd, 7th Main Rd, HRBR Layout, First Block, Kalyan Nagar, Bengaluru, Karnataka  560043</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:prm.kalyannagar@safarikidindia.com\">prm.kalyannagar@safarikidindia.com</a><br><a href=\"tel:8494939398\">8494939398</a><br></p>",
            "img": "https://china.kido.school/assets/Safari-Kid-Kalyan-Nagar.jpg",
            "lng": 77.63286,
            "lat": 13.025718,
            "city": 6863
        }, 
        {
            "id": 7075,
            "name": "Safari Kid HSR Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>51, MCHS Layout, 15th A Cross Road, Sector 4, HSR Layout, Near BDA Complex, Bangalore 560102, India<br />\r\n</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:hsr@safarikidindia.com\">hsr@safarikidindia.com</a><br><a href=\"tel:9148500002/ 9148500003\">9148500002/ 9148500003</a><br></p>",
            "img": "https://china.kido.school/assets/sAFARI-kiD-HSR.jpeg",
            "lng": 77.639356,
            "lat": 12.913719,
            "city": 6863
        },
        {
            "id": 7072,
            "name": "Safari Kid Sadashiva Nagar Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>No 16, 2nd Main Rd, 13 cross, Vyalikaval, Adjacent to ICICI bank, Sadashiva Nagar Branch, Bengaluru, Karnataka 560003</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:ssn@safarikidindia.com\">ssn@safarikidindia.com</a><br><a href=\"tel:6366 555 700\">6366 555 700</a><br></p>",
            "img": "https://china.kido.school/assets/images/safari-Kid-Sadashiva-Nagar-1.jpeg",
            "lng": 77.578349,
            "lat": 13.0039072,
            "city": 6863
        },
        {
            "id": 7069,
            "name": "Safari Kid Whitefield Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>The Sommer House,186/A, Opp Forum Value Mall, Whitefield, Bangalore 560066, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:whitefield@safarikidindia.com\">whitefield@safarikidindia.com</a><br><a href=\"tel:9513138400/9513138500\">9513138400/9513138500</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safri-Kid-Whitefield-scaled.jpg",
            "lng": 77.746849,
            "lat": 12.960055,
            "city": 6863
           
        },
        {
            "id": 7062,
            "name": "Safari Kid Jubilee Hills Nursery and Daycare",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>1175, Road number 55, CBI Colony, Jubilee Hills, Hyderabad, Telegana. - 500033 ( Current name for the address Jyothi Srinivasam apts)</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:jubileehills@safarikidindia.com\">jubileehills@safarikidindia.com</a><br><a href=\"tel:91 9963943343\">91 9963943343</a><br></p>",
            "img": "https://china.kido.school/assets/images/World-class-infrastructure-1-1.jpg",
            "lng": 78.40526,
            "lat": 17.42912,
            "city": 6863
            
        },
        {
            "id": 7059,
            "name": "Safari Kid Kowdiar Nursery and Daycare",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>TC 9/427 A, 19. Jawahar Nagar, Trivandrum, Kerala 695003</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:kowdiar@safarikidindia.com\">kowdiar@safarikidindia.com</a><br><a href=\"tel:9400851846 / 9400851486\">9400851846 / 9400851486</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMG-20201116-WA0009.jpg",
            "lng": 76.9647,
            "lat": 8.51635,
            "city": 6863
            
        },
        {
            "id": 7034,
            "name": "Safari Kid Phase IV Nursery and Daycare",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Plot No 4401, DLF Phase IV, Near Galleria Market, Gurugram, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:info.gurugram@safarikidindia.com\">info.gurugram@safarikidindia.com</a><br><a href=\"tel:9773841887/ 9773845803\">9773841887/ 9773845803</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Gurugram-.jpg",
            "lng": 77.082013,
            "lat": 28.467316,
            "city": 6863
            
        },
        {
            "id": 7011,
            "name": "Safari Kid Sohna Road Nursery and Daycare",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Nursery Site 3, Next to Park Hospital, Malibu Town, Sohna Road, Gurugram, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:sohnaroad@safarikidindia.com\">sohnaroad@safarikidindia.com</a><br><a href=\"tel:9350999777\">9350999777</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Sohna-Road.jpg",
            "lng": 77.049569,
            "lat": 28.420246,
            "city": 6863
            
        },
        {
            "id": 6983,
            "name": "Safari Kid Kharadi Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Behind EON IT Park, Grant Road, Vitthal Nagar, Kharadi, Pune 411014, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:kharadi@safarikidindia.com\">kharadi@safarikidindia.com</a><br><a href=\"tel:9763558606\">9763558606</a><br></p>",
            "img": "https://china.kido.school/assets/images/safari-Kid-Kharadi-1.jpg",
            "lng": 77.955376,
            "lat": 18.549132,
            "city": 6863
          
        },
        {
            "id": 6966,
            "name": "Safari Kid Koregaon Park Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Mundhwa Road, Koregaon Park Annexe, Near Nitesh Hub Mall, Behind Euriska Restaurant, Pune 411001, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:Koregaon@safarikidia.com\">Koregaon@safarikidia.com</a><br><a href=\"tel:7030202020\">7030202020</a><br></p>",
            "img": "https://china.kido.school/assets/images/Koregaon-park-1.jpg",
            "lng": 73.908948,
            "lat": 18.537396,
            "city": 6863
           
        },
        {
            "id": 6960,
            "name": "Safari Kid Upper Worli Nursery and Daycare",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Plot no 25 ,Fortune House , Raghuvanshi Mills, Senapati Bapat Marg, Gandhi Nagar, Upper Worli, Mumbai- 400013</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:upperworli@safarikidindia.com\">upperworli@safarikidindia.com</a><br><a href=\"tel:9004870707\">9004870707</a><br></p>",
            "img": "https://china.kido.school/assets/images/Early-Explorers-class-Phase-Iv-centre.jpg",
            "lng": 72.82487,
            "lat": 18.99236,
            "city": 6863
            
        },
        {
            "id": 6949,
            "name": "Safari Kid Marol Preschool & Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Vasu Chemicals, Military road opp Blossom Society, Marol Andheri East Mumbai 400059, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:marol@safarikidindia.com\">marol@safarikidindia.com</a><br><a href=\"tel:7045033600\">7045033600</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMG_20201126_123520.jpg",
            "lng": 72.8795696,
            "lat": 19.117015,
            "city": 6863
            
        },
        {
            "id": 6922,
            "name": "Safari Kid Borivali Preschool & Nursery",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Bhattad Tower, 1st Floor, B Wing, RM Bhattad Road, Borivali West. Mumbai 92, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:borivali@safarikidindia.com\">borivali@safarikidindia.com</a><br><a href=\"tel:7710099994\">7710099994</a><br></p>",
            "img": "https://china.kido.school/assets/images/Borivali-centre.jpg",
            "lng": 72.850186,
            "lat": 19.220758,
            "city": 6863
           
        },
        {
            "id": 6889,
            "name": "Safari Kid Juhu Preschool & Nursery",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Seema Plot No 287/6, Gulmohar Road No 1, Opp Irla Masjid, J.V.P.D. Scheme, Vile Parle (W), Mumbai 400049, India</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:juhu@safarikidindia.com\">juhu@safarikidindia.com</a><br><a href=\"tel:+91 9987 840 606, +91 9820397715\">+91 9987 840 606, +91 9820397715</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-Kid-Juhu.jpg",
            "lng": 72.836986,
            "lat": 19.112745,
            "city": 6863
           
        },
        {
            "id": 6875,
            "name": "Safari Kid Bandra Preschool & Child Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Bait-Al-Bahar, Rizvi Complex, off Carter Road, Bandra West, Mumbai, Maharashtra 400050</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:bandra@safarikidindia.com\">bandra@safarikidindia.com</a><br><a href=\"tel:+91 9987550303\">+91 9987550303</a><br></p>",
            "img": "https://china.kido.school/assets/images/Safari-kid-Play-School-and-Child-Care-Bandra.jpg",
            "lng": 72.823786,
            "lat": 19.06801,
            "city": 6863
            
        },
        {
            "id": 6841,
            "name": "Greenwich Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>65 Banning Street, London, SE 10 0YH</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:greenwich@kido.school\">greenwich@kido.school</a><br><a href=\"tel:+44 7776 685200\">+44 7776 685200</a><br></p>",
            "img": "https://china.kido.school/assets/images/Kido-Greenwich_internal-scaled.jpg",
            "lng": 0.003376,
            "lat": 51.48828,
            "city": 5848
        
        },
        {
            "id": 6261,
            "name": "Kïdo Meydan District One Nursery",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Unit CC01.03, Nursery Unit, District One, Sheikh Mohammed Bin Rashid Al Maktoum City,<br />\r\n</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:meydan@kido.school\">meydan@kido.school</a><br><a href=\"tel:+971 50 974 3101\">+971 50 974 3101</a><br></p>",
            "img": "https://china.kido.school/assets/images/Meydan-Out.jpg",
            "lng": 55.274522,
            "lat": 25.164243,
            "city": 6107
          
        },
        {
            "id": 6252,
            "name": "Kïdo Jumeirah Beach Residency Nursery",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Plaza Level, Rimal 5, The Walk, Jumeirah Beach Residence, Dubai, UAE</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:jbr@kido.school\">jbr@kido.school</a><br><a href=\"tel:+971 50 454 8879 / 050 495 3101 /  04 440 1220\">+971 50 454 8879 / 050 495 3101 /  04 440 1220</a><br></p>",
            "img": "https://china.kido.school/assets/images/JBR-1400-by-700_02.jpg",
            "lng": 55.133031,
            "lat": 25.076085,
            "city": 6107
           
        },
        {
            "id": 6243,
            "name": "Kïdo Nursery Sheikh Zayed Road",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Villa 36, Street 61, Satwa, Behind Four Points Sheraton, Sheikh Zayed Road, Dubai, UAE</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:szr@kido.school\">szr@kido.school</a><br><a href=\"tel:971 50 4548 879 / +971 4 3597 398 / +971 50 582 3101\">971 50 4548 879 / +971 4 3597 398 / +971 50 582 3101</a><br></p>",
            "img": "https://china.kido.school/assets/images/SZR-1400-by-700_01.jpg",
            "lng": 55.27352,
            "lat": 25.215881,
            "city": 6107
            
        },
        {
            "id": 6128,
            "name": "Chiswick Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Unit A & B, Edmunds House, Colonial Drive, Chiswick, London W4 5HA, United Kingdom</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:chiswick@kido.school\">chiswick@kido.school</a><br><a href=\"tel:+44 020 8994 6656\">+44 020 8994 6656</a><br></p>",
            "img": "https://china.kido.school/assets/images/Chiswick-Centre-Pages-3-Header.jpg",
            "lng": -0.270199,
            "lat": 51.494789,
            "city": 5848
            
        },
        {
            "id": 6126,
            "name": "Clerkenwell Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Clements Hall, 141 Central Street, Clerkenwell, London EC1V 8AP, UK</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:clerkenwell@kido.school\">clerkenwell@kido.school</a><br><a href=\"tel:+44 020 7684 3172\">+44 020 7684 3172</a><br></p>",
            "img": "https://china.kido.school/assets/images/Clerkenwell-Centre-Pages-3-Header.jpg",
            "lng": -0.097274,
            "lat": 51.527976,
            "city": 5848
            
        },
        {
            "id": 6125,
            "name": "Camden Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Spiritualist Temple, Rochester Square, Camden, London NW1 9RY, United Kingdom</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:camden@kido.school\">camden@kido.school</a><br><a href=\"tel:+44 020 7428 9773\">+44 020 7428 9773</a><br></p>",
            "img": "https://china.kido.school/assets/images/Camden-Centre-Pages-3-Header.jpg",
            "lng": -0.1378577,
            "lat": 51.543422,
            "city": 5848
        },
        {
            "id": 6124,
            "name": "Golders Green Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>St Albans Church Hall, W Heath Dr, Golders Green, London NW11 7QG, United Kingdom</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:goldersgreen@kido.school\">goldersgreen@kido.school</a><br><a href=\"tel:+44 20 8209 0247\">+44 20 8209 0247</a><br></p>",
            "img": "https://china.kido.school/assets/images/Golders-Green-Centre-Pages-Header-3.jpg",
            "lng": -0.192741,
            "lat": 51.571037,
            "city": 5848
           
        },
        {
            "id": 6121,
            "name": "Wandsworth Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Unit 3B.04, Ram Quarter, Wandsworth High St, London, SW18 1TH, UK</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:wandsworth@kido.school\">wandsworth@kido.school</a><br><a href=\"tel:+44 20 8875 0880\">+44 20 8875 0880</a><br></p>",
            "img": "https://china.kido.school/assets/images/Wandsworth-Centre-Pages-Header-1.jpg",
            "lng": -0.193057,
            "lat": 51.457763,
            "city": 5848
           
        },
        {
            "id": 6117,
            "name": "Windsor Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Kingdom Hall, Grove Rd, Windsor SL4 1JE, United Kingdom</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:windsor@kido.school\">windsor@kido.school</a><br><a href=\"tel:+44 1753 866866\">+44 1753 866866</a><br></p>",
            "img": "https://china.kido.school/assets/images/Windsor-Centre-Pages-Header-1.jpg",
            "lng": -0.6089141,
            "lat": 51.4772754,
            "city": 5848
            
        },
        {
            "id": 5478,
            "name": "River Place Preschool and Day Care",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>10625 Bonaventure Drive, Austin, TX 78730</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:riverplace@kido.school\">riverplace@kido.school</a><br><a href=\"tel:1-855 688-5436, 1-512 557-1152\">1-855 688-5436, 1-512 557-1152</a><br></p>",
            "img": "https://china.kido.school/assets/images/IMAGE2-1.jpg",
            "lng": -97.846525,
            "lat": 30.390817,
            "city": 5481
           
        },
        {
            "id": 5115,
            "name": "Crouch End Nursery and Preschool",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>Earl Haig Hall, 18 Elder Avenue, Crouch End, N8 9DE</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:crouchend@kido.school\">crouchend@kido.school</a><br><a href=\"tel:+44 02082453648\">+44 02082453648</a><br></p>",
            "img": "https://china.kido.school/assets/images/Crouch-End-Centre-Pages-2-1.jpg",
            "lng": -0.121613,
            "lat": 51.580826,
            "city": 5848
            
        },
        {
            "id": 3357,
            "name": "Rice Village Preschool - Open for Admission",
            "intro": "<h1 class=\"font-h6\">Address</h1><address>2329 Bissonnet St, Houston, TX 77005</address><h1 class=\"font-h6\">Contact</h1><p><a href=\"mailto:ricevillage@kido.school\">ricevillage@kido.school</a><br><a href=\"tel:1-855 600-5436\">1-855 600-5436</a><br></p>",
            "img": "https://china.kido.school/assets/images/Kido-Houston-Front.jpg",
            "lng": -95.414125,
            "lat": 29.725389,
            "city": 3345
        }
    ]
     
    }

    const teachersInfo = JSON.parse(localStorage.getItem("teachersPodData"));

      
    const [ map_centre ] = useState({lat: 19,lng: 10});
    let map_zoom = 0;

    isMobile ? map_zoom = 1 : map_zoom = 2;



    return(
      <>

        <section className="banner-about">
            <div className="container-fluid">
                <div className="row">
                    <img src={AboutBanner} className="contact-banner-img img-fluid" alt="about_banner"/>
                </div>
            </div>
        </section>

        <section className="about-text py-5">
            <div className="container">
                <div className="row justify-content-center">
                <h1 className="about-head pb-2">By parents, for parents</h1>
                    <div className="col-lg-10">
                        <p>We are founded, managed and owned by a group parents of young children around the world, and their friends. We passionately believe that a high quality early childhood education is the biggest gift any child can get. Since 2014, our preschools and nurseries under two brands - <span className="we-do-color">Kido</span> - have served over 15,000 families in London, Houston, Austin, Dubai, Hong Kong, Mumbai and elsewhere. </p>
                        <p>We are now on a mission to bring our international network, our award winning curriculum and our best practices to children everywhere. Earlier in 2020, we launched <span className="we-do-color">Kido Home, our virtual preschool</span> delivering online preschool to children at their homes.</p>
                        <p>With Kido Village, we bring the same expertise to every community,  <span className="we-do-color">enabling entrepreneurs in each community to set up their own micro preschools</span>, run to our standards, with our curriculum and systems. Each Kïdo Village Pod will cater to a maximum of eight children at a time, providing flexible, customised education and care to children in their community. Parents can set up Pods for their own children too, and either teach themselves, or hire a teacher (who we'll be happy to train!).</p>
                        <div className="text-center">
                        <a  target="_blank" rel="noopener noreferrer" href="https://kido.school/en/" className="my-btn center">Visit our school </a>
                        {/* <a  target="_blank" rel="noopener noreferrer" href="https://www.kidohome.net/" className="my-btn center">Visit kido Home </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="school-network py-5 bg-red">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                    <h1 className="banner-head pb-2">School Network</h1>
                        <p>Our international school network ensures that we bring global best practices in curriculum, operations, health and safety to each Kïdo Village Pod. </p>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                    <img src={SchoolNetwork} className="img-fluid" alt="school_network"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="con-map py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                    <Map3 centerContents1={centerContents1} map_centre={map_centre} map_zoom={map_zoom}   />
                    </div>
                </div>
            </div>  
        </section>
     
      </>

    );

}

export default About;


