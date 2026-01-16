<?php
include("brgyconnection.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barangay Website</title>
    <link rel="stylesheet" href="brgyllogin.css">
    <meta name="description" content="Barangay Website for you and me!">
</head>

<body>

    <header class="header">
        <div class="container">
            <h1 class="logo">MySite</h1>
            <nav class="nav">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h2>Welcome</h2>
                <p>This is a clean website boilerplate.</p>
                <button id="ctaBtn">Click Me</button>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2026 MySite. All rights reserved.</p>
        </div>
    </footer>

    <script src="brgyllogin.js"></script>
</body>

</html>