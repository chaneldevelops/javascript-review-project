// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'game designer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: `[Name]'s 3D art was mind-blowing! Their attention to detail and artistic talent created visuals that surpassed all expectations. 
    Highly recommend their incredible work for any game designer looking to level up their game!`,
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'art director',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: `Working with [Artist Name] as our 3D artist was an 
    absolute pleasure! Their creativity, technical expertise, 
    and attention to detail were exceptional. 
    They brought our vision to life with stunning 3D art that exceeded 
    our expectations.`,
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'web developer',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: `[Name] is a 3D art genius! The 3D art elements they created were jaw-dropping and added a wow factor to our site. 
    It was a pleasure working with [Name], who was responsive, collaborative, and delivered beyond our expectations. 
    Highly recommend [Name] for anyone seeking mind-blowing 3D art!`,
  },
  {
    id: 4,
    name: 'kender anderson',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: `[Name]'s 3D art was mind-blowing! Their attention to detail and artistic talent created visuals that surpassed all expectations. 
    Highly recommend their incredible work for any game designer looking to level up their game!`,
  },
];


// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')


const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let defaultItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();//Now we can reuse this function
});

// show person based on item

function showPerson() {
  const item = reviews [defaultItem] // so instead of defaultItem it would be the person we're passing in the param.
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// set up 2 event listeners for prev & next buttons (show next perosn)

nextBtn.addEventListener('click', function() {
  defaultItem++;
  if (defaultItem > reviews.length - 1) { /* this prevents it from stopping after array 3
  there are 4 reviews but 3 indexes so - 1 makes sure that it starts over */
    defaultItem = 0;
  } /* this */
  showPerson();
});

// show prev person 
prevBtn.addEventListener('click', function() {
  defaultItem--; //change this because it's previous
 if(defaultItem < 0) { // change this to greater than 0 
  defaultItem = reviews.length - 1
 }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function() {
  defaultItem = Math.floor(Math.random() * reviews.length); 
  console.log(showPerson)
  showPerson();
});