
// Defining an array with names and image URLs
const linksData = [
    { name: "Franz Ackermann", image: "images/artist.png" },
    { name: "Etel Adnan", image: "images/news-2.png" },
    { name: "Darren Almond", image: "images/news-3.png" },
    { name: "Ellen Altfest", image: "images/news-1.png" },
    { name: "Michael Armitage", image: "images/news-2.png" },
    { name: "Miroslaw Balka", image: "images/news-3.png" },
    { name: "Georg Baselitz", image: "images/news-1.png" },
    { name: "Larry Bell", image: "images/news-2.png" },
    { name: "Jake & Dinos Chapman", image: "images/news-3.png" },
    { name: "Chuck Close", image: "images/news-1.png" },
    { name: "Gregory Crewdson", image: "images/news-2.png" },
    { name: "Tracey Emin", image: "images/news-3.png" },
    { name: "Katharina Fritsch", image: "images/news-1.png" },
    { name: "Theaster Gates", image: "images/news-2.png" },
    { name: "Gilbert & George", image: "images/news-3.png" },
    { name: "Antony Gormley", image: "images/news-1.png" },
    { name: "Andreas Gursky", image: "images/news-2.png" },
    { name: "Mona Hatoum", image: "images/news-3.png" },
    { name: "He Xianzu", image: "images/news-1.png" },
    { name: "Damien Hirst", image: "images/news-2.png" },
    { name: "Robert Irwin", image: "images/news-3.png" },
    { name: "Runa Islam", image: "images/news-1.png" },
    { name: "Sigmar Polke", image: "images/news-2.png" },
    { name: "Anselm Kiefer", image: "images/news-3.png" },
    { name: "Rachel Kneebone", image: "images/news-1.png" },
    { name: "Elad Lassry", image: "images/news-2.png" },
    { name: "Liza Lou", image: "images/news-3.png" },
    { name: "Jac Leirner", image: "images/news-1.png" },
    { name: "Liu Wei", image: "images/news-2.png" },
    { name: "Christian Marclay", image: "images/news-3.png" },
    { name: "Josiah McElheny", image: "images/news-1.png" },
    { name: "Julie Mehretu", image: "images/news-2.png" },
    { name: "Heather and Ivan Morison", image: "images/news-3.png" },
    { name: "Harland Miller", image: "images/news-1.png" },
    { name: "Sarah Morris", image: "images/news-2.png" },
    { name: "Gabriel Orozco", image: "images/news-3.png" },
    { name: "Damian Ortega", image: "images/news-1.png" },
    { name: "Virginia Overton", image: "images/news-2.png" },
    { name: "Eddie Peake", image: "images/news-3.png" },
    { name: "Magnus Plessen", image: "images/news-1.png" },
    { name: "Jessica Rankin", image: "images/news-2.png" },
    { name: "Christian Rosa", image: "images/news-3.png" },
    { name: "Doris Salcedo", image: "images/news-1.png" },
    { name: "Raqib Shaw", image: "images/news-2.png" },
    { name: "Haim Steinbach", image: "images/news-3.png" },
    { name: "Sam Taylor-Johnson", image: "images/news-1.png" },
    { name: "Fred Tomaselli", image: "images/news-2.png" },
    { name: "Jeff Wall", image: "images/news-3.png" },
    { name: "Cerith Wyn Evans", image: "images/artist.png" }
];
const articlesLinks = document.querySelector(".articlesLinks");
const articlesDisplayedImage = document.querySelector(".articlesDisplayedImage");
articlesDisplayedImage.src = linksData[0].image;

linksData.forEach((data, index) => {
    const linkTag = document.createElement("a");
    linkTag.textContent = data.name;
    linkTag.href = "#"; 
    linkTag.classList.add("articlesName");

    linkTag.addEventListener("mouseenter", () => {
        articlesDisplayedImage.src = data.image;
    });
    linkTag.addEventListener("mouseleave", () => {
        articlesDisplayedImage.src = linksData[0].image;
    });

    articlesLinks.appendChild(linkTag);
});