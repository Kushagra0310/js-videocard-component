function createCard(title, cNmae, views, monthsold, duration, thumbnail) {
    let nofviews
    if (views < 1000) {
        nofviews = views;
    }
    else if (views > 1000000) {
        nofviews = views / 1000000 + "M";
    }
    else {
        nofviews = views / 1000 + "K";
    }

    let time
    if (monthsold < 12) {
        time = months;
    }
    else if (monthsold > 12) {
        time = "years";
        monthsold = Math.floor(monthsold / 12);
    }
    else {
        time = "years";
        monthsold = "1";
    }
    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cNmae} . ${nofviews} views . ${monthsold} ${time} ago</p>
            </div>

        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}



createCard("Tom & Jerry [1940]", "Mustafa Ozkurt", 169000, 9, "1:55", "https://i.ytimg.com/vi/-Yt8q3M2qSE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAkPJbyat-saFn_lb-z0Jx2Z2pd1w")