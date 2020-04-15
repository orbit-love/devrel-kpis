/**
 * This file contains all the tips and apps of https://inboxze.ro
 *
 * 💡 CONTRIBUTE:
 *
 * - Add your tip to the BOTTOM of this file.
 * - Keep your tips short and sweet.
 * - We use unavatar.now.sh for avatars, so in the "avatar" field you can specify a username, email address or domain
 */

export const content = [
  {
    tag: "tip",
    author: {
      name: "Marc Kaöhlbrugge",
      avatar: "twitter/marckohlbrugge",
      bio: "Founder of W.I.P."
    },
    body: "Keep your replies short and sweet.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "app",
    author: {
      name: "Mailbrew",
      avatar: "twitter/mailbrew",
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
      name: "Rich Vreenland",
      avatar: "richvreeland",
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
      avatar: "manuel_frigerio",
      bio: "Founder of ReferralHero, SparkLoop"
    },
    body:
      "I’ve created a Gmail filter that matches the address of all newsletter I follow (using the OR operator to do it in a single query). This filter applies a “newsletters” label to each matching email and archives it.\n\nI only check this label once a week.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "tip",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy"
    },
    body:
      'Check and answer emails once per day. Mark emails that can wait with a "fluff" label and answer them during the weekend.',
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "tip",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy"
    },
    body: "Turn off all email notifications. Phone, desktop, literally everywhere. You'll be fine.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "app",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy"
    },
    body: `Gmail is overrated. Use Missive instead of Gmail, especially if you have an assistant or a team answering your emails, it's amazing.`,
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "tip",
    author: {
      name: "Francesco Di Lorenzo",
      avatar: "twitter/frankdilo",
      bio: "Superlinear Co-founder"
    },
    body: `I use a dedicated email address for subscribing to newsletters: mygmail+news@gmail.com (note the "+news" part).\n\nThanks to a Gmail filter I setup,  newsletters never hit my inbox and go to a dedicated folder that I browse when I want to read.`,
    source_url: "PRIVATE_EXCHANGE"
  }
];

export const tags = {
  all: {
    value: "all",
    name: "Show All",
    color: ""
  },
  tip: {
    value: "tip",
    name: "Tip",
    color: "#FF6948"
  },
  app: {
    value: "app",
    name: "App",
    color: "#4B5269"
  },
  advice: {
    value: "advice",
    name: "Advice",
    color: "#8348FF"
  },
  extension: {
    value: "extension",
    name: "Extension",
    color: "#3576F2"
  }
};

export default content;
