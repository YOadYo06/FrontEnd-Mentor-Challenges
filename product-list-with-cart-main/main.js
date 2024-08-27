
function handleResize() {

    let i;

    let img1 ;
    let img2 ;
    let img3 ;

    for(i=0;i<9;i++){

        img1 = document.getElementsByClassName('mobile')[i];
        img2 = document.getElementsByClassName('tablet')[i];
        img3 = document.getElementsByClassName('desktop')[i];

        if (768<=window.innerWidth) {

            
    
            if(!img1.classList.contains('hidden')){
                img1.classList.add('hidden');
                
    
            }
            if(!img2.classList.contains('hidden')){
                img2.classList.add('hidden');
                
            }
            if(img3.classList.contains('hidden')){
                img3.classList.remove('hidden');
                
            }
    
            
            
            
        } else if(window.innerWidth < 768 && window.innerWidth >= 430) {
            
            
            
            if(!img1.classList.contains('hidden')){
                img1.classList.add('hidden');
                
            }
            if(img2.classList.contains('hidden')){
                img2.classList.remove('hidden');
                
            }
            if(!img3.classList.contains('hidden')){
                img3.classList.add('hidden');
                
            }
    
        }else{
            if(img1.classList.contains('hidden')){
                img1.classList.remove('hidden');
                
            }
            if(!img2.classList.contains('hidden')){
                img2.classList.add('hidden');
                
            }
            if(!img3.classList.contains('hidden')){
                img3.classList.add('hidden');
            }
        }
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

Array.from(document.getElementsByClassName('overlay'))[0].classList.add('hidden');





const addCartItems = Array.from(document.getElementsByClassName('add-to-cart'));
const calcItems = Array.from(document.getElementsByClassName('calc'));

const mobileImages = Array.from(document.getElementsByClassName('mobile'));
const tabletImages = Array.from(document.getElementsByClassName('tablet'));
const desktopImages = Array.from(document.getElementsByClassName('desktop'));

const plus = Array.from(document.getElementsByClassName('plus'));
const minus = Array.from(document.getElementsByClassName('minus'));

const quantity = Array.from(document.getElementsByClassName('quantity'));

const names = ['Waffle with Berries',
                'Vanilla Bean Crème Brûlée',
                'Macaron Mix of Five',
                'Classic Tiramisu',
                'Pistachio Baklava',
                'Lemon Meringue Pie',
                'Red Velvet Cake',
                'Salted Caramel Brownie',
                'Vanilla Panna Cotta'];

const iti = Array.from(document.getElementsByClassName('iti'))[0];

const quan = Array.from(document.getElementsByClassName('quan'));

let tt=0.00;
let pp=0.00;
let itema = [0,0,0,0,0,0,0,0,0] ;

let h2 = [1,2,3,4,5,6,7,8,9] ;
let p_total = [1,2,3,4,5,6,7,8,9] ;
p_total[0] = document.getElementsByClassName('total')[0];

let choices = [0,0,0,0,0,0,0,0,0] ;

let money = [1,2,3,4,5,6,7,8,9] ;

let h3 = [1,2,3,4,5,6,7,8,9] ;
let span1 = [1,2,3,4,5,6,7,8,9] ;
let p1 = [1,2,3,4,5,6,7,8,9] ;
let span2 = [1,2,3,4,5,6,7,8,9] ;
let p2 = [1,2,3,4,5,6,7,8,9];
let span3 = [1,2,3,4,5,6,7,8,9] ;
let p3 = [1,2,3,4,5,6,7,8,9] ;

const qu = Array.from(document.getElementsByClassName('qu'));
const comp = Array.from(document.getElementsByClassName('comp'));

comp.forEach((ii)=>{
    ii.style.order="0";
});

let hhhh = 0;

const card = document.getElementsByClassName('card')[0];
const t_total = [document.getElementsByClassName('total-price')[0],document.getElementsByClassName('total-price')[1]];
let croix = [document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0],
            document.getElementsByClassName('abs')[0]
            ];
let img = [1,2,3,4,5,6,7,8,9] ;

const cont_1 = document.getElementsByClassName('cont-1');

let price= [6.50,7.00,8.00,5.50,4.00,5.00,4.50,5.50,6.50];
const billing = document.getElementsByClassName('billing')[0];
const not_yet = document.getElementsByClassName('not-yet')[0];

const confirm_purch = Array.from(document.getElementsByClassName('confirm'));

if(!tt){
    billing.classList.add('hidden');
}

addCartItems.forEach((item,i)=>{
    item.addEventListener('click', ()=> {

        
        mobileImages[i].style.border = '2px solid var(--Red)';
        tabletImages[i].style.border = '2px solid var(--Red)';
        desktopImages[i].style.border = '2px solid var(--Red)';

        addCartItems[i].classList.add('hidden');
        calcItems[i].classList.remove('hidden');

        comp[i].classList.remove('hidden');

        quantity[i].textContent = 1;
        pp += +quantity[i].textContent * price[i];
        tt += +quantity[i].textContent;

        if(tt){
            billing.classList.remove('hidden');
            not_yet.classList.add('hidden');
        }


        // adding the div of billing
        choices[i] = document.createElement('div');
        choices[i].classList.add('choices');

        money[i] = document.createElement('div');
        money[i].classList.add('money');

        h3[i] = document.createElement('h3');

        span1[i] = document.createElement('span');
        p1[i] = document.createElement('p');
        p1[i].classList.add('x-quantity');
            

            
        span2[i] = document.createElement('span');
        span2[i].style.color = 'grey';
        p2[i] = document.createElement('p');
        p2[i].classList.add('price-money');
            
        money[i].appendChild(span2[i]);

        span3[i] = document.createElement('span');
        span3[i].classList.add('da');
        span3[i].style.color = 'grey';
        p3[i] = document.createElement('p');
        p3[i].classList.add('sum-money');
            


        croix[i] = document.createElement('div');
        croix[i].classList.add('croix');

        img[i] = document.createElement('IMG');
        img[i].src = '/assets/images/icon-remove-item.svg';
            
        
        croix[i].appendChild(img[i]);
        span1[i].appendChild(p1[i]);
        span2[i].appendChild(p2[i]);
        span3[i].appendChild(p3[i]);

        money[i].appendChild(h3[i]);

        money[i].appendChild(span1[i]);
        money[i].appendChild(span2[i]);
        money[i].appendChild(span3[i]);

        choices[i].appendChild(money[i]);
        choices[i].appendChild(croix[i]);
        
        billing[0] = document.getElementsByClassName('billing')[0];
        h2[0] = document.getElementsByClassName('y')[0];

        billing.parentNode.insertBefore(choices[i], billing);
        // finnishing the adding the div

//values and appending
        p1[i].textContent = +quantity[i].textContent;
        quan[i].textContent =quantity[i].textContent;
        p2[i].textContent = price[i].toFixed(2);
        p3[i].textContent = (price[i] * +quantity[i].textContent).toFixed(2);
        qu[i].textContent = (price[i] * +quantity[i].textContent).toFixed(2);



        span1[i].appendChild(p1[i]);
        span1[i].appendChild(document.createTextNode('x'));
        span1[i].style.color='var(--Red)';
        
        span2[i].appendChild(document.createTextNode('@ $'));
        span2[i].appendChild(p2[i]);
        
        span3[i].appendChild(document.createTextNode('$'));
        span3[i].appendChild(p3[i]);
        
        h3[i].textContent = names[i];
        
//values and appending

        comp[i].style.order = hhhh;
        hhhh++;

    croix.forEach((it,i)=>{
        if(it != document.getElementsByClassName('abs')[0]){
            it.addEventListener('click',function (){
                if(croix[i] != document.getElementsByClassName('abs')[0]){
                    choices[i].remove();
                    
                    croix[i]= document.getElementsByClassName('abs')[0] ;

                    tt -= +quantity[i].textContent;
                    pp -= +quantity[i].textContent*price[i];

                    quantity[i].textContent= 0;
                    
                    p_total[0].textContent = tt ;
                    t_total[0].textContent= pp.toFixed(2);
                    t_total[1].textContent= pp.toFixed(2);                   
                    addCartItems[i].classList.remove('hidden');
                    calcItems[i].classList.add('hidden');
                        
                    mobileImages[i].style.border = 'none';
                    tabletImages[i].style.border = 'none';
                    desktopImages[i].style.border = 'none';
                    
                    comp.forEach((h)=>{
                        
                        if(+h.style.order > +comp[i].style.order ){
                            h.style.order= +h.style.order - 1;
                        }
                        
                    });
                    comp[i].style.order = 0;
                    hhhh--;
                    comp[i].classList.add('hidden');
                }
                if(!tt){
                    billing.classList.add('hidden');
                    not_yet.classList.remove('hidden');
                    Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
                }
                if(699<window.innerWidth){
                    if(Array.from(document.getElementsByClassName('last'))[0].offsetHeight >= window.innerHeight){
                        Array.from(document.getElementsByClassName('last'))[0].style.top = -(Array.from(document.getElementsByClassName('last'))[0].offsetHeight - window.innerHeight + 40) +'px';
                        
                    }else{
                        Array.from(document.getElementsByClassName('last'))[0].style.top = 20 + 'px';
                    }
                }
            });
        }
    });

        

    p_total[0].textContent = tt;
    t_total[0].textContent= pp.toFixed(2);
    t_total[1].textContent= pp.toFixed(2);
    if(699<window.innerWidth){
        if(Array.from(document.getElementsByClassName('last'))[0].offsetHeight >= window.innerHeight){
            Array.from(document.getElementsByClassName('last'))[0].style.top = -(Array.from(document.getElementsByClassName('last'))[0].offsetHeight - window.innerHeight + 40) +'px';
        }else{
            Array.from(document.getElementsByClassName('last'))[0].style.top = 20 + 'px';
        }
    }
    });
    
});








plus.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        
        

        if(!+quantity[i].textContent){
            
            comp[i].classList.remove('hidden'); 

            // adding the div

            choices[i] = document.createElement('div');
            choices[i].classList.add('choices');

            money[i] = document.createElement('div');
            money[i].classList.add('money');

            h3[i] = document.createElement('h3');

            span1[i] = document.createElement('span');
            p1[i] = document.createElement('p');
            p1[i].classList.add('x-quantity');
            
            span2[i] = document.createElement('span');
            p2[i] = document.createElement('p');
            p2[i].classList.add('price-money');
                
            money[i].appendChild(span2[i]);

            span3[i] = document.createElement('span');
            p3[i] = document.createElement('p');
            p3[i].classList.add('sum-money');
                


            croix[i] = document.createElement('div');
            croix[i].classList.add('croix');

            img[i] = document.createElement('IMG');
            img[i].src = '/assets/images/icon-remove-item.svg';
                
            croix[i].appendChild(img[i]);

            span3[i].appendChild(p3[i]);
            span2[i].appendChild(p2[i]);
            span1[i].appendChild(p1[i]);


            money[i].appendChild(h3[i]);
            money[i].appendChild(span1[i]);
            money[i].appendChild(span2[i]);
            money[i].appendChild(span3[i]);
            

            choices[i].appendChild(money[i]);
            choices[i].appendChild(croix[i]);

            billing.parentNode.insertBefore(choices[i], billing);

            // finnishing the adding the div
            h3[i].textContent = names[i];
            
    
    
    
            span1[i].appendChild(p1[i]);
            span1[i].appendChild(document.createTextNode('x'));
            span1[i].style.color='var(--Red)';
            
            span2[i].appendChild(document.createTextNode('@ $'));
            span2[i].appendChild(p2[i]);
            
            span3[i].appendChild(document.createTextNode('$'));
            span3[i].appendChild(p3[i]);
            
        }

        comp[i].style.order = hhhh;
        hhhh++;
        
        if(!tt){
            billing.classList.remove('hidden');
            not_yet.classList.add('hidden');
            Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
        }

        pp -=  +quantity[i].textContent*price[i] - (++quantity[i].textContent)*price[i];
        tt -=  +quantity[i].textContent - ++quantity[i].textContent;
        +quantity[i].textContent--;
        p1[i].textContent = +quantity[i].textContent;
        quan[i].textContent = +quantity[i].textContent;
        p2[i].textContent = price[i];
        p3[i].textContent = price[i] * +quantity[i].textContent;
        qu[i].textContent = price[i] * +quantity[i].textContent;
        

        p_total[0].textContent = tt;
        t_total[0].textContent= pp.toFixed(2);
        t_total[1].textContent= pp.toFixed(2);
        
        if(699<window.innerWidth){
            if(Array.from(document.getElementsByClassName('last'))[0].offsetHeight >= window.innerHeight){
                Array.from(document.getElementsByClassName('last'))[0].style.top = -(Array.from(document.getElementsByClassName('last'))[0].offsetHeight - window.innerHeight + 40) +'px';
            }else{
                Array.from(document.getElementsByClassName('last'))[0].style.top = 20 + 'px';
            }
        }
    });
});



