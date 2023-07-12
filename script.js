//this is an array of objects, where each object is a card
//any number of key-value pairs can be added to a card for further customization
const cards = [
    {
        name: "Falx SC-41 Escort",
        type: "Chassis",
        faction: "Forge",
        url: "https://images.squarespace-cdn.com/content/v1/640d30d63bc48b5227f654a6/08c38b6b-931d-4c2e-907c-985d958999fe/chassisForge_Falx_27F.png?format=1000w"
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
            $(".card-container").append(`<img class="card chassis-card front" src="./card-images/${cardType}-${cardFaction}-${updatedCardName}-front.png">`)
        } else {
            $(".card-container").append(`<img class="card part-card front" src="./card-images/${cardType}-${cardFaction}-${updatedCardName}-front.png">`)
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
    let isThrusterCheckboxChecked = $('#thrusters').is(':checked');
    let isWingCheckboxChecked = $('#wings').is(':checked');
    let isSystemCheckboxChecked = $('#systems').is(':checked');

    if (!isCockpitCheckboxChecked && !isThrusterCheckboxChecked && !isWingCheckboxChecked && !isSystemCheckboxChecked) {
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
    arrayOfCards = filterFactions(arrayOfCards);
    arrayOfCards = filterTypes(arrayOfCards);
    arrayOfCards = filterParts(arrayOfCards);

    removeCards();
    updateDisplayedCards(arrayOfCards);
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
    let isThrusterCheckboxChecked = $('.thrusters').is(':checked');
    let isWingCheckboxChecked = $('.wings').is(':checked');
    let isSystemCheckboxChecked = $('.systems').is(':checked');

    if (!isCockpitCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Cockpit");
    }

    if (!isThrusterCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Thruster");
    }

    if (!isWingCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Wing");
    }

    if (!isSystemCheckboxChecked) {
        arrayOfCards = arrayOfCards.filter(card => card.type != "Systems");
    }

    return arrayOfCards;
}

//remove all shown cards
function removeCards() {
    $(".card-container").empty();
}