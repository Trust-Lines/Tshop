export default function FooterMenu({ title, links }) {
  return (
    <div className="footer__menu">
      <span className="label">{title}</span>
      <ul>
        {links.map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
