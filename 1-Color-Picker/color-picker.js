const pickBtn = document.getElementById('pick');
const colors = document.getElementById('colors');
const pickedColors = JSON.parse(localStorage.getItem("Picked-Colors") || "[]");
const clear_all_btn = document.getElementById('clear_all_btn');
const message = document.getElementById('message');

const copyColorCode = color_elem =>{

    const check_icon = color_elem.parentElement.children[0].children[0];
    console.log(check_icon);

    console.log(color_elem);
    navigator.clipboard.writeText(color_elem.dataset.colorcode);
    color_elem.innerText = "Kopyalandı";
    color_elem.style.color = "green";
    color_elem.style.fontSize = "1rem";
    color_elem.parentElement.children[0].style.border = "0.1rem solid green";
    color_elem.parentElement.children[0].style.backgroundColor = "green";
    check_icon.classList.add('check_icon_active')
    setTimeout(() => {
        color_elem.innerText = color_elem.dataset.colorcode;
        color_elem.style.color = "";
        color_elem.style.fontSize = "";
        color_elem.parentElement.children[0].style.border = `0.1rem solid ${color_elem.dataset.colorcode == '#ffffff' ? '#ccc' : color_elem.dataset.colorcode}`;
        color_elem.parentElement.children[0].style.backgroundColor = color_elem.dataset.colorcode;
        check_icon.classList.remove('check_icon_active')
    }, 2000);
}

const showColors = () => {
    if(pickedColors.length > 0) message.style.display = 'none';
    else message.style.display = 'block'
    
    if(pickedColors.length > 12){
        colors.style.overflowY = 'scroll';
        colors.style.height = '22rem'
    }else{
        colors.style.overflowY = 'hidden';
        colors.style.height = 'auto'
    }

    colors.innerHTML = pickedColors.map(color_code => `
    <div class="color">
    <div class="copy_code">
        <div style="background-color: ${color_code}; border: 0.1rem solid ${color_code == '#ffffff' ? '#ccc' : color_code} ;" class="icon">
            <i class="fa-solid fa-check check_icon"></i>
        </div>
        <span data-colorCode="${color_code}" class="color_code">${color_code}</span>
    </div>
    <i class="fa-regular fa-square-minus delete"></i>
    </div>`).join("");

    document.querySelectorAll(".copy_code").forEach(div => {
        div.addEventListener('click',(e) => copyColorCode(e.currentTarget.lastElementChild));
    })

    document.querySelectorAll('.delete').forEach(del => {
        del.addEventListener('click',() => {
            pickedColors.forEach((color_code,index) => {
                if(color_code == del.parentElement.children[0].children[1].textContent){
                    pickedColors.splice(index,1);
                    localStorage.setItem("Picked-Colors",JSON.stringify(pickedColors));
                    showColors();
                }
            })
        })
    });
}

const activate_eye_dropper = () => {
    document.body.style.display = "none";
    setTimeout(async() => {
        try {
            const eyeDropper = new EyeDropper();
            const {sRGBHex} = await eyeDropper.open();
            navigator.clipboard.writeText(sRGBHex);
            if(!pickedColors.includes(sRGBHex)){
            pickedColors.push(sRGBHex);
            localStorage.setItem("Picked-Colors",JSON.stringify(pickedColors));
            showColors();
            }else alert("Aynı Renk Kodunu Daha Önceden Eklemişsin :)")
        } catch (error) {
            alert("Bir Hata Oluştu ,Lütfen Tekrar Deneyiniz :)");
        }
        document.body.style.display = "";
    }, 10);
}

const clear_all_colors = () => {
    pickedColors.length = 0;
    localStorage.setItem("Picked-Colors",JSON.stringify(pickedColors));
    showColors();
}

pickBtn.addEventListener('click',activate_eye_dropper);
clear_all_btn.addEventListener('click',clear_all_colors);
document.addEventListener('DOMContentLoaded',() => {
    showColors();
})