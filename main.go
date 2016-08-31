package handler

import (
	"html/template"
	"net/http"
	"github.com/julienschmidt/httprouter"
	"encoding/json"
	"fmt"
	"io/ioutil"
)

type Image struct {
	Url string `json:"Url"`
	Title string `json:"Title"`
}

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

const jsonFile = "./images.json"

func homePage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	// Stat file for writing permissions after write
	//fi, err := os.Stat(jsonFile)
	//if err != nil {
	//	http.Error(w, fmt.Sprintf("Unable to stat data file (%s): %s", jsonFile, err), http.StatusInternalServerError)
	//	return
	//}

	jsonData, error := ioutil.ReadFile(jsonFile)
	if error != nil {
		http.Error(w, fmt.Sprintf("Unable to read the data file (%s): %s", jsonFile, error), http.StatusInternalServerError)
		return
	}

	var images []Image
	err := json.Unmarshal(jsonData, &images)
	if err != nil {
		fmt.Println("error:", err)
	}

	tpl.ExecuteTemplate(w, "main.html", images)
}

func galleryPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    
    jsonData, error := ioutil.ReadFile(jsonFile)
    if error != nil{
        http.Error(w, fmt.Sprintf("Unable to read the data file (%s): %s", jsonFile, error), http.StatusInternalServerError)
        return
    }
    
    var images []Image
    err := json.Unmarshal(jsonData, &images)
    if err != nil {
        fmt.Println("error:", err)
    }
    
	tpl.ExecuteTemplate(w, "gallery.html", images)
}

func pricingPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tpl.ExecuteTemplate(w, "pricing.html", nil)
}
