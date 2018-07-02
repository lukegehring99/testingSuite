<!DOCTYPE html>
<html>
<head>
	<title>It's a working title</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="icon" href="img/website_icon.ico">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/styles.css" media="screen" />

	<style>
	body {
	    /*background-color: #f2e9e4;*/
	}
	</style>

</head>

<body>

<div class="container-fluid main-header">
	<h1 class="main-title">Redworth Investment Group</h1>
	<h2 class="main-subtitle">Model Analysis Suite</h2>

</div>

<hr/ class="page-border">

<div class="p1">
	<div class="container-fluid">
		<div class="content">
  		<ul class="nav nav-tabs">
    		<li class="active"><a data-toggle="tab" href="#system">System</a></li>
    		<li><a data-toggle="tab" href="#run">Run</a></li>
    		<li><a data-toggle="tab" href="#results">Results</a></li>
    		<li><a data-toggle="tab" href="#data">Data</a></li>
				<li><a data-toggle="tab" href="#edit">Edit</a></li>
  		</ul>
		</div>

  	<div class="tab-content tab-prop">
    	<div id="system" class="tab-pane fade in active">
      	<h3>System</h3>

				Display IP address --php
				Display main log file (Refresh button) --js
				Display user log file  --js
				Link to monitor page --html

				<?php

					$ip = $_SERVER['REMOTE_ADDR'];
					echo $ip;

				?>

    	</div>
    	<div id="run" class="tab-pane fade">
      	<h3>Run</h3>
				Upload file, parse
				On parse completion, download file to server
				Proceed to new page with dropdowns for testing uptions
				<a href="monitor/ServerMonitor/main.php">System Monitor</a>
    	</div>
    	<div id="results" class="tab-pane fade">
      	<h3>Results</h3>
				Display general data for past results
				Get this data from results folder
    	</div>
    	<div id="data" class="tab-pane fade">
      	<h3>Data</h3>
				Show where data is being drawn from, give edit and remove buttons. Require password
				Link to another page where the data can be viewed better
    	</div>
			<div id="edit" class="tab-pane fade">
      	<h3>Edit</h3>
				Bunch of dropdowns and fields to edit data input
				Test function to test if the source is good
				Use php to then edit the sources text, update list
				Use ajax to send data to the json file

				Dropdown for all current places data is being pulled from (every entry in sources.json)
					Then tailored editing field for each data with a save button that requires a code
				Place for new data to be inputted
					Tests and then writes to sources.json

    	</div>
  	</div>
	</div>
</div>

</body>
</html>

<?php

?>
