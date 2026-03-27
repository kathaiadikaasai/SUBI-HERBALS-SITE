

<script>
function buyNow(product) 
  leT  = "918220890588"; // unga number
  let msg = "Hi, I want to buy " + product;

  let url = " https://chat.whatsapp.com/ELQDduPWbeUKlJYOq2sjey?mode=gi_t" + phone + "?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
</script>
let qty = 1;
const maxQty = 10;

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const qtyInput = document.getElementById("qty");

// + button
plusBtn.addEventListener("click", () => {
  if (qty < maxQty) {
    qty++;
    qtyInput.value = qty;
  }
});

// - button
minusBtn.addEventListener("click", () => {
  if (qty > 1) {
    qty--;
    qtyInput.value = qty;
  }
});
