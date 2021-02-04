<?php include 'blogPostDefs.php';

function renderAllBlogPosts() {
    $blog_post_defs = getBlogPostDefs();
    $i = 0;
    foreach ($blog_post_defs as $blog_post_def) {
        ?>
        <div class="row">
            <div class="col-1">></div>
            <div class="col-10">
                <a href="<?php echo $blog_post_def->link ?>"><?php echo $blog_post_def->name ?></a>
            </div>
        </div>
        <?php
        $i ++;
    }
}
?>