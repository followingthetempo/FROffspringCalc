//logic for flightrising results

const primary =  {"Fae": primaryGenes.Modern, "Guardian": primaryGenes.Modern, "Mirror": primaryGenes.Modern, "Pearlcatcher": primaryGenes.Modern, 
        "Ridgeback": primaryGenes.Modern, "Tundra": primaryGenes.Modern, "Spiral": primaryGenes.Modern, 
        "Imperial": primaryGenes.Modern, "Snapper": primaryGenes.Modern, "Wildclaw": primaryGenes.Modern, 
        "Nocturne": primaryGenes.Modern, "Coatl": primaryGenes.Modern, "Skydancer": primaryGenes.Modern, 
        "Bogsneak": primaryGenes.Modern, "Obelisk": primaryGenes.Modern, "Fathom": primaryGenes.Modern,
        "Aberration": primaryGenes.Aberration, "Aether": primaryGenes.Aether, "Banescale": primaryGenes.Banescale,
        "Cirrus": primaryGenes.Cirrus, "Dusthide": primaryGenes.Dusthide, "Everlux": primaryGenes.Everlux,
        "Gaoler": primaryGenes.Gaoler, "Sandsurge": primaryGenes.Sandsurge, "Thorntail": primaryGenes.Thorntail,
        "Undertide": primaryGenes.Undertide, "Veilspun": primaryGenes.Veilspun, "Vigil": primaryGenes.Vigil};

const secondary =  {"Fae": secondaryGenes.Modern, "Guardian": secondaryGenes.Modern, "Mirror": secondaryGenes.Modern, "Pearlcatcher": secondaryGenes.Modern, 
        "Ridgeback": secondaryGenes.Modern, "Tundra": secondaryGenes.Modern, "Spiral": secondaryGenes.Modern, 
        "Imperial": secondaryGenes.Modern, "Snapper": secondaryGenes.Modern, "Wildclaw": secondaryGenes.Modern, 
        "Nocturne": secondaryGenes.Modern, "Coatl": secondaryGenes.Modern, "Skydancer": secondaryGenes.Modern, 
        "Bogsneak": secondaryGenes.Modern, "Obelisk": secondaryGenes.Modern, "Fathom": secondaryGenes.Modern,
        "Aberration": secondaryGenes.Aberration, "Aether": secondaryGenes.Aether, "Banescale": secondaryGenes.Banescale,
        "Cirrus": secondaryGenes.Cirrus, "Dusthide": secondaryGenes.Dusthide, "Everlux": secondaryGenes.Everlux,
        "Gaoler": secondaryGenes.Gaoler, "Sandsurge": secondaryGenes.Sandsurge, "Thorntail": secondaryGenes.Thorntail,
        "Undertide": secondaryGenes.Undertide, "Veilspun": secondaryGenes.Veilspun, "Vigil": secondaryGenes.Vigil};

const tertiary =  {"Fae": tertiaryGenes.Modern, "Guardian": tertiaryGenes.Modern, "Mirror": tertiaryGenes.Modern, "Pearlcatcher": tertiaryGenes.Modern, 
        "Ridgeback": tertiaryGenes.Modern, "Tundra": tertiaryGenes.Modern, "Spiral": tertiaryGenes.Modern, 
        "Imperial": tertiaryGenes.Modern, "Snapper": tertiaryGenes.Modern, "Wildclaw": tertiaryGenes.Modern, 
        "Nocturne": tertiaryGenes.Modern, "Coatl": tertiaryGenes.Modern, "Skydancer": tertiaryGenes.Modern, 
        "Bogsneak": tertiaryGenes.Modern, "Obelisk": tertiaryGenes.Modern, "Fathom": tertiaryGenes.Modern,
        "Aberration": tertiaryGenes.Aberration, "Aether": tertiaryGenes.Aether, "Banescale": tertiaryGenes.Banescale,
        "Cirrus": tertiaryGenes.Cirrus, "Dusthide": tertiaryGenes.Dusthide, "Everlux": tertiaryGenes.Everlux,
        "Gaoler": tertiaryGenes.Gaoler, "Sandsurge": tertiaryGenes.Sandsurge, "Thorntail": tertiaryGenes.Thorntail,
        "Undertide": tertiaryGenes.Undertide, "Veilspun": tertiaryGenes.Veilspun, "Vigil": tertiaryGenes.Vigil};
        

