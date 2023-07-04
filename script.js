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
    }
]

showChassis();
function showChassis() {
    $(cards).each(function() {
        let name = this.name.toLowerCase();
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
        $(".card-container").append(`<img src="./card-images/ChassisCards/${newName}-front.png">`)
    })
}