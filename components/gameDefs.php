<?
class GameDef {
    function __construct($name, $image_src, $description, $play_link, $download_link, $github_link) {
        $this->name = $name;
        $this->image_src = $image_src;
        $this->description = $description;
        $this->play_link = $play_link;
        $this->download_link = $download_link;
        $this->github_link = $github_link;
    }
}
function getGameDefs() {
    return array(
        'reflectiles' => new GameDef(
            "Reflectiles",
            "assets/reflectiles.png",
            "Defeat waves of enemies with 1-4 players in this cooperative game",
            "http://reflectiles.jprevoe.com",
            "",
            "https://github.com/TheOneTrueGod/Reflectiles"
        ),
        'gooravity' => new GameDef(
            "Gooravity",
            "assets/Gooravity.png",
            "Use the power of gravity to platform your way to the exit",
            "/mygames/Gooravity",
            "",
            "https://github.com/TheOneTrueGod/StickyTheGame"
        ),
        'spaceships' => new GameDef(
            "Space Ships",
            "assets/spaceships.png",
            "Choose your ships wisely as they engage in an auto battle against an AI opponent",
            "/mygames/SpaceShips",
            "",
            "https://github.com/TheOneTrueGod/SpaceShips"
        ),
        'fluxIdle' => new GameDef(
            "Flux Idle",
            "assets/fluxidle.png",
            "Harvest energy and upgrade buildings in this idle game",
            "http://fluxidle.jprevoe.com",
            "",
            "https://github.com/TheOneTrueGod/idleGenerator"
        ),
        'zombies' => new GameDef(
            "Zombies",
            "assets/zombies.png",
            "Fight your way through hordes of zombies!",
            "",
            "/downloads/Zombies.zip",
            "https://github.com/TheOneTrueGod/Zombies"
        ),
        'blindEDH' => new GameDef(
            "Blind EDH",
            "assets/magicPile.jpg",
            "Each player gets a random EDH deck, and they aren't told what's in it",
            "/mygames/RandomEDH",
            "",
            ""
        )
    );
}
?>