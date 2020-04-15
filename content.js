/**
 *  We use unavatar to fetch user images from their username or publicly available email address.
 */

const content = [
  {
    tag: "tip",
    author: {
      name: "Marc Kaöhlbrugge",
      unavatar: "marckohlbrugge",
      bio: "Founder of W.I.P."
    },
    body: "Keep your replies short and sweet.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "app",
    author: {
      name: "Mailbrew",
      unavatar: "hello@mailbrew.com",
      bio: "Automated email digests on any topic."
    },
    body:
      "Mailbrew sends you automated email digests on your favorite topics.\nStop subscribing to many newsletters, and create a single, personal newsletter with the things you love.",
    source_url: "https://mailbrew.com/?coupon=30_OFF",
    offer: {
      title: "3 Months Free",
      subtitle: "Click here to claim the discount"
    }
  },
  {
    tag: "app",
    author: {
      name: "Rick Vreenland",
      unavatar: "richvreeland",
      bio: "Composer of “It Follows” soundtrack"
    },
    body:
      "I use a Chrome extension called 'Inbox When Ready' which will hide my inbox by default after a certain period of time, to add an extra step to prevent compulsive e-mail checking.\n\nYou can even lock yourself out of it after a certain number of attempts per day, but I felt that was too restrictive for me.",
    source_url: "PRIVATE_EXCHANGE",
    chrome_extension: {
      title: "Inbox When Ready",
      url: "...",
      icon:
        "https://lh3.googleusercontent.com/_6Y4tjYdppsZJlWOnAzFy2A8JjGwJpQOvoKocTYMfl66bTJg20mJ6pojdQaUGtvXa9HYurDChQ=w128-h128-e365"
    }
  },
  {
    tag: "tip",
    author: {
      name: "Manuel Frigerio",
      unavatar: "manuel_frigerio",
      bio: "Founder of ReferralHero, SparkLoop"
    },
    body:
      "I’ve created a Gmail filter that matches the address of all newsletter I follow (using the OR operator to do it in a single query). This filter applies a “newsletters” label to each matching email and archives it.\n\nI only check this label once a week.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "tip",
    author: {
      name: "Francesco Di Lorenzo",
      unavatar: "frankdilo",
      bio: "Superlinear Co-founder"
    },
    body: `I use a dedicated email address for subscribing to newsletters: mygmail+news@gmail.com (note the "+news" part).\n\nThanks to a Gmail filter I setup,  newsletters never hit my inbox and go to a dedicated folder that I browse when I want to read.`,
    source_url: "PRIVATE_EXCHANGE"
  }
];

export default content;
