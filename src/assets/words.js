export const getWords = () => {
    let wordsStrig = `Kaç kere yaşadım ben bu romanı
    Ne zaman sevdimse ayrılık vardı
    Hep kendim kuruttum gözyaşlarımı
    Ne zaman sevdimse yalnızlık vardı
    
    Sen de git bırak git beni düşünme
    Kader de  hayat de boşver üzülme
    Alıştım hasretin her türlüsüne
    Ne zaman sevdimse ayrılık vardı
    Alıştım kaderin her cilvesine
    Ne zaman sevdimse yalnızlık vardı
    
    Yaşamadım gitti gönül tadında
    Nelerden vazgeçtim senin uğrunda
    Seni de kaybettim yol ortasında
    Ne zaman sevdimse karanlık vardı
    Ne zaman sevdimse pişmanlık vardı
    Aşkın aldı benden beni
    Bana seni gerek seni
    Ben yanarım dün ü günü
    Bana seni gerek seni
    
    Ne varlığa sevinirim
    Ne yokluğa yerinirim
    Aşkın ile avunurum
    Bana seni gerek seni
    
    Aşkın aşıklar oldurur
    Aşk denizine daldırır
    Tecelli ile doldurur
    Bana seni gerek seni
    
    Aşkın şarabından içem
    Mecnun olup dağa düşem
    Sensin dünü gün endişem
    Bana seni gerek seni
    
    Sufilere sohbet gerek
    Ahilere ahret gerek
    Mecnunlara Leyla gerek
    Bana seni gerek seni
    
    Eğer beni öldüreler
    Külüm göğe savuralar
    Toprağım anda çağıra
    Bana seni gerek seni
    
    Cennet cennet dedikleri
    Birkaç köşkle birkaç huri
    isteyene Ver anları
    Bana seni gerek seni
    
    Yunusdürür benim adım
    Gün geçtikçe artar odum
    iki cihanda maksudum
    Bana seni gerek seni
    
    Birara neydi o bulutlar
    Somurtkan dudakları yere sarkan
    
    Arkasında deniz alev alan adam
    Çehrem sarsılıyor bakmaktan
    
    Güneş inip suya dokun
    Nehre yaslanıp baş aşağı koşan bir yaşlı ağaç ol
    
    Ah aydınlıklardan uzaktayım
    Kafamda o dağılmayan sükun 
    Ölmedim lakin  yaşamaktayım
    Dinle bak vurmada nabzı ruhun 
    
    Yarasalar duyurmada bana
    Kanatlarının ihtizazını 
    Şimdi hep korkular benden yana
    Bekliyor sular  açmış ağzını 
    
    Ah aydınlıklardan uzaktayım
    Kafamda dağılmayan sük un 
    Ölmedim lakin  yaşamaktayım
    Dinle bak vurmada nabzı ruhun 
    
    Siyah ufukların arkasında
    Seslerle çiçeklenmede bahar
    Ve muhayyilemin havasında
    En güzel zamanın renkleri var 
    
    Ölmedim halar  yaşamaktayım 
    Dinle bak vurmada nabzı ruhun
    Ah aydınlıklardan uzaktayım
    Kafamda o dağılmayan sük un 
    
    Ruhum ölüm rüzgarlarına eş 
    Işık yok gecemde  gündüzümde 
    Gözlerim görmüyor    lakin güneş
    O her zaman  her zaman yüzümde 
    
    O kadar dolu ki toprağın şanla 
    Bir değil  sanki bin vatan gibisin 
    Yüce dağlarına çöken dumanla
    Göklerde yazılı destan gibisin 
    
    Hep böyle bulutlar içinde başın 
    Hilali kucaklar her vatandaşın 
    Geçse de asırlar  tazedir yaşın 
    O kadar leventsin  fidan gibisin 
    
    Çiçeksin  bayılır kuşlar kokundan 
    Her dalın bir yay ki zümrüt okundan
    Müjdeler fısıldar Ergenekondan
    Bu sese gönülden hayran gibisin 
    
    Ey bütün cihana bedel Türkeli 
    Açtığın cenklerin yoktur evveli 
    Tarih bir nehir ki coşkundur seli 
    Sen ona nisbetle  umman gibisin 
    
    Bir yandan hep böyle taştın  köpürdün 
    Bir yandan cefalı bir ömür sürdün 
    Fakat ne derece ezildinse dün 
    Şimdi gene tunçtan kalkan gibisin 
    
    Bir insan nihayet kemikle ettir 
    Bu et  bu kemiğe can hürriyettir 
    En büyük hürriyet Cumhuriyettir 
    Demek şimdi sen bir cihan gibisin 
    
    Ey ana toprağı  ey Anadolu 
    Açıldı önünde terakki yolu 
    Hamdolsun her yanın bereket dolu 
    Cennette bir yeşil meydan gibisin 
    
    Yeni bir ay ördün al bayrağına 
    Girdin en sonunda irfan bağına 
    Medeni hayatın nur ırmağına
    Ezelden susamış ceylan gibisin 
    
    Geldi çattı ayrılık saati
    El veda gönlümün sultanı
    işte gidiyorum gönlüm seninle
    El veda ruhumun akseni
    El veda
    Seni rüyalarımda göreceğim
    Hem okşayıp hem seveceğim
    Yine canım yine son ümidim diyeceğim
    El veda ruhumun meleği
    El veda
    Uyandığımda sen olmayacaksın
    Uykularım kaçacak anacağım
    Ürpererek gözlerimi sileceğim
    El veda doğan güneşim
    El veda
    Anacağım defalarca hayal edip rüyamı
    iyiye yoracağım hep
    Tatlı bir tebessümle karşımda duracaksın
    O günün akşamına kadar
    Ve yorgun bitkin uzanacağım yatağıma
    Sen olmuyacaksın yanımda
    Baş başa hayalinle kalacağım
    Seninle sensiz hiç gülmeyeceğim
    Bir daha Zalım gülmüyeceğim`;
    wordsStrig = wordsStrig.replace(/\s+/g, ' ').trim().toLowerCase();
    wordsStrig = wordsStrig.replace(/\n/g, ' ');
    return wordsStrig.split(' ');
}