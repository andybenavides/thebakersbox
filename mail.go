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

		msg := &mail.Message{
			Sender:  "The Bakers Box Cafe <andybenavides.22@bakers-box.appspotmail.com>",
			To:      []string{addr},
			Subject: "See you tonight",
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
<html><body style="background-image: url(assets/img/gallery/flowerCookies.png);">
<h1>
Thank you for creating an account!
</h1>
Please confirm your email address by clicking on the link below:
</body></html>
`