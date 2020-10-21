<!--PHP dynamic style TODO-->
<?php  $full_path = $_SERVER['SCRIPT_FILENAME'];

        function pick_string($string){
            $concat = "";
            $i = strlen($string);
            while($string[$i]!=="\\" &&  $i > 0){
                $concat = $concat.$string[$i-1];
                $i--;
            };
            return reverse_string($concat);
        }

        function reverse_string ($string){
            $i = 0;
            $temp;
            while($i < strlen($string)){
                if($i < strlen($string)/2){
                    $temp=$string[$i];
                    $new= strlen($string)-(1+$i);
                    $string[$i]=$string[$new];
                    $string[$new]=$temp;
                }
                $i++;
            }
            return $string;
        } 
        /*echo ( pick_string($full_path));*/
       
          
        

    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href="style.css"/>
    <script type="text/javascript" src="koze.js"></script>
    <title>Hellowa</title>
</head>
<body>

<header>
    <div id="logo_container">
        <h1>Hellowa</h1>
    </div>
    <nav>
        <ul id="menu">
            <a href="index.php">
                <li>Home</li>
            </a>
            <li>About Us</li>
            <a href="demo.php"><li>Test It</li></a>
            <a href="cards.php"><li>Cards</li></a>


            <li>Download The App</li>
            <li>LargTonKozé</li>
        </ul>
    </nav>
</header>