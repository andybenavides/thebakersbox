package handler

import (
	"html/template"
	"net/http"
	"github.com/julienschmidt/httprouter"
)

var tpl *template.Template

func init() {
	r := httprouter.New()
	http.Handle("/", r)
	r.GET("/", homePage)
	r.GET("/gallery", galleryPage)
	http.Handle("/favicon.ico", http.NotFoundHandler())
	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("public/"))))
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func homePage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tpl.ExecuteTemplate(w, "main.html", nil)
}

func galleryPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params){
	tpl.ExecuteTemplate(w, "gallery.html", nil)
}
