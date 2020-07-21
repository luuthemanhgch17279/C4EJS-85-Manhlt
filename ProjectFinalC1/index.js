var productData = [
    {
        productID: "P001",
        productName: "iPhone 5",
        productBrand: "Apple",
        price: 399,
        quantity: 10,
        description: "lorem 1",
        provider: "FPT Telecom",
    },
    {
        productID: "P002",
        productName: "iPhone 6",
        productBrand: "Apple",
        price: 599,
        quantity: 9,
        description: "lorem 2",
        provider: "Viettel",
    },
    {
        productID: "P003",
        productName: "iPhone 7",
        productBrand: "Apple",
        price: 699,
        quantity: 45,
        description: "lorem 3",
        provider: "Thegioididong",
    },
    {
        productID: "P004",
        productName: "iPhone 8",
        productBrand: "Apple",
        price: 799,
        quantity: 34,
        description: "lorem 4",
        provider: "FPT Telecom",
    },
    {
        productID: "P005",
        productName: "iPhone X",
        productBrand: "Apple",
        price: 999,
        quantity: 8,
        description: "lorem 5",
        provider: "FPT Telecom",
    },
    {
        productID: "P006",
        productName: "Samsung galaxy S10",
        productBrand: "Samsung",
        price: 1500,
        quantity: 12,
        description: "lorem 6",
        provider: "Thegioididong",
    },
    {
        productID: "P007",
        productName: "Samsung galaxy A71",
        productBrand: "Samsung",
        price: 400,
        quantity: 14,
        description: "lorem 7",
        provider: "FPT Telecom",
    },
    {
        productID: "P008",
        productName: "OPPO Reno3",
        productBrand: "OPPO",
        price: 199,
        quantity: 32,
        description: "lorem 8",
        provider: "Viettel",
    },
    {
        productID: "P009",
        productName: "OPPO A92",
        productBrand: "OPPO",
        price: 299,
        quantity: 46,
        description: "lorem 9",
        provider: "FPT Telecom",
    },
    {
        productID: "P010",
        productName: "Samsung galaxy note 9",
        productBrand: "Samsung",
        price: 399,
        quantity: 25,
        description: "lorem 10",
        provider: "Thegioididong",
    }
];

const accountData = [
    {
        accID: "u01",
        userName: "admin",
        password: "admin123",
        role: "admin",
    },
    {
        accID: "u02",
        userName: "userTest",
        password: "user123",
        role: "client",
    }
]

const btnLogin = document.getElementById("btn_login");
const loginForm = document.getElementById("LoginForm");
const userName = document.getElementById("userName")
const pass = document.getElementById("pass")
const btnSubmit = document.getElementById("btnSubmit");
const detaiForm = document.getElementById("detail_form");


loginForm.style.display = "none"
detaiForm.style.display = "none"
btnLogin.addEventListener("click", function () {
    loginForm.style.display = "block";
    userForm.style.display = "none";
    btnLogin.style.display = "none";
    cartForm.style.display = "none";
});
btnSubmit.addEventListener("click", function () {
    for (let i = 0; i < accountData.length; i++) {
        if (userName.value == accountData[i].userName && pass.value == accountData[i].password) {
            if (accountData[i].role == "admin") {
                adminForm.style.display = "block";
                loginForm.style.display = "none";   
            } else if (accountData[i].role == "client") {
                loginForm.style.display = "none";
                alert("Welcome to " + accountData[i].userName);
                userForm.style.display = "block";
                cartForm.style.display = "block";
            }
        }
    }
});

const adminForm = document.getElementById('admin_form')
adminForm.style.display = "none";
// add new product
const newID = document.getElementById('newID');
const newName = document.getElementById('newName');
const newBrand = document.getElementById('newBrand');
const newPrice = document.getElementById('newPrice');
const newQuantity = document.getElementById('newQuantity');
const newDescription = document.getElementById('newDescription');
const newProvider = document.getElementById('newProvider');
const add_btn = document.getElementById('add_btn');
const clear_btn = document.getElementById('clear_btn');
// list of table
const table_body = document.getElementById('ts_tbody');
let num = 0;
let update_state = false;

function update_table() {
    table_body.innerHTML = '';
    for (let data of productData) {
        table_body.insertAdjacentHTML('beforeend',
            `<tr>
        <td>${data.productID}</td>
        <td>${data.productName}</td>
        <td>${data.productBrand}</td>
        <td>${data.price}</td>
        <td>${data.quantity}</td>
        <td>${data.description}</td>
        <td>${data.provider}</td>
        <td>
        <button class = "remove_btn">Delete</button>
        <button class = "update_btn">Update</button>
        </td>
        </tr>`);
    };

    const remove_btn = document.getElementsByClassName('remove_btn');
    const update_btn = document.getElementsByClassName('update_btn');
    //Delete a product
    for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener('click', () => {
            productData.splice(i, 1);
            update_table()
            console.log(productData);
        });

    };
    // Show info product
    for (let i = 0; i < update_btn.length; i++) {
        update_btn[i].addEventListener('click', () => {
            update_state = true;
            num = i;
            newID.value = productData[i].productID;
            newName.value = productData[i].productName;
            newBrand.value = productData[i].productBrand;
            newPrice.value = productData[i].price;
            newQuantity.value = productData[i].quantity;
            newDescription.value = productData[i].description;
            newProvider.value = productData[i].provider;
        });
    };
};
update_table();
// Add and update prouct
add_btn.addEventListener('click', () => {
    if (newID.value == '' || newName.value == '' || newBrand.value == '' || newPrice.value == '' || newQuantity.value == '' || newDescription.value == '' || newProvider.value == '') {
        alert('Do not leave blank');
    } else if (update_state) {
        productData[num] = {
            productID: newID.value,
            productName: newName.value,
            productBrand: newBrand.value,
            price: newPrice.value,
            quantity: newQuantity.value,
            description: newDescription.value,
            provider: newProvider.value,
        };
        update_state = false;
        update_table();
        newID.value = '';
        newName.value = '';
        newBrand.value = '';
        newPrice.value = '';
        newQuantity.value = '';
        newDescription.value = '';
        newProvider.value = '';
    } else {
        productData.push({
            productID: newID.value,
            productName: newName.value,
            productBrand: newBrand.value,
            price: newPrice.value,
            quantity: newQuantity.value,
            description: newDescription.value,
            provider: newProvider.value,
        });
        update_table();
        newID.value = '';
        newName.value = '';
        newBrand.value = '';
        newPrice.value = '';
        newQuantity.value = '';
        newDescription.value = '';
        newProvider.value = '';
    };
    console.log(productData);
});
// Event for clear btn
clear_btn.addEventListener('click', () => {
    newID.value = '';
    newName.value = '';
    newBrand.value = '';
    newPrice.value = '';
    newQuantity.value = '';
    newDescription.value = '';
    newProvider.value = '';
    update_state = false;
});


