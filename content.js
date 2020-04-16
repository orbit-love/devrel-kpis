/**
 * This file contains all the tips and apps of https://inboxze.ro
 *
 * 💡 CONTRIBUTE:
 *
 * - Add your tip to the BOTTOM of this file.
 * - Keep your tips short and sweet.
 * - We use unavatar.now.sh for avatars, so in the "avatar" field you can specify a username, email address or domain
 * - Use this URL to get a unique id to use for each tip: https://www.random.org/strings/?num=1&len=8&digits=on&loweralpha=on&unique=on&format=plain&rnd=new
 *
 * 📩 SOURCES:
 *
 * Some content doesn't has a source. That's because some people were so kind
 * to send us private messages with their tips and takes on email.
 *
 * So thank you to DHH, Kitze, Rich Vreeland, Manuel Frigerio and Marc Köhlbrugge for their messages.
 *
 */

export const content = [
  {
    id: "uj2ecty5",
    tag: "advice",
    author: {
      name: "Marc Kaöhlbrugge",
      avatar: "twitter/marckohlbrugge",
      bio: "Founder of W.I.P.",
    },
    body: "Keep your replies short and sweet.",
  },
  {
    id: "hcv51m5n",
    tag: "app",
    author: {
      name: "DHH",
      avatar: "twitter/dhh",
      bio: "Basecamp Co-Founder",
    },
    body:
      "I've been using Mailbrew for the past several months, and it's AWESOME. Now it's out for all! I use it to follow people who don't tweet a lot, and would be buried in my stream, but I definitely do not want to miss. It's a perfect use case for email.",
    url: "https://mailbrew.com/?coupon=K9h1JrBP",
    preview_image:
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2007bda6-aa34-498d-9409-9048fe39d8ac%2FMailbrew_05.png?table=block&id=c181bc9f-ae1c-4c21-b0b5-743f104ae10e&width=4800&cache=v2",
    offer: {
      title: "40% OFF for 3 Months",
      subtitle: "Click here to claim the discount",
      url: "https://mailbrew.com/?coupon=K9h1JrBP",
    },
  },
  {
    id: "53khm0uz",
    tag: "advice",
    author: {
      name: "Paul Graham",
      avatar: "twitter/paulg",
      bio: "Y-Combinator Co-Founder",
    },
    body:
      "There are many ways to fight spam. Which works best? So far the best single solution is probably Bayesian filtering. But you don't have to choose just one. Many of the following solutions could be used in combination.",
    url: "http://www.paulgraham.com/stopspam.html",
    label: "Read the essay",
  },
  {
    id: "cjz4ignh",
    tag: "tip",
    author: {
      name: "Manuel Frigerio",
      avatar: "twitter/manuel_frigerio",
      bio: "Founder of ReferralHero, SparkLoop",
    },
    body:
      "I’ve created a Gmail filter that matches the address of all newsletter I follow (using the OR operator to do it in a single query). This filter applies a “newsletters” label to each matching email and archives it.\n\nI only check this label once a week.",
  },
  {
    id: "pwfg01t4",
    tag: "tip",
    author: {
      name: "Pat Walls",
      avatar: "twitter/thepatwalls",
      bio: "Founder Starter Story & Pigeon",
    },
    body: `Need to do something every Tuesday at 1 PM? I set a Google Calendar event and turn email notifications on.\n\nForget push notifications, I treat email as the central source for these tasks so I never miss them.`,
    source_url: "https://www.gmass.co/gmailgenius/how-i-email-pat-walls/",
  },
  {
    id: "h1q0fvf7",
    tag: "extension",
    author: {
      name: "Rich Vreenland",
      avatar: "richvreeland",
      bio: "Composer of “It Follows” soundtrack",
    },
    body:
      "I use a Chrome extension called 'Inbox When Ready' which will hide my inbox by default after a certain period of time, to add an extra step to prevent compulsive e-mail checking.\n\nYou can even lock yourself out of it after a certain number of attempts per day, but I felt that was too restrictive for me.",
    chrome_extension: {
      title: "Inbox When Ready",
      url: "https://inboxwhenready.org/",
      icon:
        "https://lh3.googleusercontent.com/QkFKUeSsig0JNrIA936iV5C8vdD7c51jmz6FjevlBbJUFaSXuIGteqV1Yge0jzFmkvGb5Xho=w128-h128-e365",
    },
  },
  {
    id: "fqx7o672",
    tag: "opinion",
    author: {
      name: "Brod Gondwana",
      avatar: "twitter/brongondwana",
      bio: "CEO at Fastmail",
    },
    body:
      "The email in your mailbox is your copy of what was said, and nobody else can change it or make it go away. The fact that the content of an email can’t be edited is one of the best things about POP3 and IMAP email standards. I admit it annoyed me when I first ran into it – why can’t you just fix up a message in place – but the immutability is the real strength of email. You can safely forget the detail of something that you read in an email, knowing that when you go back to look at it, the information will be exactly the same.",
    url: "https://fastmail.blog/2018/02/14/email-is-your-electronic-memory/",
    label: "Read blog post",
  },
  {
    id: "qskiwa9h",
    tag: "opinion",
    author: {
      name: "Ryan Hoover",
      avatar: "twitter/rrhoover",
      bio: "Product Hunt Founder",
    },
    body: "I never understood inbox zero. Every email isn’t more important than all the other commitments I’ve made.",
    source_url: "https://twitter.com/rrhoover/status/1167874754532917252",
  },
  {
    id: "zerywvyz",
    tag: "app",
    author: {
      name: "Boxy Suite",
      avatar: "twitter/getboxy",
      bio: "Gmail, redesigned for Mac.",
    },
    body:
      "Boxy Suite brings Gmail, Calendar and other G Suite apps to your Mac.\n\nIt features polished UI, Minimal Mode, Reader Mode, a convenient Quick Launched, Tracking Detection and more.",
    url: "https://boxysuite.com/?coupon=inboxzero",
    preview_image:
      "https://previews.dropbox.com/p/thumb/AAypYp18wI_jP8fiBT4d6TMYMqotNjZOxmuiL__DTCNGNf5Pi63Nh2W7KqUUmvwEOq46ssDkBrSnCd3rfSRmD25SlgxHGyfn2U2MFVtNDfQyWiZJz8ZR7jVAxqYJ6PkR-XIn_9JmAj9yNq8q_whJgKNnbqx-9VqwmaHjECXmDMCgE1VtlWw_oKdVisWpsCW8aBQKImc6MYI-2Vfh-LfCqP8nLA3LYPjcECvPW48Mjj5vbeMa4645qHLeBGhQWww4L46KABAG4d-C5jk9v1gfdgIFOZFl1xXgEW_LslhFV0KsUjkyfcuC3ACIoizKezkujhYR64MCi9k2DGIfKMwLx82q/p.png?fv_content=true&size_mode=5",
    offer: {
      title: "20% OFF",
      subtitle: "Click here to claim the discount",
      url: "https://boxysuite.com/?coupon=inboxzero",
    },
  },
  {
    id: "j3ir7629",
    tag: "opinion",
    author: {
      name: "DHH",
      avatar: "twitter/dhh",
      bio: "Basecamp Co-Founder",
    },
    body:
      "Inbox zero is a fool's errand.\n\nIt puts you on the treadmill of dealing with every email as soon as it comes in, and even make that appear like the organized, virtuous thing to do. But it's not.\n\nAll email is not important. In fact, most of it is not important! I savor my Mailbrews exactly because they're not urgent. I don't try to read it all as soon as it hits my inbox.\n\nThis has been a primary mission for our new email product hey.com – get you off the inbox-zero treadmill, and back to loving email, because you're reading the important stuff urgently, and the leisurely stuff when you have time.\n\nNo stress, no shame.",
  },
  {
    id: "742ds0t7",
    tag: "tip",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy",
    },
    body:
      'Check and answer emails once per day. Mark emails that can wait with a "fluff" label and answer them during the weekend.',
  },
  {
    id: "ageyw1qv",
    tag: "tip",
    author: {
      name: "Rich Vreenland",
      avatar: "richvreeland",
      bio: "Composer of “It Follows” soundtrack",
    },
    body:
      "I use auto-advance (a Gmail setting) to make it easier to work through mail, send/delete/archive anything easily actionable, and snooze anything that I can't address this week.\n\nIt's easy this way to use the default keyboard shortcuts to quickly breeze through e-mail.",
  },
  {
    id: "skpjf90r",
    tag: "app",
    author: {
      name: "Pigeon",
      avatar: "twitter/trypigeon",
      bio: "Powerful CRM inside Gmail.",
    },
    url: "https://trypigeon.co/",
    body:
      "Your business runs on email - so why are you using tools that don't integrate with it?\n\nGet replies, close deals, and attract customers. All inside Gmail.",
    preview_image: "https://s3.amazonaws.com/www.trypigeon.co/homepage/gmail-thread-2.png",
  },
  {
    id: "589etf84",
    tag: "tip",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy",
    },
    body: "Turn off all email notifications. Phone, desktop, literally everywhere. You'll be fine.",
  },
  {
    id: "6ip8wgwy",
    tag: "app",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy",
    },
    body: `Gmail is overrated.\n\nUse Missive instead of Gmail, especially if you have an assistant or a team answering your emails, it's amazing.`,
    url: "https://missiveapp.com",
    preview_image:
      "https://d35aizeh8x21c1.cloudfront.net/assets/home/feature-overview-light@2x-04225cd8b0712688acdbbb93b81653961209b96b2e58efea80bd32fb770efdd9.png",
  },
  {
    id: "1am7ezzm",
    tag: "tip",
    author: {
      name: "Francesco Di Lorenzo",
      avatar: "twitter/frankdilo",
      bio: "Co-founder Superlinear",
    },
    body: `I use a dedicated email address for subscribing to newsletters: mygmail+news@gmail.com (note the "+news" part).\n\nThanks to a Gmail filter I setup,  newsletters never hit my inbox and go to a dedicated folder that I browse when I want to read.`,
  },
  {
    id: "9xxefltv",
    tag: "opinion",
    author: {
      name: "Pat Walls",
      avatar: "twitter/thepatwalls",
      bio: "Founder Starter Story & Pigeon",
    },
    body: `“Email is dead” is the greatest lie in the tech industry.`,
    source_url: "https://www.gmass.co/gmailgenius/how-i-email-pat-walls/",
  },
  {
    id: "lmivwwg2",
    tag: "app",
    author: {
      name: "Peter Shankman",
      avatar: "twitter/petershankman",
      bio: "Author, Entrepreneur, and PR Strategist",
    },
    body: `The number one tool I use probably 20 times a day is followupthen.com.\n\n I can forward any email I want right to them, specify when I want to follow up, and they will send it back then.`,
    url: "https://www.followupthen.com/",
    source_url: "https://www.gmass.co/gmailgenius/email-peter-shankman/",
  },
  {
    id: "v64tehbe",
    tag: "tip",
    author: {
      name: "Peter Shankman",
      avatar: "twitter/petershankman",
      bio: "Author, Entrepreneur, and PR Strategist",
    },
    body: `Subject lines are EVERYTHING, and they simply MUST include a benefit to the reader.`,
    source_url: "https://www.shankman.com/how-to-send-an-email-to-me-or-anyone-and-guarantee-it-will-be-read/",
  },
];

export const tags = {
  all: {
    value: "all",
    name: "Show All",
    color: "",
  },
  tip: {
    value: "tip",
    name: "Tip",
    color: "#FF6948",
  },
  app: {
    value: "app",
    name: "App",
    color: "#4B5269",
  },
  advice: {
    value: "advice",
    name: "Advice",
    color: "#8348FF",
  },
  opinion: {
    value: "opinion",
    name: "Opinion",
    color: "#334569",
  },
  extension: {
    value: "extension",
    name: "Extension",
    color: "#3576F2",
  },
};

export default content;
