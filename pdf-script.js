document.addEventListener("DOMContentLoaded", function () {
    // استخراج پارامترهای URL
    const urlParams = new URLSearchParams(window.location.search);
    const fullName = urlParams.get('inputFullName');
    const phoneNumber = urlParams.get('inputPhoneNumber');
    const email = urlParams.get('inputEmail');
    const gender = urlParams.get('genderInput');
    const province = urlParams.get('selectProvince');
    const educationLevel = urlParams.get('selectEducationLevel');

    // ایجاد محتوای HTML بر اساس اطلاعات
    const content = `
    <h3> فرم اطلاعات ورودی</h3>

        <p>نام و نام خانوادگی: ${fullName}</p>
        <p>شماره تلفن: ${phoneNumber}</p>
        <p>ایمیل: ${email}</p>
        <p>جنسیت: ${gender}</p>
        <p>استان: ${province}</p>
        <p>مقطع تحصیلی: ${educationLevel}</p>
    `;

    // تبدیل محتوا به فایل PDF و دانلود
    html2pdf(content, {
        margin: 10,
        filename: 'فرم_ورود_کاربر.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
    
});

function setGender(gender) {
    document.getElementById('genderInput').value = gender;
    const genderDisplay = document.querySelector('.input-group input');
    genderDisplay.value = gender};