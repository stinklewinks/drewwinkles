import FooterNav from "./comp/FooterNav"
import Simple from "./comp/Simple"

function Contact() {
  return (
    <div className="w:full m:auto bg-purple-600">
    <div className="w:60 h:80 m:auto p:rel:5 bgc-white-100 flex col items:center">
        <form className="flex col items:center justify:center gap:1 w:30 h:half">
            <label>Name: <input type="text" name="name" id="name" /></label>
            <label>Email: <input type="email" name="email" id="email" /></label>
            <label>Subject: <input type="text" name="subject" id="subject" /></label>
            <label>Message: <textarea name="message" id="message" cols={30} rows={10}></textarea></label>
            <button type="submit">Submit</button>
        </form>
    </div>
    <FooterNav />
    </div>
  )
}

export default Contact