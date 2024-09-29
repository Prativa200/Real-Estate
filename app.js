// // let people = document.getElementById('people');
// // let people_less = document.getElementById('people_less');
// // let people_more = document.getElementById('people_more');


// // let people_index =4;
// // people_less.addEventListener('click', () => {
// //   people_index -= 1;
// //   // people.innerHTML = people_index;
// //   if (people_index <= 0) {
// //     people_index = 1;
// //     people.value = people_index + ' People';

// //   }
// //   else{
// //     people.value = people_index + ' People';

// //   }
// // });

// // people_more.addEventListener('click', () => {
// //   people_index += 1;
//   // people.innerHTML = people_index;
// //   if (people_index >=4) {
// //     people_index = 4;
// //     people.value = people_index + ' People';

// //   }
// //   else{
// //     people.value = people_index + ' People';

// //   }
// // });
// // people more mathiko





//  let checkin_data = document.getElementById('checkin_data');

//  let checkin = document.getElementById('checkin');


 

//  checkin.addEventListener('change', ()=> {
//   let checkin_value = checkin.value;


//   console.log(checkin_value);

//   let dates = new Date(checkin_value);
//   let dates2 = new Date();

//   const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];
//   let day = week[dates.getDay()];
//   // console.log(day)
  
//   let date = dates.getDate();

// // console.log(date);

// let monts =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];
// let month = months[dates.getMonth()];
// //  console.log(months);

// if (dates < dates2) {

//   console.log('no Date');
  
// } else {
//   checkin_data.innerText = day  + ','  + date + ' ' + month;
// }

// })




// let checkout_data = document.getElementById('checkout_data');
// let checkout = document.getElementById('checkout');

// checkout.addEventListener('change', ()=> {
//   let checkout_value = checkout.value;
//   let checkin_value = checkin.value;
//   // console.log(checkin_value);

//   let dates = new Date(checkout_value);
//   let dates2 = new Date(checkin_value);

//   const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];
//   let day = week[dates.getDay()];
//   // console.log(day)
  
//   let date = dates.getDate();
//   // console.log(date);

//   var months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];
//   let month = months[dates.getMonth()];
//   //  console.log(months);

//   if (dates < dates2) {

//   console.log('no Date');
  
//   } else {
//   console.log()
//   checkin_data.innerText = day  + ','  + date + ' ' + month;
//   }

// })

//     let checkin_more = document.getElementById('checkin_more')
//     let checkin_less = document.getElementById('checkin_less')

//    checkin_more.addEventListener('click', () =>{
//     const week= [ 'Sun', 'Mon', 'Thu'  , 'Wed' , 'Thu' , 'Fri' , 'Sat' ];

//     const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,  'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];
//     // let checkin_date = new Date(checkin.value);
//     // checkin_date.setDate(checkin_date.getDate() + 1);
//     let today = new Date();
//     let tomorrow =  new Date(today);
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     let day = week[tomorrow.getDay()];
//     let date = tomorrow.getDate();
//     let month = months[tomorrow.getMonth()];

//     let day = week[checkin_date.getDay()];
//     let date = checkin_date.getDate();
//     let month = months[checkin_date.getMonth()];
//     checkin.value = checkin_date.toISOString().split('T')[0];
//     checkin.value = day + ',' + date + ' ' + month;


//   });



// checkin_more.addEventListener('click', () => {
//   const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//   let checkin_date = new Date(checkin.value);
//   checkin_date.setDate(checkin_date.getDate() + 1);

//   let day = week[checkin_date.getDay()];
//   let date = checkin_date.getDate();
//   let month = months[checkin_date.getMonth()];

//   checkin.value = checkin_date.toISOString().split('T')[0];
//   checkin_data.innerText = day + ', ' + date + ' ' + month;
// });

//   checkin_less.addEventListener('click', () => {
//     const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
//     let checkin_date = new Date(checkin.value);
//     checkin_date.setDate(checkin_date.getDate() - 1);
  
//     let day = week[checkin_date.getDay()];
//     let date = checkin_date.getDate();
//     let month = months[checkin_date.getMonth()];
  
//     checkin.value = checkin_date.toISOString().split('T')[0];
//     checkin_data.innerText = day + ', ' + date + ' ' + month;
//   });




//   const images =[ 
//     "url('image/bg.avif') no-repeat center/cover",

