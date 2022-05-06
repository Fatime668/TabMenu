let tabBtn = document.querySelectorAll('.myBtn')
let tab = document.querySelectorAll('.tab-info')

for (let i = 0; i < tabBtn.length; i++) {
   tabBtn[i].onclick = function () {
    for(var j=0;j<tab.length;j++){
        tab[j].classList.remove('active')
    }
    for (let k = 0; k < tabBtn.length; k++) {
           tabBtn[k].style.backgroundColor = "whitesmoke"
           tabBtn[k].style.color = "rgb(202, 202, 199)"
    }
       this.style.backgroundColor = "teal"
       this.style.color = "white"
       let btnI = this.getAttribute('data-btn')
       tab[btnI].classList.add('active')
   }
}
// console.log(tabBtn);

// for(var i=0;i<tabBtn.length;i++){
//     tabBtn[i].onclick = function(){
//         for(var j=0;j<tab.length;j++){
//             tab[j].classList.remove('active')
//         }
//         let btnI = this.getAttribute('data-btn')
//         tab[btnI].classList.add('active')
//     }
// }


