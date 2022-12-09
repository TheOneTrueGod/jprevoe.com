<?php

class Deck {
    public function __construct($name, $filepath, $tags) {
        $this->name = $name;
        $this->filepath = $filepath;
        $this->decklist = NULL;
    }

    public static function fromMaxMetadata($metadataLine) {
        return new Deck($metadataLine[1], 'maxSet/' . $metadataLine[0], array());
    }

    public function loadDecklist() {
        if ($this->decklist !== NULL) { return; }
        ob_start();
        include "decks/" . $this->filepath;
        $this->decklist = ob_get_clean();
    }

    public function renderDeck() {
        $this->loadDecklist();
        $deckName = "'" . $this->filepath . "'";
        ?>
        <div>
            <script>
                var decklists = decklists || {};
                var onClickFunctions = onClickFunctions || {};
                onClickFunctions[<?php echo $deckName; ?>] = 
                    function unsecuredCopyToClipboard() {
                        const textArea = document.createElement("textarea");
                        textArea.value = decklists[<?php echo $deckName?>];
                        document.body.appendChild(textArea);
                        textArea.focus();
                        textArea.select();
                        try {
                            document.execCommand('copy');
                            alert("Copied to clipboard");
                        } catch (err) {
                            console.error('Unable to copy to clipboard', err);
                            alert("Failed to copy to clipboard");
                        }
                        document.body.removeChild(textArea);
                    };

                if (!decklists[<?php echo $deckName; ?>]) {
                    decklists[<?php echo $deckName; ?>] = `<?php echo $this->decklist; ?>`;
                }
            </script>
            <a href="#" onClick="onClickFunctions[<? echo $deckName ?>](); return false;"><h3>📋<? echo $this->name ?></h3></a>
        </div>
        <?
    }
}

function fisherYatesShuffle(&$items, $seed)
{
    @mt_srand($seed);
    for ($i = count($items) - 1; $i > 0; $i--)
    {
        $j = @mt_rand(0, $i);
        $tmp = $items[$i];
        $items[$i] = $items[$j];
        $items[$j] = $tmp;
    }
}

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

function getDecksInSet($set) {
    if ($set === "theFirstSet") {
        return array(
            new Deck("Tymna and Kamahl", "001tymnakamahl", array("lockdown", "value")),
            new Deck("Winota, Joiner of Forces", "002winota", array("creatures")),
            new Deck("Ardenn and Kraum", "003ardennkraum", array("")),
            new Deck("Pako", "004pako", array("")),
            new Deck("Selvala", "005selvala", array("")),
            new Deck("Kinnan", "006kinnan", array("")),
            new Deck("Yisan", "007yisan", array("")),
            new Deck("Edric", "008edric", array("")),
            new Deck("Yuriko", "009yuriko", array("")),
            new Deck("Bruse and Thrasios", "010thrasiosbruse", array("control")),
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

function pickFourDecks($seed = -1, $set = NULL) {
    if ($seed == -1 || $seed == NULL) {
        $seed = rand();
    }

    if (!isValidSet($set)) {
        $set = "theFirstSet";
    }

    $decksInSet = getDecksInSet($set);
    $numbers = range(0, count($decksInSet) - 1);
    fisherYatesShuffle($numbers, $seed);

    $deckIndexes = array_slice($numbers, 0, 4);
    $toRet = array_map(function ($deckId) use ($decksInSet) { return $decksInSet[$deckId]; }, $deckIndexes);
    return $toRet;
}

?>