const father = document.getElementsByName('father')[0];
const mother = document.getElementsByName('mother')[0];
const fatherPrimary = document.getElementsByName('primary1')[0];
const fatherPColour = document.getElementsByName('primarycol1')[0];
const motherPrimary = document.getElementsByName('primary2')[0];
const motherPColour = document.getElementsByName('primarycol2')[0];
const fatherSecondary = document.getElementsByName('secondary1')[0];
const fatherSColour = document.getElementsByName('secondarycol1')[0];    
const motherSecondary = document.getElementsByName('secondary2')[0];
const motherSColour = document.getElementsByName('secondarycol2')[0];
const fatherTertiary = document.getElementsByName('tertiary1')[0];
const fatherTColour = document.getElementsByName('tertiarycol1')[0];
const motherTertiary = document.getElementsByName('tertiary2')[0];
const motherTColour = document.getElementsByName('tertiarycol2')[0];
const button = document.getElementById("results");


father.addEventListener('change', changeFatherGenes); 
mother.addEventListener('change', changeMotherGenes);
button.addEventListener('click', getPossibilities);



function changeFatherGenes() {
fatherPrimary.innerHTML = primary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
fatherSecondary.innerHTML = secondary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
fatherTertiary.innerHTML = tertiary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
} 

function changeMotherGenes() { 
    motherPrimary.innerHTML = primary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
    motherSecondary.innerHTML = secondary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
    motherTertiary.innerHTML = tertiary[this.value].reduce((acc, elem) => `${acc}<option value="${elem.value}">${elem.desc}</option>`, "");
}

function printColours(colRange) {
    var printCols = "";
    if (colRange.length == 1) {
        printCols = printCols += "<svg width = 20 height = 20> <rect x = 10 y = 10 width = 20 height = 20 stroke = " + colours[colRange[0]] + " stroke-width = 1 fill = "
    + colours[colRange[0]] + " /><title>" + colRange[0] + "</title></svg>"
        return printCols;
    }

    for (i=0;i<colRange.length;i++) {
    printCols += "<svg width = 20 height = 20> <rect x = 10 y = 10 width = 20 height = 20 stroke = " + colours[colRange[i]] + " stroke-width = 1 fill = "
    + colours[colRange[i]] + " /><title>" + colRange[i] + "</title></svg>";
    }
    return printCols;
}
function getPossibilities() {
    var fatherSel = father.options[father.selectedIndex].text;
    var fatherPGene = fatherPrimary.options[fatherPrimary.selectedIndex].text;
    var fatherPCol = fatherPColour.options[fatherPColour.selectedIndex].text;
    var fatherSGene = fatherSecondary.options[fatherSecondary.selectedIndex].text;
    var fatherSCol =  fatherSColour.options[fatherSColour.selectedIndex].text;
    var fatherTGene = fatherTertiary.options[fatherTertiary.selectedIndex].text;
    var fatherTCol = fatherTColour.options[fatherTColour.selectedIndex].text;

    var motherSel = mother.options[mother.selectedIndex].text;
    var motherPGene = motherPrimary.options[motherPrimary.selectedIndex].text;
    var motherPCol = motherPColour.options[motherPColour.selectedIndex].text;
    var motherSGene = motherSecondary.options[motherSecondary.selectedIndex].text;
    var motherSCol = motherSColour.options[motherSColour.selectedIndex].text;
    var motherTGene = motherTertiary.options[motherTertiary.selectedIndex].text;
    var motherTCol = motherTColour.options[motherTColour.selectedIndex].text;
    
    if ((moderns.includes(fatherSel) && !moderns.includes(motherSel)) || (!moderns.includes(fatherSel) && moderns.includes(motherSel)) || 
    ((fatherSel !== motherSel) && ancients.includes(fatherSel) && ancients.includes(motherSel))) { 
        var probability = "<p>These dragons cannot breed!</p>";
        document.getElementById("possibilities").innerHTML = probability;
        
    }
    else {
        var primaryRange = colourRange(fatherPCol,motherPCol);
        var secondaryRange = colourRange(fatherSCol,motherSCol);
        var tertiaryRange = colourRange(fatherTCol,motherTCol);

        var probability = "<h2>Probabilities</h2>" + rarity(fatherSel,motherSel)+
        "<p>"+rarity(fatherPGene,motherPGene)+", "+ printColours(primaryRange)+
        "</p>"+rarity(fatherSGene,motherSGene)+", "+ printColours(secondaryRange)+
        "</p>"+rarity(fatherTGene,motherTGene)+", "+ printColours(tertiaryRange);

        var possibility = "<h2>Possible Offspring</h2>" + outcome(fatherSel,motherSel) +"<p>"+outcome(fatherPGene,motherPGene)+", "+primaryRange[Math.floor(Math.random()*primaryRange.length)]
        +"</p>"+outcome(fatherSGene,motherSGene)+", "+secondaryRange[Math.floor(Math.random()*secondaryRange.length)]
        +"</p>"+outcome(fatherTGene,motherTGene)+", "+tertiaryRange[Math.floor(Math.random()*tertiaryRange.length)];  

        document.getElementById("possibilities").innerHTML = probability+possibility;
    
    }
    
    
}

