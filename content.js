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
    tag: "advice",
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
      "Receive automated email digests on your favorite topics.\n\nWith Mailbrew you create personal newsletter with the things you love, and get them on your schedule.",
    preview_image:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2007bda6-aa34-498d-9409-9048fe39d8ac%2FMailbrew_05.png?table=block&id=c181bc9f-ae1c-4c21-b0b5-743f104ae10e&width=4800&cache=v2",
    offer: {
      title: "3 Months Free",
      subtitle: "Click here to claim the discount"
    }
  },
  {
    tag: "advice",
    author: {
      name: "DHH",
      avatar: "twitter/dhh",
      bio: "Basecamp Co-Founder"
    },
    body:
      "Inbox zero is a fool's errand.\n\nIt puts you on the treadmill of dealing with every email as soon as it comes in, and even make that appear like the organized, virtuous thing to do. But it's not.\n\nAll email is not important. In fact, most of it is not important! I savor my Mailbrews exactly because they're not urgent. I don't try to read it all as soon as it hits my inbox.\n\nThis has been a primary mission for our new email product hey.com – get you off the inbox-zero treadmill, and back to loving email, because you're reading the important stuff urgently, and the leisurely stuff when you have time.\n\nNo stress, no shame.",
    source_url: "PRIVATE_EXCHANGE"
  },
  {
    tag: "extension",
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
      url: "https://inboxwhenready.org/",
      icon:
        "https://lh3.googleusercontent.com/QkFKUeSsig0JNrIA936iV5C8vdD7c51jmz6FjevlBbJUFaSXuIGteqV1Yge0jzFmkvGb5Xho=w128-h128-e365"
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
      name: "Rich Vreenland",
      avatar: "richvreeland",
      bio: "Composer of “It Follows” soundtrack"
    },
    body:
      "I use auto-advance (a Gmail setting) to make it easier to work through mail, send/delete/archive anything easily actionable, and snooze anything that I can't address this week.\n\nIt's easy this way to use the default keyboard shortcuts to quickly breeze through e-mail.",
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
    body: `Gmail is overrated.\n\nUse missiveapp.com instead of Gmail, especially if you have an assistant or a team answering your emails, it's amazing.`,
    preview_image:
      "https://d35aizeh8x21c1.cloudfront.net/assets/home/feature-overview-light@2x-04225cd8b0712688acdbbb93b81653961209b96b2e58efea80bd32fb770efdd9.png",
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
