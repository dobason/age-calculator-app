const dayInp = document.getElementById('day');    //Bắt nút input ngày để lấy dữ liệu ngày
const monthInp = document.getElementById('month'); //Bắt nút input tháng để lấy dữ liệu tháng
const yearInp = document.getElementById('year');   //Bắt nút input năm để lấy dữ liệu năm
const dayOTp = document.getElementById("DD");    
const monthOTp = document.getElementById("MM");
const yearOTp = document.getElementById("YY");

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit); //thực hiện hàm handleSubmit sau khi ấn nút submit

const date = new Date(); 
let day = date.getDate();  //lấy ngày hiện tại
let month = 1 + date.getMonth(); //bởi vì các tháng bắt đầu từ số 0 mà không có tháng 0 nên chúng ta phải + 1 để lấy đúng giá trị tháng
let year = date.getFullYear(); // lấy giá trị năm

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //mảng này giống như một danh sách nhanh để tra cứu số ngày trong mỗi tháng

function validate() {
    const inputs = document.querySelectorAll("input");  //chọn thẻ input bằng việc gọi hàm querySelectorAll
    let validator = true;
    inputs.forEach((input) => {
        const parent = input.parentElement;
        const errorMsg = parent.querySelector("small");

        //Nếu không nhập 
        if (!input.value) {
            input.style.borderColor = "red";
            errorMsg.innerHTML = "This field is required";
            errorMsg.classList.add("error-message");
            validator = false;
        // Nếu tháng trong input > 12
        } else if (input.id === "month" && input.value > 12) {
            input.style.borderColor = "red";
            errorMsg.innerHTML = "Must be a valid month";
            errorMsg.classList.add("error-message");
            validator = false;
        //Nếu ngày trong input > 31
        } else if (input.id === "day" && input.value > 31) {
            input.style.borderColor = "red";
            errorMsg.innerHTML = "Must be a valid day";
            errorMsg.classList.add("error-message");
            validator = false;
        } else {
            input.style.borderColor = "black";
            errorMsg.innerHTML = "";
            errorMsg.classList.remove("error-message");
        }
    });
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
        if (dayInp.value > day) {
            day += months[month - 1];
            month--;
        }
        if (monthInp.value > month) {
            month += 12;
            year--;
        }

        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;

        dayOTp.innerHTML = y;
        monthOTp.innerHTML = m;
        yearOTp.innerHTML = d;
    }
}
