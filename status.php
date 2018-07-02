<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="js/smoothie.js"></script>
  <script type="text/javascript" src="js/load.js"></script>


</head>

<body onload="init()">
  <canvas id="cpu" width="400" height="100"></canvas>
  <canvas id="ram" width="400" height="100"></canvas>

<div>

  <?php
  for($i = 0; $i < 20; $i++) {
    $load = sys_getloadavg();
    echo implode(" ", $load)."    ";
  }


  ?>

</div>


</body>
</html>
<?php



?>
