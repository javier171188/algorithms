'use strict';

const WORDS = ["atom", "bomb", "meals", "males", "saint", "satin",
    "avenge", "Geneva", "meals", "salem", "sales", "seals",
    "balm", "lamb", "mean", "mane", "salts", "lasts",
    "blot", "bolt", "melon", "lemon",
    "blow", "bowl", "moist", "omits", "sharp", "harps",
    "brag", "grab", "more", "rome", "shrub", "brush",
    "chum", "much", "needs", "dense", "siren", "rinse",
    "coal", "cola", "nerved", "denver", "skids", "disks",
    "counts", "tucson", "none", "neon", "skill", "kills",
    "diagnose", "nude", "dune", "snail", "nails",
    "diary", "dairy", "ocean", "canoe", "sober", "robes",
    "domains", "madison", "pace", "cape", "soils", "oils",
    "dottier", "detroit", "pairs", "paris", "solo", "oslo",
    "fired", "fried", "pale", "leap", "spray", "prays",
    "fringe", "finger", "panels", "naples", "stack", "tacks",
    "hasten", "athens", "parks", "spark", "stick", "ticks",
    "iced", "dice", "pools", "spool", "strip", "trips",
    "inch", "chin", "ports", "sport", "study", "dusty",
    "keen", "knee", "posts", "stops", "team", "meat",
    "lamp", "palm", "races", "cares", "tooled", "toledo",
    "last", "salt", "reap", "pear", "votes", "stove",
    "limped", "dimple", "reef", "free", "waits", "waist",
    "lion", "loin", "robed", "bored", "wasps", "swaps",
    "looted", "toledo", "rock", "cork", "wells", "swell",
    "lump", "plum", "room", "moor", "west", "stew",
    "march", "charm", "ropes", "pores", "what", "thaw",
    "mash", "hams"]

let permutation = ''

function findAnagram(word) {

    if (word.length === 2) {
        // console.log(permutation + word[0]);
        // console.log(permutation + word[1]);
        permutation = '';
        return
    }

    console.log(word.slice(0, 1 + 1) + word.slice(1 + 2,));

    // for (let i = 0; i < word.length; i++) {
    //     permutation += word[i];
    //     console.log(i);
    //     findAnagram(word.slice(0, i + 1) + word.slice(i + 2,));
    //     console.log(word.slice(0, i + 1) + word.slice(i + 2,));
    // }
}

let word = 'mash'
let anagram = findAnagram(word);

