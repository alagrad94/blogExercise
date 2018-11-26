// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const sectionEl = document.querySelector(".article__header") 
    sectionEl.textContent = "Welcome to Russ' blog";

const sectionEl1 = document.querySelectorAll(".article__header")
    sectionEl1.forEach(x => {
        x.classList.add("important");
    });

const sectionEl2 = document.querySelector(".dashed")
    sectionEl2.classList.remove("dashed");

const sectionEl3 = document.querySelector(".article__footer")    
    sectionEl3.classList.add("goldenrod");