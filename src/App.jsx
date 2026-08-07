import logo from './assets/QuaterniuumLogoWhite-removebg.png'
import './App.css'

const facts = [
  {
    title: 'Qubits, but make it classical',
    body: 'Today, QUATERNIUUM is proud to announce our $500M Series A (Venezuelan Bolivars) led by local observer frames. While our frenemies spend $200M/year keeping trapped ions cold, QUATERNIUUM has successfully executed a 720-degree non-commutative rotation on an index card.',
  },
  {
    title: 'Born of Laws of Form + Cambridge',
    body: 'QUATERNIUUM is a merger of Honeywell and Cambridge Quantum Computing. Oops, I mean the Spencer-Brown Society and the Wolfson dorms @ Cambridge.',
  },
  {
    title: 'Enterprise quantum, allegedly',
    body: 'They ship real hardware, real software, and real roadmaps... but not any actual useful results yet. This site ships vibes and three columns + the promise of 100% endogenously-generated 45 degree "magic". Same same but different.',
  },
]

function App() {
  return (
    <div className="page">
      <section className="hero" aria-label="Quaterniuum">
        <img
          src={logo}
          alt="QUATERNIUUM"
          className="hero-logo"
        />
      </section>

      <section className="facts" aria-label="Facts">
        <div className="facts-grid">
          {facts.map((fact) => (
            <article key={fact.title} className="fact">
              <h2>{fact.title}</h2>
              <p>{fact.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
