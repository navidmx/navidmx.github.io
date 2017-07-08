<?php
    $conn = new mysqli("127.0.0.1", "root", "sqlpass", "christina");
    $result = $conn->query("SELECT UNI, title, location, summary, upcoming FROM events");
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Christina Lewis Halpern</title>
        <!--Fonts-->
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
        <script src="https://use.fontawesome.com/102d004b3a.js"></script>
        <!--Bootstrap-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="pages.css">
        <link rel="stylesheet" type="text/css" href="../style.css">
        <script type="text/javascript">
            sessionStorage.setItem("page","speaking");
        </script>
    </head>
    <body>
        <div id="background"></div>
        <div id="title">
            <h1>CHRISTINA LEWIS HALPERN</h1>
            <div id="navbar-container"></div>
            <br><br>
        </div>
        <div id="speakingContent">
            <h2 style="margin-bottom: 10px;">Upcoming Speaking Engagements</h2>
            <?php
                $previous = false;
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        if ($row["upcoming"]){
                            echo "<div class='event-desc'>";
                            echo "<div class='toggle-event' data-toggle='collapse' data-target='#event-id-".$row["UNI"]."'>";
                            echo "<span class='event-title'>".$row["title"]."</span>";
                            echo "<br><span class='event-location'>".$row["location"]."</span></div>";
                            echo "<div class='event-info collapse' id='event-id-".$row["UNI"]."'><span>".$row["summary"]."</span></div></div>";
                        } else if (!$row["upcoming"]){
                            if (!$previous){
                                echo "<hr style='margin-top:20px'>";
                                echo "<h2 style='margin-bottom: 10px;'>Previous Speaking Engagements</h2>";
                                $previous = true;
                            }
                            echo "<div class='event-desc'>";
                            echo "<div class='toggle-event' data-toggle='collapse' data-target='#event-id-".$row["UNI"]."'>";
                            echo "<span class='event-title'>".$row["title"]."</span>";
                            echo "<br><span class='event-location'>".$row["location"]."</span></div>";
                            echo "<div class='event-info collapse' id='event-id-".$row["UNI"]."'><span>".$row["summary"]."</span></div></div>";
                        }
                    }
                }
            ?>
        </div>
        <div id="speakingSidebar">
            <h2>Request</h2>
            <p style="font-size: 18px; color: #414141; padding-bottom: 5px;">Contact Christina for speaking engagements.</p>
            <input class="speakingRequest" type="text" placeholder="Name"><br>
            <input class="speakingRequest" type="text" placeholder="Email"><br>
            <input class="speakingRequest" type="text" placeholder="Event/Organization"><br>
            <textarea class="speakingRequest" placeholder="Details (description, date, location, your position, etc.)" style="height: 250px;"></textarea><br>
            <input class="speakingRequest" id="request-button" type="submit" value="Request">
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="../script.js"></script>
    </body>
</html>
