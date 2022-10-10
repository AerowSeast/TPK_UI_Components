(function (){
    // 定義變數
let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{
        // 點擊之後移除全部有active的Tag
        let tabs_active = document.querySelectorAll(".tab.active");
        tabs_active.forEach(tab_active =>{
            tab_active.classList.remove("active");
        })
        // 點擊的按鈕新增active的class
        tab.classList.add("active");
        // line線條往右邊移動
        let tab_line = document.querySelector(".tab_line");
        tab_line.style.left=`calc(calc(100% / 4) * ${index})`;
        // 根據按鈕切換內容
        let tabs_content = document.querySelectorAll(".tab_box");
        tabs_content.forEach((tab_content)=>{
            tab_content.classList.remove("active");
        })
        tabs_content[index].classList.add("active");
    })
})})();