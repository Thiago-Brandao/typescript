type marcaTenis ='chimano' | 'tesla' | 'speed';

enum marcaTenis2 {
    NIKE = 4,
    tesla = 'tesla',
    speed = 'speed'
}

interface Tenis{
    marcaTenis: marcaTenis2;
}

const tenis: Tenis = {
    marcaTenis: marcaTenis2.NIKE
}

if(tenis.marcaTenis == marcaTenis2.NIKE){
    console.log("É Nike");
}