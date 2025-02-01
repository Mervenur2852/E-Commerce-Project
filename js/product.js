import elements from "./helper.js";

// ! Db.jason a istek atarak verileri alan fonksiyon
const fetchProducts = async () => {
  try {
    const res = await fetch("db.json");

    const data = await res.json();
    // eğer bir sıkıntı varsa hata fırlat
    if (!res.ok) {
      throw new Error("işlem sırasında bir hata oluştu");
    }
    // bir hata yoksa datayı gönder
    return data;
  } catch (err) {
    console.log(`hataa: ${err}`);
    return [];
  }
};

// ürünleri render eden fonksiyon

const renderProducts = (products, addToCartCallBack) => {
  // dışarıdan parametre olarak alınan products değerini dönerek bir html oluşturur bu html ise prductlist içerisine aktarır
  elements.productList.innerHTML = products
    .map(
      (product) => `
   <div class="product">
                <!-- ımage -->
                 <img src="${product.image}" class="product-image" alt="product-image">
                  <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                    <a href="#" class="add-to-cart" data-id='${product.id}'>Add to cart</a>
                  </div>
              </div>
  `
    )
    .join("");
  // elde edilen veri bir dizi olduğundan burada dizi elemanlarını nasıl ayırması
  // gerektiğini belirledil

  // classı add-to-cart olan elemanları seç
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // querselectorall metodu erişilen elemanları bir dizi şeklinde döndürdüğünden bunun
  //içerisine her bir elemana erişmemiz gerekir
  for (let i = 0; i < addToCartButtons.length; i++) {
    const addToCartButton = addToCartButtons[i];
    addToCartButton.addEventListener("click", (event) => {
      event.preventDefault(); // Sayfanın yukarı kaymasını engeller
      addToCartCallBack(event); // Sepete ekleme fonksiyonunu çalıştır
    });
  }
};

export { fetchProducts, renderProducts };
