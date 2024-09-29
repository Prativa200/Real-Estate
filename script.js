let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');


let people_index =4;
people_less.addEventListener('click', () => {
  people_index -= 1;
  // people.innerHTML = people_index;
  if (people_index <= 0) {
    people_index = 1;
    people.value = people_index + ' People';

  }
  else{
    people.value = people_index + ' People';

  }
});


people_more.addEventListener('click', () => {
  people_index += 1;
  // people.innerHTML = people_index;
  if (people_index >=4) {
    people_index = 4;
    people.value = people_index + ' People';

  }
  else{
    people.value = people_index + ' People';

  }
});

// check in sat button wala


let checkin_data = document.getElementById('checkin_data');

let checkin = document.getElementById('checkin');


checkin.addEventListener('change', ()=> 
{
  let checkin_value = checkin.value;
  // console.log(checkin_value);

  
  let dates = new Date(checkin_value);
  let dates2 = new Date();

  
  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ]
  let day = week[dates.getDay()];
  // console.log(day)

  let date = dates.getDate();

  // console.log(date);

  let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ]
 let month = months[dates.getMonth()];
//  console.log(month);

if (dates < dates2) {

  console.log('no Date');
  
}
 else {
  checkin_data.innerText = day  + ','  + date + ' ' + month;
  // console.log( day  + ','  + date + ' ' + month);
  
}

})


let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');


checkout.addEventListener('change', ()=> {
  let checkout_value = checkout.value;
  let checkin_value = checkin.value;
  // console.log(checkin_value);

  let dates = new Date(checkout_value);
  let dates2 = new Date(checkin_value);

  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];
  
  let day = week[dates.getDay()];
  // console.log(day)

  let date = dates.getDate();
 

  // console.log(date);

  var  months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];
  
  let month = months[dates.getMonth()];
  //  console.log(months);

  if (dates < dates2) {

    console.log('No Date');
    
    }

     else {
     console.log(day  + ','  + date + ' ' + month)
      checkout_data.innerText = day  + ','  + date + ' ' + month;
    }
  

})


let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');


checkin_more.addEventListener('click', () =>{

  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];

    var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];

    let today = new Date();
    let tomorrow =  new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkin_data.innerText = day  + ','  + date + ' ' + month;
})

  checkin_less.addEventListener('click', () =>{

  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];

    var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];

    let today = new Date();
    // let tomorrow =  new Date(today);

    // tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    checkin_data.innerText = day  + ','  + date + ' ' + month;
})


// Event listeners for Check-out "More" and "Less" buttons
let checkout_more = document.getElementById('checkout_more');
let checkout_less = document.getElementById('checkout_less');


checkout_more.addEventListener('click', () =>{

  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];

    var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];

    let today = new Date();
    let tomorrow =  new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 2);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day  + ','  + date + ' ' + month;
})

  checkout_less.addEventListener('click', () =>{

  const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];

    var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];

    let today = new Date();
    let tomorrow =  new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    let day = week[tomorrow.getDay()];
    let date = tomorrow.getDate();
    let month = months[tomorrow.getMonth()];

    checkout_data.innerText = day  + ','  + date + ' ' + month;
})


// const images = [
//   "url(img/bg.avif) no-repeat center/cover",
//   "url(img/bg6.jpg) no-repeat center/cover",
//   "url(img/bg9.jpg) no-repeat center/cover"

// ]
// let index = 0;

// let h6 = document.getElementById('h6');

// h6.innerText = "+" +  images.length;


// let btn_left =  document.getElementById('btn_left');
// let btn_right = document.getElementById('btn_right');

// let style = document.getElementById('content')[0].style;
// style.backgroundImage = images[index];

// let rootStyle = document.documentElement.style;

// btn_left.addEventListener('click',() =>{    
//   index -= 1;
//     if(index < 0){
//     index = ( images.length) -1 ;
//           }
//           style.setProperty('--background', images[index]);
// });

const images = [
  "url(img/jbg.jpg) no-repeat center/cover",
  "url(https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) no-repeat center/cover",
 
  "url(https://media.istockphoto.com/id/174927002/photo/beautiful-villa-house-overlooking-pool-with-manicured-lawn.jpg?s=2048x2048&w=is&k=20&c=VyyQbo8ISvQeOpHvkF-eJv-ckOl1HSzyVlbY0On7T08=) no-repeat center/cover",
  // "url(https://media.istockphoto.com/id/841250502/photo/swimming-pool-at-at-luxury-tropical-holiday-villa.jpg?s=612x612&w=0&k=20&c=c0CkpQ5qug2OQC9OV1OMbd9nNyWh9NkFhs0jL5U3jKQ=) no-repeat center/cover" 
];

let index = 0;

let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');

// Reference to the root style where the --background variable is defined
let rootStyle = document.documentElement.style;

btn_left.addEventListener('click', () => {
  index -= 1;
  if (index < 0) {
    index = images.length - 1;
  }
  rootStyle.setProperty('--background', images[index]);
});

btn_right.addEventListener('click', () => {
  index += 1;
  if (index >= images.length) {
    index = 0;
  }
  rootStyle.setProperty('--background', images[index]);
});
