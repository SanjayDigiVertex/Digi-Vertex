const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  alwaysShowScrollbar: true,
});
const serviceData = {
  SEO: {
    H2: "Search Engine",
    H4: "Optimization",
    imgSrc: "../servicesImage/Search Engine.jpg",
    imgAlt: "SEO",
    title: "Search Engine optimization Service",
    heading: "Search Engine Optimization",
    text: `On average, organic results account for 53% of all website traffic. Online searches account for a sizable portion of traffic to popular websites. However, nearly 91 percent of websites never receive any traffic due to improper search engine optimization services in India. Are you having trouble catching the attention of your target audience?
    
    
    
    At Digivertex, our SEO experts use a mix of techniques to figure out the search habit of the customers and plan accordingly to provide you with an upper hand and bring more traffic. Nearly one-third of all smartphone searches are location-related. You may grow your company with our local SEO services before your rivals.
    
    
    
    
    With the help of our data-driven tactics and strategies, we ensure that your website gets a steady visitor flow to improve your organic rankings. We assist you in resolving any technical problems stopping potential clients from reaching you. Our team further speeds up your website load, improves accessibility, and makes it more responsive to smartphones. These result-oriented services stand out as the best search engine optimization services in india.`,
  },
  SMM: {
    H2: "Social Media",
    H4: "Marketing",
    imgSrc: "../servicesImage/Social Media.jpg",
    imgAlt: "SMM",
    title: "Social Media Marketing Service",
    heading: "Social Media Marketing",
    text: `With the onset of social media, more and more people rely on it to know more about the products before deciding to buy them. Therefore, it has become necessary to squeeze out the potential of social media and use it to promote the brand further.
     
    
    Our team creates plans that use social media networks to reach your customers and capture trends. We provide thorough social media monitoring plans that enable you to have meaningful real-time conversations with your customers. With innovative concepts and viral content, we assist you in expanding your company. Our team works tirelessly to bring the best influencers on board to make the message clearer and more concise.
    
    
    Using the most up-to-date methods, we keep an eye on your social media presence to hear any conversations about your company on online media. Our professionals design unique alternates to keep your social media handles humming and continuously check your social media accounts for mentions and reviews. Your trust in us and the consistent efforts of our expert team make us count in one of the top social media marketing agencies in Delhi"    `,
  },
  CM: {
    H2: "Content",
    H4: "Marketing",
    imgSrc: "../servicesImage/Content Marketing (1).jpg",
    imgAlt: "CM",
    title: "Content Marketing Service",
    heading: "Content Marketing",
    text: `An excellent piece of content, whether a copy, an article, an animation, or a video, is estimated to raise CTR by 65% and influence audience behavior. Eighty-eight percent of marketers think that content is the fuel of the digital marketing engine.


     We collaborate with your business to provide you with one of the best content marketing services in Delhi to increase your digital reach with specialized content marketing services. We work with you to increase your online visibility through effective content initiatives and redefine your company by generating higher ROI."`,
  },
  WDD: {
    H2: "Website Design",
    H4: "and Development",
    imgSrc: "../servicesImage/Web Devlopement.jpg",
    imgAlt: "WDD",
    title: "Website Design and Development Service",
    heading: "Website Design and Development",
    text: `The design of a website is crucial in determining whether a visitor will become a client or not. 38% of visitors leave a website with poor accessibility or a drab look. You need to have a beautiful and functional website if you want to encourage the expansion of your organization. Most website design and development companies struggle to provide a perfect user interface for their client.


     Are you tired of wandering at website design and development companies? Come here at Digivertex,
     We provide you with a full range of website development services to enhance your user experience without affecting the traffic and interaction you already receive on your website. Our website creation specialists create one that puts you ahead of your rivals, ensuring that your target always picks you for all their requirements.`,
  },
  CD: {
    H2: "Content",
    H4: "Marketing",
    imgSrc: "../servicesImage/Creative.jpg",
    imgAlt: "CD",
    title: "Content Marketing Services",
    heading: "Content Marketing",
    text: `An excellent piece of content, whether a copy, an article, an animation, or a video, is estimated to raise CTR by 65% and influence audience behavior. Eighty-eight percent of marketers think that content is the fuel of the digital marketing engine.

    An excellent piece of content, whether a copy, an article, an animation, or a video, is estimated to raise CTR by 65% and influence audience behavior. Eighty-eight percent of marketers think that content is the fuel of the digital marketing engine.
    `,
  },
  PAM: {
    H2: "Paid advertising",
    H4: "management",
    imgSrc: "../servicesImage/Paid Advertise.jpg",
    imgAlt: "PAM",
    title: "Paid advertising management Services",
    heading: "Paid advertising management",
    text: `Almost every major firm around the globe is using paid ad marketing to increase its reach by 2-3 or maybe five times. Paid ads are a great way of broadening your reach and marketing the products and services to the next level.


    According to some research data, paid ads can increase brand awareness by 82%. Thus, this is the best way to reach the intended audience without splurging too much money. 


    According to some research data, paid ads can increase brand awareness by 82%. Thus, this is the best way to reach the intended audience without splurging too much money. 
    `,
  },
  ES: {
    H2: "eCommerce",
    H4: "Solutions",
    imgSrc: "../servicesImage/Ecommerce.jpg",
    imgAlt: "ES",
    title: "eCommerce Solutions Services",
    heading: "eCommerce Solutions",
    text: `eCommerce solutions are the products and services a company can grow electronically. Diverse e-commerce solutions are available in the market, including web development software, online web development platforms, services like domain and hosting, and professional photography. 



    An accurate and reliable e-commerce solution in India has always been a headache for small businesses. We have built our e-commerce solutions on the idea that they are accessible in the best way possible and are effective, no matter the size of the company. Our team consists of exceptionally great business and technical minds who will help you in blooming your business. We provide eCommerce solutions like developing and monitoring websites, professional product photography, cataloging, customer support, and technical assistance.   



    Our company creates top-notch eCommerce web page solutions to assist you in effectively classifying and cataloging your products. Our unique eCommerce solutions guarantee that your clients will quickly and easily locate what they are looking for, helping you boost sales and keep more clients.
    `,
  },
  LGD: {
    H2: `Logo and 
    Graphic Design `,
    H4: "for Business",
    imgSrc: "../servicesImage/Logo & graphics.jpg",
    imgAlt: "LGD",
    title: "Logo and Graphic Design for Business Services",
    heading: "Logo and Graphic Design for Business",
    text: `Graphic designing is an art that makes your product looks attractive and unique from other products. The logo is the identity of the brand, and it also defines its values. So they need to be designed with great imagination and creativity as it represents you among your ideal audience and competitors. 


    Beautiful and appealing graphic design for business can also assist you in gaining ample customers and opening an extensive market for your business. Our team of designers at Digivertex will provide you with designs that will suit your needs and make them stand out and captivating. We do package designing, logo designing or modifying, and so on. 
    `,
  },
  VP: {
    H2: "Video",
    H4: "Production",
    imgSrc: "../servicesImage/Video procution.jpg",
    imgAlt: "VP",
    title: "Video Production Service",
    heading: "Video Production",
    text: `It has been reported down the line that most customers prefer advertising in the form of videos since it helps them make their decisions more precisely and confidently. Thus, video marketing has become a prevalent option regarding your brand positioning. As a top video marketing firm, Digivertex is one of the best choices in video production companies with expertise in making captivating films that tell stories, convey goals and concepts, and motivate action to produce results. 


    It has been reported down the line that most customers prefer advertising in the form of videos since it helps them make their decisions more precisely and confidently. Thus, video marketing has become a prevalent option regarding your brand positioning. As a top video marketing firm, Digivertex is one of the best choices in video production companies with expertise in making captivating films that tell stories, convey goals and concepts, and motivate action to produce results. 
    `,
  },
  AMAD: {
    H2: `Android Mobile
    and`,
    H4: `Application 
         Development`,
    imgSrc: "../servicesImage/Android & App Development.jpg",
    imgAlt: "PAM",
    title: "Android Mobile and Application Development Service",
    heading: "Android Mobile and Application Development",
    text: `Android mobile application development refers to designing software that can function on android mobile phones. Mobile applications are more customer friendly as mobiles are essential for us all, and it is always with us. So, customers can access and get services with more comfort.


    Android mobile application development refers to designing software that can function on android mobile phones. Mobile applications are more customer friendly as mobiles are essential for us all, and it is always with us. So, customers can access and get services with more comfort.
    `,
  },
};
const category = new URLSearchParams(window.location.search).get("c");
document.querySelector(".heading h2").textContent = serviceData[category].H2;
document.querySelector(".heading h4").textContent = serviceData[category].H4;
document.querySelector("h3").textContent = serviceData[category].heading;
document.querySelector("p").textContent = serviceData[category].text;
document
  .querySelector(".bannerImg img")
  .setAttribute("src", serviceData[category].imgSrc);
document
  .querySelector(".bannerImg img")
  .setAttribute("alt", serviceData[category].imgAlt);

document.querySelector("title").textContent = serviceData[category].title;
console.log(category);