const userForm = document.getElementById("user_form")
userForm.style.display = "block"
const cartForm = document.getElementById("cart_form")

//Tạo localStorage, đưa toàn bộ Product Data vào.
const storageProductData = 'productData';
localStorage.setItem(storageProductData, JSON.stringify(productData));
const productDataString = localStorage.getItem(storageProductData);

//đoạn điều kiện check xem data sản phẩm ban đầu có chứa thông tin hay chưa
if (productDataString) {
    productData = JSON.parse(productDataString);
} else {
    productData = [];
}
const listProduct = document.getElementById('listProduct');

// function này đọc dữ liệu từ array data ra và show ra html (màn hình)
function loadListProduct() {
    for (let i = 0; i < productData.length; i++) {
        listProduct.insertAdjacentHTML('beforeend', `<li style="background-color: darkgrey; height: 150px;width: 150px;" >
        <div class="product-show" >
            <a class="reletive" href="" onclick="">
                <img src="" alt="">
                <p>${productData[i].productName}</p>
                <p>${productData[i].price}</p>
            </a>
        </div>
        <div class="info-box">
        <a href="Main.html" ></a>
        <button class="btnAddCart" onclick="">Add to Cart</button>
        <button class="btnDetail" onclick="">Detail</button>
        </div>
    </li>` )
    };
    const btnDetail = document.getElementsByClassName('btnDetail');
    const btnAddCart = document.getElementsByClassName('btnAddCart');


    for (let i = 0; i < btnAddCart.length; i++) {
        btnAddCart[i].addEventListener('click', () => {
            cartNumber(productData[i]);
            cartTotal(productData[i]);
        })
    }
    for (let i = 0; i < productData.length; i++) {
        btnDetail[i].addEventListener('click', () => {
            userForm.style.display = "none";
            cartForm.style.display = "none";
            detaiForm.style.display = "block";

            const pDetail = document.getElementById("productDetail")

            pDetail.insertAdjacentHTML('beforeend',
                `<tr>
                <td>${productData[i].productID}</td>
                <td>${productData[i].productName}</td>
                <td>${productData[i].productBrand}</td>
                <td>${productData[i].price}</td>
                <td>${productData[i].quantity}</td>
                <td>${productData[i].description}</td>
                <td>${productData[i].provider}</td>
                </tr>`);
        });
    }
};

//function này hiển thị số product đã đc chọn có sẵn trong localstr, reload trang nhưg số sản phẩm trong cart k bị mất
function loadNumberInCart() {
    let productNumberInCarts = localStorage.getItem('CartNumbers');
    productNumberInCarts = parseInt(productNumberInCarts);
    if (productNumberInCarts) {
        document.getElementById('cartNumbers').textContent = productNumberInCarts;
    }
}
//function thêm vào giỏ hàng
function cartNumber(chosenProduct) {

    let productNumberInCarts = localStorage.getItem('CartNumbers'); //lấy ra số product đag có trong cart
    productNumberInCarts = parseInt(productNumberInCarts);
    //đoạn này kiểm tra xem trong cart có product nào chưa
    if (productNumberInCarts) {
        localStorage.setItem('CartNumbers', productNumberInCarts + 1);// có rồi thì +1
        document.getElementById('cartNumbers').textContent = productNumberInCarts + 1; //đoạn này hiển thị cart numberr lên màn hình
    } else {
        localStorage.setItem('CartNumbers', 1);
        document.getElementById('cartNumbers').textContent = 1; //chưa có thì = 1
    };
    inCartProduct(chosenProduct);
};
//function này lưu lại những product đã đc chọn.
function inCartProduct(chosenProduct) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[chosenProduct.productID] == undefined) {
            cartItems = {
                ...cartItems,
                [chosenProduct.productID]: chosenProduct,
            }
        }
        cartItems[chosenProduct.productID].inCart += 1;
    } else {
        chosenProduct.inCart = 1;
        cartItems = {
            [chosenProduct.productID]: chosenProduct,
        }
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
};
//fuction này tính tổng giá trị sản phẩm đc chọn
function cartTotal(chosenProduct) {
    let cartTotal = localStorage.getItem('totalCart');
    if (cartTotal != null) {
        cartTotal = parseInt(cartTotal);
        localStorage.setItem('totalCart', cartTotal + chosenProduct.price);
    } else {
        localStorage.setItem('totalCart', chosenProduct.price);
    }
}
loadListProduct();
loadNumberInCart();
