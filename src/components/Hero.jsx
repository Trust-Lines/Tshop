const mascot = '/assets/mascot.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Coming soon..</h1>
        <p>This website is under construction</p>
      </div>
      <img className="hero__mascot" src={mascot} alt="T Shop mascot holding a parcel" width="411" height="601" />
    </section>
  )
}
