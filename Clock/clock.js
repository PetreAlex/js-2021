var hour = new Date().getHours()


if (hour < 2 ) {
    document.write("Somn usor!!")
    
} else if(hour < 12 ) {
    document.write("Buna dimineata!")
    } 
else if(hour < 18 ){
    document.write("Buna Ziua")

} else  {
    document.write("Buna seara!")
}