minus.forEach((item,i)=>{
    item.addEventListener('click',()=>{
        if(quantity[i].textContent>0){
            tt -= +quantity[i].textContent - --quantity[i].textContent  ;
            pp -= +quantity[i].textContent*price[i] - (--quantity[i].textContent)*price[i]  ;
            +quantity[i].textContent++;

            p_total[0].textContent = tt;
            t_total[0].textContent= pp.toFixed(2);
            t_total[1].textContent= pp.toFixed(2);

            p1[i].textContent = +quantity[i].textContent;
            quan[i].textContent = +quantity[i].textContent;
            p2[i].textContent = price[i];
            p3[i].textContent = price[i] * +quantity[i].textContent;
            qu[i].textContent = price[i] * +quantity[i].textContent;
            
        }

        if(! +quantity[i].textContent){


            croix[i].removeEventListener('click', 
                ()=>{
                
                    choices[i].remove();
                    
                    it= document.getElementsByClassName('abs')[0] ;

                    tt -= +quantity[i].textContent;
                    pp -= +quantity[i].textContent*price[i];

                    quantity[i].textContent= 0;
                    
                    p_total[0].textContent = tt ;
                    t_total[0].textContent= pp.toFixed(2);
                    t_total[1].textContent= pp.toFixed(2);                   
                    addCartItems[i].classList.remove('hidden');
                    calcItems[i].classList.add('hidden');
                        
                    mobileImages[i].style.border = 'none';
                    tabletImages[i].style.border = 'none';
                    desktopImages[i].style.border = 'none';

                    
                    comp.forEach((h)=>{
                        
                        
                        if(+h.style.order > +it.style.order ){
                            h.style.order= +h.style.order - 1;
                        }
                        
                    });
                    it.style.order = 0;
                    hhhh--;
                    it.classList.add('hidden');
                
                    if(!tt){
                        billing.classList.add('hidden');
                        not_yet.classList.remove('hidden');
                        Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
                    }
            });




            choices[i].remove();
            croix[i]=document.getElementsByClassName('abs')[0];

            comp.forEach((h)=>{
                    
                    
                if(+h.style.order > +comp[i].style.order ){
                    h.style.order= +h.style.order - 1;
                }
                
            });
            comp[i].style.order = 0;
            hhhh--;
            comp[i].classList.add('hidden');

            

        }
        if(699<window.innerWidth){
            if(Array.from(document.getElementsByClassName('last'))[0].offsetHeight >= window.innerHeight){
                Array.from(document.getElementsByClassName('last'))[0].style.top = -(Array.from(document.getElementsByClassName('last'))[0].offsetHeight - window.innerHeight + 40) +'px';
                
            }else{
                Array.from(document.getElementsByClassName('last'))[0].style.top = 20 + 'px';
            }
        }
        if(!tt){
            billing.classList.add('hidden');
            not_yet.classList.remove('hidden');
            Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
        }
        
    });
    
});

