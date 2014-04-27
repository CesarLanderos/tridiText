var parrafos = document.getElementsByClassName("tridi");

function textoTresDe(e) {
    var event = e || window.event;
    var coordenadaX = event.clientX;
    var coordenadaY = event.clientY;
    var resolucionX = window.innerWidth;
    var resolucionY = window.innerHeight;
    var i=0;
    var j=0;
    var divicion=0;
    var color= "#401123";
    var rShadow="10";
    
    var tox = Math.floor((coordenadaX-(resolucionX/2))/16);
    var toy = -Math.floor((coordenadaY-(resolucionY/2))/16);
    var tresDe = "";
    
    
    //para X
    if(Math.abs(tox)>=Math.abs(toy))
    {
        divicion=Math.abs(toy/tox);
        if(tox<0)
        {
            for(i=0;i<=Math.abs(tox);i++)
            {
                if(toy<0)
                {
                    if(i==Math.abs(tox))
                    {
                        tresDe+= 2*i + "px " + 2*Math.round(j) + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= i + "px " + Math.round(j) + "px 1px " + color + ", ";
                    }
                    j-=divicion;
                }
                else
                {
                    if(i==Math.abs(tox))
                    {
                        tresDe+= 2*i + "px " + 2*Math.round(j) + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= i + "px " + Math.round(j) + "px 1px " + color + ", ";
                    }
                    j+=divicion;
                }
            }    
        }
        else
        {
            for(i=0;i<=tox;i++)
            {
                if(toy<0)
                {
                    if(tox==i)
                    {
                        tresDe+= -2*i + "px " + 2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -i + "px " + j + "px 1px " + color + ", ";
                    }
                    j-=divicion;
                }
                else
                {
                    if(tox==i)
                    {
                        tresDe+= -2*i + "px " + 2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -i + "px " + j + "px 1px " + color + ", ";
                    }
                    j+=divicion;
                }
            }
        }
    }
    
    //para Y
    
    if(Math.abs(toy)>=Math.abs(tox))
    {
        divicion=Math.abs(tox/toy);
        if(toy<0)
        {
            for(j=0;j<=Math.abs(toy);j++)
            {
                if(tox<0)
                {
                    if(j==Math.abs(toy))
                    {
                        tresDe+= -2*Math.round(i) + "px " + -2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -Math.round(i) + "px " + -j + "px 1px " + color + ", ";
                    }
                    i-=divicion;
                }
                else
                {
                    if(j==Math.abs(toy))
                    {
                        tresDe+= -2*Math.round(i) + "px " + -2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -Math.round(i) + "px " + -j + "px 1px " + color + ", ";
                    }
                    i+=divicion;
                }
            }    
        }
        else
        {
            for(j=0;j<=toy;j++)
            {
                if(tox<0)
                {
                    if(toy==j)
                    {
                        tresDe+= -2*i + "px " + 2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -i + "px " + j + "px 1px " + color + ", ";
                    }
                    i-=divicion;
                }
                else
                {
                    if(toy==j)
                    {
                        tresDe+= -2*i + "px " + 2*j + "px " + rShadow + "px " + color;
                    }
                    else
                    {
                        tresDe+= -i + "px " + j + "px 1px " + color + ", ";
                    }
                    i+=divicion;
                }
            }
        }
    }
    
    parrafos[0].style.textShadow = tresDe;
    
    
    
    
}
document.onmousemove = textoTresDe;