//      "url('image/bg1.avif') no-repeat center/cover",
 
//      "url('image/bg3.avif') no-repeat center/cover"
//   ]

//   let index = 1;

//   let h6 = document.getElementById('h6')

//   h6.innerText = "+" + images.length;

//   let btn_left = document.getElementById('btn_left');

//   let btn_right = document.getElementById('btn_right');
// // style 
//   let content = document.getElementByClassName('content')[0].style;

//   btn_left.addEventListener('click', ()=>{
//     index -= 1;
//     if (index < 0 ) {
//       index = images.length - 1;
      
//     }
//     content.setProperty('--background', images[index])
//   });

//   btn_right.addEventListener('click', () => {
//     index += 1;
//     if (index >= images.length) {
//       index = 0;
//     }
//     content.style.setProperty('background', images[index]);
//   });

// People section
let people = document.getElementById('people');
let people_less = document.getElementById('people_less');
let people_more = document.getElementById('people_more');

let people_index = 4;

people_less.addEventListener('click', () => {
  people_index -= 1;
  if (people_index <= 1) {
    people_index = 1;
  }
  people.value = people_index + ' People';
});

people_more.addEventListener('click', () => {
  people_index += 1;
  if (people_index >= 4) {
    people_index = 4;
  }
  people.value = people_index + ' People';
});

// Check-in section
let checkin_data = document.getElementById('checkin_data');
let checkin = document.getElementById('checkin');

checkin.addEventListener('change', () => {
  let checkin_value = checkin.value;
  let dates = new Date(checkin_value);
  let dates2 = new Date();

  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = week[dates.getDay()];
  let date = dates.getDate();
  let month = months[dates.getMonth()];

  if (dates >= dates2) {
    checkin_data.innerText = `${day}, ${date} ${month}`;
  } else {
    console.log('Invalid check-in date.');
  }
});

// Check-out section
let checkout_data = document.getElementById('checkout_data');
let checkout = document.getElementById('checkout');

checkout.addEventListener('change', () => {
  let checkout_value = checkout.value;
  let checkin_value = checkin.value;

  let dates = new Date(checkout_value);
  let dates2 = new Date(checkin_value);

  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = week[dates.getDay()];
  let date = dates.getDate();
  let month = months[dates.getMonth()];

  if (dates >= dates2) {
    checkout_data.innerText = `${day}, ${date} ${month}`;
  } else {
    console.log('Invalid check-out date.');
  }
});

// Event listeners for Check-in "More" and "Less" buttons
let checkin_more = document.getElementById('checkin_more');
let checkin_less = document.getElementById('checkin_less');

checkin_more.addEventListener('click', () => {
  let checkin_date = new Date(checkin.value);
  checkin_date.setDate(checkin_date.getDate() + 1);

  updateCheckinDate(checkin_date);
});

checkin_less.addEventListener('click', () => {
  let checkin_date = new Date(checkin.value);
  checkin_date.setDate(checkin_date.getDate() - 1);

  updateCheckinDate(checkin_date);
});

function updateCheckinDate(date) {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = week[date.getDay()];
  let dayNum = date.getDate();
  let month = months[date.getMonth()];

  checkin.value = date.toISOString().split('T')[0];
  checkin_data.innerText = `${day}, ${dayNum} ${month}`;
}

// Event listeners for Check-out "More" and "Less" buttons
let checkout_more = document.getElementById('checkout_more');
let checkout_less = document.getElementById('checkout_less');

checkout_more.addEventListener('click', () => {
  let checkout_date = new Date(checkout.value);
  checkout_date.setDate(checkout_date.getDate() + 1);

  updateCheckoutDate(checkout_date);
});

checkout_less.addEventListener('click', () => {
  let checkout_date = new Date(checkout.value);
  checkout_date.setDate(checkout_date.getDate() - 1);

  updateCheckoutDate(checkout_date);
});

function updateCheckoutDate(date) {
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let day = week[date.getDay()];
  let dayNum = date.getDate();
  let month = months[date.getMonth()];

  checkout.value = date.toISOString().split('T')[0];
  checkout_data.innerText = `${day}, ${dayNum} ${month}`;
}


const images = [
  "url(img/bg.avif) no-repeat center/cover",
  "url(img/bg1.avif) no-repeat center/cover",
  "url(img/bg3.avif) no-repeat center/cover"
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
