<?
class GameDef {
    function __construct($name, $image_src, $description, $play_link, $github_link) {
        $this->name = $name;
        $this->image_src = $image_src;
        $this->description = $description;
        $this->play_link = $play_link;
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
            "https://github.com/TheOneTrueGod/Reflectiles"
        ),
        'spaceships' => new GameDef(
            "Space Ships",
            "assets/spaceships.png",
            "Choose your ships wisely as they engage in an auto battle against an AI opponent",
            "/games/SpaceShips",
            "https://github.com/TheOneTrueGod/SpaceShips"
        )
    );
}
?>