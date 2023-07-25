const imagesWrapper = document.querySelector(".galery__images")
const loadMoreBtn = document.querySelector(".galery__button")
const searchInput = document.querySelector(".search__form-input")
const lightbox = document.querySelector(".lightbox")
const closeBtn = lightbox.querySelector(".uil-times")
const downloadImgBtn = lightbox.querySelector(".uil-import")
const closeBg = lightbox.querySelector(".lightbox__bg")

const apiKey = "Coloque sua API key aqui"
const perPage = 15
let currentPage = 1;
let searchTerm = null;

const downloadImg = (imgURL) => {
    fetch(imgURL).then(res => res.blob()).then(file => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();
    }).catch(() => alert("Erro ao baixar a imagem"))
}
const showLightbox = (name, img) => {
    lightbox.querySelector("img").src = img;
    lightbox.querySelector("span").innerText = name;
    downloadImgBtn.setAttribute("data-img", img);
    lightbox.classList.add("show");
    document.body.style.overflow = "hidden"
}

const hideLightbox = () => {
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto"
}

const generateHTML = (images) => {
    imagesWrapper.innerHTML += images.map(img =>
        `
            <li class="galery__card" onclick="showLightbox('${img.photographer}', '${img.src.large2x}')">
                    <img src="${img.src.large2x}" alt="${img.alt} - ${img.photographer}">
                    <div class="galery__card-detail">
                        <div class="photograph">
                            <i class="uil uil-camera"></i>
                            <span>${img.photographer}</span>
                        </div>
                        <button onclick="downloadImg('${img.src.large2x}')">
                            <i class="uil uil-import"></i>
                        </button>
                    </div>
                </li>
            `
    ).join("")
}

const getImages = (apiURL) => {
    loadMoreBtn.innerText = "Carregando...";
    loadMoreBtn.classList.add("disabled");
    fetch(apiURL, {
        headers: {
            Authorization: apiKey
        }
    }).then(res => res.json()).then(data => {
        generateHTML(data.photos);
        loadMoreBtn.innerText = "Carregar mais";
        loadMoreBtn.classList.remove("disabled");
    }).catch(() => alert("Erro ao carregar as imagens!"))
}

const loadMoreImages = () => {
    currentPage++;
    let apiURL = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
    apiURL = searchTerm ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}` : apiURL
    getImages(apiURL)
}

const loadSearchImages = (e) => {
    if (e.target.value === "") return searchTerm = null
    if (e.key === "Enter") {
        currentPage = 1;
        searchTerm = e.target.value;
        imagesWrapper.innerHTML = "";
        getImages(`https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`)
    }
}

getImages(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`)
loadMoreBtn.addEventListener("click", loadMoreImages)
searchInput.addEventListener("keyup", loadSearchImages)
closeBtn.addEventListener("click", hideLightbox)
downloadImgBtn.addEventListener("click", (e) => downloadImg(e.target.dataset.img))
closeBg.addEventListener("click", hideLightbox)