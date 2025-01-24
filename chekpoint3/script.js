
const productContainer = document.querySelector('.list-products');



let totalPrice = 0;





function updateTotalPrice() {
    totalPrice = 0;
    const products = document.querySelectorAll('.card-body');
    products.forEach(product => {
        const quantity = parseInt(product.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(product.querySelector('.unit-price').textContent);
        totalPrice += quantity * unitPrice;
    });
    document.querySelector('.total').textContent = `${totalPrice} $`;
}





productContainer.addEventListener('click', (event) => {
    const target = event.target;

   

    if (target.classList.contains('fa-plus-circle')) {
        const quantityElement = target.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity += 1;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }

    


    if (target.classList.contains('fa-minus-circle')) {
        const quantityElement = target.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity -= 1;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    }

   


    if (target.classList.contains('fa-trash-alt')) {
        const product = target.closest('.card-body');
        product.remove();
        updateTotalPrice();
    }




    
    if (target.classList.contains('fa-heart')) {
        target.classList.toggle('active');
    }
});