let array = [];
let code;
// let choice;
let save;
let am;
let copyPasta;
let retrieve = JSON.parse(localStorage.getItem('Lists'))
    if(retrieve){
         array = retrieve
    }
   
   
function handleRecharge() {

    // CODE OF DATE 
    const handleDate = new Date();
    const date = handleDate.toDateString("en-us", { month: "long", day: "long", year: "numeric" })
    // END OF DATE 
    // CODE FOR TIME 
    let hours = handleDate.getHours();
    let minutes = handleDate.getMinutes();
    let hourminutes = `${hours}:${minutes}`;
    // END OF CODE FOR TIME 
    // CODE FOR AM / PM 
    if (hours <= 11) {
        Meridan = 'AM'
    } else if (hours <= 24) {
        Meridan = 'PM'
    }
    // END OF CODE FOR AM / PM 
    if (network.value == '--Select Network--') {
        // console.log('pls select anetwork');
        demo.innerHTML = 'Pls Select Network !!!'
        popup.style.display = 'block'
    }
    else if (amount.value == '--Select Amount--') {
        // console.log('Pls Select Amount');
        popup2.style.display = 'block'
    } else {
        let ran = Math.floor(1 + Math.random() * 9999999999999999)
        inputran.value = `${code}${ran}#`
        choice = {
            NetworkSelected: network.value,
            AmountSelected: amount.value,
            Dated: date,
            pin: inputran.value,
            Time: hourminutes,
            Post: Meridan,
            status: false
        }
        array.push(choice)
        localStorage.setItem('Lists', JSON.stringify(array))
       
    }
    display()
}
    display()
function ok() {
    popup.style.display = 'none'
    popup2.style.display = 'none'
}
function display() {
    show.innerHTML = ''
    array.forEach((el, index)=>{
        show.innerHTML += `
        <tr>
            <td>(${index + 1}.)</td>
            <td>${el.NetworkSelected}</td>
            <td>${el.Dated}</td>
            <td>${el.AmountSelected}</td>
            <td>${el.Time} ${el.Post}</td>
            <td>${el.pin}</td>
            <td>${el.status ? 'use' : 'unuse'}</td>
            <td><button id="delete" onclick="Remove(${index})">Delete</button></td>
        </tr>
            `
    })
}



function Network() {
    // console.log(choice.NetworkSelected);
    // console.log(network.value);
    if (network.value == 'GLO') {
        console.log('*123*');
        code = '*123*'
    } else if (network.value == 'MTN') {
        console.log('*555*');
        code = '*555*'
    } else if (network.value == 'AIRTEL') {
        console.log('*321*');
        code = '*321*'
    } else if (network.value == '9 Mobile') {
        console.log('*222*');
        code = '*222*'
    }
}
function Remove(message) {
    array.splice(message, 1)
    display()
    localStorage.setItem('Lists', JSON.stringify(array))
}
function copypin() {
    if(inputran.value == ''){
        demo.innerHTML = 'Empty Pin !!!'
        popup.style.display = 'block'
    } else{
        copyPasta = inputran.value;
        inputran.value = ''
    }
}
function pastapin() {
     rechargenow.value = copyPasta 
} 
function handleRechargeCard() {
    retrieve.forEach((el, i)=>{
        if(rechargenow.value == el.pin && el.status == false){
            
            el.status = true 
            demo.innerHTML = 'Recharge Successful'
            popup.style.display = 'block'
            console.log(el.status);
        } else if(rechargenow.value != el.pin){
            demo.innerHTML = 'Invaild Pin'
            popup.style.display = 'block'
        }else{
            demo.innerHTML = 'Already been used by you'
            popup.style.display = 'block'
        }
        localStorage.setItem('Lists', JSON.stringify(array))

    })
    display()
}