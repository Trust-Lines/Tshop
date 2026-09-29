import arrow from '../assets/arrow-right-2.svg'

export default function NewsletterForm() {
  return (
    <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Submit your email" aria-label="Email address" required />
      <button type="submit" aria-label="Subscribe">
        <img src={arrow} alt="" width="23" height="23" />
      </button>
    </form>
  )
}
