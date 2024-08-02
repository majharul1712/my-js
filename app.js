const navUL = document.getElementById ("navIteam")
const popupbtn = document.getElementById ("popupbtn")
const clsbtn = document.getElementsByClassName ("clsbtn")
const closeBtn = document.getElementById ("closeBtn")

const navBar = [
    {
        text: "Home",
        link: "#",
    },
    {
        text: "Blog",
        link: "./blog.htm;",
    },
    {
        text: "Contain",
        link: "./contai.htm",
    },
    {
        text: "About",
        link: "./about.html",
    }
]
for (let i = 0; i < navBar.length; i++) {
    const element = navBar[i];
    navUL.innerHTML += `<li class="nav-item">
              <a class="nav-link active" aria-current="page" href="${element.link}">${element.text}</a>
            </li>`
    
}
// popup

// popupbtn.addEventListener ("click",myFunction)
// function myFunction(params) {
//     document.getElementById ("popup").style.display = "black";
//     document.getElementById ("popupBtn").style.display = "none";
// }
// clsbtn.addEventListener ("click",clsFunc)
// function clsFunc (params) {
//     document.getElementById ("popup").style.display = "none";
//     document.getElementById ("popupBtn").style.display = "black";
// }
// closeBtn.addEventListener ("click",clsFunc)
// function clsFunc (params) {
//     document.getElementById ("popup").style.display = "black";
//     document.getElementById ("popupBtn").style.display = "none";
// }