//addCartItems[0].addEventListener('click',Cart());


calcItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        document.addEventListener('click',(event)=> {
            if ( 
                (
                    !calcItems[index].contains(event.target) 
                    && !mobileImages[index].contains(event.target) 
                    && !tabletImages[index].contains(event.target) 
                    && !desktopImages[index].contains(event.target)
                )
                && quantity[index].textContent == 0
            ){
                
                addCartItems[index].classList.remove('hidden');
                calcItems[index].classList.add('hidden');
                
                mobileImages[index].style.border = 'none';
                tabletImages[index].style.border = 'none';
                desktopImages[index].style.border = 'none';

            }
            if(!tt){
                billing.classList.add('hidden');
                not_yet.classList.remove('hidden');
                Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
            }
        });
    });
});


confirm_purch[0].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('purchase-done'))[0].classList.remove('hidden');
    
    if (699>=window.innerWidth) {
        if(window.innerHeight > Array.from(document.getElementsByClassName('purchase-done'))[0].offsetHeight){
            Array.from(document.getElementsByClassName('purchase-done'))[0].scrollIntoView({ block: "end" });
            Array.from(document.getElementsByClassName('purchase-done'))[0].style.top= window.innerHeight - Array.from(document.getElementsByClassName('purchase-done'))[0].offsetHeight +'px';
        }else{
            Array.from(document.getElementsByClassName('purchase-done'))[0].style.top= 70 +'px';
            Array.from(document.getElementsByClassName('purchase-done'))[0].scrollIntoView({ block: "end" });
            
        }

    }
    Array.from(document.getElementsByClassName('overlay'))[0].classList.remove('hidden');
    Array.from(document.getElementsByClassName('overlay'))[0].style.overflowX = 'hidden';
});

