<?
class BlogPostDef {
    function __construct($name, $link, $file) {
        $this->name = $name;
        $this->link = $link;
        $this->file = $file;
    }
}
function getBlogPostDefs() {
    return array(
        '0001' => new BlogPostDef(
            "Factorio and Dyson Sphere Program",
            "/posts/0001",
            '0001factoriodsp.php'
        )
    );
}
?>