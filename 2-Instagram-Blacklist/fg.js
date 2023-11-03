const startBtn = document.createElement('div');
startBtn.className = 'get_followers_btn_bhy'
startBtn.innerText = 'Takipçi Tara';
document.querySelector('div.x6s0dn4.x78zum5.x1q0g3np.xs83m0k.xeuugli.x1n2onr6').appendChild(startBtn)

var names_of_followers = []
var names_of_followings = []
var black_list = []

startBtn.addEventListener('click',async() => {
    startBtn.remove();
    await pow_func();
    follower_links.forEach(name => names_of_followers.push(name.innerText));
    document.querySelector('button._abl-').click();
    await sleep(1000);
    await pow_func2();
    following_links.forEach(name => names_of_followings.push(name.innerText));
    names_of_followings.forEach(name => {
        if(names_of_followers.includes(name))return;
        black_list.push(name);
    });
    document.querySelector('button._abl-').click();
    await sleep(1000);
    const see_black_list_btn = document.createElement("button");
    see_black_list_btn.className = 'see_black_list_btn';
    see_black_list_btn.innerText = 'Kara Listeyi Görüntüle'
    document.querySelector('div.x6s0dn4.x78zum5.x1q0g3np.xs83m0k.xeuugli.x1n2onr6').appendChild(see_black_list_btn)

    document.querySelector('.see_black_list_btn').addEventListener('click',() => {
        see_black_list_btn.remove();
        document.querySelector("body").style.overflowY = 'hidden !important';
        const blackListMain = document.createElement('div');
        blackListMain.id = 'blackListMain';
        const blackListMain_sub = document.createElement('div');
        blackListMain_sub.id = 'blackListMain_sub';
        const closeTheBlackList = document.createElement('button');
        closeTheBlackList.id = 'closeTheBlackList';
        closeTheBlackList.innerText = 'Kapat';
        
        
        const top_sec = document.createElement('div');
        top_sec.id = 'top_sec';
        const bl_title = document.createElement('header');
        bl_title.id = 'bl_title';
        bl_title.textContent = 'Kara Liste'
        const numberOfPeopleInBL = document.createElement('span');
        numberOfPeopleInBL.textContent = black_list.length + " Kişi";

        const BL_users = document.createElement('div');
        BL_users.id = 'BL_users'
        if(black_list.length > 8){
            BL_users.style.overflowY = "scroll";
            BL_users.style.paddingRight = "5px";
        }else {
            BL_users.style.overflowY = "hidden";
            BL_users.style.paddingRight = "0px";
        }

        top_sec.appendChild(bl_title);
        top_sec.appendChild(numberOfPeopleInBL);
        blackListMain_sub.appendChild(top_sec);

        black_list.forEach(name => {
            const BL_user = document.createElement('span');
            BL_user.className = 'BL_user';
            BL_user.innerText = name;
            BL_users.appendChild(BL_user);
        })

        blackListMain_sub.appendChild(BL_users);
        blackListMain_sub.appendChild(closeTheBlackList);
        blackListMain.appendChild(blackListMain_sub);

        document.querySelector('body').appendChild(blackListMain);
    })

})

document.getElementById("closeTheBlackList").addEventListener('click',() => {
    document.getElementById('blackListMain').remove();
})

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function pow_func(){
    document.querySelectorAll("a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._alvs._a6hd")[0].click();
    h = 1; //height
    lh = 0; //last_height
    while(h != lh){
        lh = h;
        await sleep(2000); // 1s
        document.querySelector("div._aano").scrollTo(0,document.querySelector("div._aano").scrollHeight);
        h = document.querySelector("div._aano").scrollHeight;
        follower_links = document.querySelectorAll('span._aacl._aaco._aacw._aacx._aad7._aade');
    }
}

async function pow_func2(){
    document.querySelectorAll("a.x1i10hfl.xjbqb8w.x6umtig.x1b1mbwd.xaqea5y.xav7gou.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x16tdsg8.x1hl2dhg.xggy1nq.x1a2a7pz._alvs._a6hd")[1].click();
    h = 1; //height
    lh = 0; //last_height
    while(h != lh){
        lh = h;
        await sleep(2000); // 1s
        document.querySelector("div._aano").scrollTo(0,document.querySelector("div._aano").scrollHeight);
        h = document.querySelector("div._aano").scrollHeight;
        following_links = document.querySelectorAll('span._aacl._aaco._aacw._aacx._aad7._aade');
    }
}

