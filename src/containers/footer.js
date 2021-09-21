import { Connections, Contact } from '../components'

const Footer = () => {
  return (
    <footer className="section section--full section--bg-dark">
      <div className="container">
        <Contact />
        <Connections />
      </div>
    </footer>
  )
}

export default Footer
