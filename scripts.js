





function check_answers(){

    const normalize = (str) => str.trim().toLowerCase();

    const field1_val = normalize($('#code1').val());
    const field2_val = normalize($('#code2').val());
    const field3_val = normalize($('#code3').val());
    const field4_val = normalize($('#code4').val());

    if(field1_val == 'ключ' && field2_val == 'находится' && field3_val == 'в' && field4_val == 'библиотеке') { return true;}
    else return false;
}

function check_puzzle() {
    return $('#puzzle-inp').val().toLowerCase() === 'ключ'.toLowerCase();
}


function render_map() {
    const canvas = document.getElementById("map-canv");
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 600;


    
    let start = { x: 0, y: 100 };
    let end1 = { x: 250, y: 100 };
    let end2 = { x: end1.x + 190, y: end1.y + 80 };
    let end3 = { x: end2.x - 60, y: end2.y + 150 };

    let cp1 = { x: Math.floor((end1.x - start.x)/2), y: start.y + 200 };
    let cp2 = { x: Math.floor(end1.x + (end2.x - end1.x)/2), y: end1.y - 180 };
    let cp3 = { x: Math.floor(end2.x + (end3.x - end2.x)/2) + 100, y: end2.y + 80 };


    
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(cp1.x, cp1.y, end1.x, end1.y);
    ctx.quadraticCurveTo(cp2.x, cp2.y, end2.x, end2.y);
    ctx.quadraticCurveTo(cp3.x, cp3.y, end3.x, end3.y);

    ctx.stroke();
}

function render_map2() {
    const canvas = document.getElementById("map-canv");
    const ctx = canvas.getContext('2d');
    document.querySelectorAll('.path').forEach(el => el.remove());

    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    
    const scaleX = canvasWidth / 1800 * 3; 
    const scaleY = canvasHeight / 900 * 1.5;  


    
    let xoff = 0;
    let yoff = 100;

    ctx.scale(scaleX, scaleY)
    ctx.lineWidth = 5;

    
    ctx.beginPath();
    ctx.moveTo(24 + xoff, 31 + yoff);
    ctx.bezierCurveTo(203 + xoff, 12 + yoff, 212 + xoff, 6 + yoff, 199 + xoff, 50 + yoff);
    ctx.bezierCurveTo(195 + xoff, 64 + yoff, 303 + xoff, 87 + yoff, 312 + xoff, 99 + yoff);
    ctx.bezierCurveTo(384 + xoff, 187 + yoff, 35 + xoff, 93 + yoff, 133 + xoff, 217 + yoff);
    ctx.bezierCurveTo(142 + xoff, 229 + yoff, 144 + xoff, 306 + yoff, 130 + xoff, 312 + yoff);
    ctx.bezierCurveTo(16 + xoff, 357 + yoff, 196 + xoff, 119 + yoff, 263 + xoff, 428 + yoff);
    ctx.bezierCurveTo(268 + xoff, 451 + yoff, 122 + xoff, 328 + yoff, 295 + xoff, 343 + yoff);
    ctx.bezierCurveTo(376 + xoff, 350 + yoff, 484 + xoff, 69 + yoff, 354 + xoff, 244 + yoff);
    ctx.bezierCurveTo(345 + xoff, 256 + yoff, 519 + xoff, 190 + yoff, 523 + xoff, 216 + yoff);
    ctx.bezierCurveTo(530 + xoff, 262 + yoff, 396 + xoff, 270 + yoff, 545 + xoff, 280 + yoff);
    ctx.bezierCurveTo(530 + xoff, 262 + yoff, 396 + xoff, 470 + yoff, 585 + xoff, 322 + yoff);
    ctx.strokeStyle = '#00BFFF'; 

    ctx.stroke();


    
    ctx.beginPath();
    ctx.moveTo(34 + xoff, 381 + yoff);
    ctx.bezierCurveTo(23 + xoff, 371 + yoff, 52 + xoff, 179 + yoff, 131 + xoff, 142 + yoff);
    ctx.bezierCurveTo(300 + xoff, 63 + yoff, 185 + xoff, 419 + yoff, 173 + xoff, 327 + yoff);
    ctx.bezierCurveTo(131 + xoff, 12 + yoff, 543 + xoff, 531 + yoff, 293 + xoff, 460 + yoff);
    ctx.bezierCurveTo(251 + xoff, 448 + yoff, 389 + xoff, 356 + yoff, 388 + xoff, 371 + yoff);
    ctx.bezierCurveTo(387 + xoff, 386 + yoff, 435 + xoff, 242 + yoff, 401 + xoff, 216 + yoff);
    ctx.bezierCurveTo(325 + xoff, 158 + yoff, 523 + xoff, 163 + yoff, 513 + xoff, 181 + yoff);
    ctx.bezierCurveTo(457 + xoff, 281 + yoff, 475 + xoff, 10 + yoff, 427 + xoff, 78 + yoff);
    ctx.bezierCurveTo(418 + xoff, 90 + yoff, 210 + xoff, 207 + yoff, 284 + xoff, 208 + yoff);
    ctx.bezierCurveTo(371 + xoff, 209 + yoff, 435 + xoff, 450 + yoff, 297 + xoff, 329 + yoff);
    ctx.bezierCurveTo(286 + xoff, 319 + yoff, 421 + xoff, 369 + yoff, 502 + xoff, 276 + yoff);
    ctx.bezierCurveTo(523 + xoff, 252 + yoff, 565 + xoff, 395 + yoff, 558 + xoff, 382 + yoff);
    ctx.strokeStyle = '#00FF00'; 
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(44 + xoff, 128 + yoff);
    ctx.bezierCurveTo(122 + xoff, 192 + yoff, 263 + xoff, 124 + yoff, 200 + xoff, 86 + yoff);
    ctx.bezierCurveTo(153 + xoff, 57 + yoff, 186 + xoff, 29 + yoff, 261 + xoff, 10 + yoff);
    ctx.bezierCurveTo(276 + xoff, 6 + yoff, 448 + xoff, 33 + yoff, 427 + xoff, 49 + yoff);
    ctx.bezierCurveTo(301 + xoff, 146 + yoff, 322 + xoff, 161 + yoff, 319 + xoff, 206 + yoff);
    ctx.bezierCurveTo(314 + xoff, 285 + yoff, 169 + xoff, 178 + yoff, 117 + xoff, 225 + yoff);
    ctx.bezierCurveTo(38 + xoff, 296 + yoff, 261 + xoff, 247 + yoff, 159 + xoff, 318 + yoff);
    ctx.bezierCurveTo(46 + xoff, 396 + yoff, 108 + xoff, 403 + yoff, 289 + xoff, 319 + yoff);
    ctx.bezierCurveTo(388 + xoff, 273 + yoff, 326 + xoff, 477 + yoff, 353 + xoff, 471 + yoff);
    ctx.strokeStyle = '#800080'; 
    ctx.stroke();
    


    const word1 = 'ИНФОРМАТИКА'
    const pointsArray1 = [
        24 + xoff, 31 + yoff,
        199 + xoff, 50 + yoff,
        312 + xoff, 99 + yoff,
        133 + xoff, 217 + yoff,
        130 + xoff, 312 + yoff,
        263 + xoff, 428 + yoff,
        295 + xoff, 343 + yoff,
        354 + xoff, 244 + yoff,
        523 + xoff, 216 + yoff,
        545 + xoff, 280 + yoff,
        585 + xoff, 322 + yoff
    ];
    
    generateDivsFromPoints(pointsArray1, word1, scaleX, scaleY);

    const word2 = 'КОДИРОВАНИЕ';
    const pointsArray2 = [
        34 + xoff, 381 + yoff,
        131 + xoff, 142 + yoff,
        173 + xoff, 327 + yoff,
        388 + xoff, 371 + yoff,
        401 + xoff, 216 + yoff,
        513 + xoff, 181 + yoff,
        427 + xoff, 78 + yoff,
        284 + xoff, 208 + yoff,
        297 + xoff, 329 + yoff,
        502 + xoff, 276 + yoff,
        558 + xoff, 382 + yoff
    ];
    
    generateDivsFromPoints(pointsArray2, word2, scaleX, scaleY);

    const word3 = 'АЛГОРИТМЫ';
    const pointsArray3 = [
        44 + xoff, 128 + yoff,
        200 + xoff, 86 + yoff,
        261 + xoff, 10 + yoff,
        427 + xoff, 49 + yoff,
        319 + xoff, 206 + yoff,
        117 + xoff, 225 + yoff,
        159 + xoff, 318 + yoff,
        289 + xoff, 319 + yoff,
        353 + xoff, 471 + yoff
    ];

    generateDivsFromPoints(pointsArray3, word3, scaleX, scaleY);
    assignPathHandlers();

}

