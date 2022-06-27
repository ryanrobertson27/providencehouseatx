// need to grab each img and make clickable

// then I want to be able to click on the Image, which will bring that image to the foreground and grey out the background.  It will also create an x in the top right that will allow
// for the user to click off that image.

// I coould after the fact implement a previous next button that can cycle through the images

let images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    const body = document.querySelector("body");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add(
      "fixed",
      "w-screen",
      "h-screen",
      "bg-black/75",
      "flex",
      "justify-center",
      "items-center",
      "text-white"
    );

    let largeImage = document.createElement("img");
    largeImage.src = images[i].src;
    largeImage.classList.add("max-w-50", "h-auto");

    body.append(imageDiv);
    imageDiv.append(largeImage);

    // upper x creationg
    const xButton = document.createElement("img");
    xButton.src = "../images/x-icon.png";
    xButton.classList.add("fixed", "top-0", "right-0", "m-5");
    imageDiv.append(xButton);

    // forward button creation
    const forwardImg = document.createElement("img");
    forwardImg.src = "../images/forward-arrow.png";
    forwardImg.classList.add("fixed", "right-0", "m-5");
    imageDiv.append(forwardImg);

    // back button creation
    const backImg = document.createElement("img");
    backImg.src = "../images/back-arrow.png";
    backImg.classList.add("fixed", "left-0", "m-5");
    imageDiv.append(backImg);

    backImg.onclick = function () {
      image = images[i - 1];
      largeImage.src = image.src;
      imageDiv.append(largeImage);
    };

    forwardImg.onclick = function () {
      largeImage.src = images[i + 1].src;
      imageDiv.append(largeImage);
    };

    // remove image overlay

    xButton.onclick = function () {
      imageDiv.remove();
    };
  });
}
