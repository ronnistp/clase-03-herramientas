 
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(300, 300, WEBGL).parent("#pecinco");
                select("#nombre").html("Veronica Soto");
                select("#aprendizaje").html("a manejar otro tipo de herramientas digitales");
           noStroke();
            }
            function draw() {
                background(255, 255, 255.4);
                orbitControl();
                ambientLight(200);
                 let mx = mouseX;
                let my = mouseY;
                  pointLight(255, 255, 255, mx, my, 50);
                 fill(30, 30, 255);
  specularMaterial(255);
  shininess(20);
                 translate(0, 0, 0);
  metalness(1);
                  translate(0, 0, 0);
  metalness(50);
                torus(valor / 30, 15, 5, 3);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
    