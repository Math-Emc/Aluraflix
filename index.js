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

<button id="red">Vermelho</button>
<button id="green">Verde</button>
<button id="blue">Azul</button>
<script type="text/javascript">
    $('button').click(function(){
        $('body').css('background-color',$(this).attr('id'));
    });
</script>