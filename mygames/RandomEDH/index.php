<!DOCTYPE html>
<? $path = $_SERVER['REQUEST_URI']; ?>
<?php include 'deckLink.php'; ?>
<?php
    $seed = $_GET["seed"];
    $decks = pickFourDecks($seed);
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
                    Click "new game", then send the URL to your friends.  Each player should click the deck name to copy their decklist to their clipboard, and then paste it into cockatrice.<br/>
                    <div style="margin:auto;"><a href="/mygames/RandomEDH?seed=<?php echo rand() ?>">New Game</a></div>
                </div>
                <?php if ($seed !== NULL) { ?>
                <div class="row deckRow">
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 1</h3>
                            <?php renderDeckLink($decks[0]); ?>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 2</h3>
                            <?php renderDeckLink($decks[1]); ?>
                        </div>
                    </div>
                </div>
                <div class="row deckRow">
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 3</h3>
                            <?php renderDeckLink($decks[2]); ?>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style="padding: 8px;">
                            <h3 class="text-center">Player 4</h3>
                            <?php renderDeckLink($decks[3]); ?>
                        </div>
                    </div>
                </div>
                <?php } ?>
            </div>
        </div>
    </body>
</html>