confirm_purch[1].addEventListener('click',()=>{
    Array.from(document.getElementsByClassName('purchase-done'))[0].classList.add('hidden');
    Array.from(document.getElementsByClassName('overlay'))[0].classList.add('hidden');
    choices.forEach((l)=>{
        if(l){
            l.remove();
        }
    });
    
    /*croix[i]=document.getElementsByClassName('abs')[0];*/
    croix.forEach((l)=>{
        l = document.getElementsByClassName('abs')[0];
    });
    comp.forEach((h)=>{
        h.style.order= 0;
        h.classList.add('hidden');
    });
    tt=0;
    pp=0;
    hhhh=0;
    p_total[0].textContent = tt;
    t_total[0].textContent= pp.toFixed(2);
    t_total[1].textContent= pp.toFixed(2);
    quantity.forEach((l)=>{
        l.textContent = 0;
    });
    billing.classList.add('hidden');
    not_yet.classList.remove('hidden');

    addCartItems.forEach((l)=>{
        l.classList.remove('hidden');
    });
    calcItems.forEach((l)=>{
        l.classList.add('hidden');
    });

    mobileImages.forEach((l)=>{
        l.style.border = 'none';
    });
    tabletImages.forEach((l)=>{
        l.style.border = 'none';
    });
    desktopImages.forEach((l)=>{
        l.style.border = 'none';
    });
    
});


window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll',()=>{
        
        if (699>=window.innerWidth) {
            if(!Array.from(document.getElementsByClassName('purchase-done'))[0].classList.contains('hidden')){
                if(window.scrollY >= Array.from(document.getElementsByClassName('purchase-done'))[0].offsetHeight + 70 - window.innerHeight){
                    window.scrollTo(0, Array.from(document.getElementsByClassName('purchase-done'))[0].offsetHeight + 70 - window.innerHeight );
                }
            }

        }else{
            Array.from(document.getElementsByClassName('overlay'))[0].style.height = window.innerHeight + window.scrollY + 'px';
            if(Array.from(document.getElementsByClassName('last'))[0].offsetHeight >= window.innerHeight){
                Array.from(document.getElementsByClassName('last'))[0].style.top = -(Array.from(document.getElementsByClassName('last'))[0].offsetHeight - window.innerHeight + 40 ) +'px';
            }else{
                Array.from(document.getElementsByClassName('last'))[0].style.top = 20 + 'px';
            }
        }
    });
});
