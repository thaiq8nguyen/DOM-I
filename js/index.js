const siteContent = {
  "nav": {

    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
    
  },

  cta: {
    "h1": "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },

  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/*Nav Bar*/
class NavBar {
  constructor(attributes) {
    this.attributes = attributes;
    this.nav = document.querySelector("header nav");
  }

  build() {

    const links = this.nav.querySelectorAll("a");

    const items = Object.values(this.attributes);
    items.splice(6,1);

    const fragment = document.createDocumentFragment();

    for(let i = 0; i < links.length; i++) {
      links[i].textContent = items[i];
      links[i].style.color = "green";
      fragment.appendChild(links[i]); 
    }
    
    this.nav.appendChild(fragment);
    
    // New Nav Bar Items
     const extraLinks = ["Blog", "Projects"];

     for(let i = 0; i < extraLinks.length; i++) {

      const link = document.createElement("a");
      link.setAttribute("href", "#")
      link.textContent = extraLinks[i];
      link.style.color = "crimson";
      fragment.appendChild(link);

     }
     
     this.nav.prepend(fragment);
  
  }
}

class CallToAction {
  constructor(attributes) {
    this.attributes = attributes;
  }

  build() {

    const textContainer = document.querySelector(".cta .cta-text");
    const newHeading = document.createElement("h1");
    const headingName = document.createTextNode(this.attributes["h1"]);
    newHeading.appendChild(headingName);
    textContainer.replaceChild(newHeading, textContainer.childNodes[1]);

    //heading style
    
    newHeading.style.wordSpacing = `${newHeading.offsetWidth}px`
    
    const newButton = document.createElement("button");
    const buttonName = document.createTextNode(this.attributes["button"]);
    newButton.appendChild(buttonName);
    textContainer.replaceChild(newButton, textContainer.childNodes[3]);

    const image = textContainer.nextElementSibling;
    image.src = this.attributes["img-src"];

    

  }
}

class MainContent {
  constructor(attributes) {
    this.attributes = attributes;
    this.mainContentContainer = document.querySelector(".main-content");
  }

  build() {
     
    const topContentContainer = this.mainContentContainer.querySelector(".top-content"); // Top-Content

    const featuresContainer = topContentContainer.querySelector(".text-content:first-child"); //Features
    const featuresHeadingContainer = featuresContainer.querySelector("h4");
    const featuresHeadingContent = document.createTextNode(this.attributes["features-h4"]);
    const featuresContentContainer = featuresContainer.querySelector("p")
    const featuresContent = document.createTextNode(this.attributes["features-content"]);
    featuresHeadingContainer.appendChild(featuresHeadingContent);
    featuresContentContainer.appendChild(featuresContent);

    const aboutContainer = topContentContainer.querySelector(".text-content:last-child"); //About
    const aboutHeadingContainer = aboutContainer.querySelector("h4");
    const aboutHeadingContent = document.createTextNode(this.attributes["about-h4"]);
    const aboutContentContainer = aboutContainer.querySelector("p")
    const aboutContent = document.createTextNode(this.attributes["about-content"]);
    aboutHeadingContainer.appendChild(aboutHeadingContent);
    aboutContentContainer.appendChild(aboutContent);

    const middleImage = topContentContainer.nextElementSibling;
    middleImage.src = this.attributes["middle-img-src"];

    const bottomContentContainer = this.mainContentContainer.querySelector(".bottom-content");
    const servicesContainer = bottomContentContainer.querySelector(".text-content:first-child"); // services
    const servicesHeadingContainer = servicesContainer.querySelector("h4");
    const servicesHeadingContent = document.createTextNode(this.attributes["services-h4"]);
    const servicesContentContainer = servicesContainer.querySelector("p")
    const servicesContent = document.createTextNode(this.attributes["services-content"]);
    servicesHeadingContainer.appendChild(servicesHeadingContent);
    servicesContentContainer.appendChild(servicesContent);

    const productContainer = bottomContentContainer.querySelector(".text-content:nth-child(2)"); // product
    const productHeadingContainer = productContainer.querySelector("h4");
    const productHeadingContent = document.createTextNode(this.attributes["product-h4"]);
    const productContentContainer = productContainer.querySelector("p")
    const productContent = document.createTextNode(this.attributes["product-content"]);
    productHeadingContainer.appendChild(productHeadingContent);
    productContentContainer.appendChild(productContent);

    const visionContainer = bottomContentContainer.querySelector(".text-content:last-child"); // vision
    const visionHeadingContainer = visionContainer.querySelector("h4");
    const visionHeadingContent = document.createTextNode(this.attributes["vision-h4"]);
    const visionContentContainer = visionContainer.querySelector("p")
    const visionContent = document.createTextNode(this.attributes["vision-content"]);
    visionHeadingContainer.appendChild(visionHeadingContent);
    visionContentContainer.appendChild(visionContent);

  }
}

class Contact {
  constructor(attributes){
    this.attributes = attributes;
    this.contactContainer = document.querySelector(".contact");
  }

  build() {
    const contactHeading = this.contactContainer.querySelector("h4");

    const contactHeadingContent = document.createTextNode(this.attributes["contact-h4"])


    const fragment = document.createDocumentFragment();

    [this.attributes["address"], this.attributes["phone"], this.attributes["email"]].forEach(contact => {
      let element = document.createElement("p");
      element.textContent = contact;
      fragment.appendChild(element);

    })

    contactHeading.appendChild(contactHeadingContent);
    contactHeading.after(fragment)
    
    
  }
}

class Footer{
  constructor(attributes) {
    this.attributes = attributes;
    this.footerContainer = document.querySelector("footer");
  }

  build() {
    const footerContent = this.footerContainer.querySelector("p");
    footerContent.textContent = this.attributes["copyright"];
  }
}
    
const navBar = new NavBar(siteContent["nav"]);
const callToAction = new CallToAction(siteContent["cta"]);
const mainContent = new MainContent(siteContent["main-content"]);
const contact = new Contact(siteContent["contact"])
const footer = new Footer(siteContent["footer"])


navBar.build();
callToAction.build();
mainContent.build();
contact.build();
footer.build();


