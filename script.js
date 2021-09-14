const form = document.querySelector('form');
const input = document.querySelector('#input');
const closed = document.querySelector('.btn-close');
let ul = document.querySelector('.todolist');
let li = document.querySelector('li');
let count = document.querySelector('.count');
const pattern = /^.[a-zA-Z0-9]{0,}$/


//generate todo....
function generateTodo(lists){
 let div = document.createElement('div');
 div.setAttribute('class', 'innerlist');
 let img = document.createElement('img');
 img.setAttribute('src' , '/images/icon-cross.svg');
 img.setAttribute('class', 'close-bt')
 let input = document.createElement('input');
 input.setAttribute('type', 'checkbox')
 input.setAttribute('class', 'checkbox')
 let label = document.createElement('label');
 label.innerText = `${lists}`
 label.setAttribute('class', 'containar');
 let span = document.createElement('span');
 span.setAttribute('class', 'checkmark')
 label.appendChild(input)
 label.appendChild(span)
 div.appendChild(label)
 div.appendChild(img)
 ul.appendChild(div)
 checkInput(input);
 themeSwitch(div)
}



//adding todos......
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let html = input.value.trim();
    let result =pattern.test(input.value);
    if(result){
    generateTodo(html);   
    form.reset();

}
    count.innerText = ul.childElementCount;
})


//adding line-through
function checkInput(input){
input.addEventListener('click', (e)=>{
    if(input.checked){
        let sty = input.parentElement;
        sty.classList.add("text-decoration-line-through")
        sty.classList.add('text-muted')
    }
    else{
        let sty = input.parentElement;
        sty.classList.remove("text-decoration-line-through")
        sty.classList.remove('text-muted')
    }
})
}


//deleting todos......
ul.addEventListener('click', (e)=>{
    if(e.target.classList.contains('close-bt')){
        e.target.parentElement.remove();
        count.innerText = ul.childElementCount;
    }
})



    //clear completed
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', (e)=>{
        const lis = document.querySelectorAll('.innerlist');
lis.forEach((li)=>{
    if(li.children[0].children[0].checked){
li.remove();
    }
})
        count.innerText = ul.childElementCount;
    })



    //completed
    const completed = document.querySelector('#conmplete');
    completed.addEventListener('click', ()=>{
        const lis = document.querySelectorAll('.innerlist');
        lis.forEach((li)=>{
            if(!li.children[0].children[0].checked){
                li.classList.add('d-none')
            }
            else{
                li.classList.remove('d-none')
            }
        })
    
    })
//completed md 
const compMd =document.querySelector('#conmplete-md');
compMd.addEventListener('click', ()=>{
    const lis = document.querySelectorAll('.innerlist');
    lis.forEach((li)=>{
        if(!li.children[0].children[0].checked){
            li.classList.add('d-none')
        }
        else{
            li.classList.remove('d-none')
        }
    })

})
//active
    const active = document.querySelector('#active');
active.addEventListener('click', (e)=>{
        const lis = document.querySelectorAll('.innerlist');
lis.forEach((li)=>{
    if(li.children[0].children[0].checked){
    li.classList.add('d-none');
    }
    else{
    li.classList.remove('d-none')
    }
    })

})
//active md
const activeMD = document.querySelector('#active-md');
activeMD.addEventListener('click', (e)=>{
        const lis = document.querySelectorAll('.innerlist');
lis.forEach((li)=>{
    if(li.children[0].children[0].checked){
    li.classList.add('d-none');
    }
    else{
    li.classList.remove('d-none')
    }
    })

})

//all
const all = document.querySelector('#all');
all.addEventListener('click', ()=>{
    const lis = document.querySelectorAll('.innerlist');
    lis.forEach((li)=>{
        li.classList.remove('d-none')
    })
    count.innerText= ul.childElementCount;
})
//all-md
const allMD = document.querySelector('#all-md');
allMD.addEventListener('click', ()=>{
    const lis = document.querySelectorAll('.innerlist');
    lis.forEach((li)=>{
        li.classList.remove('d-none')
    })
    count.innerText= ul.childElementCount;
})
//da
function themeSwitch(data){
console.log(data.classList)
}


