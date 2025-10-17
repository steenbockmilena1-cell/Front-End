 let banners = ["ruiva.png", "mulhernegra.png", "mulherbranca.png","albina.png"];
        let current = 0;
        function rotateBanner() {
            current = (current + 1) % banners.length;
            document.getElementById("bannerImage").src = banners[current];
        }
        setInterval(rotateBanner, 900);
    