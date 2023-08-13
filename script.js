const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");

searchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
        gifContainer.innerHTML = "Loading...";

        try {
            const apiKey = "G37gLaEizhTkiBREF1bLvhKf1kKCAPhC";
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=12`);
            const data = await response.json();

            gifContainer.innerHTML = "";

            data.data.forEach((gif) => {
                const gifImage = document.createElement("img");
                gifImage.src = gif.images.fixed_height.url;
                gifContainer.appendChild(gifImage);
            });
        } catch (error) {
            console.error("Error fetching GIFs:", error);
            gifContainer.innerHTML = "Error fetching GIFs.";
        }
    }
});
