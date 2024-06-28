const search=document.querySelector('.search');
const y=document.querySelector('.y');
const div=document.querySelector('.div')
const note=document.querySelector('.note')
const notes=document.querySelector('.notes')
const edit=document.querySelector('.edit')
const pic=document.querySelector('.pic')
const todolist=document.querySelector('.todolist')
const wrap=document.querySelector('.wrap')
const btn=document.querySelector('.btn')
const btn2=document.querySelector('.btn2')
const txt=document.querySelector('.txt')
const fontello=document.querySelector('#fontello')
const textarea=document.getElementById('textarea');
const input=document.getElementById('input');

let date =new Date();
let time=date.toUTCString();

edit.addEventListener('click',(e)=>{
    wrap.style.transform = 'translateX(0)';
});
fontello.addEventListener('click',(e)=>{
    wrap.style.transform = 'translateX(700px)';
});
search.addEventListener('click',(e)=>{
   y.classList.toggle('show');
   
});

wrap.addEventListener("keydown",(e)=>{
    btn.style.display='flex';
   
});
btn.addEventListener('click',(e)=>{
    let inp=input.value;
    let str=textarea.value;
   if (str.length>0 && inp.length>0) {
       txt.style.display='flex';
        pic.style.display='none'
        let li=document.createElement('li'); 
        li.innerHTML+=`
        <b>titel:${inp}</b>\n<br><span>body:${str}</span>\n<br><time>${time}</time>\n<br>
        <button class="btn4" onclick='func(this)' >delete</button>
        
        
        `;
        txt.appendChild(li);
        input.value=' ';
        textarea.value=' ';
        wrap.style.transform = 'translateX(700px)';
        
        
   }
  
});
// btn2.addEventListener('click', updates(e));
function func(e){
    e.parentElement.remove();
}
 
