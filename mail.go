package handler

import (
	"net/http"
	"github.com/julienschmidt/httprouter"
	"google.golang.org/appengine/mail"
	"google.golang.org/appengine/log"
	"google.golang.org/appengine"
)

func contactPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	tpl.ExecuteTemplate(w, "contact.html", nil)
}

func sendEmail(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	if r.Method == "POST" {
		c := appengine.NewContext(r)

		addr := r.FormValue("email")
		firstName := r.FormValue("firstName")
		lastName := r.FormValue("lastName")
		message := r.FormValue("message")

		msgToBB := &mail.Message{
			Sender:  "The Bakers Box Cafe <andybenavides.22@bakers-box.appspotmail.com>",
			ReplyTo: addr,
			To: []string{"andybenavides.22@gmail.com"},
			Subject: "New Inquiry from: " + firstName + " " + lastName + "!",
			HTMLBody: message,
		}
		if err := mail.Send(c, msgToBB); err != nil {
			log.Errorf(c, "Message failed to send: %v", err)
		}

		msg := &mail.Message{
			Sender:  "The Bakers Box Cafe <andybenavides.22@bakers-box.appspotmail.com>",
			To:      []string{addr},
			Subject: "Thank you for contacting me!",
			HTMLBody:    confirmMessage,
		}
		if err := mail.Send(c, msg); err != nil {
			log.Errorf(c, "Alas, my user, the email failed to sendeth: %v", err)
		}
	}

	// Redirect user to home page after sent email
	http.Redirect(w, r, "/", 303)
}

const confirmMessage = `
<html><body>
<h1>
Thank you for contacting me!
</h1>
I will get back to you soon.
</body></html>
`