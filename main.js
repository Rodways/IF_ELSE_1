let hora = prompt("Ingrese la hora");


if(hora>=6 && hora<=12){
    document.write("<h1> Buenos Dias</h1>");
}else if(hora>=12 && hora<=18)
{
    
    document.write("<h1> Buenos Tardes</h1>");
}else{
    
    document.write("<h1> Buenos Noches</h1>");
}