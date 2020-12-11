const saklanilanVagon = Math.floor((Math.random() * 10) + 1);   //Şüphelinin Saklandıgı vagon
let vagon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let hak = 4, sayac = 0; hak > 0; hak--, sayac++)  {//kullanıcıya verilen tahmin hakkı
    tahmin = Number(console.log('vagon numarası giriniz'));
    
    if (saklanilanVagon == tahmin) {
        console.log(`Tebrikler Süpheliyi ${sayac} defada hangi vagonda oldugunu bildiniz`);
        console.log(`puan: ${100-(20)*(sayac-1)}`)
        break;
    } else if (saklanilanVagon > tahmin) {
        console.log("Daha Büyük bir sayı giriniz!! Şüpheli arka vagonda");
    } else {
        console.log("Daha Kücük bir sayı giriniz!! Şüpheli ön vagonda");
    }
    if (hak == 1) {
        console.log('Hakkınız bitti Şüpheliyi bulamadınız');
    }
}

