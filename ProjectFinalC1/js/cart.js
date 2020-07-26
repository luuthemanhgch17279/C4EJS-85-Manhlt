//function này cập nhật số product đc chọn có trong cart
function loadNumberInCart() {
    let productNumberInCarts = localStorage.getItem('CartNumbers');
    productNumberInCarts = parseInt(productNumberInCarts);
    if (productNumberInCarts) {
        document.getElementById('cartNumbers').textContent = productNumberInCarts;
    }
}

//function này gọi ra những product đã đc chọn
function loadListCartProduct() {
    let cartContent = document.getElementById('content');
    let cartTotal = localStorage.getItem('totalCart');
    let productInCart = localStorage.getItem('productInCart');
    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    if (productInCart && cartContent) {
        cartContent.innnerHTML = '';
        for (let i = 0; i < productInCart.length; i++) {
            cartContent.insertAdjacentHTML('beforeend', `
            <div class="    ">
                <img src="" alt="">
                    Name Product:  <span>${productInCart[i].productName}</span>
            </div>
            <div class="productPrice">
                Price: <span> ${productInCart[i].price}</span>
            </div>
            <div claas="productQuantity">
                Product Quantity:
            <span>${productInCart[i].inCart}</span>
            </div>
            <div class="total">
                Total: <span> ${productInCart[i].inCart * productInCart[i].price}</span>
            </div>
                <button class="btnRemove">Remove</button>
            </br></br>`);
        };
        cartContent.innerHTML += `
        <div class ="totalCart">
            Total Bill: ${cartTotal}
        </div>`

    };

    const btnRemove = document.getElementsByClassName('btnRemove');
    for (let i = 0; i < btnRemove.length; i++) {
        btnRemove[i].addEventListener('click', () => {
            removeShowProductInCart(i);
            updateCartTotal(productInCart[i]);
            updateCartNumber(productInCart[i]);
            loadListCartProduct();
        });
    };

    const btnPayment = document.getElementById('btnPayment');
    btnPayment.addEventListener('click', () => {
        showDivUserInfor();
    });
    hiddenDivUserInfor()
}
//function này dùng để xóa sản phẩm bị remove khỏi màn hình và localstorage
function removeShowProductInCart(chosenProduct) {
    let productInCart = localStorage.getItem('productInCart');
    let cartContent = document.getElementById('content');
    cartContent.innerHTML = '';
    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    productInCart.splice(chosenProduct, 1);
    console.log(productInCart);
    localStorage.setItem('productInCart', JSON.stringify(productInCart));
};

//function này dùng để update total cart sau khi remove.
function updateCartTotal(chosenProduct) {
    let cartTotal = localStorage.getItem('totalCart');
    if (cartTotal == 0) {
        localStorage.setItem('totalCart', cartTotal);
    } else {
        localStorage.setItem('totalCart', cartTotal - (chosenProduct.price * chosenProduct.inCart));
    }
};

//function này dùng để update số sản phẩm trong cart sau khi remove.
function updateCartNumber(chosenProduct) {
    let productNumberInCarts = localStorage.getItem('CartNumbers'); //lấy ra số product đag có trong cart
    productNumberInCarts = parseInt(productNumberInCarts);
    if (productNumberInCarts == 0) {
        localStorage.setItem('CartNumbers', 0);
        document.getElementById('cartNumbers').textContent = 0;
    } else {
        localStorage.setItem('CartNumbers', productNumberInCarts - chosenProduct.inCart);
        document.getElementById('cartNumbers').textContent = productNumberInCarts - chosenProduct.inCart;
    }
}

// function này để ẩn form nhập thông tin giao hàng
function hiddenDivUserInfor() {
    const userInfor = document.getElementById('userInfor');
    userInfor.style.display = 'none';
}

//function này dùgn để hiện hiện form nhập thông tin và ẩn luôn nút payment
function showDivUserInfor() {
    payment.style.display = 'none';
    const userInfor = document.getElementById('userInfor');
    userInfor.style.display = 'block';
    const btnBuy = document.getElementById('btnBuy');
    btnBuy.addEventListener('click', () => {
        creatBill();
        showBillDetail();
    });
}

//function này tạo bill và lưu vào local, việc lưu vào mocal giúp sau này lấy lại đc thông tin từ bill chuyển đến mangae bill của admin
function creatBill() {
    const inName = document.getElementById('inName');
    const inPhone = document.getElementById('inPhone');
    const inAddress = document.getElementById('inAdd');
    const cartTotal = localStorage.getItem('totalCart');
    let productInCart = localStorage.getItem('productInCart');
    productInCart = JSON.parse(productInCart);
    productInCart = (Object.values(productInCart));
    const newBill = {
        billID: 1,
        add: inAddress.value,
        name: inName.value,
        phone: inPhone.value,
        product: productInCart,
        total: cartTotal.value,
    }

    const billFormLocalStorage = localStorage.getItem('bill');
    const billParseJSon = JSON.parse(billFormLocalStorage);
    let finalBill = newBill;
    if(billFormLocalStorage){
        finalBill = {
            ...billParseJSon,
            ...newBill
        }
        return;
    }

    localStorage.setItem('bill', JSON.stringify(finalBill));
    localStorage.removeItem('productInCart');
    localStorage.removeItem('CartNumbers');
    localStorage.removeItem('totalCart');
};

//function này dùng để show ra detail  đơn hàng sau khi ấn buy
function showBillDetail() {
    let bill = localStorage.getItem('bill');
    bill = JSON.parse(bill);
    //bill = (Object.values(bill));
    if (confirm(`Your Total Bill: ${bill.total}`) == true) {
        alert('Buy Success! Please wait for a confirmation from the staff.');
    } else {
        alert('Buy Fail.')
    };
};
loadListCartProduct();
loadNumberInCart();