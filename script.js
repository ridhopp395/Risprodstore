
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(nama, harga) {
    cart.push({ nama, harga });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produk berhasil ditambahkan ke keranjang!');
}

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cartItems && totalPrice) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Keranjang kosong.</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div>
                    ${item.nama} - Rp ${item.harga.toLocaleString()} 
                    <button onclick="removeItem(${index})">Hapus</button>
                </div>
            `).join('');
            const total = cart.reduce((sum, item) => sum + item.harga, 0);
            totalPrice.innerHTML = `<h3>Total: Rp ${total.toLocaleString()}</h3>`;
        }
    }
});

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}
