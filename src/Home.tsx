import "./Home.css"
import img1 from './assets/img1.webp';
import img2 from './assets/img2.webp';
import img3 from './assets/img3.webp';
import img4 from './assets/img4.webp';
import img5 from './assets/img5.webp';
import img6 from './assets/img6.webp';
import img7 from './assets/img7.webp';
import img8 from './assets/img8.webp';
import img9 from './assets/img9.webp';
import img10 from './assets/img10.webp';
import img11 from './assets/img11.webp';
import img12 from './assets/img12.webp';
import center from './assets/center.webp';
import img14 from './assets/img14.webp';
import img15 from './assets/img15.webp';
import img16 from './assets/img16.webp';
import img17 from './assets/img17.webp';
import img18 from './assets/img18.webp';
import img19 from './assets/img19.webp';
import img20 from './assets/img20.webp';
import img21 from './assets/img21.webp';
import img25 from './assets/img25.jpg';
import img23 from './assets/img23.jpg';
import img24 from './assets/img24.jpg';


function Home() {
    return (
        <>

            <div className="overall">
                <hr />

                <div>
                    <ul className="list">
                        <li>For you</li>
                        <li>Fashion</li>
                        <li>Mobiles</li>
                        <li>Electroncs</li>
                        <li>Beauty</li>
                        <li>Home</li>
                        <li>Appliances</li>
                        <li>Toys</li>
                        <li>Food</li>
                        <li>Sports</li>
                        <li>Furniture</li>
                        <li>Books</li>
                    </ul>
                </div>

                <hr />

                <div className="add">
                    <img src={img1} className="img" alt="" />
                    <img src={img2} className="img" alt="" />
                    <img src={img3} className="img" alt="" />
                    <img src={img4} className="img" alt="" />
                    <img src={img5} className="img" alt="" />
                    <img src={img6} className="img" alt="" />
                    <img src={img7} className="img" alt="" />
                </div>


                <p className="suggest">Suggested to you</p>

                <div className="cards">
                    <div className="card end" style={{ width: "18rem" }}>
                        <img src={img8} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                            <p>₹17,000</p>
                            <p className="offer">₹16,000 with Bank offer</p>
                        </div>
                    </div>

                    <div className="card end" style={{ width: "18rem" }}>
                        <img src={img9} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                            <p>₹17,000</p>
                            <p className="offer">₹20,000 with Bank offer</p>
                        </div>
                    </div>

                    <div className="card end" style={{ width: "18rem" }}>
                        <img src={img10} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                            <p>₹17,000</p>
                            <p className="offer">₹28,000 with Bank offer</p>
                        </div>
                    </div>

                    <div className="card end" style={{ width: "18rem" }}>
                        <img src={img11} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                            <p>₹17,000</p>
                            <p className="offer">₹37,000 with Bank offer</p>
                        </div>
                    </div>

                    <div className="card end" style={{ width: "18rem" }}>
                        <img src={img12} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                            <p>₹17,000</p>
                            <p className="offer">₹26,000 with Bank offer</p>
                        </div>
                    </div>

                </div>

                <div>
                    <img src={center} className="cent" />
                </div>

                <div className="blue-box">
                    <h5 className="head4">Smart Upgrades</h5>
                    <div className="blueimg">
                        <img src={img14} className="img14" alt="" />
                        <img src={img15} className="img14" alt="" />
                        <img src={img16} className="img14" alt="" />
                        <img src={img17} className="img14" alt="" />
                        <img src={img18} className="img14" alt="" />
                        <img src={img19} className="img14" alt="" />
                        <img src={img20} className="img14" alt="" />
                        <img src={img21} className="img14" alt="" />
                    </div>
                </div>

                <div className="down-cards">
                    <div className="card end" style={{ width: "18rem" }}>
                        <p className="mypara">Lowest Price</p>
                        <img src={img25} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                                <p>₹17,000</p>
                                <p className="offer">₹16,000 with Bank offer</p>
                            </div>
                    </div>

                    <div className="card end" style={{width: "18rem"}}>
                        <img src={img23} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                                <p>₹17,000</p>
                                <p className="offer">₹20,000 with Bank offer</p>
                            </div>
                    </div>

                    <div className="card end" style={{width: "18rem"}}>
                        <img src={img24} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                                <p>₹17,000</p>
                                <p className="offer">₹28,000 with Bank offer</p>
                            </div>
                    </div>

                    <div className="card end topdiv" style={{width: "18rem"}}>
                        <p className="mypara">Lowest Price</p>
                        <img src={img25} className="card-img-top" alt=""/>
                            <div className="card-body">
                                <p className="card-title">REDMI 15C 5G (Moonlight Blue, 128 GB) (4 GB RAM)</p>
                                <p>₹17,000</p>
                                <p className="offer">₹37,000 with Bank offer</p>
                            </div>
                    </div>

                </div>

            </div>

            <div className="footer">

                <div>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Flipkart Stories</p>
                    <p>Press</p>
                    <p>Corporate Information</p>
                </div>

                <div>
                    <p>GROUP COMPANIES</p>
                    <p>Myntra</p>
                    <p>Cleartrip</p>
                    <p>Shopsy</p>
                </div>

                <div>
                    <p>HELP</p>
                    <p>Payments</p>
                    <p>Shipping</p>
                    <p>Cancellation & Returns</p>
                    <p>FAQ</p>
                </div>

                <div>
                    <p>CONSUMER POLICY</p>
                    <p>Cancellation & Returns</p>
                    <p>Terms of Use</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                    <p>EPR Compliance</p>
                    <p>FSSAI Food Safety Connect App</p>
                </div>

                <div>
                    <p>Mail Us</p>
                    <p>Flipkart internet private Limited,</p>
                    <p>Building Alyssa, Begonia &</p>
                    <p>Clove Embassy Tech Village,</p>
                    <p>Outer Ring Road, Devarabessanahalli Village,</p>
                    <p>Bengaluru, 560103,</p>
                    <p>Karnataka, India</p>
                </div>

                <div>
                    <p>Registered Office Address</p>
                    <p>Careers</p>
                    <p>Flipkart Stories</p>
                    <p>Press</p>
                    <p>Corporate Information</p>
                </div>

            </div>








        </>
    )
}

export default Home