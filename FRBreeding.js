//logic for flightrising results

const primary =  {"1": primaryGenes.Modern, "2": primaryGenes.Modern, "3": primaryGenes.Modern, "4": primaryGenes.Modern, 
        "5": primaryGenes.Modern, "6": primaryGenes.Modern, "7": primaryGenes.Modern, 
        "8": primaryGenes.Modern, "9": primaryGenes.Modern, "10": primaryGenes.Modern, 
        "11": primaryGenes.Modern, "12": primaryGenes.Modern, "13": primaryGenes.Modern, 
        "14": primaryGenes.Modern, "15": primaryGenes.Modern, "16": primaryGenes.Modern,
        "20": primaryGenes.Aberration, "22": primaryGenes.Aether, "24": primaryGenes.Auraboa, "18": primaryGenes.Banescale,
        "27": primaryGenes.Cirrus, "25": primaryGenes.Dusthide, "26": primaryGenes.Everlux,
        "17": primaryGenes.Gaoler, "23": primaryGenes.Sandsurge, "29": primaryGenes.Thorntail,
        "21": primaryGenes.Undertide, "19": primaryGenes.Veilspun, "28": primaryGenes.Vigil};

const secondary =  {"1": secondaryGenes.Modern, "2": secondaryGenes.Modern, "3": secondaryGenes.Modern, "4": secondaryGenes.Modern, 
        "5": secondaryGenes.Modern, "6": secondaryGenes.Modern, "7": secondaryGenes.Modern, 
        "8": secondaryGenes.Modern, "9": secondaryGenes.Modern, "10": secondaryGenes.Modern, 
        "11": secondaryGenes.Modern, "12": secondaryGenes.Modern, "13": secondaryGenes.Modern, 
        "14": secondaryGenes.Modern, "15": secondaryGenes.Modern, "16": secondaryGenes.Modern,
        "20": secondaryGenes.Aberration, "22": secondaryGenes.Aether, "24": secondaryGenes.Auraboa, "18": secondaryGenes.Banescale,
        "27": secondaryGenes.Cirrus, "25": secondaryGenes.Dusthide, "26": secondaryGenes.Everlux,
        "17": secondaryGenes.Gaoler, "23": secondaryGenes.Sandsurge, "29": secondaryGenes.Thorntail,
        "21": secondaryGenes.Undertide, "19": secondaryGenes.Veilspun, "28": secondaryGenes.Vigil};

const tertiary =  {"1": tertiaryGenes.Modern, "2": tertiaryGenes.Modern, "3": tertiaryGenes.Modern, "4": tertiaryGenes.Modern, 
        "5": tertiaryGenes.Modern, "6": tertiaryGenes.Modern, "7": tertiaryGenes.Modern, 
        "8": tertiaryGenes.Modern, "9": tertiaryGenes.Modern, "10": tertiaryGenes.Modern, 
        "11": tertiaryGenes.Modern, "12": tertiaryGenes.Modern, "13": tertiaryGenes.Modern, 
        "14": tertiaryGenes.Modern, "15": tertiaryGenes.Modern, "16": tertiaryGenes.Modern,
        "20": tertiaryGenes.Aberration, "22": tertiaryGenes.Aether, "24": tertiaryGenes.Auraboa, "18": tertiaryGenes.Banescale,
        "27": tertiaryGenes.Cirrus, "25": tertiaryGenes.Dusthide, "26": tertiaryGenes.Everlux,
        "17": tertiaryGenes.Gaoler, "23": tertiaryGenes.Sandsurge, "29": tertiaryGenes.Thorntail,
        "21": tertiaryGenes.Undertide, "19": tertiaryGenes.Veilspun, "28": tertiaryGenes.Vigil};
        

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

