// Getting //
const container = document.querySelector(".container");

// Array of Object //
const url = "https://fakestoreapi.com/products?sort=desc"
const getDataFromApi = async (link) => {
    const res = await fetch(link);
    const data = await res.json();
    getData(data)
   };
getDataFromApi(url);

const getData = (data) =>{
    console.log(data);
    // Funcation Call //
    renderData(data, container, productCard);
    // Funcation Call //
}
// Cards //
const productCard = (item) => {
    return `
    <div class="w-full border rounded-lg text-dark relative" data-index="${item.id}">
        <a href="#"><img class="p-8 rounded-t-lg" src="https://www.cityguide-dubai.com/fileadmin/_processed_/3/3/csm_img-worlds-of-adventures-teaser_40e4184da1.jpg" alt="" /></a>
        <div class="px-5 pb-5">
            <a href="#"><h5 class="text-2xl font-semibold">${item.title}</h5></a>
            <div class="flex items-center justify-between">
                <span class="text-xl font-bold">$${item.price}</span>
                <a href="#" class="text-white bg-blue-700 outline-none font-medium rounded-lg text-sm px-5 py-3 text-center">Add to cart</a>
            </div>
            <p></p>
        </div>
        <button class="absolute text-white top-1 right-3 text-xl delete-btn"><i class="fa-solid fa-xmark"></i></button></div>`;
    };

    
// Main Funcation //
const renderData = (data, container, fun) => {
    container.innerHTML = `${data.map(fun).join("")}`;
};
// Main Funcation //
