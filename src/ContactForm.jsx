import { useState } from "react";
import './ContactForm.css'

function ContactForm() {
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const maxLength = 100;
    if (send) {
        return (
            <>
                <div className="contact-form contact-form--sent">
                    <p className="contact-form__success">ההודעה נשלחה, תודה!</p>
                    <button className="contact-form__btn" onClick={() => setSend(prev => !prev)}>שליחת הודעה נוספת</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="contact-form">
                    <label className="contact-form__label" htmlFor="contentMessage">פנייה אלינו</label>
                    <textarea className="contact-form__textarea" name="contentMessage" id="contentMessage" maxLength={maxLength} onChange={(e) => setMessage(e.target.value)} value={message} />
                    <p className="contact-form__counter">נותרו לך {maxLength - message.length} תוים</p>
                    <button className="contact-form__btn" disabled={message === ""} onClick={() => { setSend(prev => !prev); setMessage("") }}>שלח</button>
                </div>
            </>
        )
    }
}
export default ContactForm;