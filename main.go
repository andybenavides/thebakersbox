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
	r.GET("/cookies", cookiesPage)
	r.GET("/cakes", cakesPage)
	r.GET("/pastries", pastriesPage)
	r.GET("/weddings", weddingPage)
	http.Handle("/favicon.ico", http.NotFoundHandler())
	http.Handle("/public/", http.StripPrefix("/public", http.FileServer(http.Dir("public/"))))
	tpl = template.Must(template.ParseGlob("templates/*.html"))
}

func homePage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tpl.ExecuteTemplate(w, "main.html", nil)
}

func cookiesPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params){
	tpl.ExecuteTemplate(w, "cookies.html", nil)
}

func cakesPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params){
	tpl.ExecuteTemplate(w, "cakes.html", nil)
}

func pastriesPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params){
	tpl.ExecuteTemplate(w, "pastries.html", nil)
}

func weddingPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params){
	tpl.ExecuteTemplate(w, "weddings.html", nil)
}