//theme switch
const swtich = document.querySelector('#icon');

swtich.addEventListener('click', (e)=>{
 if(e.target.classList.contains('moon')){
     swtich.removeAttribute('class')
     toggleDark();
    }
else{
swtich.setAttribute('class', 'moon')
toggleDay();
}
})

function toggleDark(div){
    let bg= document.querySelector('.container-fluid');
    let icon = document.querySelector('#icon')
    let input = document.querySelector('#input');
    let container = document.querySelector('.input-group-text');
    let body = document.querySelector('body');
    let footer = document.querySelector('.ulfooter');
    let listes = document.querySelector('.innerlist')
    let footerMd = document.querySelector('#ulfooter');

    ul.style.backgroundColor= 'hsl(235, 24%, 19%)';
    ul.style.color= 'hsl(234, 39%, 85%)';
    bg.style.backgroundImage ="url(/images/bg-desktop-dark.jpg)"
    icon.setAttribute('src', '/images/icon-sun.svg')
    input.style.backgroundColor ="hsl(235, 24%, 19%)"
    input.style.borderColor = "hsl(235, 24%, 19%)"
    container.style.backgroundColor="hsl(235, 24%, 19%)"
    container.style.borderColor="hsl(235, 24%, 19%)"
    input.style.color ="hsl(234, 39%, 85%)"
    body.style.backgroundColor= "hsl(235, 21%, 11%)"
    footer.style.backgroundColor = "hsl(235, 24%, 19%)"
    footer.style.color="hsl(234, 39%, 85%)"
    footerMd.style.backgroundColor = "hsl(235, 24%, 19%)"
    footerMd.style.color="hsl(234, 39%, 85%)"
    footerMd.style.boxShadow="0 0 5px black"
    ul.style.boxShadow="0 0 5px black"
    footer.style.boxShadow="0 0 5px black"
    completed.style.color ="hsl(234, 39%, 85%)"
    active.style.color = "hsl(234, 39%, 85%)"
    clear.style.color= "hsl(234, 39%, 85%)";
    all.style.color = "hsl(234, 39%, 85%)"
    compMd.style.color ="hsl(234, 39%, 85%)"
    activeMD.style.color = "hsl(234, 39%, 85%)"
    allMD.style.color = "hsl(234, 39%, 85%)"


    //all
    all.addEventListener('click', ()=>{
        completed.style.color ="hsl(234, 39%, 85%)"
        active.style.color = "hsl(234, 39%, 85%)"
        all.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(234, 39%, 85%)";
    //md
    })
    allMD.addEventListener('click', ()=>{
        compMd.style.color ="hsl(234, 39%, 85%)"
        activeMD.style.color = "hsl(234, 39%, 85%)"
        allMD.style.color= "hsl(220, 98%, 61%)";
    
    })
    //active
    active.addEventListener('click', ()=>{
        completed.style.color ="hsl(234, 39%, 85%)"
        all.style.color = "hsl(234, 39%, 85%)"
    active.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(234, 39%, 85%)";
    //md
})
//active md
activeMD.addEventListener('click', ()=>{
    compMd.style.color ="hsl(234, 39%, 85%)"
    allMD.style.color = "hsl(234, 39%, 85%)"
activeMD.style.color= "hsl(220, 98%, 61%)";

})
//completed
completed.addEventListener('click', ()=>{
    all.style.color ="hsl(234, 39%, 85%)"
    active.style.color = "hsl(234, 39%, 85%)"
    completed.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(234, 39%, 85%)";
  

})
//compmd
compMd.addEventListener('click', ()=>{
  //md
  allMD.style.color ="hsl(234, 39%, 85%)"
  activeMD.style.color = "hsl(234, 39%, 85%)"
  compMd.style.color= "hsl(220, 98%, 61%)";

})

//clear 
clear.addEventListener('click', ()=>{
    completed.style.color ="hsl(234, 39%, 85%)"
    active.style.color = "hsl(234, 39%, 85%)"
    all.style.color = "hsl(234, 39%, 85%)"
    clear.style.color= "hsl(220, 98%, 61%)";
})
}


