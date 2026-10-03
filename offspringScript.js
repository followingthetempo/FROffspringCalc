
function rarity(x, y) {
    var val1 = x.text;
    var val2 = y.text
    
    if (val1 === val2) {
        return val1 + " 100%";
    }
    else if (rarities.plentiful.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            return val1 + " 50%, " + val2 + " 50%";
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            return val1 + " 70%, " + val2 + " 30%";
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            return val1 + " 85%, " + val2 + " 15%";
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            return val1 + " 97%, " + val2 + " 3%";
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            return val1 + " 99%, " + val2 + " 1%";
        }

    }else if (rarities.common.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            return val1 + " 30%, " + val2 + " 70%";
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            return val1 + " 50%, " + val2 + " 50%";
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            return val1 + " 75%, " + val2 + " 25%";
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            return val1 + " 90%, " + val2 + " 10%";
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            return val1 + " 99%, " + val2 + " 1%";
        }
    }

    else if (rarities.uncommon.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            return val1 + " 15%, " + val2 + " 85%";
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            return val1 + " 25%, " + val2 + " 75%";
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            return val1 + " 50%, " + val2 + " 50%";
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            return val1 + " 85%, " + val2 + " 15%";
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            return val1 + " 98%, " + val2 + " 2%";
        }

    }else if (rarities.limited.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            return val1 + " 3%, " + val2 + " 97%";
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            return val1 + " 10%, " + val2 + " 90%";
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            return val1 + " 15%, " + val2 + " 85%";
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            return val1 + " 50%, " + val2 + " 50%";
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            return val1 + " 97%, " + val2 + " 3%";}

  }else if (rarities.rare.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            return val1 + " 1%, " + val2 + " 99%";
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            return val1 + " 1%, " + val2 + " 99%";
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            return val1 + " 2%, " + val2 + " 98%";
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            return val1 + " 3%, " + val2 + " 97%";
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            return val1 + " 50%, " + val2 + " 50%";
 }else{
    return "error";
 }
}
    }

function outcome(x, y) { 
    var val1 = x.text;
    var val2 = y.text; 
    
    var chance = Math.floor(Math.random()*100)+1;
    if (val1 === val2) {
        return x;
    }
    else if (rarities.plentiful.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            if (chance <= 50) {
                return x;
            }else{ 
                return y;
            }
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            if (chance <= 70) {
                return x;
            }else{ 
                return y;
            }
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            if (chance <= 85) {
                return x;
            }else{ 
                return y;
            }
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            if (chance <= 97) {
                return x;
            }else{ 
                return y;
            }
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            if (chance <= 99) {
                return x;
            }else{ 
                return y;
            }
            
        }

    }else if (rarities.common.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            if (chance <= 30) {
                return x;
            }else{ 
                return y;
            }
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            if (chance <= 50) {
                return x;
            }else{ 
                return y;
            }
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            if (chance <= 75) {
                return x;
            }else{ 
                return y;
            }
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            if (chance <= 90) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            if (chance <= 99) {
                return x;
            }else{ 
                return y;
            };
        }
    }

    else if (rarities.uncommon.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            if (chance <= 15) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            if (chance <= 25) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            if (chance <= 50) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            if (chance <= 85) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            if (chance <= 98) {
                return x;
            }else{ 
                return y;
            };
        }

    }else if (rarities.limited.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            if (chance <= 3) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            if (chance <= 10) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            if (chance <= 15) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            if (chance <= 50) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            if (chance <= 97) {
                return x;
            }else{ 
                return y;
            }}

  }else if (rarities.rare.includes(val1.split(' (')[0])) {
        if (rarities.plentiful.includes(val2.split(' (')[0])) {
            if (chance <= 1) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.common.includes(val2.split(' (')[0])) { 
            if (chance <= 1) {
                return x;
            }else{ 
                return y;
            };
       }else if (rarities.uncommon.includes(val2.split(' (')[0])) {
            if (chance <= 2) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.limited.includes(val2.split(' (')[0])) {
            if (chance <= 3) {
                return x;
            }else{ 
                return y;
            };
        }else if (rarities.rare.includes(val2.split(' (')[0])) {
            if (chance <= 50) {
                return x;
            }else{ 
                return y;
            };
 }else{
    return "error";
 }
}
    }

function colourRange(x, y) {
    var col1 = x.text;
    var col2 = y.text;
    let fatherCol = Object.keys(colours).indexOf(col1);
    let motherCol = Object.keys(colours).indexOf(col2);
    let minVal = Math.min(fatherCol,motherCol);
    let maxVal = Math.max(fatherCol,motherCol);

    if (minVal == maxVal) {
        return [col1];
    }
    else {
        let range1 = Object.keys(colours).slice(minVal,maxVal+1);
        let range2 = [];
        for (let i=maxVal; i<=minVal+Object.keys(colours).length; i++) {
            range2.push(Object.keys(colours)[i%Object.keys(colours).length]);
        }

        if (range1.length > range2.length) {
            return range2;
  }
        else{
            return range1; 
        }
    }

}

