let imagesItems = [...document.querySelectorAll(".img_wrap")];
console.log(imagesItems);

let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

let setItemAcctive = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.5,
};


 //どこにいるか監視する。　   
let observer = new IntersectionObserver(setItemAcctive, options);

observer.observe(titleMessage);

//img-wrapは偶数と奇数で出現する場所が違う

imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
}); 


titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
    observer.observe(title);
})