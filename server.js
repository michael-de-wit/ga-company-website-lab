//Basic
const express = require('express');
const app = express();

app.use(express.static('public')); 

// Data
const companyData = {
  companyName: "Placeholder Company Name",

  companyInfo: {
    tagline: "Innovating Tomorrow, Today.",
    description:
      "Placeholder Company is a leading innovator in technology and design, offering world-class solutions to global clients across multiple industries."
  },

  contact: {
    address: {
      street: "123 Innovation Street",
      city: "Creativity City",
      state: "Imagination State",
      zip: "12345",
      country: "Placeholderland"
    },
    phone: "+1 (555) 123-4567",
    email: "info@placeholdercompany.com",
    form: {
      fields: ["name", "email", "subject", "message"],
      submitText: "Send Message",
      successMessage: "Thank you for reaching out! We'll get back to you soon."
    },
    additionalInfo: {
      hours: "Mon–Fri: 9am – 5pm",
      mapEmbedUrl: "https://maps.google.com/?q=Placeholder+Company"
    }
  },

  pastWork: [
    {
      img: "images/work1.jpg",
      company: "ClientCorp",
      shortDescription:
        "Developed a responsive e-commerce platform that increased sales by 30%."
    },
    {
      img: "images/work2.jpg",
      company: "Designify",
      shortDescription:
        "Created a bold new brand identity and website redesign for a creative agency."
    }
  ],

  products: [
    {
      name: "Product 1",
      price: "$99",
      description:
        "A versatile tool designed to simplify your daily workflow.",
      rating: 4.5,
      application: "Used for productivity and project management."
    },
    {
      name: "Product 2",
      price: "$249",
      description:
        "An AI-driven analytics solution tailored for businesses.",
      rating: 4.8,
      application: "Data analytics, performance tracking, and reporting."
    }
  ],

  staff: [
    {
      name: "Jane Doe",
      title: "Chief Executive Officer",
      contactInfo: {
        email: "jane@placeholdercompany.com",
        phone: "+1 (555) 234-5678",
        socials: {
          linkedin: "https://linkedin.com/in/janedoe",
          twitter: "https://twitter.com/janedoe"
        }
      },
      blurb: "Leading with vision, fueled by innovation."
    },
    {
      name: "John Smith",
      title: "Lead Developer",
      contactInfo: {
        email: "john@placeholdercompany.com",
        phone: "+1 (555) 345-6789",
        socials: {
          github: "https://github.com/johnsmith",
          linkedin: "https://linkedin.com/in/johnsmith"
        }
      },
      blurb: "Turning ideas into interactive digital experiences."
    }
  ],

  socials: {
    facebook: "https://facebook.com/placeholdercompany",
    instagram: "https://instagram.com/placeholdercompany",
    twitter: "https://twitter.com/placeholderco",
    linkedin: "https://linkedin.com/company/placeholdercompany",
    youtube: "https://youtube.com/@placeholdercompany"
  },

  testimonials: [
    {
      name: "Happy Client",
      company: "Success Inc.",
      quote:
        "Placeholder Company transformed our digital presence — amazing results!"
    },
    {
      name: "Tech Partner",
      company: "InnovateX",
      quote:
        "Reliable, creative, and professional. A great team to collaborate with."
    }
  ],

  careers: [
    {
      position: "Frontend Developer",
      location: "Remote",
      description:
        "Looking for a creative developer skilled in React and UI/UX design.",
      applyEmail: "careers@placeholdercompany.com"
    },
    {
      position: "Marketing Coordinator",
      location: "New York Office",
      description:
        "Seeking an energetic individual to drive brand engagement campaigns.",
      applyEmail: "careers@placeholdercompany.com"
    }
  ],

  faqs: [
    {
      question: "What industries do you specialize in?",
      answer:
        "We work across multiple sectors including tech, retail, and education."
    },
    {
      question: "How can I request a quote?",
      answer:
        "Use our contact form or email us directly at info@placeholdercompany.com."
    }
  ]
};

const companyName = companyData.companyName

app.get(`/`, (req,res) => {
    res.render('home.ejs', {
        companyName: companyName
    })
})

//Listening
app.listen(3000, () => {
    console.log(`Listening to port 3000`);
});