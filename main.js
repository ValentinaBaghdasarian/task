const div = document.querySelector("#forDOM");

div.style.position = "absolute";
div.style.left = 0;
div.style.top = 0;

document.body.addEventListener("keydown", (e) => {
    switch(e.key){
        case(`a`):
            div.style.left = parseInt(div.style.left) - 15 + "px"; 
            break;
        case(`A`):
            div.style.left = parseInt(div.style.left) - 15 + "px"; 
            break;
        case(`d`):
            div.style.left = parseInt(div.style.left) + 15 + "px"; 
            break;
        case(`D`):
            div.style.left = parseInt(div.style.left) + 15 + "px"; 
            break;
        case(`s`):
            div.style.top = parseInt(div.style.top) + 15 + "px"; 
            break;
        case(`S`):
            div.style.top = parseInt(div.style.top) + 15 + "px"; 
            break;
        case(`w`):
            div.style.top = parseInt(div.style.top) - 15 + "px"; 
            break;
        case(`W`):
            div.style.top = parseInt(div.style.top) - 15 + "px"; 
            break;
    }
});