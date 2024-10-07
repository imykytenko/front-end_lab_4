let variantNumber = 3;
let firstElementIndex = (variantNumber % 10) + 1;
let secondElementIndex = firstElementIndex + 1;

let toggleColorFirst = true;
let toggleColorSecond = true;

document.getElementById('4-item').addEventListener('click', function () {
    if (toggleColorFirst) {
        this.style.backgroundColor = 'lightblue';
        this.style.color = 'darkblue';
    } else {
        this.style.backgroundColor = 'lightgreen';
        this.style.color = 'darkgreen';
    }
    toggleColorFirst = !toggleColorFirst;
});

let allElements = document.querySelectorAll('h2, p, h4, ul li, h4, ol li');

if (allElements[secondElementIndex - 1]) {
    allElements[secondElementIndex - 1].addEventListener('click', function () {
        if (toggleColorSecond) {
            this.style.backgroundColor = 'lightgreen';
            this.style.color = 'darkgreen';
        } else {
            this.style.backgroundColor = 'lightblue';
            this.style.color = 'darkblue';
        }
        toggleColorSecond = !toggleColorSecond;
    });
}

let imgCounter = 0;
let imageContainer = document.querySelector('a');

document.getElementById('add-img-btn').addEventListener('click', function () {
    let newImg = document.createElement('img');
    imgCounter++;
    newImg.src = 'f08072159a443e07501f3df97987f8a3.jpg';
    newImg.alt = 'Львів';
    newImg.id = 'city-image-' + imgCounter;
    newImg.width = 600;
    imageContainer.appendChild(newImg);
});

document.getElementById('increase-img-btn').addEventListener('click', function () {
    let images = document.querySelectorAll('img');
    images.forEach(function (img) {
        img.width += 50;
    });
});

document.getElementById('decrease-img-btn').addEventListener('click', function () {
    let images = document.querySelectorAll('img');
    images.forEach(function (img) {
        if (img.width > 50) {
            img.width -= 50;
        }
    });
});

document.getElementById('remove-img-btn').addEventListener('click', function () {
    let images = document.querySelectorAll('img');
    if (images.length > 0) {
        images[0].remove();
    }
});
