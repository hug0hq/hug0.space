//import { Twitter, Github, Codepen, /* Instagram */ } from '../svg'

export const Connections = () => {
  const links = [
    /* {
      href: 'https://www.instagram.com/hug0hq',
      alt: 'Instagram',
      img: Instagram,
    }, */
    {
      href: 'https://twitter.com/hug0hq',
      alt: 'twitter',
      img: './logos/twitter.svg',
    },
    {
      href: 'https://github.com/hug0hq',
      alt: 'github',
      img: './logos/github.svg',
    },
    {
      href: 'https://codepen.io/hug0hq',
      alt: 'codepen',
      img: './logos/codepen.svg',
    },
    {
      href: 'https://blog.hug0.space',
      alt: 'blog',
      text: 'Blog',
    },
  ]
  return (
    <nav className="connections">
      {links.map((link) => {
        return (
          <a
            key={link.alt}
            className="connections--link"
            href={link.href}
            /* aria-label="" */
            rel="noreferrer"
          >
            {link.text ? (
              link.text
            ) : (
              <img className="connections--img" src={link.img} alt="" />
            )}
          </a>
        )
      })}
    </nav>
  )
}
