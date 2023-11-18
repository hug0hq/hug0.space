const Connections = () => {
	const links = [
		/* {
      href: 'https://www.instagram.com/',
      alt: 'Instagram',
      img: './logos/insta.svg',
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
			href: 'https://codesandbox.io/u/hug0',
			alt: 'codesandbox',
			img: './logos/sand.svg',
		},

		{
			href: 'https://blog.hug0.space',
			alt: 'blog',
			text: 'Blog',
			target: '_self',
		},
	]
	return (
		<nav className="connections">
			{links.map((link) => {
				return (
					<a key={link.alt} className="connections--link" href={link.href} rel="noreferrer" target={link.target || '_blank'}>
						{link.text ? link.text : <img className="connections--img" src={link.img} alt="" />}
					</a>
				)
			})}
		</nav>
	)
}

export default Connections
