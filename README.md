# TravelTrucks - Camper Rental Web Application

TravelTrucks, kullanıcıların seyahat ihtiyaçlarına uygun karavanları inceleyebileceği, filtreleyebileceği, detaylı teknik özelliklerine ve kullanıcı yorumlarına ulaşabileceği ve doğrudan kiralama rezervasyonu yapabileceği modern bir karavan kiralama frontend uygulamasıdır.

## 🚀 Canlı Bağlantılar

- **Canlı Demo (Vercel):** [TravelTrucks Live Demo](https://travel-trucks-hgwaszdzg-meryems-projects-6d4d62f1.vercel.app)
- **Kaynak Kod (GitHub):** [TravelTrucks Repository](https://github.com/meryemozkan1/TravelTrucks)

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend Kütüphanesi:** React 18 / 19
- **Derleme Aracı:** Vite
- **Durum Yönetimi (State Management):** Redux Toolkit (Araç listesi, filtreleme durumları, favori karavan yönetimi)
- **Yönlendirme (Routing):** React Router DOM v6
- **API ve Veri Çekme:** Axios
- **Stil ve Tasarım:** CSS Modules (Bileşen bazlı modüler CSS), Figma UI Kit uyumu
- **Dağıtım (Deployment):** Vercel

---

## ✨ Temel Özellikler

1. **Ana Sayfa (Home Page):**
   - Kullanıcıyı doğrudan kataloğa yönlendiren dikkat çekici banner ve "View Now" CTA butonu.

2. **Katalog Sayfası (Catalog Page):**
   - Backend API (`/campers`) üzerinden dinamik karavan listeleme.
   - Konum (şehir/ülke metin alanı), araç gövde tipi (Alcove, Panel Van, Fully Integrated) ve donanım özellikleri (AC, Kitchen vb.) bazında filtreleme desteği.
   - Sayfalama (Pagination): "Load More" butonu ile ek kartların yüklenmesi.
   - Asenkron veri çekme sürecinde görsel yüklenme göstergesi (Loader).
   - Eşleşen sonuç bulunamadığında Figma tasarımına uygun bilgilendirici boş durum ekranı (Empty state - No campers found).
   - Kiralama fiyatının standart para birimi ve ondalık formatta (€XXXX.00) gösterimi.

3. **Favori Yönetimi:**
   - Karavan kartlarında yer alan kalp butonu ile araçları favorilere ekleme/çıkarma.
   - Favori listesinin sayfa yenilendiğinde kaybolmaması için kalıcı (persistent) durum yönetimi.

4. **Karavan Detay Sayfası (Camper Details Page):**
   - Katalogdaki "Show More" butonuna tıklandığında yeni sekmede (`target="_blank"`) açılan detay sayfası.
   - Seçilen karavana ait fotoğraf galerisi.
   - 5 yıldızlı puanlama sistemiyle listelenen kullanıcı yorumları (Reviews).
   - Form doğrulama (validation) kurallarına ve Figma hata durumlarına (Error states) uygun rezervasyon formu.

---

## 📦 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
   ```bash
   git clone [https://github.com/meryemozkan1/TravelTrucks.git](https://github.com/meryemozkan1/TravelTrucks.git)
   cd TravelTrucks