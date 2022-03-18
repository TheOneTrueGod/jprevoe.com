<?php include 'gameDefs.php'; ?>
<?php
function renderAllGames() {
    $game_defs = getGameDefs();
    $i = 0;
    foreach ($game_defs as $game_def) {
        if ($i % 2 === 0) {
            ?><div class="row"><?
        }
        ?>
            <div class="col-sm-6">
                <?php renderGame($game_def); ?>
            </div>
        <?php
        if ($i % 2 !== 0) {
            ?></div><?
        }
        $i ++;
    }
}

function renderGame($game_def) {
    ?>
    <div class="card mb-4 border-0">
        <div class="card-img-top cardImageContainer">
            <img class="img-fluid cardImage" src="<?php echo $game_def->image_src ?>" alt="gameplay image for game <?php echo $game_def->name ?>">
        </div>
        <div class="card-body">
            <h5 class="card-title"><?php echo $game_def->name ?></h5>
            <p><? echo $game_def->description ?></p>
            <div class="row">
                <div class="col-6">
                    <?php if ($game_def->play_link) { ?>
                        <a href="<? echo $game_def->play_link ?>" class="btn btn-primary">Play</a>
                    <?php } else if ($game_def->download_link) {?>
                        <a href="<? echo $game_def->download_link ?>" class="btn btn-primary">Download</a>
                    <?php } ?>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-row-reverse">
                        <?php if ($game_def->github_link) { ?>
                            <a href="<? echo $game_def->github_link ?>" class="btn btn-link card-link">Github</a>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?
}
?>