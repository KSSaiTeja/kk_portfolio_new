import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});

export default function Home() {
  return (
    <>
    <section id="header">
        <div class="navbar-title">
            <h3 class="title-first-name">
                Tanmoy
            </h3>
            <h3 class="title-last-name">
                Saha
            </h3>
        </div>
        <div>
            <ul class="navbar-menu">
                <li><a class="active" href="#">&lt; Service &gt;</a></li>
                <li><a class="" href="#">Works</a></li>
                <li><a class="" href="#">Notes</a></li>
                <li><a class="" href="#">Contacts</a></li>
            </ul>
        </div>
        <div>
            <ul class="social-media">
                <li>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <a href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <i class="fa-brands fa-github"></i>
                    <a href="https://github.com/TanmoyTSSaha" target="_blank">Github</a>
                </li>
                <li>
                    <i class="fa-regular fa-envelope"></i>
                    <a href="mailto:tanmoytssaha@gmail.com">Email</a>
                </li>
            </ul>
        </div>
    </section>
    <section id="content-body">
        <div class="body-part-1">
            <div class="developer-intro">
                <p>Full-Stack Developer</p>
                <p>Designer</p>
            </div>
            <div class="body-title">
                 <h1>Talk is cheap<br/>Show me the code</h1> 
                <h1>Full Stack Wizard: Coding<br/>and Designing Magic</h1>
                <p>I design and code beautifully simple things,<br/>and I love what I do.</p>
                <a href="#">LET'S CHAT!</a>
            </div>
            <div class="body-tail">
                <h1>2</h1>
                <p>YEARS<br/>EXPERIENCE</p>
                <h1>20</h1>
                <p>PROJECTS<br/>COMPLETED</p>
            </div>
        </div>
        <div class="body-part-2">
            <div class="hoodie-guy-animation-class">
                <div class="hoodie-guy"></div>
                <div class="circle">
                    <span style="--i:1;"><img src="assets/SVGIcons/flutter.svg" height="75px"/></span>
                    <span style="--i:2;"><img src="assets/SVGIcons/python.svg" height="75px"/></span>
                    <span style="--i:3;"><img src="assets/SVGIcons/adobe-photoshop.svg" height="75px"/></span>
                    <span style="--i:4;"><img src="assets/SVGIcons/django.svg" height="75px"/></span>
                    <span style="--i:5;"><img src="assets/SVGIcons/adobe-premiere-pro.svg" height="75px"/></span>
                    <span style="--i:6;"><img src="assets/SVGIcons/html-5.svg" height="70px"/></span>
                    <span style="--i:7;"><img src="assets/SVGIcons/figma.svg" height="75px"/></span>
                    <span style="--i:8;"><img src="assets/SVGIcons/css3.svg" height="70px"/></span>
                    <span style="--i:9;"><img src="assets/SVGIcons/javascript.svg" height="75px"/></span>
                    <span style="--i:10;"><img src="assets/SVGIcons/adobe-illustrator.svg" height="75px"/></span>
                    <span style="--i:11;"><img src="assets/SVGIcons/dart.svg" height="75px"/></span>
                    <span style="--i:12;"><img src="assets/SVGIcons/PostgreSQL-Dark.svg" height="75px"/></span>
                    <span style="--i:13;"><img src="assets/SVGIcons/MySQL-Dark.svg" height="75px"/></span>
                    <span style="--i:14;"><img src="assets/SVGIcons/Firebase-Dark.svg" height="75px"/></span>
                    <span style="--i:15;"><img src="assets/SVGIcons/Github-Dark.svg" height="75px"/></span>
                </div>
            </div>
            <div class="background-circle"></div>
        </div>
    </section>
    <section id="introduction">
        <div class="cards">
            <div class="design-card active">
                <div>
                    <h3>UI/UX Design</h3>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <p>Create design products with unique ideas that matters</p>
                <a href="">20 PROJECTS</a>
            </div>
            <div class="design-card">
                <div>
                    <h3>Frontend Development</h3>
                    <i class="fa-solid fa-code"></i>
                </div>
                <p>Making the Web Look Good</p>
                <a href="">20 PROJECTS</a>
            </div>
            <div class="design-card">
                <div>
                    <h3>Backend Development</h3>
                    <i class="fa-solid fa-terminal"></i>
                </div>
                <p>Building the Web’s Backbone</p>
                <a href="">20 PROJECTS</a>
            </div>
        </div>
        <div class="introduction-text">
            <p>Introduction</p>
            <h2>Hello! I'm Tanmoy Saha</h2>
            <h4>Crafting User Experiences that Delight and Inspire</h4>
            <p>I am a UI/UX designer who loves to create engaging and delightful user experiences for web and mobile
                applications. I use my skills in user research, design thinking, and prototyping to craft interfaces
                that are not only aesthetically pleasing, but also easy to use and navigate. Making it a very smooth and
                delightful experience for the clients</p>
        </div>
        <div class="introduction-text" style="display: none;">
            <p>Introduction</p>
            <h2>Hello! I'm Tanmoy Saha</h2>
            <h4> The Web’s & Mobile’s Magician</h4>
            <p>As a frontend developer, I create stunning and responsive web pages that capture the attention and
                imagination of the users. I use my skills in HTML, CSS, JavaScript, and various frameworks and libraries
                to design and implement user interfaces that are both visually appealing and user-friendly.</p>
        </div>
        <div class="introduction-text" style="display: none;">
            <p>Introduction</p>
            <h2>Hello! I'm Tanmoy Saha</h2>
            <h4>Coding with Efficiency</h4>
            <p>As a backend developer, I create robust and scalable web applications that handle the logic and data
                behind the scenes. I use my skills in Python, Django, SQL, and various APIs and tools to develop and
                deploy backend systems that are secure, reliable, and efficient.</p>
        </div>
    </section>
    <section id="latest-works">
        <div class="left-project">
            <div class="latest-work-title">
                <h3>Latest Works</h3>
                <p>Perfect solutions for digital experience</p>
            </div>

            <div class="project-card project-card-1">
                <div class="title">
                    <h3>Finaco</h3>
                    <div class="tech-stack">
                        <p>GastbyJS</p>
                        <p>ReactJS</p>
                        <p>HTML</p>
                    </div>
                </div>
                <img src="assets/Projects/project-1.png" alt="" class="project-img-2"/>
            </div>

            <div class="all-projects">
                <a href="">
                    <h3>ALL PROJECTS</h3>
                </a>
                <p>* Some projects are not allowed to publish by NDA</>if you want to see more. <a href="">CONTACT</a>
                </p>
            </div>
        </div>
        <div class="right-project">
            <div class="project-card project-card-2">
                <div class="title">
                    <h3>Lewis</h3>
                    <div class="tech-stack">
                        <p>Flutter</p>
                        <p>Django</p>
                    </div>
                </div>
                <img src="assets/Projects/project-2.png" alt="" class="project-img-1"/>
            </div>
            <div class="project-card project-card-3">
                <div class="title">
                    <h3>Focus</h3>
                    <div class="tech-stack">
                        <p>ReactJS</p>
                        <p>HTML</p>
                    </div>
                </div>
                <img src="assets/Projects/project-3.png" alt="" class="project-img-3"/>
            </div>
        </div>
    </section>
    <><section id="testimonial">
        <div class="testimonial-title">
          <h2>Testimonials</h2>
          <p>What's client say about me</p>
        </div>
        <div class="testimonial-card">
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>5.0 Rating</p>
          </div>
          <h4>Tanmoy was a real pleasure to work with and we look forward to working with him again. He's definitely
            the kind designer you can trust with a project from start to finish</h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="testimonial-card" style="display: none;">
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>4.5 Rating</p>
          </div>
          <h4>Working with Tanmoy was a pleasure. Their expertise in both design
            and development allowed them to create a website that exceeded our expectations. We couldn't be happier
            with the end result.</h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="testimonial-card" style="display: none;">
          <div class="star-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>4.0 Rating</p>
          </div>
          <h4>I highly recommend Tanmoy for any design or development project.
            They have the skills, experience, and passion to create stunning, functional solutions that will take
            your business to the next level.</h4>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <div class="client-profile-card">
          <div class="single-profile-card profile-card-active">
            <img src="assets/client-profile.png" alt="" />
            <div>
              <h4>Tanmoy Saha</h4>
              <p>VP & Co-Founder, <a href="">Wiser</a></p>
            </div>
          </div>
          <div class="single-profile-card">
            <img src="assets/client-profile.png" alt="">
              <div>
                <h4>Tanmoy Saha</h4>
                <p>VP & Co-Founder, <a href="">Wiser</a></p>
              </div>
            </></div>
          <div class="single-profile-card">
            <img src="assets/client-profile.png" alt="">
              <div>
                <h4>Tanmoy Saha</h4>
                <p>VP & Co-Founder, <a href="">Wiser</a></p>
              </div>
            </></div>

        </div>
      </section><section id="footer">
          <div class="footer-left">
            <h2>Let's make something amazing together</h2>

            <div class="email-form">
              <h2>Start by <span>saying hi</span></h2>
              <input type="text" name="name" id="" placeholder="Your name" />
              <input type="email" name="email" id="" placeholder="Email Address" />
              <div>
                <input type="number" name="phone-number" id="" placeholder="Phone number" />
                <button type="submit">Send</button>
              </div>
            </div>

            <div class="footer-title">
              <h3 class="title-first-name">
                Tanmoy
              </h3>
              <h3 class="title-last-name">
                Saha
              </h3>
            </div>
          </div>
          <div class="footer-right">
            <div class="footer-email-intro">
              <p>Information</p>
              <h6>Agartala, West Tripura, Tripura, India, Pin-799101</h6>
              <h3>tanmoytssaha@gmail.com</h3>
            </div>
            <div class="footer-nav-menu">
              <ul class="footer-menu">
                <li><a class="active" href="#">&lt; Service &gt;</a></li>
                <li><a class="" href="#">Works</a></li>
                <li><a class="" href="#">Notes</a></li>
                <li><a class="" href="#">Contacts</a></li>
              </ul>
            </div>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/TanmoyTSSaha" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="mailto:tanmoytssaha@gmail.com" target="_blank">
                <i class="fa-regular fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/tanmoy-saha-7724b5195/" target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </section></>
    </>
  )
}
