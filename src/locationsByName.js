export default {
    "Deep Space": {
        icon: "FaRocket",
        image: 'deep-space',
        to: [{ x: 30, y: 80, name: "Sol" }, { x: 22, y: 78, name: "Miskatonic" }, { x: 9, y: 68, name: "Tarantin" }, {
            x: 90, y: 90, name: "Ship Dossier"
        },]
    },
    "Tarantin": {
        icon: "FaSun",
        image: "tarantin",
        to: [
            { name: "Covenant", x: 27, y: 36 },
            { name: "Xedustria", x: 68, y: 58 },
            { name: "Tarantin Prime", x: 19, y: 68 },
            { name: "Deep Space", y: 90 },
            { name: "Ship Dossier", y: 90 }],
    },
    "Xedustria": {
        image: 'xedustria',
        to: [{ name: "Tarantin" }]
    },
    "Covenant": {
        locked: true,
    },
    "Tarantin Prime": {
        locked: true,
    },
    "PostPluto": {
        image: "PostPluto",
        icon: 'FaGlobe',
        to: [
            { name: "Library", x: 50, y: 50 },
            { name: "Sol", x: 5, y: 80 },
            { name: "The Blob", x: 55, y: 65 },
            { name: "Grandaddy's Jewel", x: 70, y: 55 }
        ],
    },
    "The Blob": {
        image: "pp-blob",
        icon: 'FaFire',
        to: [
            { name: "Library", x: 20, y: 5 },
            { name: "PostPluto", x: 5, y: 50 },
            { name: "Grandaddy's Jewel", x: 65, y: 15 }
        ],
    },
    "Library": {
        image: "pp-library",
        icon: 'FaBook',
        to: [
            { name: "PostPluto", x: 5, y: 50 },
            { name: "The Blob", x: 25, y: 82 }
        ]
    },
    "Earth": {
        locked: true,
    },
    "Mars": {
        locked: true,
    },
    "Venus": {
        locked: true,
    },
    "Neptune": {
        image: "neptune-1",
        to: [
            { name: "Sol", y: 20 },
            { name: "Triton", x: 18, y: 86 },
            { name: "PLAN", x: 40, y: 27 },
            { name: "Neptune Interior", x: 50, y: 44 },
            { name: "Nereid", x: 82, y: 800 }
        ]
    },
    "Nereid": {
        locked: true,
    },
    "PLAN": {
        icon: "FaCity",
        image: "neptune-2",
        to: [
            { name: "Neptune", y: 20 },
            { name: "Neptune Interior", x: 53.5, y: 44 },
        ]
    },
    "Neptune Interior": {
        icon: "FaCity",
        image: "neptune-3",
        to: [
            { name: "Neptune", x: 4, y: 4 },
            { name: "PLAN", x: 40, y: 80 },
            { name: "PLAN", x: 70, y: 18 },
        ]
    },
    "Triton": {
        image: "triton",
        to: [
            { name: "Neptune", x: 38, y: 5 },
            { name: "Sol", x: 34, y: 5 },
            { name: "Neptune Interior", x: 50, y: 90 },
        ]
    },
    "Uranus": {
        locked: true,
    },
    "Halfway House": {
        locked: true,
    },
    "Sol": {
        image: "sol",
        icon: 'FaSun',
        to: [
            { name: "Earth", x: 14, y: 18 },
            { name: "Mars", x: 35, y: 12 },
            { name: "Venus", x: 61, y: 32 },
            { name: "Neptune", x: 25, y: 60 },
            { name: "Triton", x: 36, y: 55 },
            { name: "Halfway House", x: 50, y: 78 },
            { name: "Uranus", x: 71, y: 64 },
            { name: "Deep Space", y: 90 },
            { name: "Ship Dossier", y: 90 },
            { name: "Miskatonic", x: 100, y: 50 },
            { name: "PostPluto", x: 90, y: 90 }
        ]
    },
    "Miskatonic": {
        image: "miskatonic",
        icon: 'FaSun',
        to: [
            { name: "Deep Space", x: 5, y: 90 },
            { name: "Applachia", x: 47, y: 15 },
            { name: "Ent", x: 17, y: 38 },
            { name: "Stapel Skivor", x: 61, y: 78 }
        ]
    },
    "Ent": {
        locked: true
    },
    "Stapel Skivor": {
        locked: true
    },
    "Grandaddy's Jewel": {
        image: "pp-jewel",
        icon: 'FaShip',
        to: [
            { name: "The Blob", x: 10, y: 85 },
            { name: "PostPluto", x: 90, y: 90 }
        ]
    },
    "Ship Dossier": {
        icon: 'FaWarehouse',
        to: [
            { name: "The Handturkey" },
            { name: "The Red Cross" },
            { name: "The Baby Boomerang" },
            { name: "The Trendy Trilobite" },
            { name: "The Midnight" },
            { name: "Lazy Ghidorah" },
            { name: "The Kickback" },
            { name: "Deep Space", x: 90, y: 90 }
        ]
    },
    "Lazy Ghidorah": {
        icon: 'FaShip',
        hidden: true,
        image: "vanilla-western-ship",
        to: [{ name: "Ship Dossier" }],
    },
    "The Handturkey": {
        icon: 'FaShip',
        hidden: true,
        image: 'cal-mando-ship',
        to: [{ name: "Ship Dossier" }],
    },
    "The Red Cross": {
        icon: 'FaShip',
        hidden: true,
        image: "hospital",
        to: [{ name: "Ship Dossier" }],
    },
    "The Baby Boomerang": {
        icon: 'FaShip',
        hidden: true,
        image: "imogen-inkblot-ship",
        to: [{ name: "Ship Dossier" }],
    },
    "The Trendy Trilobite": {
        icon: 'FaShip',
        image: 'wayne-walden-ship',
        to: [{ name: "Ship Dossier" }],
    },
    "The Kickback": {
        icon: 'FaShip',
        image: 'kick-back',
        to: [{ name: "Ship Dossier" }],
    },
    "The Midnight": {
        icon: 'FaShip',
        image: 'Midnight',
        to: [{ name: "Ship Dossier" }],
    },
    "Default": {
        to: [{ name: "Deep Space" }],
    }
}