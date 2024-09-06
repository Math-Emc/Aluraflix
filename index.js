function createButton()
{
     var btn = document.createElement('BUTTON');
     var lbl = document.createTextNode("CLICK ME");        
     btn.appendChild(lbl);   
     btn.onclick = function()
     {
        window.history.go(0);
     }
     document.body.appendChild(btn);    
}

createButton();

var batsu = document.createElement("input");  
    batsu.type = 'button';  
    batsu.value = 'AGAIN';  
    batsu.onclick = function() { window.history.go(0); };  
    document.body.appendChild(batsu);