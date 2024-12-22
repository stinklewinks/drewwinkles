

function HeaderNav() {
  return (
    <header className="sticky">
            <nav className="bgc-black-400 h:10 w:80 m:auto sticky">
            <ul className="flex gap:3 list:none items:center justify:center">
                <li className="mt:10"><a className="dec:none tc-white-100" href="#about-me">About Me</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#full-stack">Full Stack</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#cloud-architect">Cloud Architect</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#ethical-hacking">Ethical Hacking</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#projects">Projects</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderNav