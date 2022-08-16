const words = [
    "kaç","kere","yaşadım","ben","bu","romanı","ne","zaman","sevdimse","ayrılık","vardı","hep","kendim","kuruttum","gözyaşlarımı","ne","zaman","sevdimse","yalnızlık","vardı","sen","de","git","bırak","git","beni","düşünme","kader","de","hayat","de","boşver","üzülme","alıştım","hasretin","her","türlüsüne","ne","zaman","sevdimse","ayrılık","vardı","alıştım","kaderin","her","cilvesine","ne","zaman","sevdimse","yalnızlık","vardı","yaşamadım","gitti","gönül","tadında","nelerden","vazgeçtim","senin","uğrunda","seni","de","kaybettim","yol","ortasında","ne","zaman","sevdimse","karanlık","vardı","ne","zaman","sevdimse","pişmanlık","vardı","aşkın","aldı","benden","beni","bana","seni","gerek","seni","ben","yanarım","dün","günü","bana","seni","gerek","seni","ne","varlığa","sevinirim","ne","yokluğa","yerinirim","aşkın","ile","avunurum","bana","seni","gerek","seni","aşkın","aşıklar","oldurur","aşk","denizine","daldırır","tecelli","ile","doldurur","bana","seni","gerek","seni","aşkın","şarabından","içem","mecnun","olup","dağa","düşem","sensin","dünü","gün","endişem","bana","seni","gerek","seni","sufilere","sohbet","gerek","ahilere","ahret","gerek","mecnunlara","leyla","gerek","bana","seni","gerek","seni","eğer","beni","öldüreler","külüm","göğe","savuralar","toprağım","anda","çağıra","bana","seni","gerek","seni","cennet","cennet","dedikleri","birkaç","köşkle","birkaç","huri","isteyene","ver","anları","bana","seni","gerek","seni","yunus", "dürür","benim","adım","gün","geçtikçe","artar","odum","iki","cihanda","maksudum","bana","seni","gerek","seni","birara","neydi","o","bulutlar","somurtkan","dudakları","yere","sarkan","arkasında","deniz","alev","alan","adam","çehrem","sarsılıyor","bakmaktan","güneş","inip","suya","dokun","nehre","yaslanıp","baş","aşağı","koşan","bir","yaşlı","ağaç","ol","ah","uzaktayım","kafamda","o","dağılmayan","sükun","ölmedim","lakin","yaşamaktayım","dinle","bak","vurmada","nabzı","ruhun","yarasalar","duyurmada","bana","kanatlarının","ihtizazını","şimdi","hep","korkular","benden","yana","bekliyor","sular","açmış","ağzını","ah","uzaktayım","kafamda","dağılmayan","sük","un","ölmedim","lakin","yaşamaktayım","dinle","bak","vurmada","nabzı","ruhun","siyah","ufukların","arkasında","seslerle","çiçeklenmede","bahar","ve","havasında","en","güzel","zamanın","renkleri","var","ölmedim","halar","yaşamaktayım","dinle","bak","vurmada","nabzı","ruhun","ah","uzaktayım","kafamda","o","dağılmayan","sük","un","ruhum","ölüm","rüzgarlarına","eş","işık","yok","gecemde","gündüzümde","gözlerim","görmüyor","lakin","güneş","o","her","zaman","her","zaman","yüzümde","o","kadar","dolu","ki","toprağın","şanla","bir","değil","sanki","bin","vatan","gibisin","yüce","dağlarına","çöken","dumanla","göklerde","yazılı","destan","gibisin","hep","böyle","bulutlar","içinde","başın","hilali","kucaklar","her","vatandaşın","geçse","de","asırlar","tazedir","yaşın","o","kadar","leventsin","fidan","gibisin","çiçeksin","bayılır","kuşlar","kokundan","her","dalın","bir","yay","ki","zümrüt","okundan","müjdeler","fısıldar","bu","sese","gönülden","hayran","gibisin","ey","bütün","cihana","bedel","türkeli","açtığın","cenklerin","yoktur","evveli","tarih","bir","nehir","ki","coşkundur","seli","sen","ona","nisbetle","umman","gibisin","bir","yandan","hep","böyle","taştın","köpürdün","bir","yandan","cefalı","bir","ömür","sürdün","fakat","ne","derece","ezildinse","dün","şimdi","gene","tunçtan","kalkan","gibisin","bir","insan","nihayet","kemikle","ettir","bu","et","bu","kemiğe","can","hürriyettir","en","büyük","hürriyet","demek","şimdi","sen","bir","cihan","gibisin","ey","ana","toprağı","ey","anadolu","açıldı","önünde","terakki","yolu","hamdolsun","her","yanın","bereket","dolu","cennette","bir","yeşil","meydan","gibisin","yeni","bir","ay","ördün","al","bayrağına","girdin","en","sonunda","irfan","bağına","medeni","hayatın","nur","ırmağına","ezelden","susamış","ceylan","gibisin","geldi","çattı","ayrılık","saati","el","veda","gönlümün","sultanı","işte","gidiyorum","gönlüm","seninle","el","veda","ruhumun","akseni","el","veda","seni","rüyalarımda","göreceğim","hem","okşayıp","hem","seveceğim","yine","canım","yine","son","ümidim","diyeceğim","el","veda","ruhumun","meleği","el","veda","uyandığımda","sen","uykularım","kaçacak","anacağım","ürpererek","gözlerimi","sileceğim","el","veda","doğan","güneşim","el","veda","anacağım","defalarca","hayal","edip","rüyamı","iyiye","yoracağım","hep","tatlı","bir","tebessümle","karşımda","duracaksın","o","günün","akşamına","kadar","ve","yorgun","bitkin","uzanacağım","yatağıma","sen","olmuyacaksın","yanımda","baş","başa","hayalinle","kalacağım","seninle","sensiz","hiç","gülmeyeceğim","bir","daha","zalım"
];

export const getOneWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}