//add variable for the selected elemental flight, when that option is added 
function generateScryLink (breed, pGene, pColour, sGene, sColour, tGene, tColour, eyeType) {
    var gender = Math.floor(Math.random()*2).toString();
        return "https://www1.flightrising.com/scrying/predict?breed=" + breed.value + "&gender=" + gender + "&age=0&bodygene="
        + pGene.value + "&body=" + document.querySelector('.'+ pColour).value + "&winggene=" + sGene.value + "&wings=" + document.querySelector('.'+ sColour).value + "&tertgene=" + tGene.value + "&tert="+ document.querySelector('.'+ tColour).value + "&element=2&eyetype=" + eyes[eyeType];
}
function getPossibilities() {
    var fatherSel = father.options[father.selectedIndex];
    var fatherPGene = fatherPrimary.options[fatherPrimary.selectedIndex];
    var fatherPCol = fatherPColour.options[fatherPColour.selectedIndex];
    var fatherSGene = fatherSecondary.options[fatherSecondary.selectedIndex];
    var fatherSCol =  fatherSColour.options[fatherSColour.selectedIndex];
    var fatherTGene = fatherTertiary.options[fatherTertiary.selectedIndex];
    var fatherTCol = fatherTColour.options[fatherTColour.selectedIndex];

    var motherSel = mother.options[mother.selectedIndex];
    var motherPGene = motherPrimary.options[motherPrimary.selectedIndex];
    var motherPCol = motherPColour.options[motherPColour.selectedIndex];
    var motherSGene = motherSecondary.options[motherSecondary.selectedIndex];
    var motherSCol = motherSColour.options[motherSColour.selectedIndex];
    var motherTGene = motherTertiary.options[motherTertiary.selectedIndex];
    var motherTCol = motherTColour.options[motherTColour.selectedIndex];
    
    if ((Object.keys(moderns).includes(fatherSel.text) && !Object.keys(moderns).includes(motherSel.text)) || (!Object.keys(moderns).includes(fatherSel.text) && Object.keys(moderns).includes(motherSel.text)) || 
    ((fatherSel.text !== motherSel.text) && Object.keys(ancients).includes(fatherSel.text) && Object.keys(ancients).includes(motherSel.text))) { 
        var probability = "<p>These dragons cannot breed!</p>";
        document.getElementById("probabilities").innerHTML = probability;
        document.getElementById("offspring").innerHTML = ""; 
        
    }
    else {
        var primaryRange = colourRange(fatherPCol,motherPCol);
        var secondaryRange = colourRange(fatherSCol,motherSCol);
        var tertiaryRange = colourRange(fatherTCol,motherTCol);

        var breedOutcomes = [outcome(fatherSel, motherSel), outcome(fatherSel, motherSel), outcome(fatherSel, motherSel), outcome(fatherSel, motherSel)];
        var pGeneOutcomes = [outcome(fatherPGene,motherPGene), outcome(fatherPGene,motherPGene), outcome(fatherPGene,motherPGene), outcome(fatherPGene,motherPGene)];
        var pColOutcomes = [primaryRange[Math.floor(Math.random()*primaryRange.length)], primaryRange[Math.floor(Math.random()*primaryRange.length)], primaryRange[Math.floor(Math.random()*primaryRange.length)], primaryRange[Math.floor(Math.random()*primaryRange.length)]];
        var sGeneOutcomes = [outcome(fatherSGene,motherSGene), outcome(fatherSGene,motherSGene), outcome(fatherSGene,motherSGene), outcome(fatherSGene,motherSGene)];
        var sColOutcomes = [secondaryRange[Math.floor(Math.random()*secondaryRange.length)], secondaryRange[Math.floor(Math.random()*secondaryRange.length)], secondaryRange[Math.floor(Math.random()*secondaryRange.length)], secondaryRange[Math.floor(Math.random()*secondaryRange.length)]];
        var tGeneOutcomes = [outcome(fatherTGene,motherTGene), outcome(fatherTGene,motherTGene), outcome(fatherTGene,motherTGene), outcome(fatherTGene,motherTGene)];
        var tColOutcomes  = [tertiaryRange[Math.floor(Math.random()*tertiaryRange.length)], tertiaryRange[Math.floor(Math.random()*tertiaryRange.length)], tertiaryRange[Math.floor(Math.random()*tertiaryRange.length)], tertiaryRange[Math.floor(Math.random()*tertiaryRange.length)]];
        var eyeOutcomes = [Object.keys(eyes)[Math.floor(Math.random()*17).toString()], Object.keys(eyes)[Math.floor(Math.random()*17).toString()], Object.keys(eyes)[Math.floor(Math.random()*17).toString()], Object.keys(eyes)[Math.floor(Math.random()*17).toString()]]; 
        
        var offspring1 = "<p>" + breedOutcomes[0].text +"<p>"+ pGeneOutcomes[0].text +", "+ pColOutcomes[0] +"</p>"+ sGeneOutcomes[0].text + ", " + sColOutcomes[0] +"</p>"+ tGeneOutcomes[0].text +", "+ tColOutcomes[0] + "</p><p>" + eyeOutcomes[0] +"</p>";
        var scry1 = "<a href = \"" + generateScryLink(breedOutcomes[0], pGeneOutcomes[0], pColOutcomes[0], sGeneOutcomes[0], sColOutcomes[0], tGeneOutcomes[0], tColOutcomes[0], eyeOutcomes[0]) + "\" class =\"scryButton\">Click to scry!</a>";
        var offspring2 = "<p>" + breedOutcomes[1].text +"<p>"+ pGeneOutcomes[1].text +", "+ pColOutcomes[1] +"</p>"+ sGeneOutcomes[1].text + ", " + sColOutcomes[1] +"</p>"+ tGeneOutcomes[1].text +", "+ tColOutcomes[1] + "</p><p>" + eyeOutcomes[1] +"</p>";
        var scry2 = "<a href = \"" + generateScryLink(breedOutcomes[1], pGeneOutcomes[1], pColOutcomes[1], sGeneOutcomes[1], sColOutcomes[1], tGeneOutcomes[1], tColOutcomes[1], eyeOutcomes[1]) + "\" class =\"scryButton\">Click to scry!</a>";
        var offspring3 = "<p>" + breedOutcomes[2].text +"<p>"+ pGeneOutcomes[2].text +", "+ pColOutcomes[2] +"</p>"+ sGeneOutcomes[2].text + ", " + sColOutcomes[2] +"</p>"+ tGeneOutcomes[2].text +", "+ tColOutcomes[2] + "</p><p>" + eyeOutcomes[2] +"</p>";
        var scry3 = "<a href = \"" + generateScryLink(breedOutcomes[2], pGeneOutcomes[2], pColOutcomes[2], sGeneOutcomes[2], sColOutcomes[2], tGeneOutcomes[2], tColOutcomes[2], eyeOutcomes[2]) + "\" class =\"scryButton\">Click to scry!</a>";
        var offspring4 = "<p>" + breedOutcomes[3].text +"<p>"+ pGeneOutcomes[3].text +", "+ pColOutcomes[3] +"</p>"+ sGeneOutcomes[3].text + ", " + sColOutcomes[3] +"</p>"+ tGeneOutcomes[3].text +", "+ tColOutcomes[3] + "</p><p>" + eyeOutcomes[3] +"</p>";
        var scry4 = "<a href = \"" + generateScryLink(breedOutcomes[3], pGeneOutcomes[3], pColOutcomes[3], sGeneOutcomes[3], sColOutcomes[3], tGeneOutcomes[3], tColOutcomes[3], eyeOutcomes[3]) + "\" class =\"scryButton\">Click to scry!</a>";

        var probability = "<h2>Probabilities</h2>" + rarity(fatherSel,motherSel)+
        "<p>"+rarity(fatherPGene,motherPGene)+"</p><p>"+ printColours(primaryRange)+
        "</p><p>"+rarity(fatherSGene,motherSGene)+"</p><p>"+ printColours(secondaryRange)+
        "</p><p>"+rarity(fatherTGene,motherTGene)+"</p><p>"+ printColours(tertiaryRange) + "</p>";

        var offspring = "<h2>Possible Offspring</h2><table><tr><td>"+offspring1+"<p>"+scry1+ "</td><td>" + offspring2 +"<p>" + scry2 +"</td></tr><tr><td>" + offspring3 + "<p>" + scry3 + "</td><td>" + offspring4 + "<p>" + scry4;
        +"</td></tr></table>"; 

        document.getElementById("probabilities").innerHTML = probability
        document.getElementById("offspring").innerHTML = offspring;
    
    }
    
    
}
