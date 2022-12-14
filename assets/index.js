//const CAT_API = 'https://api.thecatapi.com/v1/images/search';
const DOG_API = 'https://api.thedogapi.com/v1/images/search';
const DOG_API_KEY = 'live_PMi8BLxFPYAnCgsqmXleBgJkXw2R92PqxaWbPzdSIcETYlcEsmDYTfyDGzfc1epH';
const LIMIT = 6;

const fetchData = async urlApi => {
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

const asignDogPhoto = async () => {
    try {
        const dogData = await fetchData(`${DOG_API}/?limit=${LIMIT}`);
        dogData.forEach((element, index) => {
            document.getElementById(`img-container${index+1}`)
                .innerHTML = `
                    <img id="Dog-Image" class="Dog-Image" src="${element.url}" alt="Cat Random Picture">
                `; 
        }); 
    } catch (error) {
        console.error(error);
    }
};

try {
    asignDogPhoto();
} catch (error) {
    console.error(error);
}