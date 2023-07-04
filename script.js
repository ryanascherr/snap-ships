const cards = [
    {
        name: "Falx SC-41 Escort",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Falx GA-15 Ground Assault",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Falx XF-8 Experimental Fighter",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Lance SV-51 Scout",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Lance SAC-30 Attack Craft",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Sabre XF-23 Fighter",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Sabre XB-04 Light Bomber",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Sabre XR-01 Fast Recon",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Sabre XG-07 Gunship",
        type: "Chassis",
        faction: "Forge"
    },
    {
        name: "Locust KLAW Stealth Craft",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Locust KLAW Close Support Fighter",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Scarab KLAW Interceptor",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Scarab KLAW Light Fighter",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Scarab KLAW Attack Striker",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Scarab KLAW Jammer",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Wasp KLAW Heavy Fighter",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Wasp KLAW Fighter Bomber",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "Wasp KLAW Deep Recon",
        type: "Chassis",
        faction: "Komplex"
    },
    {
        name: "BF Bulkhead",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Lance Booster",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Falx Booster",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "XRE Extender",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "SC-19 Cockpit",
        type: "Cockpit",
        faction: "Forge"
    },
    {
        name: "Falx Cockpit",
        type: "Cockpit",
        faction: "Forge"
    },
    {
        name: "XF-25 Cockpit",
        type: "Cockpit",
        faction: "Forge"
    },
    {
        name: "Maneuvering Fins",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Falx Fins",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Triple Tailfin",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "XR 135 Missile Rack",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "XR70 Missile Pod",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "H.I.V.E Missile Pod",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "SLS Solar",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "LS Eye",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "AVB Burst Drive",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "Falx Afterburner",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "Falx Thruster",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "Lance Thruster",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "SDU-14 Jump Engine",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "SV Engine",
        type: "Thruster",
        faction: "Forge"
    },
    {
        name: "Falx Cockpit",
        type: "Cockpit",
        faction: "Forge"
    },
    {
        name: "XF-25 Cockpit",
        type: "Cockpit",
        faction: "Forge"
    },
    {
        name: "Mark 48 Shipbreaker",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Medium Exhaust",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Falx Nose",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "Small Exhaust",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "SCAR-4 Pulse Laser",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "MK16 Autocannon",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "TDP-8 Plasma Cannon",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "MX Massdriver Shotgun",
        type: "Systems",
        faction: "Forge"
    },
    {
        name: "SC-19 Wings",
        type: "Wing",
        faction: "Forge"
    },
    {
        name: "Falx Wings",
        type: "Wing",
        faction: "Forge"
    },
    {
        name: "XF-25 Wings",
        type: "Wing",
        faction: "Forge"
    },
    {
        name: "XJ-7 Wings",
        type: "Wing",
        faction: "Forge"
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    },
    {
        name: "",
        type: "",
        faction: ""
    }
]

showChassis();
function showChassis() {
    $(cards).each(function() {
        let name = this.name.toLowerCase();
        let type = this.type.toLowerCase();
        let faction = this.faction.toLowerCase();
        name = name.split(" ");
        let length = name.length;
        let newName = "";
        for (let i = 0; i < length; i++) {
            if (i == length -1) {
                newName += name[i]
            } else {
                newName += name[i] + "-";
            }
        }
        if (this.type == "Chassis") {
            $(".card-container").append(`<img class="chassis" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        } else {
            $(".card-container").append(`<img class="part" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        }
        
    })
}