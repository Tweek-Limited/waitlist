import Hero from './components/Hero'
import FaqQuestion from './components/FaqQuestion'


export default function Home() {
  return (
    <>
      <Hero />
      <section id='faq'>
        <FaqQuestion />
      </section>
    </>

  )
}
