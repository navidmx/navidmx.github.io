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
            sessionStorage.setItem("page","post");
        </script>
    </head>
    <body>
        <div id="background"></div>
        <div id="title">
            <h1>CHRISTINA LEWIS HALPERN</h1>
            <br><br>
        </div>
        <div id="navbar">
        </div>
        <div id="postContent">
            <br>
            <div>Title:</div>
            <input id="titleForm" type="text" required="true">
            <div id="">Summary:</div>
            <textarea id="titleForm" style="font-size:20px;height:60px;resize:none;" required="true"></textarea>
            <div style="margin-bottom:10px">Content:</div>
            <!-- QUILL -->
            <div id="editor">
              <p>Write the post here.</p>
              <p><br></p>
            </div>
            <script>
              var quill = new Quill('#editor', {
                theme: 'snow'
              });
            </script>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="pages.js"></script>
    </body>
</html>
