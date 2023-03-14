//[Bài tập] 4. Kiểm tra từ đối xứng
function class_ex4_check_palindrome_fnt() {
    let inputText = document.getElementById("class_ex4_input").value;
    let inputTextArray = inputText.split("");
    // let inputTextArrayReverse = inputTextArray.reverse();
    let checkFlag = false; // false : ko doi xung
    let arrayLength = inputTextArray.length;
    for (let i = 0; i < (arrayLength-1) / 2; i++) {
        if(inputTextArray[i] == inputTextArray[arrayLength - 1 - i]){
            checkFlag = true;
        } else {
            checkFlag = false;
            break;
        }
    }
    if(checkFlag == true){
        document.getElementById("class_ex4_result").innerHTML = "Doi xung"
    } else{
        document.getElementById("class_ex4_result").innerHTML = "Ko Doi xung"
    }
}

//[Bài tập] 3. Ứng dụng quản lý sản phẩm sử dụng hàm
// lưu trên local storage
// lưu dùng SET: tên để lưu (key) và giá trị cần lưu
// lấy về dùng GET: get theo key

let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function class_ex3_addProduct_fnt() {
    let productInput = document.getElementById("class_ex3_productInput").value;
    
    if(listProduct == null){
        listProduct = [];
        listProduct.push(productInput);
        localStorage.setItem("listProduct",JSON.stringify(listProduct));
    } else{
        listProduct.push(productInput);
        localStorage.setItem("listProduct",JSON.stringify(listProduct));
    }
    console.log(listProduct);
    class_ex3_displayAllProduct();
}
class_ex3_displayAllProduct() ; // alway display when reload (F5) page
function class_ex3_displayAllProduct() {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let displayResult = "";
    for (var itemInList of listProduct) {
        displayResult +=
            `
            <tr>
                <td>
                    ${itemInList}
                </td>
                <td>
                    <button onclick="class_ex3_edit_fnt(${listProduct.indexOf(itemInList)})">edit</button>
                </td>
                <td>
                    <button onclick="class_ex3_delete_fnt(${listProduct.indexOf(itemInList)})">delete</button>
                </td>
            </tr>
        `
    }
    document.getElementById("class_ex3_listProduct").innerHTML = displayResult;
}
function class_ex3_delete_fnt(itemIndex) {
    listProduct.splice(itemIndex, 1);
    localStorage.setItem("listProduct",JSON.stringify(listProduct));
    class_ex3_displayAllProduct();
}
function class_ex3_edit_fnt(itemIndex) {
    // document.getElementById("class_ex3_productInput").value = listProduct[itemIndex];
    let changeItemName = prompt("Moi nhap ten moi: ");
    listProduct.splice(itemIndex, 1, changeItemName);
    localStorage.setItem("listProduct",JSON.stringify(listProduct));
    class_ex3_displayAllProduct();
}

//F5-clear version
// let listProduct = [];
// {
//     function class_ex3_addProduct_fnt() {
//         let productInput = document.getElementById("class_ex3_productInput").value;
//         listProduct.push(productInput);
//         class_ex3_displayAllProduct();
//     }
//     function class_ex3_displayAllProduct() {
//         let displayResult = "";
//         for (var itemInList of listProduct) {
//             displayResult +=
//                 `
//                 <tr>
//                     <td>
//                         ${itemInList}
//                     </td>
//                     <td>
//                         <button onclick="class_ex3_edit_fnt(${listProduct.indexOf(itemInList)})">edit</button>
//                     </td>
//                     <td>
//                         <button onclick="class_ex3_delete_fnt(${listProduct.indexOf(itemInList)})">delete</button>
//                     </td>
//                 </tr>
//             `
//         }
//         document.getElementById("class_ex3_listProduct").innerHTML = displayResult;
//     }
//     function class_ex3_delete_fnt(itemIndex) {
//         listProduct.splice(itemIndex, 1);
//         class_ex3_displayAllProduct();
//     }
//     function class_ex3_edit_fnt(itemIndex) {
//         // document.getElementById("class_ex3_productInput").value = listProduct[itemIndex];
//         let changeItemName = prompt("Moi nhap ten moi: ");
//         listProduct.splice(itemIndex, 1, changeItemName);
//         class_ex3_displayAllProduct();
//     }
// }
