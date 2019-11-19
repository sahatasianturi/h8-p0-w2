var Nama = '';
var Peran ='Tabib';
if (Nama){
    if (Peran){
        console.log(`halo ${Nama} Selamat datang di Dunia Proxytia!`);
        if(Peran === 'Ksatria'){
            console.log(`Halo Ksatria ${Nama}, kamu dapat menyerang dengan senjatamu!`);
         } else if (Peran === 'Tabib'){
                console.log(`Halo Tabib ${Nama} kamu akan membantu temanmu yang terluka`);
            } else if (Peran === 'Penyihir'){
                console.log(`Halo Penyihhir ${Nama} ciptakan keajaiban yang membantu kemenanganmu`);
            } 
     
     } else {
        console.log(`Halo ${Nama} silahkan isi peranmu`);
        }
} else {
    console.log('Nama harus di isi');
    }