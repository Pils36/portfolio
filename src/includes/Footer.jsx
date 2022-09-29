import React from 'react';

function Footer() {
    return (
        <footer className="ds-footer text-center">
            <div className="container">
                <section>
                    <span>Stay in touch</span>
                    <h4>Ready to talk?</h4>
                    <p>Feel free to contact us</p>
                    <a href="mailto:adenugaadebambo41@gmail.com" className="ds-button">Lets Talk</a>
                </section>
                <span className="ds-copyright">© {new Date().getFullYear()} All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;