package handler

import (
	"html/template"
	"net/http"
	"github.com/julienschmidt/httprouter"
	"io/ioutil"
	//"log"
)

var tpl *template.Template

func init() {
	r := httprouter.New()
	http.Handle("/", r)
	r.GET("/", homePage)
	r.GET("/gallery", galleryPage)
	r.GET("/contact", contactPage)
	r.GET("/pricing", pricingPage)
	r.POST("/sendEmail", sendEmail)
	http.Handle("/favicon.ico", http.NotFoundHandler())
	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("public/"))))
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func homePage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	files, _ := ioutil.ReadDir("assets/img/galleria")
	//if err != nil {
	//	log.Fatal(err)
	//}

	imgNames := make([]string, 9)
	for i, file := range files {
		imgNames[i] = file.Name()
	}

	tpl.ExecuteTemplate(w, "main.html", imgNames)
}

func galleryPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tpl.ExecuteTemplate(w, "gallery.html", nil)
}

func pricingPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tpl.ExecuteTemplate(w, "pricing.html", nil)
}
