import porcelainTilesImage from "../assets/porcelain-tiles.png";
import massiveSlabImage from "../assets/massive-slab.png";
import sanitaryImage from "../assets/Sanitaryware.png";

export const navLinks = [
    {
        id: "/",
        title: "HOME",
    },
    {
        id: "about",
        title: "ABOUT",
        dropdown: [
            {
                id: "companyProfile",
                title: "COMPANY PROFILE",
            },
            {
                id: "infrastructure",
                title: "INFRASTRUCTURE",
            },
            {
                id: "certificate",
                title: "CERTIFICATE",
            },
        ],
    },
    {
        id: "catalogue",
        title: "CATALOGUE",
    },
    {
        id: "technicalArea",
        title: "TECHNICAL AREA",
        dropdown: [
            {
                id: "packingDetails",
                title: "PACKAGING DETAILS",
            },
            {
                id: "tileCalculator",
                title: "TILE CALCULATOR",
            },
        ],
    },
    {
        id: "exports",
        title: "EXPORTS",
    },
    {
        id: "contactUs",
        title: "CONTACT US",
    },
];

export const normalProducts = [
    {
        id: 1,
        size: "60 X 60",
        thickness: "9",
        tilesPerBox: "4",
        sqMtrPerBox: "1.44",
        boxPerPallet: "44",
        palletPerContainer: "23",
        boxPerContainer: "1012",
        sqmPerContainer: "1457.28",
        approxWeight: "28000",
        tileType:""
    },
    {
        id: 2,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "72",
        palletPerContainer: "10",
        boxPerContainer: "900",
        sqmPerContainer: "1296",
        approxWeight: "28000",
        tileType:""
    },
    {
        id: 3,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "30",
        palletPerContainer: "6",
        boxPerContainer: "900",
        sqmPerContainer: "1296",
        approxWeight: "28000",
        tileType:""
    },
    {
        id: 4,
        size: "80 X 80",
        thickness: "9",
        tilesPerBox: "3",
        sqMtrPerBox: "1.92",
        boxPerPallet: "34",
        palletPerContainer: "20",
        boxPerContainer: "680",
        sqmPerContainer: "1350.6",
        approxWeight: "28000",
        tileType:""
    },
];

export const euroProducts = [
    {
        id: 1,
        size: "60 X 60",
        thickness: "9",
        tilesPerBox: "4",
        sqMtrPerBox: "1.44",
        boxPerPallet: "36",
        palletPerContainer: "24",
        boxPerContainer: "864",
        sqmPerContainer: "1244.16",
        approxWeight: "24200",
        tileType:""
    },
    {
        id: 2,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "60",
        palletPerContainer: "10",
        boxPerContainer: "750",
        sqmPerContainer: "1080",
        approxWeight: "24000",
        tileType:""
    },
    {
        id: 3,
        size: "120 X 60",
        thickness: "9",
        tilesPerBox: "2",
        sqMtrPerBox: "1.44",
        boxPerPallet: "30",
        palletPerContainer: "5",
        boxPerContainer: "750",
        sqmPerContainer: "1080",
        approxWeight: "24000",
        tileType:""
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
        description: "Pristine | Luxurious | Hygienic",
        sizes: ["Wash Basin", "Water Closet", "Pan", "Accessories"],
    },
];



export default collectionItems;
export { porcelainTilesImage, massiveSlabImage, sanitaryImage };