function generateDivsFromPoints(points, word, scaleX, scaleY) {
    const container = document.getElementById('map');
    container.style.position = 'relative';

    
    const pointsLength = points.length / 2; 
    const wordLength = word.length;

    
    const minLength = Math.min(pointsLength, wordLength);

    for (let i = 0; i < minLength; i++) {
        const x = points[i * 2] * scaleX;        
        const y = points[i * 2 + 1] * scaleY;    

        const div = document.createElement('div');
        div.className = 'path';
        div.dataset.letter = word[i]; 
        div.innerText = word[i];       
        div.style.position = 'absolute';
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        div.style.transform = 'translate(-50%, -50%)'; 

        container.appendChild(div);
    }
}





function drawShape(ctx, xoff, yoff) {
    ctx.beginPath();
    ctx.moveTo(24 + xoff, 31 + yoff);
    ctx.bezierCurveTo(203 + xoff, 12 + yoff, 212 + xoff, 6 + yoff, 199 + xoff, 50 + yoff);
    ctx.bezierCurveTo(195 + xoff, 64 + yoff, 303 + xoff, 87 + yoff, 312 + xoff, 99 + yoff);
    ctx.bezierCurveTo(384 + xoff, 187 + yoff, 35 + xoff, 93 + yoff, 133 + xoff, 217 + yoff);
    ctx.bezierCurveTo(142 + xoff, 229 + yoff, 144 + xoff, 306 + yoff, 130 + xoff, 312 + yoff);
    ctx.bezierCurveTo(16 + xoff, 357 + yoff, 196 + xoff, 119 + yoff, 263 + xoff, 428 + yoff);
    ctx.bezierCurveTo(268 + xoff, 451 + yoff, 122 + xoff, 328 + yoff, 295 + xoff, 343 + yoff);
    ctx.bezierCurveTo(376 + xoff, 350 + yoff, 484 + xoff, 69 + yoff, 354 + xoff, 244 + yoff);
    ctx.bezierCurveTo(345 + xoff, 256 + yoff, 519 + xoff, 190 + yoff, 523 + xoff, 216 + yoff);
    ctx.bezierCurveTo(530 + xoff, 262 + yoff, 396 + xoff, 270 + yoff, 545 + xoff, 280 + yoff);
    ctx.stroke();
  }

  




  window.addEventListener('load', render_map2);
  window.addEventListener('resize', render_map2);































