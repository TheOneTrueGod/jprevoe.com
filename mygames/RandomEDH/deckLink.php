<?php

class Deck {
    public function __construct($name, $filepath) {
        $this->name = $name;
        $this->filepath = $filepath;
        $this->decklist = NULL;
    }

    public static function fromTheFirstSet($name, $filepath) {
        return new Deck($name, 'theFirstSet/' . $filepath);
    }

    public static function fromMaxMetadata($metadataLine) {
        return new Deck($metadataLine[1], 'maxSet/' . $metadataLine[0]);
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

?>