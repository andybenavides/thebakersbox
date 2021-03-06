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
    id int `json:"id"`
	Url string `json:"Url"`
	Title string `json:"Title"`
    Price string `json:"Price"`
    Type string `json:"Type"`
    Likes int `json:"Likes"`
}

type Carousel struct{
    id int `json:"id"`
    Url string `json:"Url"`
    Title string `json:"Title"`
    Type string `json:"Type"`
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
const carouselJSONFile = "./carousel.json"

func homePage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {

	// Stat file for writing permissions after write
	//fi, err := os.Stat(jsonFile)
	//if err != nil {
	//	http.Error(w, fmt.Sprintf("Unable to stat data file (%s): %s", jsonFile, err), http.StatusInternalServerError)
	//	return
	//}
//
//	jsonData, error := ioutil.ReadFile(jsonFile)
//	if error != nil {
//		http.Error(w, fmt.Sprintf("Unable to read the data file (%s): %s", jsonFile, error), http.StatusInternalServerError)
//		return
//	}
    
    jsonData, error := ioutil.ReadFile(carouselJSONFile)
    if error != nil {
        http.Error(w, fmt.Sprintf("Unable to read the data file (%s): %s", carouselJSONFile, error), http.StatusInternalServerError)
        return
    }
    
	var carousels []Carousel
	err := json.Unmarshal(jsonData, &carousels)
	if err != nil {
		fmt.Println("error:", err)
	}

    tpl.ExecuteTemplate(w, "main.html", carousels)
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
    
    // Make display functionality flexible
    n := len(images)
    
    tpl.ExecuteTemplate(w, "gallery.html", images[0:n])
}

func pricingPage(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    
	tpl.ExecuteTemplate(w, "pricing.html", nil)
}
