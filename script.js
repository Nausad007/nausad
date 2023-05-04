
const home_ = document.querySelector('#home_');
const _home = document.querySelector('#home');

const about_ = document.querySelector('#about_');
const _about = document.querySelector('#about');


const skills_ = document.querySelector('#skills_');
const _skills = document.querySelector('#skills');


const contact_ = document.querySelector('#contact_');
const contact_form = document.querySelector('#contact_form');

  
  about_.addEventListener('click', () => {
    console.log('yo')
    _about.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.sidebar').classList.toggle('nav');

    document.querySelector('.sidebar').classList.toggle('popup');
  });

    
  skills_.addEventListener('click', () => {
    console.log('yo')
    _skills.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.sidebar').classList.toggle('nav');

    document.querySelector('.sidebar').classList.toggle('popup');
  });

    
  contact_.addEventListener('click', () => {
    console.log('yo')
    contact_form.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.sidebar').classList.toggle('nav');

    document.querySelector('.sidebar').classList.toggle('popup');
  });

  home_.addEventListener('click', () => {
    console.log('yo')
    _home.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.sidebar').classList.toggle('nav');

    document.querySelector('.sidebar').classList.toggle('popup');
    
  });

  var typed = new Typed('.multiText',{
    strings: ['Nausad'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
  })


document.querySelector('.ham').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('popup');
    document.querySelector('.sidebar').classList.toggle('nav');
})

function sendEmail(){
      Email.send({
        secureToken: "011330bb-8dd0-4159-9462-ff70ce248a37",
        To : 'n.a.u.s.a.d.a.l.a.m.1.4.3.s.m@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        body : "Name: " + document.getElementById('name').value
              + "<br> Email: " + document.getElementById('email').value
              + "<br> feedback: " + document.getElementById('feedback').value

    }).then(
      message => alert("Message sent succesfully")
    );
} 