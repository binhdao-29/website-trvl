import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    The journey of a thousand miles begins with a single step
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email"
                                className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sing-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact</h2>
                        <Link to="/sing-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/sing-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Socials Media</h2>
                        <Link to="/sing-up">Facebook</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Twitter</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            DCB <i className="fab fa-pied-piper" />
                        </Link>
                    </div>
                    <small className="website-rights">TRAVEL WITH DCB 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook">
                            <i className="fab fa-facebook" />
                        </Link>
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
