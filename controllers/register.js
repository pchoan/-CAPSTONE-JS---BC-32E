function renderThongTinUser() {
    let user = new InfoUser();
    // console.log(user);
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: "POST",
        data: user,
    });
    promise.then(function(result) {
        document.getElementById('titleR').innerHTML = 'Sign Up Success';
        document.getElementById('titleR').style.color = 'green';
        console.log(result.data.content);
    });
    promise.catch(function(err) {
        document.getElementById('titleR').innerHTML = 'Registration failed';
        document.getElementById('titleR').style.color = 'red';
        console.log(err);
    });
}

document.querySelector('#btnSubmit').onclick = function(event) {
    event.preventDefault();
    // renderThongTinUser();
    let user = new InfoUser();
    // lay thong tin ng dung tu giao dien nhap lieu
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    user.name = document.querySelector("#name").value;
    user.phone = document.querySelector("#phone").value;
    var pwConfirm = document.querySelector("#pwConfirm").value;
    console.log(user);
    const ipGender = document.querySelectorAll('#inlineRadio1, #inlineRadio2')
    ipGender.forEach(input => {
        if (input.checked === true) {
            user.gender = input.value
        }
    });
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: "POST",
        data: user,
    });
    promise.then(function(result) {
        console.log(result.data);
        document.getElementById('titleR').innerHTML = 'Sign Up Success';
        document.getElementById('titleR').style.color = 'green';
    });
    promise.catch(function(err) {
        console.log(err);
        document.getElementById('titleR').innerHTML = 'Registration failed';
        document.getElementById('titleR').style.color = 'red';
    });
    let valid = true;
    valid &=
        kiemTraRong(user.email, '#checkMail', 'Email ') &
        kiemTraRong(user.name, '#checkName', 'Name ') &
        kiemTraPassword(user.password, '#checkPass', 'Pass ') &
        kiemTraRong(user.phone, '#checkPhone', 'Phone ') &
        kiemTraRong(pwConfirm, '#checkCfm', 'Pass ') &
        kiemTraEmail(user.email, '#errMail', 'Email ') &
        kiemTraTatCaKyTu(user.name, '#errName', 'Name ') &
        kiemTraPhone(user.phone, '#errPhone', 'Phone ') &
        cfmPass(pwConfirm, user.password, '#errCfm', 'Pass ')
    if (!valid) {
        return;
    }

}