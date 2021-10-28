import dynamic from 'next/dynamic'

const Connections = dynamic(() => import('../components/connections'))
const Contact = dynamic(() => import('../components/contact'))

export const Footer = () => {
  return (
    <footer className="section section--full section--bg-dark">
      <div className="container">
        <Contact />
        <Connections />
      </div>
    </footer>
  )
}
