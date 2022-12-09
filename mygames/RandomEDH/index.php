<!DOCTYPE html>
<? $path = $_SERVER['REQUEST_URI']; ?>
<?php include 'deckLink.php'; ?>
<?php include 'sets.php'; ?>
<?php
    $seed = $_GET["seed"];
    $set = $_GET["set"];
    $decks = pickFourDecksFromSet($seed, $set);

    $allSets = getAllSets();
    $setCount = count($allSets);
?>
<!--
Our game is Gooravity
It's a game about saving a goo lost in space
The player jumps around and manipulates gravity to collect keys and get to the exit.
-->
<html>
    <head>
        <meta charset="utf-8">
        <title>Random EDH</title>
        <link href="/packages/bootstrap/bootstrap.css" rel="stylesheet">
        <link href="/styles/styles.css" rel="stylesheet">
        <style>

            h1 {
                text-align: center;
            }

            .deckRow, .descriptionRow {
                margin-bottom: 8px;
            }

            .descriptionRow {
                padding: 8px;
            }

            .centerChildren {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
        </style>
    </head>

    <body class="pageBackground">
        <div class="container contentContainer">
            <div class="row mb-3 mt-3">
                <div class="col">
                    <h1>Random EDH</h1>
                    <h2 class="text-center">jprevoe.com</h2>
                </div>
            </div>
            <div style="max-width: 1024px; margin: auto;">
                <div class="card descriptionRow">
                    Welcome to the blind random EDH deck picker!<br/>
                    This generates a random deck for each player, and doesn't tell them what's in it or how to play it.<br/><br/>
                    Click "new game", then send the URL to your friends.  Each player should click the deck name to copy their decklist to their clipboard, and then paste it into cockatrice.<br/><br/>
                    It's up to you how you want to divide up the decks.  Each player picks.  Loser picks.  Everyone chooses a player number before the randomization.  Whatever you like!<br/>
                    <div class='centerChildren'>
                        <form>
                            <input type="hidden" name="seed" value="<?php echo rand() ?>" />
                            <div>
                                <b><label for="set">Choose a Set:</label></b>
                                <select name="set" style="margin-bottom: 8px;">
                                    <?php for ($i = 0; $i < $setCount; $i++) {
                                        $setName = $allSets[$i];
                                        ?><option <? if ($setName == $set) { echo "selected"; } ?> value="<? echo $setName; ?>"><? echo $setName; ?></option>
                                    <? } ?>
                                </select>
                            </div>
                            <div class='centerChildren'>
                                <button href="/mygames/RandomEDH?seed=<?php echo rand() ?>">New Game</button>
                            </div>
                        </form>
                    </div>
                </div>
                <?php if ($seed !== NULL) { ?>
                <div class="row deckRow">
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 1</h3>
                            <?php $decks[0]->renderDeck(); ?>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 2</h3>
                            <?php $decks[1]->renderDeck(); ?>
                        </div>
                    </div>
                </div>
                <div class="row deckRow">
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 3</h3>
                            <?php $decks[2]->renderDeck(); ?>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 4</h3>
                            <?php $decks[3]->renderDeck(); ?>
                        </div>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </body>
</html>