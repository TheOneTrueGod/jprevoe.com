<?php

class Deck {
    public function __construct($name, $filepath, $tags) {
        $this->name = $name;
        ob_start();
        include "decks/" . $filepath;
        $this->filepath = $filepath;
        $this->decklist = ob_get_clean();
    }

    public function renderLink() {
        $onClickFunction = "on" . $this->filepath . "click";
        $deckName = '"' . $this->filepath . '"';
        ?>
        <div>
            <script>
                var decklists = decklists || {};
                if (!decklists[<?php echo $deckName ?>]) {
                    decklists[<?php echo $deckName ?>] = `<?php echo $this->decklist; ?>`;
                }
                var <?php echo $onClickFunction ?> = <?php echo $onClickFunction ?> ||
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
                }
            </script>
            <a href="#" onClick="<?php echo $onClickFunction; ?>(); return false;"><h3>📋<? echo $this->name ?></h3></a>
        </div>
        <?
    }
}

$allDecks = array(
    new Deck("Tymna and Kamahl", "001tymnakamahl", array("lockdown", "value")),
    new Deck("Winota, Joiner of Forces", "002winota", array("creatures")),
    new Deck("Ardenn and Kraum", "003ardennkraum", array("")),
    new Deck("Pako", "004pako", array("")),
    new Deck("Selvala", "005selvala", array("")),
    new Deck("Kinnan", "006kinnan", array("")),
    new Deck("Yisan", "007yisan", array("")),
    new Deck("Edric", "008edric", array("")),
    new Deck("Yuriko", "009yuriko", array("")),
);

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

function pickFourDecks($seed = -1) {
    if ($seed == -1 || $seed == NULL) {
        $seed = rand();
    }
    global $allDecks;
    $numbers = range(0, count($allDecks) - 1);
    fisherYatesShuffle($numbers, $seed);
    return array_slice($numbers, 0, 4);
}

function renderDeckLink($index) {
    global $allDecks;
    ?>
    <div><? $allDecks[$index]->renderLink() ?> </div>
    <?
}

?>