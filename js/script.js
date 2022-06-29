const body = document.querySelector("body");

// programatically creating images on page
for (let i = 1; i <= 171; i++) {
	const image = document.createElement("img");
	const li = document.createElement("li");
	li.classList.add("h-[20vh]", "grow");
	const ul = document.getElementById("gallery-ul");
	ul.append(li);
	li.setAttribute("id", `li-${i}`);

	image.src = `../images/past-shows/providence-house-${i}.jpg`;
	image.classList.add(
		"object-cover",
		"w-full",
		"h-full",
		"max-h-full",
		"max-w-full",
		"hover:opacity-50",
		"align-bottom",
		"object-center",
		"gallery-image"
	);
	image.setAttribute("loading", "lazy");

	li.append(image);
}

let images = document.querySelectorAll(".gallery-image");

//creating Image overlay whenver image is selected
for (let i = 0; i < images.length; i++) {
	images[i].addEventListener("click", function () {
		const imageDiv = document.createElement("div");
		imageDiv.classList.add(
			"fixed",
			"inset-0",
			"w-screen",
			"h-screen",
			"bg-black/[0.9]",
			"flex",
			"justify-center",
			"items-center",
			"text-white",
			"z-50"
		);

		let largeImage = document.createElement("img");
		const imageOverlay = (i) => {
			largeImage.src = images[i].src;
			largeImage.classList.add("w-90", "h-auto", "p-20", "max-h-[90vh]");

			imageDiv.append(largeImage);
		};

		body.append(imageDiv);
		imageOverlay(i);

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

		let count = 0; //

		backImg.onclick = function () {
			if (i + count > 0) {
				largeImage.remove();

				count--;
				largeImage.src = images[i + count].src;
				imageDiv.append(largeImage);
				console.log(i + count);
			}
		};

		forwardImg.onclick = function () {
			if (i + count < images.length - 1) {
				largeImage.remove();

				count++;
				largeImage.src = images[i + count].src;
				imageDiv.append(largeImage);
				console.log(i + count);
			}
		};

		// remove image overlay
		xButton.onclick = function () {
			imageDiv.remove();
		};
	});
}
