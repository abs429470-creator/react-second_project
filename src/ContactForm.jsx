import { useState } from "react";

function ContactForm() {
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const maxLength = 100;
    if (send) {
        return (
            <p>ההודעה נשלחה, תודה!</p>
        )
    }
    else {
        return (
            <>
                <div>
                    <textarea name="contentMessage" id="contentMessage" maxLength={maxLength} onChange={(e) => setMessage(e.target.value)}>{}</textarea>
                    <p>נותרו לך {maxLength - message.length} תוים</p>
                    <button disabled={message!==""} onClick={() => { setSend(!send) }}>שלח</button>
                </div>
            </>
        )

        // <>
        // <h2>שליחת הודעה למערכת</h2>
        //     <div>
        //         {send ?<>
        //             <span>ההודעה נשלחה</span> 
        //             <button onClick={setSend(!send)}>שליחת הודעה נוספת</button></>:
        //             <>
        //                 <span>{message.length<=100?"נותרו לך {{100-message.split.length}} אותיות להקיש":"לא ניתן להקליד עוד"}</span>
        //                 <input name="messegeToSend" type="text" value={message} onChange={(e) => setMessage(prevMessege => message.length <= 100 ? e.target.value : prevMessege)} />
        //                 <button onClick={(e) => {setSend(!send)}}>שלח</button>
        //             </>
        //         }
        //     </div>
        // </>
    }
}
export default ContactForm;