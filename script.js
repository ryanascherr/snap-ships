//TODO: Lazy Loading

//this is an array of objects, where each object is a card
//any number of key-value pairs can be added to a card for further customization
const cards = [
    // START FORGE CHASSIS
    {
        name: "Falx SC-41 Escort",
        type: "Chassis",
        faction: "Forge",
        url: "https://images.squarespace-cdn.com/content/v1/640d30d63bc48b5227f654a6/08c38b6b-931d-4c2e-907c-985d958999fe/chassisForge_Falx_27F.png?format=1000w",
        set: "Elite"
    },
    {
        name: "Falx GA-15 Ground Assault",
        type: "Chassis",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Falx XF-8 Experimental Fighter",
        type: "Chassis",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Lance SV-51 Scout",
        type: "Chassis",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Lance SAC-30 Attack Craft",
        type: "Chassis",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Sabre XF-23 Fighter",
        type: "Chassis",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Sabre XB-04 Light Bomber",
        type: "Chassis",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Sabre XR-01 Fast Recon",
        type: "Chassis",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Sabre XG-07 Gunship",
        type: "Chassis",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "RL-55 Assault Drone",
        type: "Chassis",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "DA-63 Turbine Drone",
        type: "Chassis",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "SR-12 Recon Drone",
        type: "Chassis",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "AV-2 Protector Drone",
        type: "Chassis",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE CHASSIS
    // START KOMPLEX CHASSIS
    {
        name: "Locust KLAW Stealth Craft",
        type: "Chassis",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Locust KLAW Close Support Fighter",
        type: "Chassis",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Scarab KLAW Interceptor",
        type: "Chassis",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Scarab KLAW Light Fighter",
        type: "Chassis",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Scarab KLAW Attack Striker",
        type: "Chassis",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Scarab KLAW Jammer",
        type: "Chassis",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Wasp KLAW Heavy Fighter",
        type: "Chassis",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Wasp KLAW Fighter Bomber",
        type: "Chassis",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Wasp KLAW Deep Recon",
        type: "Chassis",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "K-DIVE Ambush Drone",
        type: "Chassis",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "K-SWARM Strike Drone",
        type: "Chassis",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "K-HEAT Ramora Drone",
        type: "Chassis",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "K-JAM Disruption Drone",
        type: "Chassis",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX CHASSIS
    // START FORGE COCKPITS
    {
        name: "SC-19 Cockpit",
        type: "Cockpit",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Falx Cockpit",
        type: "Cockpit",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "XF-25 Cockpit",
        type: "Cockpit",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Gunship Cockpit",
        type: "Cockpit",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE COCKPITS
    // START FORGE THRUSTERS
    {
        name: "AVB Burst Drive",
        type: "Thruster",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Falx Afterburner",
        type: "Thruster",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Falx Thruster",
        type: "Thruster",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Lance Thruster",
        type: "Thruster",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "SDU-14 Jump Engine",
        type: "Thruster",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "SV Engine",
        type: "Thruster",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "DA Turbine Thruster",
        type: "Thruster",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE THRUSTERS
    // START FORGE WINGS
    {
        name: "SC-19 Wings",
        type: "Wing",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Falx Wings",
        type: "Wing",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "XF-25 Wings",
        type: "Wing",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "XJ-7 Wings",
        type: "Wing",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "RL-55 Wings",
        type: "Wing",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE WINGS
    // START FORGE WEAPONS
    {
        name: "SCAR-4 Pulse Laser",
        type: "Weapon",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "MK16 Autocannon",
        type: "Weapon",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "TDP-8 Plasma Cannon",
        type: "Weapon",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "MX Massdriver Shotgun",
        type: "Weapon",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "SCAR-2 Pulse Laser",
        type: "Weapon",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "MK3 Plasma Cannon",
        type: "Weapon",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "X1 Sniper Laser",
        type: "Weapon",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "M5 Metal Storm",
        type: "Weapon",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE WEAPONS
    // START FORGE MISSILES
    {
        name: "XR 135 Missile Rack",
        type: "Missile",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "XR70 Missile Pod",
        type: "Missile",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "H.I.V.E Missile Pod",
        type: "Missile",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Mark 48 Shipbreaker",
        type: "Missile",
        faction: "Forge",
        set: "Elite"
    },
    // END FORGE MISSILES
    // START FORGE FINS
    {
        name: "Maneuvering Fins",
        type: "Fin",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Falx Fins",
        type: "Fin",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Triple Tailfin",
        type: "Fin",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Strafing Fins",
        type: "Fin",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "Dual Tailfin",
        type: "Fin",
        faction: "Forge",
        set: "Swarm"
    },
    // END FORGE FINS
    // START FORGE VENTS
    {
        name: "SLS Solar",
        type: "Vent",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Medium Exhaust",
        type: "Vent",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Falx Nose",
        type: "Vent",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "Small Exhaust",
        type: "Vent",
        faction: "Forge",
        set: "Starter"
    },
    // END FORGE VENTS
    // START FORGE UTILITY
    {
        name: "BF Bulkhead",
        type: "Utility",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Lance Booster",
        type: "Utility",
        faction: "Forge",
        set: "Scout"
    },
    {
        name: "Falx Booster",
        type: "Utility",
        faction: "Forge",
        set: "Elite"
    },
    {
        name: "XRE Extender",
        type: "Utility",
        faction: "Forge",
        set: "Starter"
    },
    {
        name: "Targeting Array",
        type: "Utility",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "Small Deflector",
        type: "Utility",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "Jamming Fin",
        type: "Utility",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "Missile Relay",
        type: "Utility",
        faction: "Forge",
        set: "Swarm"
    },
    {
        name: "LS Eye",
        type: "Utility",
        faction: "Forge",
        set: "Starter"
    },
    // END FORGE UTILITY
    // START KOMPLEX COCKPITS
    {
        name: "Locust Cockpit",
        type: "Cockpit",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Scarab Cockpit",
        type: "Cockpit",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Wasp Cockpit",
        type: "Cockpit",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Reaper Cockpit",
        type: "Cockpit",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX COCKPITS
    // START KOMPLEX THRUSTERS
    {
        name: "Stealth Drive",
        type: "Thruster",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "FB3 Tri-Thruster",
        type: "Thruster",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Scarab Thruster",
        type: "Thruster",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Locust Thruster Mk2",
        type: "Thruster",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Armored Thruster",
        type: "Thruster",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Wasp Thruster Mk2",
        type: "Thruster",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Wasp Thruster",
        type: "Thruster",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Thruster Fin",
        type: "Thruster",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX THRUSTERS
    // START KOMPLEX WINGS
    {
        name: "Blade Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Locust Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "WSP2 Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "WSP1 Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Vector Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "KD1 Dual Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "Swarm Wings",
        type: "Wing",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX WINGS
    // START COMPLEX WEAPONS
    {
        name: "CL-23 Railgun",
        type: "Weapon",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "C6-3 Gatling Gun",
        type: "Weapon",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "C-T22 HE Cannon",
        type: "Weapon",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "DB8 Proton Cannon",
        type: "Weapon",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "CPL-3 Ball Turret",
        type: "Weapon",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "WG5 Grenade Cluster",
        type: "Weapon",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "C-8 Gauss Cannon",
        type: "Weapon",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "CDL-Shock",
        type: "Weapon",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "CPL-2 Mantis Laser",
        type: "Weapon",
        faction: "Komplex",
        set: "Starter"
    },
    // END KOMPLEX WEAPONS
    // START KOMPLEX MISSILES
    {
        name: "CL-ARM Rockets",
        type: "Missile",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "ZM2 Heavy Missile",
        type: "Missile",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "CX6 Anti-Matter Torpedo",
        type: "Missile",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "CX2 Anti-Ship Torpedo",
        type: "Missile",
        faction: "Komplex",
        set: "Elite"
    },
    // END KOMPLEX MISSILES
    // START KOMPLEX FINS
    {
        name: "Tailfin",
        type: "Fin",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Tailfin-2",
        type: "Fin",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Tailfin-3",
        type: "Fin",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Dual Tailfin",
        type: "Fin",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Dual Tailfin-2",
        type: "Fin",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "Maneuvering Fins",
        type: "Fin",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "Armored Tailfin",
        type: "Fin",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX FINS
    // START KOMPLEX VENTS
    {
        name: "K2 Radiator Array",
        type: "Vent",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Small Exhaust",
        type: "Vent",
        faction: "Komplex",
        set: "Scout"
    },
    {
        name: "Medium Exhaust",
        type: "Vent",
        faction: "Komplex",
        set: "Elite"
    },
    {
        name: "KX Power Cycle",
        type: "Vent",
        faction: "Komplex",
        set: "Starter"
    },
    // END KOMPLEX VENTS
    // START KOMPLEX UTILITY
    {
        name: "Adaptive Plating",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "KP Bulkhead",
        type: "Utility",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "BZ2 Booster",
        type: "Utility",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "XM Booster Pods",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "ECM Fin",
        type: "Utility",
        faction: "Komplex",
        set: "Starter"
    },
    {
        name: "K2 Small Deflector",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "Ram Spike",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "HRK-Lockdown",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    {
        name: "S-8 Exact",
        type: "Utility",
        faction: "Komplex",
        set: "Swarm"
    },
    // END KOMPLEX SWARM PARTS
]

updateDisplayedCards(cards);

//for each item in the array of cards passed to it, gets its attributes and creates a string that will match the name of its corresponding image on file
//then display all of the cards to the page
//if the card is a chassis card, give it the class 'chassis'
//if the card is a part card, give it the class 'part'
function updateDisplayedCards(arrayOfCards) {
    $(arrayOfCards).each(function() {
        let cardName = this.name.toLowerCase();
        let cardType = this.type.toLowerCase();
        let cardFaction = this.faction.toLowerCase();
        let cardSet = this.set.toLowerCase();
        cardName = cardName.split(" ");
        let nameLength = cardName.length;
        let updatedCardName = "";

        for (let i = 0; i < nameLength; i++) {
            if (i == nameLength -1) {
                updatedCardName += cardName[i];
            } else {
                updatedCardName += cardName[i] + "-";
            }
        }

        if (cardType == "chassis") {
            let sizeClass = cardSet == "swarm" ? "chassis-card--small" : "";
            $(".card-container").append(`<img loading="lazy" class="card chassis-card ${sizeClass} front" src="./card-images/${cardType}-${cardFaction}-${updatedCardName}-front.png">`)
        } else {
            $(".card-container").append(`<img loading="lazy" class="card part-card front" src="./card-images/${cardType}-${cardFaction}-${updatedCardName}-front.png">`)
        }
    })
};

$("input").on('change', function(){
    let itemChanged = this;
    highLightOrUnhighlightButton(itemChanged);
});

//if checkbox is checked, highlight button and show checkmark
//if checkbox is not checked, remove highlight from button and hide checkmark
function highLightOrUnhighlightButton(itemChanged) {
    let changedButton = $(itemChanged).parent()[0];
    changedButton = $(changedButton).parent([0]);

    if ($(itemChanged).is(":checked")) {
        $(changedButton).addClass("highlight");
        $(changedButton).removeClass("no-highlight");
        $(changedButton).children('.checkmark').removeClass("d-none");
    } else {
        $(changedButton).removeClass("highlight");
        $(changedButton).addClass("no-highlight");
        $(changedButton).children('.checkmark').addClass("d-none");
    }
}

$(".card-container").click(function(e) {
    let clickedItem = e.target;

    if ($(clickedItem).hasClass("card")) {
        flipCard(clickedItem);
    }
})

//if card is showing front, show back
//if card is showing back, show front
function flipCard(selectedCard) {
    let cardImageSource = $(selectedCard).attr("src");
    let isCardShowingFront = $(selectedCard).hasClass("front");

    if (isCardShowingFront) {
        cardImageSource = cardImageSource.replace("front", "back"); 
        $(selectedCard).attr("src", cardImageSource);
        $(selectedCard).removeClass("front");
        $(selectedCard).addClass("back");
    } else {
        cardImageSource = cardImageSource.replace("back", "front");
        $(selectedCard).attr("src", cardImageSource);
        $(selectedCard).removeClass("back");
        $(selectedCard).addClass("front");
    }
}

$(".filter").click(function() {
    let clickedItem = this;
    let id = ($(clickedItem).attr("for"));
    let selectedCheckbox = $(`#${id}`);
    selectedCheckbox = selectedCheckbox[0];

    if ($(selectedCheckbox).hasClass("set")) {
        makeSureASetCheckboxIsChecked(selectedCheckbox);
    }

    if ($(selectedCheckbox).hasClass("faction")) {
        makeSureAFactionCheckboxIsChecked(selectedCheckbox);
    }

    if ($(selectedCheckbox).hasClass("type")) {
        makeSureATypeCheckboxIsChecked(selectedCheckbox);
        checkIfPartsShouldBeDisabled();
    }

    if ($(selectedCheckbox).hasClass("parts")) {
        makeSureAPartsCheckboxIsChecked(selectedCheckbox);
    }

    createArray();
});

//if a user tries to uncheck a set checkbox, but it would lead to no set checkboxes being checked, it will not uncheck
function makeSureASetCheckboxIsChecked(selectedCheckbox) {
    let isStarterCheckboxChecked = $("#starter").is(':checked');
    let isEliteCheckboxChecked = $("#elite").is(':checked');
    let isScoutCheckboxChecked = $("#scout").is(':checked');
    let isSwarmCheckboxChecked = $("#swarm").is(':checked');

    if (!isStarterCheckboxChecked && !isEliteCheckboxChecked && !isScoutCheckboxChecked & !isSwarmCheckboxChecked) {
        $(selectedCheckbox).prop('checked', true);
    }
}

//if a user tries to uncheck a faction checkbox, but it would lead to no faction checkboxes being checked, it will not uncheck
function makeSureAFactionCheckboxIsChecked(selectedCheckbox) {
    let isForgeCheckboxChecked = $("#forge").is(':checked');
    let isKomplexCheckboxChecked = $("#komplex").is(':checked');

    if (!isForgeCheckboxChecked && !isKomplexCheckboxChecked) {
        $(selectedCheckbox).prop('checked', true);
    }
}

//if a user tries to uncheck a cockpit, thruster, wing, or system checkbox, but it would lead to none of them being checked, it will not uncheck
function makeSureAPartsCheckboxIsChecked(selectedCheckbox) {
    let isCockpitCheckboxChecked = $('#cockpits').is(':checked');
    let isWingCheckboxChecked = $('#wings').is(':checked');
    let isThrusterCheckboxChecked = $('#thrusters').is(':checked');
    let isWeaponCheckboxChecked = $('#weapons').is(':checked');
    let isMissileCheckboxChecked = $('#missiles').is(':checked');
    let isFinCheckboxChecked = $('#fins').is(':checked');
    let isVentCheckboxChecked = $('#vents').is(':checked');
    let isUtilityCheckboxChecked = $('#utility').is(':checked');

    if (!isCockpitCheckboxChecked && !isWingCheckboxChecked && !isThrusterCheckboxChecked && !isWingCheckboxChecked && !isWeaponCheckboxChecked && !isMissileCheckboxChecked && !isFinCheckboxChecked && !isVentCheckboxChecked && !isUtilityCheckboxChecked) {
        $(selectedCheckbox).prop('checked', true); 
    }
}

//if a user tries to uncheck a type checkbox, but it would lead to no type checkboxes being checked, it will not uncheck
function makeSureATypeCheckboxIsChecked(selectedCheckbox) {
    let isChassisCheckboxChecked = $("#chassis").is(':checked');
    let isPartsCheckboxChecked = $("#parts-overall").is(':checked');

    if (!isChassisCheckboxChecked && !isPartsCheckboxChecked) {
        $(selectedCheckbox).prop('checked', true);
    }
}

//if 'parts' is unchecked, disable the cockpits, thrusters, wings, and systems checkboxes, and add the 'disabled' class to the entire box
function checkIfPartsShouldBeDisabled() {
    if (!$("#parts-overall").is(':checked')) {
        $(".parts").prop( "disabled", true );
        $(".parts-filters").addClass("disabled");  
    } else {
        $(".parts").prop( "disabled", false );
        $(".parts-filters").removeClass("disabled");
    }
}

//looks at all of the currently checked checkboxes, and creates an array of cards that matches
//then remove all cards that were previously displayed
//then display new array of cards
function createArray() {
    let arrayOfCards = cards;
    arrayOfCards = filterSets(arrayOfCards);
    arrayOfCards = filterFactions(arrayOfCards);
    arrayOfCards = filterTypes(arrayOfCards);
    arrayOfCards = filterParts(arrayOfCards);

    removeCards();
    updateDisplayedCards(arrayOfCards);
}

//if a set is unchecked, remove all cards of that set from the array
function filterSets(arrayOfCards) {
    let isStarterCheckboxChecked = $("#starter").is(':checked');
    let isEliteCheckboxChecked = $("#elite").is(':checked');
    let isScoutCheckboxChecked = $("#scout").is(':checked');
    let isSwarmCheckboxChecked = $("#swarm").is(':checked');

    if (!isStarterCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.set != "Starter");
    }

    if (!isEliteCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.set != "Elite");
    }

    if (!isScoutCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.set != "Scout");
    }

    if (!isSwarmCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.set != "Swarm");
    }

    return arrayOfCards;
}

//if forge is unchecked, remove all forge cards from the array
//if komplex is unchecked, remove all komplex cards from the array
function filterFactions(arrayOfCards) {
    let isForgeCheckboxChecked = $('#forge').is(':checked');
    let isKomplexCheckboxChecked = $('#komplex').is(':checked');

    if (!isForgeCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.faction != "Forge");
    }

    if (!isKomplexCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.faction != "Komplex");
    }

    return arrayOfCards;
}

//if chassis is unchecked, remove all chassis cards from the array
//if parts is unchecked, remove all parts cards from the array
function filterTypes(arrayOfCards) {
    let isChassisCheckboxChecked = $('.chassis').is(':checked');
    let isPartsCheckboxChecked = $('.parts-overall').is(':checked');

    if (!isChassisCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Chassis");
    }

    if (!isPartsCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type == "Chassis");
    }

    return arrayOfCards;
}

//if cockpit is unchecked, remove all cockpit cards from the array
//if thruster is unchecked, remove all thruster cards from the array
//if wing is unchecked, remove all wing cards from the array
//if system is unchecked, remove all system cards from the array
function filterParts(arrayOfCards) {
    let isCockpitCheckboxChecked = $('.cockpits').is(':checked');
    let isWingCheckboxChecked = $('.wings').is(':checked');
    let isThrusterCheckboxChecked = $('.thrusters').is(':checked');
    let isWeaponCheckboxChecked = $('.weapons').is(':checked');
    let isMissileCheckboxChecked = $('.missiles').is(':checked');
    let isFinCheckboxChecked = $('.fins').is(':checked');
    let isVentCheckboxChecked = $('.vents').is(':checked');
    let isUtilityCheckboxChecked = $('.utility').is(':checked');

    if (!isCockpitCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Cockpit");
    }

    if (!isWingCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Wing");
    }

    if (!isThrusterCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Thruster");
    }

    if (!isWeaponCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Weapon");
    }

    if (!isMissileCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Missile");
    }

    if (!isFinCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Fin");
    }

    if (!isVentCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Vent");
    }

    if (!isUtilityCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Utility");
    }

    return arrayOfCards;
}

//remove all shown cards
function removeCards() {
    $(".card-container").empty();
}