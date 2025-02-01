import elements from "./helper.js";

// ! localstroage e ekleme yapan fonksiyon
const saveToLocalStorage = (cart) => {
  // dışarıdan verilen elemanı stringe çevir ve localstroge a ekle
  localStorage.setItem("cart", JSON.stringify(cart));
};
//! localstroageden elemean çağıran fonksiyon
const getFromLocalStorage = () => {
  // cart keyindeki tümelemanları localstroage den al
  const strData = localStorage.getItem("cart");

  // eğer strData varsa bunu JSON.parse ile dönüştür ve return et eğer yoksa boş bir dizi return et
  return strData ? JSON.parse(strData) : [];
};
//! sepet tplamını hesaplayan fonksiyon

const calculateCartTotal = (cart) => {
  // cart daki ürünlerin miktar ve fiyatını çrparak toplam sonucu elde et
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  //! reduce ==> bir dizi üzerindeki tüm elmanları dönerek bir işleme tabi tutar.
  // ! bu metot belirtilen işlevi gerçekleştirdikten sonra geriye toplu bir sonuç döndürür

  //! bu metot diziAdı.reduce((1,2) => {}) şeklinde kullanılır buradaki 1. değer toplam sonucun aktarılayacı bir
  // ! değişkendir 2. değer ise currentValue ya karşılık gelir buda dönülen her elemanın değerini alır

  // ! reduce'un 3. parametresi bir başlangıç değeri vardır. Bu değer, reduce'un başladığında dizi elemanları dönmek için ilk değerdir. Bu değer varsayılan olarak 0'dır.
};

const updateCartIcon = (cart) => {
  // sepetteki toplam ürün miktarını hesapla

  let totalQuantity =  cart.reduce((sum, item) => sum + item.quantity, 0);

  // sepetteki ürün miktarını dinamik şekilde render et

  elements.icon.setAttribute('data-quantity', totalQuantity);

  // setAttribute bir elemana attribute eklemek için kullanılır


};
export { saveToLocalStorage, getFromLocalStorage, calculateCartTotal, updateCartIcon };
