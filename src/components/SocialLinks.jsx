const instagram = '/assets/instagram.svg'
const youtube = '/assets/youtube.svg'
const linkedin = '/assets/linkedin.svg'

const items = [
  { name: 'Instagram', icon: instagram },
  { name: 'YouTube', icon: youtube },
  { name: 'LinkedIn', icon: linkedin },
]

export default function SocialLinks() {
  return (
    <div className="social">
      <span className="label">Follow us on</span>
      <div className="social__icons">
        {items.map((i) => (
          <a key={i.name} href="#" aria-label={i.name}>
            <img src={i.icon} alt="" width="49" height="49" />
          </a>
        ))}
      </div>
    </div>
  )
}
