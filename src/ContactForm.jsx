import { useState } from "react";

function ContactForm() {
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const maxLength = 100;
    if (send) {
        return (
            <>
                <p>ההודעה נשלחה, תודה!</p>
                <button onClick={setSend(!send)}>שליחת הודעה נוספת</button>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <textarea name="contentMessage" id="contentMessage" maxLength={maxLength} onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                    <p>נותרו לך {maxLength - message.length} תוים</p>
                    <button disabled={message === ""} onClick={() => { setSend(!send) }}>שלח</button>
                </div>
            </>
        )
    }
}
export default ContactForm;