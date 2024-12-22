
function FooterNav() {
  return (
    <footer className="w:80 h:10 m:auto bgc-black-500">
        <nav className="">
            <ul className="flex gap:2 list:none items:center justify:center">
                <li className="mt:10"><a className="dec:none tc-white-100" href="https://github.com/stinklewinks">GitHub</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#">LinkedIn</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#">Instagram</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="#">YouTube</a></li>
                <li className="mt:10"><a className="dec:none tc-white-100" href="https://twitch.tv/stinklewinks">Twitch</a></li>
            </ul>
        </nav>
    </footer>
  )
}

export default FooterNav