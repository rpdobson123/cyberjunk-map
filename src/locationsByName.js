export default {
    "Deep Space": {
        icon: "FaRocket",
        to: [{ name: "Sol" }, { name: "Miskatonic" }, {
            x: 90, y: 90, name: "Ship Dossier"
        },]
    },
    "PostPluto": {
        image: "PostPluto",
        icon: 'FaGlobe',
        to: [
            {
                x: 50, y: 50, name: "Library"
            },
            {
                x: 5, y: 80, name: "Sol"
            },
            {
                x: 55, y: 65, name: "The Blob"
            },
            {
                x: 70, y: 55, name: "Grandaddy's Jewel"
            }
        ],
    },
    "The Blob": {
        image: "pp-blob",
        icon: 'FaFire',
        to: [
            {
                x: 20, y: 5, name: "Library"
            },
            {
                x: 5, y: 50, name: "PostPluto"
            },
            {
                x: 65, y: 15, name: "Grandaddy's Jewel"
            }
        ],
    },
    "Library": {
        image: "pp-library",
        icon: 'FaBook',
        to: [
            {
                x: 5, y: 50, name: "PostPluto"
            },
            {
                x: 25, y: 82, name: "The Blob"
            }
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
        locked: true,
    },
    "Triton": {
        locked: true,
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
            {
                x: 14, y: 18, name: "Earth",
            },
            {
                x: 35, y: 12, name: "Mars",
            },
            {
                x: 61, y: 32, name: "Venus",
            },
            {
                x: 25, y: 60, name: "Neptune",
            },
            {
                x: 36, y: 55, name: "Triton",
            },
            {
                x: 50, y: 78, name: "Halfway House",
            },
            {
                x: 71, y: 64, name: "Uranus",
            },
            {
                y: 90, name: "Deep Space"
            },
            {
                y: 90, name: "Ship Dossier"
            },
            {
                x: 100, y: 50, name: "Miskatonic"
            },
            {
                x: 90, y: 90, name: "PostPluto"
            }
        ]
    },
    "Miskatonic": {
        image: "miskatonic",
        icon: 'FaSun',
        to: [
            {
                x: 5, y: 90, name: "Deep Space"
            },
            {
                x: 47, y: 15, name: "Applachia"
            },
            {
                x: 17, y: 38, name: "Ent"
            },
            {
                x: 61, y: 78, name: "Stapel Skivor"
            }
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
            {
                x: 10, y: 85, name: "The Blob"
            },
            {
                x: 90, y: 90, name: "PostPluto"
            }
        ]
    },
    "Ship Dossier": {
        icon: 'FaWarehouse',
        to: [
            {
                name: "The Handturkey"
            },
            {
                name: "The Red Cross"
            },
            {
                name: "The Baby Boomerang"
            },
            {
                name: "The Trendy Trilobite"
            },
            {
                name: "The Midnight"
            },
            {
                x: 90, y: 90, name: "Deep Space"
            }
        ]
    },
    "The Handturkey": {
        icon: 'FaShip',
        hidden: true,
        image: 'cal-mando-ship',
        to: [
            {
                name: "Ship Dossier"
            }
        ],
    },
    "The Red Cross": {
        icon: 'FaShip',
        hidden: true,
        to: [
            {
                name: "Ship Dossier"
            }
        ],
    },
    "The Baby Boomerang": {
        icon: 'FaShip',
        hidden: true,
        to: [
            {
                name: "Ship Dossier"
            }
        ],
    },
    "The Trendy Trilobite": {
        icon: 'FaShip',
        image: 'wayne-walden-ship',
        to: [
            {
                name: "Ship Dossier"
            }
        ],
    },
    "The Midnight": {
        icon: 'FaShip',
        image: 'Midnight',
        to: [
            {
                name: "Ship Dossier"
            }
        ],
    },
    "Default": {
        to: [
            {
                name: "PostPluto"
            }
        ],
    }
}