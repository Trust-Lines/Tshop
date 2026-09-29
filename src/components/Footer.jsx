import logoFooter from '../assets/logo-footer.svg'
import tlines from '../assets/logo-mark-tlines.png'
import line from '../assets/line.svg'
import arrow from '../assets/arrow-right.svg'
import NewsletterForm from './NewsletterForm.jsx'
import SocialLinks from './SocialLinks.jsx'
import FooterMenu from './FooterMenu.jsx'

const menus = [
  { title: 'Menu', links: ['Home', 'News', 'About us'] },
  { title: 'News', links: ['Latest News', 'Blog', 'Events'] },
  { title: 'About us', links: ['Our Story', 'Our Mission', 'Our Goal'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img className="footer__logo" src={logoFooter} alt="T Shop Online Store" />
        <img className="footer__line" src={line} alt="" />
        <img className="footer__tlines" src={tlines} alt="TLines Creativity Group" />
      </div>

      <div className="footer__main">
        <div className="footer__left">
          <h2 className="footer__title">
            Subscribe to
            <br />
            our <strong>Newsletter</strong>.
          </h2>
          <NewsletterForm />
          <SocialLinks />
        </div>

        <div className="footer__right">
          <div className="footer__menus">
            {menus.map((m) => (
              <FooterMenu key={m.title} {...m} />
            ))}
          </div>
          <div className="footer__contact">
            <div className="footer__group">
              <span className="label">Locations</span>
              <a className="footer__link footer__link--underline" href="#">
                Atalanta, Georgia (GA)
                <img src={arrow} alt="" width="23" height="23" />
              </a>
            </div>
            <div className="footer__group">
              <span className="label">Call us</span>
              <a className="footer__link" href="tel:8006603772">
                800-660-3772
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copy">
        <span>All rights are reserved for TLines 2026</span>
        <span>All rights are reserved for TLines 2026</span>
      </div>
    </footer>
  )
}
