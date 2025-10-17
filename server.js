//Basic
const express = require('express');
const app = express();

app.use(express.static('public'));

// Data
const companyData = {
    companyName: "Crimson Veil Enterprises",

    companyInfo: {
        tagline: "Illuminating the Night Through Eternal Innovation.",
        description:
            "Crimson Veil Enterprises stands as a premier force in nocturnal technology and arcane design, crafting timeless solutions for immortal clientele across the realms."
    },
    contact: {
        address: {
            street: "1313 Bloodmoon Boulevard",
            city: "Nocturne City",
            state: "Shadow Province",
            zip: "66613",
            country: "Transylvaniar"
        },
        phone: "+1 (666) 131-3131",
        email: "contact@crimsonveil.com",
        form: {
            fields: ["name", "email", "subject", "message"],
            submitText: "Send Raven",
            successMessage:
                "Your message has been received. A familiar will contact you before the next full moon."
        },
        additionalInfo: {
            hours: "Dusk–Dawn: 7pm – 5am",
            mapEmbedUrl: "https://maps.google.com/?q=Crimson+Veil+Enterprises"
        }
    },

    pastWork: [
        {
            img: "images/work1.jpg",
            company: "BloodBank Systems",
            shortDescription:
                "Developed an encrypted blood inventory platform that optimized donation logistics by 40%."
        },
        {
            img: "images/work2.jpg",
            company: "Moonlight Manor",
            shortDescription:
                "Reimagined the haunted estate's branding and web presence with chilling elegance."
        }
    ],

    products: [
        {
            name: "Noctis Lens",
            price: "₵199",
            description:
                "A supernatural device that enhances vision in complete darkness while revealing hidden auras.",
            rating: 4.9,
            application:
                "Perfect for night patrols, moonlit hunts, and surveillance of rival covens."
        },
        {
            name: "Hemlock AI",
            price: "₵499",
            description:
                "An ancient intelligence bound within digital code—analyzing data, predicting prey, and managing coven affairs.",
            rating: 4.8,
            application:
                "Ideal for cryptic analytics, prophecy simulation, and eternal business management."
        }
    ],
    staff: [
        {
            name: "Countess Vespera Drayke",
            title: "Supreme Overseer",
            photo: `images/image01.png`,
            contactInfo: {
                email: "vespera@crimsonveil.com",
                phone: "+1 (666) 234-5678",
                socials: [
                    {
                        type: `linkedin`,
                        link: "https://linkedin.com/in/vesperadrayke"
                    },
                    {
                        type: `twitter`,
                        link: "https://twitter.com/countessvespera"
                    }
                ] 
              
            },
            blurb:
                "Guiding the coven with wisdom older than the dawn — and sharper than her fangs."
        },
        {
            name: "Lucien Graves",
            title: "Lead NecroTechnologist",
            photo: `images/image02.png`,
            contactInfo: {
                email: "lucien@crimsonveil.com",
                phone: "+1 (666) 345-6789",
                socials: [
                    {
                        type: `github`,
                        link: "https://github.com/luciengraves"
                    },
                    {
                        type: `linkedin`,
                        link: "https://linkedin.com/in/luciengraves"
                    },
                ]
            },
            blurb:
                "Breathing life into code — or what's left of it — through dark innovation and arcane algorithms."
        }
    ],

    socials: [
        {
            type: `facebook`,
            link: "https://facebook.com/crimsonveil"
        },
        {
            type: `instagram`,
            link: "https://instagram.com/crimsonveil"
        },
        {
            type: `twitter`,
            link: "https://twitter.com/crimsonveilco"
        },
        {
            type: `linkedin`,
            link: "https://linkedin.com/company/crimsonveil"
        },
        {
            type: `youtube`,
            link: "https://youtube.com/@crimsonveil"
        }
    ],

    testimonials: [
        {
            name: "Lord Alaric",
            company: "House Umbra",
            quote:
                "Crimson Veil transformed our ancient archives into a digital sanctuary — truly mesmerizing craftsmanship."
        },
        {
            name: "Lady Seraphine",
            company: "The Bloodborne Guild",
            quote:
                "Reliable, enigmatic, and delightfully sinister. Their artistry rivals the beauty of eternal night."
        }
    ],

    careers: [
        {
            position: "Shadowfront Developer",
            location: "Remote (Crypt Access Required)",
            description:
                "Seeking a skilled developer fluent in JavaScript and forbidden incantations. Must be comfortable working under moonlight.",
            applyEmail: "join@crimsonveil.com"
        },
        {
            position: "Public Enchantments Coordinator",
            location: "Castle Nocturna Office",
            description:
                "Searching for a charismatic familiar to manage mortal engagement and illusionary brand campaigns.",
            applyEmail: "join@crimsonveil.com"
        }
    ],

    faqs: [
        {
            question: "What realms do you operate in?",
            answer:
                "Our coven spans across mortal, nocturnal, and digital domains — specializing in eternal innovation and dark design."
        },
        {
            question: "How can I summon a consultation?",
            answer:
                "Use our contact form or send a raven to contact@crimsonveil.com — we'll respond by twilight."
        }
    ],
    foundedDate: 1437,
    foundingStory: `Born under the Blood Moon of 1437, Crimson Veil began as a secret alliance of scholars, inventors, and vampires seeking to merge ancient alchemy with emerging human technologies. For centuries, we’ve thrived in the shadows, perfecting our craft while guiding mortal innovation from behind the veil. Today, we emerge — not to dominate the daylight, but to redefine what’s possible in the twilight between magic and machine. Our story is one of persistence, passion, and the pursuit of eternal perfection.`
};

const companyName = companyData.companyName

companyData.founders = [ // Add the first 2 staff members as the founds
    companyData.staff[0],
    companyData.staff[1]
]

app.get(`/`, (req, res) => {
    res.render('home.ejs', {
        companyName: companyName
    })
})

app.get(`/history`, (req, res) => {
    res.render('history.ejs', {
        companyName: companyName,
        foundingStory: companyData.foundingStory,
        founderNames: companyData.founders,
        foundingDate: companyData.foundedDate,

        socials: companyData.socials,
        contactInfo: companyData.contact,

    })
})
app.get(`/work`, (req, res) => {
    res.render('work.ejs', {
        companyName: companyName,
        socials: companyData.socials,
        contactInfo: companyData.contact,

        pastWork: companyData.pastWork
    })
})
app.get(`/products`, (req, res) => {
    res.render('products.ejs', {
        companyName: companyName,
        socials: companyData.socials,
        contactInfo: companyData.contact,

        products: companyData.products
    })
})
app.get(`/staff`, (req, res) => {
    res.render('staff.ejs', {
        companyName: companyName,
        socials: companyData.socials,
        contactInfo: companyData.contact,

        staff: companyData.staff
    })
})
app.get(`/contact`, (req, res) => {
    res.render('contact.ejs', {
        companyName: companyName,
        socials: companyData.socials,
        contactInfo: companyData.contact,
    })
})
app.get(`/links`, (req, res) => {
    res.render('links.ejs', {
        companyName: companyName,
        socials: companyData.socials,
        contactInfo: companyData.contact,
    })
})

//Listening
app.listen(3000, () => {
    console.log(`Listening to port 3000`);
});