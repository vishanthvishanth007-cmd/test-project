import "./Login.css"
import { useNavigate } from "react-router-dom";
function Login() {
    return (
        <>

            <div className="login-middle">
                <div className="log">
                    <h2>Login</h2>
                    <h4>Get access to your Orders,</h4>
                    <h5>Wishlist and Recommendations</h5>
                </div>
                <div className="login-page">

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control last-inp" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <p>By continuing, you agree to Flipkart's <span className="blue">Terms of Use</span> and <span className="blue">Privacy Policy</span>.</p>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-warning butn" type="button">Request OTP</button>
                    </div>

                    <p className="the-last">New to Flipkart? Create an account</p>

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

export default Login




