<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <title>Etch-A-Sketch</title>
</head>
<body id="body">
    <div class="top-bar">
        <div class="etch">Etch-A-Sketch</div>
    </div>
    <div class="form-background">
        <div class="range">
            <label for="grid">Grid Size:</label>
            <input type="range" id="grid-size" name="grid-size" min="1" max="100">
            <div id="grid-count"></div>
        </div>
        <div class="new">
            <button id="new-btn">NEW</button>
        </div>
        <div class = "choice">
                <input type="radio" id="black" name="color-type" value="black" checked="checked">
                <label for="black">Black</label><br>
                <input type="radio" id="random" name="color-type" value="random">
                <label for="random">Random</label><br>
                <input type="radio" id="darken" name="color-type" value="darken">
                <label for="darken">Darken</label><br>

        </div>
    </div>

    <div class = "container-background" id="container-background">
        <div class="container" id="container"></div>
    </div>
    <script src="script.js"></script>   
</body>
</html>