//toggleday


function toggleDay(div){
    let bg= document.querySelector('.container-fluid');
    let icon = document.querySelector('#icon')
    let input = document.querySelector('#input');
    let container = document.querySelector('.input-group-text');
    let body = document.querySelector('body');
    let footer = document.querySelector('.ulfooter');
    let listes = document.querySelector('.innerlist')
    let footerMd = document.querySelector('#ulfooter');
    footerMd.style.backgroundColor = "hsl(236, 33%, 92%)"
    footerMd.style.color="hsl(235, 19%, 35%)"
    compMd.style.color ="hsl(235, 19%, 35%)"
    activeMD.style.color = "hsl(235, 19%, 35%)"
    allMD.style.color = "hsl(235, 19%, 35%)"

    ul.style.backgroundColor= 'hsl(236, 33%, 92%)';
    ul.style.color= 'hsl(235, 19%, 35%)';
    bg.style.backgroundImage ="url(/images/bg-desktop-light.jpg)"
    icon.setAttribute('src', '/images/icon-moon.svg')
    input.style.backgroundColor ="hsl(236, 33%, 92%)"
    input.style.borderColor = "hsl(236, 33%, 92%)"
    container.style.backgroundColor="hsl(236, 33%, 92%)"
    container.style.borderColor="hsl(236, 33%, 92%)"
    input.style.color ="hsl(235, 19%, 35%)"
    body.style.backgroundColor= "hsl(0, 0%, 98%)"
    footer.style.backgroundColor = "hsl(236, 33%, 92%)"
    footer.style.color="hsl(235, 19%, 35%)"
    ul.style.boxShadow="0 0 5px black"
    footer.style.boxShadow="0 0 5px black"
    completed.style.color ="hsl(235, 19%, 35%)"
    active.style.color = "hsl(235, 19%, 35%)"
    clear.style.color= "hsl(235, 19%, 35%)";
    all.style.color = "hsl(235, 19%, 35%)"


    
    //all
    all.addEventListener('click', ()=>{
        completed.style.color ="hsl(235, 19%, 35%)"
        active.style.color = "hsl(235, 19%, 35%)"
        all.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(235, 19%, 35%)";
    })
    //md
    allMD.addEventListener('click', ()=>{
        compMd.style.color ="hsl(235, 19%, 35%)"
        activeMD.style.color = "hsl(235, 19%, 35%)"
        allMD.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(235, 19%, 35%)";

    })
    //active
    active.addEventListener('click', ()=>{
        completed.style.color ="hsl(235, 19%, 35%)"
        all.style.color = "hsl(235, 19%, 35%)"
    active.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(235, 19%, 35%)";
})
//md
activeMD.addEventListener('click', ()=>{
    compMd.style.color ="hsl(235, 19%, 35%)"
    allMD.style.color = "hsl(235, 19%, 35%)"
activeMD.style.color= "hsl(220, 98%, 61%)";
clear.style.color= "hsl(235, 19%, 35%)";
})
//completed
completed.addEventListener('click', ()=>{
    all.style.color ="hsl(235, 19%, 35%)"
    active.style.color = "hsl(235, 19%, 35%)"
    completed.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(235, 19%, 35%)";
})
//md
compMd.addEventListener('click', ()=>{
    allMD.style.color ="hsl(235, 19%, 35%)"
    activeMD.style.color = "hsl(235, 19%, 35%)"
    compMd.style.color= "hsl(220, 98%, 61%)";
    clear.style.color= "hsl(235, 19%, 35%)";
})
//clear 
clear.addEventListener('click', ()=>{
    completed.style.color ="hsl(235, 19%, 35%)"
    active.style.color = "hsl(235, 19%, 35%)"
    all.style.color = "hsl(235, 19%, 35%)"
    clear.style.color= "hsl(220, 98%, 61%)";
})
}

toggleDay();