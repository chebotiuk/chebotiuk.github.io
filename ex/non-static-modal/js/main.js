;(function () {
// Define modal div object
	var modal = document.getElementById('openModal');
	var modalDiv = modal.firstElementChild.firstElementChild;

// Defining object and mouse coordinates
	var addAnimationClass = function(e) {
        var edge = closestEdge(e.pageX, e.pageY, this.offsetWidth, this.offsetHeight);
        console.log(edge);
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
          left: box.left + pageXOffset,
          top: box.top + pageXOffset
        };

      }

    var coord = getCoords(modalDiv);

// Adding animation function
    function animation(obg, side) {
                obg.classList.add('animation' + side);
                obg.addEventListener("webkitAnimationEnd", function(){
                obg.classList.remove('animation' + side);
                });
    }

// Defining condition for mouseover event result
    function closestEdge(x,y,w,h) {
            var topEdgeDist = distMetric(x,y,w/2,0);
            var bottomEdgeDist = distMetric(x,y,w/2,h);
            var leftEdgeDist = distMetric(x,y,0,h/2);
            var rightEdgeDist = distMetric(x,y,w,h/2);
            var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
            switch (min) {
                case leftEdgeDist:
                    return animation(modalDiv, 'Left');
                case rightEdgeDist:
                    return animation(modalDiv, 'Right');
                case topEdgeDist:
                    return animation(modalDiv, 'Top');
                case bottomEdgeDist:
                    return animation(modalDiv, 'Bottom');
            }
    }

    function distMetric(x,y,x2,y2) {
        var xDiff = x - x2 - coord.left;
        var yDiff = y - y2 - coord.top;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }
// Add EventListener for mouseover event
	modalDiv.addEventListener('mouseover', addAnimationClass);

// Splash animation and hiding div
    function addSplashClass(){
      this.classList.add('animationSplash');
      setTimeout(function () {
          modalDiv.classList.add('hidden');
        }, 2000);
    }

    modalDiv.addEventListener('click', addSplashClass);

// Stop animation when mouse leave document
    document.onmouseleave = function(){
        console.log("Mouse Out!");
        modalDiv.classList.add('animationPause');
    };
    document.onmouseover = function(){
        console.log("Mouse Out!");
        modalDiv.classList.remove('animationPause');
    };
})();