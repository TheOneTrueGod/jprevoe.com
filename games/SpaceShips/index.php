<? $path = $_SERVER['REQUEST_URI']; ?>
<html>
  <body>
    <script type="text/javascript">
      window.assetPath = '<? echo $path ?>';
    </script>
    <script type="text/javascript" src="<? echo $path; ?>/pixi.min.js"></script>
    <script type="text/javascript" src="<?echo $path; ?>/built.js"></script>
  </body>
</html>
