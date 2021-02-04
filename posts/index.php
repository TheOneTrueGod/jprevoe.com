<!doctype html>
<?php include '../components/blogPostDefs.php'; ?>
<?php
    $postId = substr($_SERVER['REQUEST_URI'], 7);
    $allBlogPosts = getBlogPostDefs();
    if (!array_key_exists($postId, $allBlogPosts)) {
        ?> Blog post not found! <?
        return;
    }
    $blogPost = $allBlogPosts[$postId];
?>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Bootstrap CSS -->
        <link href="/packages/bootstrap/bootstrap.css" rel="stylesheet">
        <link href="/styles/styles.css" rel="stylesheet">

        <title>Blog Posts - jprevoe.com</title>
    </head>
    <body>
        <div class="pageHeader p-2">
            <a href="/"><h4>< jprevoe.com</h4></a>
        </div>
        <div class="pageBackground blogpost">
            <div class="container contentContainer mb-3 pb-3">
                <div style="max-width: 800px; margin: auto;">
                    <h1 class="text-center"><?php echo $blogPost->name?></h1>
                    <?php include $blogPost->file; ?>
                </div>
            </div>
        </div>
        <script src="/packages/bootstrap/bootstrap.js"></script>
    </body>
</html>