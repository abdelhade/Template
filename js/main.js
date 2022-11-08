// selct my Li To Add Class Active

let myA = document.querySelectorAll(".mylink li a");

myA.forEach(a => {
    a.addEventListener("click", (e) =>{
        e.preventDefault();  
          myA.forEach(a => {
            a.classList.remove("active");
        })
        e.target.classList.add("active");
        let myContent = document.querySelectorAll(".myDivs .myContent");
        console.log(myContent)
        myContent.forEach(boxes => {
            boxes.style.display = "none";
            document.querySelectorAll(e.target.dataset.filter).forEach(boxes => {
                boxes.style.display = "block";
            })
        })
    })
});

let mySkillsSection = document.querySelector(".skills");
let mySpans = document.querySelectorAll(".myProgress span");


window.onscroll = function(){
    if (window.scrollY >= mySkillsSection.offsetTop - 350){
        mySpans.forEach(span => {
            span.style.width = span.dataset.progress;
        })
    }
};



let myImages = document.querySelectorAll(".blog-boxes .box .image img");

myImages.forEach(img =>{
    img.addEventListener("click", e =>{
        let overlay = document.createElement("div");
        overlay.className = "blog-overlay";
        document.body.appendChild(overlay);

        let myImgBox = document.createElement("div");
        myImgBox.className = "Image-Box";
        let myImage = document.createElement("img");
        myImage.src = img.src;
        myImgBox.appendChild(myImage);
        document.body.appendChild(myImgBox);
        let mySpanClose = document.createElement("span");
        let textClose = document.createTextNode("X");
        mySpanClose.appendChild(textClose);
        mySpanClose.className = "Close";
        myImgBox.appendChild(mySpanClose);

        let myText = document.createElement("h2");
        let contentText = document.createTextNode(img.alt);
        myText.className = "heading-2";
        myText.appendChild(contentText);
        myImgBox.appendChild(myText);



        let myParagph = document.createElement("p");
        let contentParagph = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus.");
        myParagph.className = "paragph-2";
        myParagph.appendChild(contentParagph);
        myImgBox.appendChild(myParagph);


    });
});

document.addEventListener("click", (e) =>{
    if (e.target.className === "Close"){
        e.target.parentNode.remove();
        document.querySelector(".blog-overlay").remove();
    }
})


let workImage = document.querySelectorAll(".work-boxes .box .image img");

workImage.forEach(photo =>{
    photo.addEventListener("click", () =>{
        let myOverlay = document.createElement("div");
        myOverlay.className = "work-overlay";
        document.body.appendChild(myOverlay);

        let workBox = document.createElement("div");
        let myImage = document.createElement("img");
        myImage.src = photo.src;
        workBox.className = "work-box";
        workBox.appendChild(myImage);
        document.body.appendChild(workBox);

        let workClose = document.createElement("span");
        let workCloseText = document.createTextNode("X");
        workClose.className = "work-close";
        workClose.appendChild(workCloseText);
        workBox.appendChild(workClose)
        let headContent = document.createElement("h2");
        let textContent = document.createTextNode(photo.alt);
        headContent.className = "work-heading";
        headContent.appendChild(textContent);
        workBox.appendChild(headContent);



        let paraghContent = document.createElement("p");
        let paraghText = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, ducimus.");
        paraghContent.className = "work-paragh";
        paraghContent.appendChild(paraghText);
        workBox.appendChild(paraghContent);

    })
})
document.addEventListener("click", (e) =>{
    if (e.target.className === "work-close"){
        e.target.parentNode.remove();
        document.querySelector(".work-overlay").remove();
    }
})
