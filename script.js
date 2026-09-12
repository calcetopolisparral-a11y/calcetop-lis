let cart=[];
function addToCart(code){cart.push(code);updateCart();openCart()}
function updateCart(){document.getElementById('count').textContent=cart.length;let box=document.getElementById('items');if(!cart.length){box.textContent='Tu carrito está vacío.';return}let c={};cart.forEach(x=>c[x]=(c[x]||0)+1);box.innerHTML=Object.entries(c).map(([x,n])=>'<div class="cartitem"><b>'+x+'</b><span>× '+n+'</span></div>').join('')}
function openCart(){document.getElementById('cartbox').classList.add('show')}
function closeCart(){document.getElementById('cartbox').classList.remove('show')}
function sendWhatsApp(){if(!cart.length){alert('Agrega al menos una calceta al carrito.');return}let c={};cart.forEach(x=>c[x]=(c[x]||0)+1);let msg='Hola, Calcetópolis. Quiero pedir:%0A'+Object.entries(c).map(([x,n])=>'- '+x+' x'+n).join('%0A');window.open('https://wa.me/526271448550?text='+msg,'_blank')}
