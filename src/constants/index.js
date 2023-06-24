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
    {
        id: "language",
        title: "EN",
        dropdown: [
            {
                id: "en",
                title: "EN",
                language: 'en'
            },
            {
                id: "af",
                title: "AF",
                language: "af"
            },
            {
                id: "sw",
                title: "SW",
                language: "sw"
            },
            {
                id: "es",
                title: "ES",
                language: "es"
            },
            {
                id: "tr",
                title: "TR",
                language: "tr"
            },
            {
                id: "ara",
                title: "AR",
                language: "ara"
            },
            {
                id: "y",
                title: "Y",
                language: "y"
            },

        ],
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
        tileType: ""
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
        tileType: ""
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
        tileType: ""
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
        tileType: ""
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
        tileType: ""
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
        tileType: ""
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
        tileType: ""
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


export const catalogue = [
    {
        category: "Artstone",
        type: "Carving",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1xh72JBcy2y3wXAXByxJK6E_qtkCq_Eq7/view?usp=drive_link",

    },

    {
        category: "Artstone Design",
        type: "Carving",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/14anfJrvPztS4UmigQ8ud1Foe19krs1Lc/view?usp=drive_link",

    },

    {
        category: "Pigmento",
        type: "Matt",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1ioVouj7vpexOk_vljFLyUtJVn7UfxBBe/view?usp=drive_link",

    },
    {
        category: "Mudbox",
        type: "Matt",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/16tnNcIipKWzNPiEyJyY7dGWDOlEmGYdF/view?usp=drive_link",

    },
    {
        category: "Glossy",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1eaV3VECUlJc9VovxJ1g3wWBARU9qIRSk/view?usp=drive_link",

    },
    {
        category: "Wanderlust",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1ifI403YIX6JzFOJBxcMBOlJ-SPKbjEtr/view?usp=drive_link",

    },
    {
        category: "Light-Dark",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1JuhshBo3lY-Yfk9e6XvPPvKLMcBFAztD/view?usp=drive_link",

    },
    {
        category: "Eternity Endless",
        type: "Glossy",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1p9S0gk38greAvZdD-gkcsxq4gtkaqV3j/view?usp=drive_link",

    },
    {
        category: "Wood Collection",
        type: "Wood",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1R2LxD_lAVbeww2pmgosXGmN9JouI4KpV/view?usp=drive_link",

    },
    {
        category: "Wood Collection",
        type: "Wood",
        size: "20 X 120 MM",
        link: "https://drive.google.com/file/d/1BBYujiVbQxy0Wk1U23ZWAe6b1pHqIOW3/view?usp=drive_link",

    },
    {
        category: "Sanitary Ware",
        type: "Sanitary",
        size: "60 X 120 MM",
        link: "https://drive.google.com/file/d/1HwSzugbIJ_yqMuaMZvjAVjLtAlLIllzA/view?usp=drive_link",

    }
];


export default collectionItems;
export { porcelainTilesImage, massiveSlabImage, sanitaryImage };

