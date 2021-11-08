import React from 'react';
import { Jumbotron} from 'reactstrap';
import './footer.css';
const Example = (props) => {
  return (
    <div >
      <Jumbotron style={{background:'whitesmoke',textAlign:'justify'}}>
        <div className="row">
          <div className="foot1" style={{textJustify:'auto',marginLeft:'160px',fontSize:'14px'}}>
            <p style={{fontFamily:'sans-serif',marginLeft:'-2px',fontSize:'10px',fontWeight:'bold'}}>ONLINE SHOPPING</p>
            <br/>
            <a href="/mens-casual-shirt">
            <p>Men</p>
            </a>
           <a href="">
           <p>Women</p>
           </a>
            <a href="">
            <p>Home & Living</p>
            </a>
           <a href="">
           <p>Offers</p>
           </a>
            <a href=""><p>Gift Cards</p></a>
            
            <p>Myntra Insider</p>
          </div>
          <div style={{marginLeft:'130px',fontSize:'14px'}}>
          <p style={{fontFamily:'sans-serif',marginLeft:'-10px',fontSize:'10px',fontWeight:'bold'}}>USEFUL LINKS</p>
            
            <br/>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms Of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
          </div>
          <div style={{marginLeft:'-90px'}}>
          <p style={{fontFamily:'sans-serif',marginLeft:'200px',fontSize:'10px',fontWeight:'bold'}}>EXPERIENCE MYNTRA APP ON MOBILE</p>
            <br/>
            <a href="https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US">
            <img className="gpay" style={{width:"150px", height:"80px"}} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="gpay"/>
            </a>
           <a href="https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059">
              <img  className="appstore" style={{width:"150px", height:"80px"}} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="appstore"/>
           </a>
                    <br/>
         <br/>
         <p style={{marginLeft:'200px',fontSize:'12px',fontWeight:'bold'}}>KEEP IN TOUCH</p>
         <a href="">
         <img className="facebook" style={{width:"50px", height:"50px"}} src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="facebook"/>
         </a>
         <a href="">
         <img className="twitter" style={{width:"50px", height:"50px"}}   src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="twitter"/>
         </a>
        <a href="">
        <img className="youtube" style={{width:"50px", height:"50px"}}   src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="youtube"/>
        </a>
         <a href="">
         <img className="insta" style={{width:"50px", height:"50px"}}  src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="instagram"/>
         </a>
         
          </div>
          <div style={{marginLeft:'-30px'}}> <p style={{marginTop:'-20px',marginLeft:'150px'}}> <img className="percent" src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="100%"/><strong style={{fontSize:'14px'}}>100% ORIGINAL </strong>guarantee 
            <p style={{marginTop:'-10px',fontSize:'14px',marginLeft:'-15px'}} >for all products at myntra.com </p></p>
            <p> <img style={{marginLeft:'100px'}} className="return" src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="100%"/><strong style={{fontSize:'14px'}}>Return within 30days  </strong>to
            <p style={{marginTop:'-10px',marginLeft:'150px',fontSize:'14px'}}>receiving your orders  </p></p>
            <p> <img  style={{marginLeft:'100px'}} className="deliver" src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png" alt="100%"/><strong styel={{fontSize:'14px'}}>Get free delivery </strong>for every
            <p style={{marginTop:'-10px',marginLeft:'150px',fontSize:'14px'}}>order above Rs.399</p></p>
                                     
                                      
                                      
                                       
                                
            </div>
            
        </div>
        <div>
              <h5 style={{marginLeft:'-900px',marginTop:'30px',textAlign:'center',fontSize:'10px',fontWeight:'bold'}}>POPULAR SEARCHES</h5>
              <br/>
              <p className="popular" style={{textAlign:'center',marginLeft:'120px'}}>Makeup|Dresses For Girls |T-Shirts| Sandals| Headphones| Babydolls| Blazers For Men| Handbags| Ladies Watches| Bags| Sport Shoes| Reebok Shoes| Puma Shoes| Boxers| Wallets |Tops| Earrings| Fastrack Watches| Kurtis| Nike |Smart Watches| Titan Watches |Designer Blouse |Gowns |Rings| Cricket Shoes| Forever 21| Eye Makeup| Photo Frames| Punjabi Suits| Bikini| Myntra Fashion Show |Lipstick |Saree |Watches| Dresses |Lehenga |Nike |Shoes| Goggles Bras| Suit |Chinos| Shoes Adidas |Shoes Woodland |Shoes Jewellery| Designers Sarees</p>
            </div>
            <p style={{marginLeft:'1000px',marginTop:'60px',textAlign:"center",fontSize:'10px'}}>In case of any concern, Contact Us </p>
            <p style={{marginLeft:'140px',marginTop:'-50px',fontSize:'10px'}}>© 2021 www.myntra.com. All rights reserved.</p>
            <hr className="my-2" style={{width:'1050px'}} />
      </Jumbotron>
    </div>
  );
};

export default Example;
