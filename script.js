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
        name: "KP Bulkhead",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "BZ2 Booster",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Locust Cockpit",
        type: "Cockpit",
        faction: "Komplex"
    },
    {
        name: "Scarab Cockpit",
        type: "Cockpit",
        faction: "Komplex"
    },
    {
        name: "Wasp Cockpit",
        type: "Cockpit",
        faction: "Komplex"
    },
    {
        name: "ECM Fin",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Maneuvering Fins",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Tailfin",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Dual Tailfin",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Tailfin-2",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Dual Tailfin-2",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Tailfin-3",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "CL-ARM Rockets",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "ZM2 Heavy Missile",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Stealth Drive",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "FB3 Tri-Thruster",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "Scarab Thruster",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "Locust Thruster Mk2",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "Armored Thruster",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "Wasp Thruster Mk2",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "Wasp Thruster",
        type: "Thruster",
        faction: "Komplex"
    },
    {
        name: "CX6 Anti-Matter Torpedo",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "CX2 Anti-Ship Torpedo",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "K2 Radiator Array",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Small Exhaust",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Medium Exhaust",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "KX Power Cycle",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "CL-23 Railgun",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "C6-3 Gatling Gun",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "C-T22 HE Cannon",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "DB8 Proton Cannon",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "CPL-3 Ball Turret",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "WG5 Grenade Cluster",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "CPL-2 Mantis Laser",
        type: "Systems",
        faction: "Komplex"
    },
    {
        name: "Blade Wings",
        type: "Wing",
        faction: "Komplex"
    },
    {
        name: "Locust Wings",
        type: "Wing",
        faction: "Komplex"
    },
    {
        name: "WSP2 Wings",
        type: "Wing",
        faction: "Komplex"
    },
    {
        name: "WSP1 Wings",
        type: "Wing",
        faction: "Komplex"
    },
    {
        name: "Vector Wings",
        type: "Wing",
        faction: "Komplex"
    }
]

showAllCards();
function showAllCards() {
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
            $(".card-container").append(`<img class="chassis-card" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        } else {
            $(".card-container").append(`<img class="part-card" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        }
        
    })
}