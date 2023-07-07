//this is an array ob objects, where each object is a card
//any number of key-value pairs can be added for a card for further customization
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

updateCards(cards);
//takes the array given to it, gets its attributes, creates a structure that will match the name of the png on file, then outputs everything in the array onto the page
function updateCards(array) {
    $(array).each(function() {
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
            $(".card-container").append(`<img class="card chassis-card front" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        } else {
            $(".card-container").append(`<img class="card part-card front" src="./card-images/${type}-${faction}-${newName}-front.png">`)
        }
        
    })
};

$(".card-container").click(function(e) {
    if (!$(e.target).hasClass("card")) return;
    if ($(e.target).hasClass("front")) {
        let src = $(e.target).attr("src"); 
        src = src.replace("front", "back"); 
        $(e.target).attr("src",src);
        $(e.target).removeClass("front");
        $(e.target).addClass("back");
    } else {
        let src = $(e.target).attr("src");
        src = src.replace("back", "front");
        $(e.target).attr("src",src);
        $(e.target).removeClass("back");
        $(e.target).addClass("front");
    }
})

//if a user tries to uncheck a faction checkbox, but it would need to no faction checkboxes being checked, it will not uncheck
$(".faction").click(function(e) {
    let isSomethingChecked = false;
    if ($(".forge").is(':checked')) {
        isSomethingChecked = true;
    }
    if ($(".komplex").is(':checked')) {
        isSomethingChecked = true;    
    }
    if (!isSomethingChecked) {
        $(this).prop('checked', true);
    }
});

//if a user tries to uncheck a type checkbox, but it would need to no type checkboxes being checked, it will not uncheck
$(".type").click(function(e) {
    let isSomethingChecked = false;
    if ($(".chassis").is(':checked')) {
        isSomethingChecked = true;
    }
    if ($(".parts-overall").is(':checked')) {
        isSomethingChecked = true;    
    }
    if (!isSomethingChecked) {
        $(this).prop('checked', true);
    }
    checkForDisable(this);
});

function checkForDisable(element) {
    if (!$(".parts-overall").is(':checked')) {
        $(".parts").prop( "disabled", true );
        $(".parts-filters").addClass("disabled");  
    } else {
        $(".parts").prop( "disabled", false );
        $(".parts-filters").removeClass("disabled");
    }
}

//whenever a checkbox is clicked, run createArray();
$(".filter").click(function() {
    createArray();
});

function createArray() {
    let array = cards;
    array = getFactions(array);
    array = getTypes(array);
    array = getParts(array);
    removeCards();
    updateCards(array);
}

function getFactions(array) {
    let forge;
    let komplex;
    if($('.forge').is(':checked')){
        forge = true;
    }
    if($('.komplex').is(':checked')){
        komplex = true;
    }
    if (!forge) {
        array = array.filter(card => card.faction != "Forge");
    }
    if (!komplex) {
        array = array.filter(card => card.faction != "Komplex");
    }
    return array;
}

function getTypes(array) {
    let chassis;
    let parts;
    if($('.chassis').is(':checked')){
        chassis = true;
    }
    if($('.parts-overall').is(':checked')){
        parts = true;
    }
    if (!chassis) {
        array = array.filter(card => card.type != "Chassis");
    }
    if (!parts) {
        array = array.filter(card => card.type == "Chassis");
    }
    return array;
}

function getParts(array) {
    let cockpit;
    let thruster;
    let wing;
    let system;
    if($('.cockpits').is(':checked')){
        cockpit = true;
    }
    if($('.thrusters').is(':checked')){
        thruster = true;
    }
    if($('.wings').is(':checked')){
        wing = true;
    }
    if($('.systems').is(':checked')){
        system = true;
    }
    if (!cockpit) {
        array = array.filter(card => card.type != "Cockpit");
    }
    if (!thruster) {
        array = array.filter(card => card.type != "Thruster");
    }
    if (!wing) {
        array = array.filter(card => card.type != "Wing");
    }
    if (!system) {
        array = array.filter(card => card.type != "Systems");
    }
    return array;
}

function removeCards() {
    $(".card-container").empty();
}