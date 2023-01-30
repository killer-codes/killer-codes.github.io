// Initialising the canvas
let canvas = document.querySelector('#layer1');
let ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = "0123456789ABCDEF";
letters = letters.split('');

// Setting up the columns
var fontSize = 18;
var columns = canvas.width / fontSize;


// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

//Clear
function clear()
{
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0,0.05";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function color(bool){
    var result = "";
    
    if(bool == "rgb")
    {    
        var r = Math.floor(Math.random() * 4294967295);// 16777215); //4294967295);
        result = (r.toString(16));
        return result;
    }
    else if(bool == "rgba")
    {    
        var r = Math.floor(Math.random() * 4294967295);// 16777215); //4294967295);
        result = r.toString(16);
        return result;
    }
    else if(bool == "r")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return ("FF"+ r2 + r2);
    }
    else if(bool == "r-a")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return ("FF0000"+ r2 );
    }
    else if(bool == "g")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return (r2 + "FF" + r2);
    }
    else if(bool == "g-a")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return ("00FF00" + r2);
    }
    else if(bool == "b")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return (r2 + r2 + "FF");
    }
    else if(bool == "b-a")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return ("0000FF"+r2);
    }
    else if(bool == "w-a")
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return ("FFFFFF"+r2);
    }
    else
    {
        var r = Math.floor(Math.random() * 255);
        var r2 = r.toString(16);
        return (r2);
    }
}

function Print(msg)
{
    let canvas2 = document.querySelector('#layer2');
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    
    let ctx2 = canvas2.getContext('2d');

    //ctx2.fillStyle = "rgba(0, 0, 0,0.05";
    //ctx2.fillRect(0, 0, canvas.width, canvas.height);
    
    
    ctx2.fillStyle = "#FFF";//"#"+color("g");
    ctx2.font = "Bold " + 40 + "px Consolas";
    ctx2.shadowBlur = 25;
    ctx2.shadowColor = "#00FF00";


    var XAxis = canvas2.width/2  - (fontSize * msg.length/2) - 40;
    var Y = canvas2.height/2;
    /*
    var lineheight = 1;
    
    var lines = msg.split('\n');
    
    for (var i = 0; i<lines.length; i++)
        {
            //ctx2.fillText(lines[i], X, Y + (i*lineheight) );
            ctx2.fillText (lines[i], XAxis, Y);
        } 
    */
    
    var rt = Math.floor(Math.random() * msg.length);
    var nt = msg;
    console.log(rt);
    nt = nt.replace(nt[rt],nt[rt].toUpperCase());
    //ctx2.fillText (nt, XAxis - rt/2, Y);
    ctx2.fillText (nt, XAxis, Y);
    ctx2.fillText (nt, XAxis + rt/2, Y);
    ctx2.shadowBlur = 25;
    ctx2.shadowColor = "#00FF00";
    ctx2.beginPath();
    ctx2.lineWidth = "3";
ctx2.strokeStyle = "#afa";
ctx2.rect(XAxis-25, Y-40, 300, 60);
ctx2.stroke();
    //nt = msg[rt].toUpperCase();


    
    //ctx.font = "Bold " + fontSize + "px Consolas";
}


// Setting up the draw function
function draw() {

    clear();
    

  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.font = "Bold " + fontSize + "px Consolas";
    
    if(Math.random() < 0.8)
    {
        if(Math.random() < 0.8 && Math.random() > 0.7)
            ctx.fillStyle = "#" + color("g");//'#afa';
        else
            ctx.fillStyle = "#" + color("g-a");//'#afa';
    }
    else
    {
        ctx.fillStyle = "#" + color("w-a");//'#afa';
        
    }

    Print("Killercodes");
    
        
    //ctx.shadowBlur = 15;
    ctx.shadowColor = "#0F0";// + color("g-a");
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    ctx.shadowColor = "#000";// + color("g-a");

    //ctx.fillText(text, drops[i] * fontSize, i * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 30);
function animate()
{
    requestAnimationFrame(animate);
    
    draw();
}
//animate();
