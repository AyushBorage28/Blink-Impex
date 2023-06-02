import porcelainTilesImage from "../assets/porcelain-tiles.png";
import massiveSlabImage from "../assets/massive-slab.png";
import sanitaryImage from "../assets/sanitaryware.png";

export const navLinks = [
    {
        id: "About",
        title: "ABOUT",
    },
    {
        id: "Products",
        title: "PRODUCTS",
    },
    {
        id: "Catalogue",
        title: "CATALOGUE",
    },
    {
        id: "Technical Area",
        title: "TECHNICAL AREA",
    },
    {
        id: "Contact Us",
        title: "CONTACT US",
    },
];


const collectionItems = [
    {
        title: "PORCELAIN TILES",
        imageSrc: porcelainTilesImage,
        description: "Elegant | Durable | Versatile",
        sizes: ["600 X 600 MM", "800 X 800 MM", "600 X 1200 MM"],
    },
    {
        title: "MASSIVE SLAB",
        imageSrc: massiveSlabImage,
        description: "Bold | Seamless | Impressive",
        sizes: [
            "800 X 1600 MM",
            "1200 X 1200 MM",
            "1200 X 2400 MM",
            "800 X 2400 MM",
            "800 X 3000 MM",
        ],
    },
    {
        title: "SANITARY WARE",
        imageSrc: sanitaryImage,
        description: "Sleek | Hygienic | Modern",
        sizes: ["Wash Basin", "Water Closet", "Pan", "Accessories"],
    },
];

export default collectionItems;
export { porcelainTilesImage, massiveSlabImage, sanitaryImage };

