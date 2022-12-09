<?php

function getAllSets() {
    return array("theFirstSet", "maxSet");
}

function isValidSet($set) {
    $allSets = getAllSets();
    if (in_array($set, $allSets)) {
        return true;
    }
    return false;
}

function loadDecksInSet($set) {
    if ($set === "theFirstSet") {
        return array(
            Deck::fromTheFirstSet("Tymna and Kamahl", "001tymnakamahl"),
            Deck::fromTheFirstSet("Winota, Joiner of Forces", "002winota"),
            Deck::fromTheFirstSet("Ardenn and Kraum", "003ardennkraum"),
            Deck::fromTheFirstSet("Pako", "004pako"),
            Deck::fromTheFirstSet("Selvala", "005selvala"),
            Deck::fromTheFirstSet("Kinnan", "006kinnan"),
            Deck::fromTheFirstSet("Yisan", "007yisan"),
            Deck::fromTheFirstSet("Edric", "008edric"),
            Deck::fromTheFirstSet("Yuriko", "009yuriko"),
            Deck::fromTheFirstSet("Bruse and Thrasios", "010thrasiosbruse"),
        );
    }

    if ($set === "maxSet") {
        $maxDecks = array();
        $fp = fopen('decks/maxSet/metadata.tsv', 'r');
        if (!feof($fp)) {
            // First line is headers
            $line = fgets($fp, 2048);
        }
        
        while (!feof($fp)) {
            $line = fgets($fp, 2048);
            $data = str_getcsv($line, "\t");
            array_push($maxDecks, Deck::fromMaxMetadata($data));
        }
        return $maxDecks;
    }
}


function pickFourDecksFromSet($seed = -1, $set = NULL) {
    if ($seed == -1 || $seed == NULL) {
        $seed = rand();
    }

    if (!isValidSet($set)) {
        $set = "theFirstSet";
    }

    $decksInSet = loadDecksInSet($set);
    $numbers = range(0, count($decksInSet) - 1);
    fisherYatesShuffle($numbers, $seed);

    $deckIndexes = array_slice($numbers, 0, 4);
    $toRet = array_map(function ($deckId) use ($decksInSet) { return $decksInSet[$deckId]; }, $deckIndexes);
    return $toRet;
}

?>