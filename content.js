/**
 * This file contains all the tips and apps of https://inboxze.ro
 *
 * 💡 CONTRIBUTE:
 *
 * - Add your tip to the BOTTOM of this file.
 * - Keep your tips short and sweet.
 *
 * - We use unavatar.now.sh for avatars, so in the "avatar" field you can specify a username, email address or domain
 * - Use this URL to get a unique id to use for each tip: https://www.random.org/strings/?num=1&len=8&digits=on&loweralpha=on&unique=on&format=plain&rnd=new
 *
 * - You can use markdown in the tips body. If you use _emphasis_, text will be highlighted in the site (use this sparsely).
 *
 * - Use `source_url` by default, and only use `url` when visiting the link is required to learn more about the tip/workflow.
 *
 * - Use one of these tags:
 *   - tip
 *   - app
 *   - advice
 *   - opinion
 *   - extension
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
    id: "c5i1j2um",
    tag: "advice",
    author: {
      name: "Naval Ravikant",
      avatar: "twitter/naval",
      bio: "Entrepreneur, AngelList Co-Founder",
    },
    body: "If you can’t delete an email without flinching or responding, you won’t scale.",
    source_url: "https://twitter.com/naval/status/1012396688349192192?s=20",
  },
  {
    id: "8ujxxbrl",
    tag: "advice",
    author: {
      name: "James Hamblin",
      avatar: "twitter/jameshamblin",
      bio: "Staff Writer The Atlantic",
    },
    body:
      "Best? Cheers? Thanks?\n\nNone of the above. You can write your name if it feels too naked or abrupt not to have something down there. But it shouldn’t, and it wouldn’t if it were the norm.",
    source_url: "https://www.theatlantic.com/health/archive/2016/09/brevity-in-email/501986/",
  },
  {
    id: "v64tehbe",
    tag: "tip",
    author: {
      name: "Peter Shankman",
      avatar: "twitter/petershankman",
      bio: "Author, Entrepreneur, and PR Strategist",
    },
    body: `_Subject lines are EVERYTHING_, and they simply MUST include a benefit to the reader.`,
    source_url: "https://www.shankman.com/how-to-send-an-email-to-me-or-anyone-and-guarantee-it-will-be-read/",
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
      "I've been using [Mailbrew](https://mailbrew.com) for the past several months, and it's AWESOME.\n\nI use it to follow people who don't tweet a lot, and would be buried in my stream, but I definitely do not want to miss.\n\n_It's a perfect use case for email._",
  },
  {
    id: "0db5tzie",
    tag: "app",
    author: {
      name: "Mailbrew",
      avatar: "twitter/mailbrew",
      bio: "Automated digests on things you love.",
    },
    body:
      "You don't need many different newsletters to stay in touch with the people and things you care about.\n\nCreate your own email digest, from your favorite sources.",
    preview_image: "https://superlinear-assets.s3.us-east-1.amazonaws.com/inboxzero/mailbrew.png",
    offer: {
      title: "40% OFF for 3 Months",
      subtitle: "Click here to claim the discount",
      url: "https://mailbrew.com/?coupon=K9h1JrBP",
    },
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
    id: "589etf84",
    tag: "advice",
    author: {
      name: "Kitze",
      avatar: "twitter/thekitze",
      bio: "Founder React Academy",
    },
    body: "_Turn off all email notifications._ Phone, desktop, literally everywhere. You'll be fine.",
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
    id: "nckucbst",
    tag: "opinion",
    author: {
      name: "Alexis C. Madrigal",
      avatar: "twitter/alexismadrigal",
      bio: "Staff Writer The Atlantic",
    },
    body:
      "_Email is actually a tremendous, decentralized, open platform_ on which new, innovative things can and have been built. In that way, email represents a different model from the closed ecosystems we see proliferating across our computers and devices.\n\nEmail is a refugee from the open, interoperable, less-controlled 'web we lost.' It's an exciting landscape of freedom amidst the walled gardens of social networking and messaging services.\n\nYes, email is exciting. Get excited!",
    url: "https://www.theatlantic.com/technology/archive/2014/08/why-email-will-never-die/375973/",
    label: "Read Essay",
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
    id: "s4h604vl",
    tag: "advice",
    author: {
      name: "Naval Ravikant",
      avatar: "twitter/naval",
      bio: "Entrepreneur, AngelList Co-Founder",
    },
    body:
      "Note to world — 95% of what you want to meet for can be easily handled in a 5-minute email exchange. Be efficient!",
    source_url: "https://twitter.com/naval/status/203644276645707776?s=20",
  },
  {
    id: "szjvyo4o",
    tag: "opinion",
    author: {
      name: "James Hamblin",
      avatar: "twitter/jameshamblin",
      bio: "Staff Writer The Atlantic",
    },
    body:
      "Aspiring to inbox zero—an empty inbox, perfectly clean and organized and contained—is for most people some mythical idea. The world seems to be conspiring to keep it from happening. And _obsessing over it can be totally counterproductive_ if it means you give priority to emails that don’t deserve your attention at the moment.\n\nBut inbox zero is totally possible if you add emails to a to-do list, along with all other worldly tasks, that you can keep prioritized according to what you really need to get done. What you really want out of any given day, week, or lifetime. Which is rarely to be beholden to the whims of an inbox.",
    source_url: "https://www.theatlantic.com/health/archive/2016/09/brevity-in-email/501986/",
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
    id: "fqx7o672",
    tag: "opinion",
    author: {
      name: "Brod Gondwana",
      avatar: "twitter/brongondwana",
      bio: "CEO at Fastmail",
    },
    body:
      "The email in your mailbox is _your copy of what was said_, and nobody else can change it or make it go away.\n\nThe fact that the content of an email can’t be edited is one of the best things about POP3 and IMAP email standards. I admit it annoyed me when I first ran into it – why can’t you just fix up a message in place – but the immutability is the real strength of email.\n\nYou can safely forget the detail of something that you read in an email, knowing that when you go back to look at it, the information will be exactly the same.",
    source_url: "https://fastmail.blog/2018/02/14/email-is-your-electronic-memory/",
    label: "Read blog post",
  },
  {
    id: "erpxshiu",
    tag: "tip",
    author: {
      name: "Keith Rarick",
      avatar: "twitter/krarick",
      bio: "Programmer",
    },
    body: "Mute. Heavily. The 'm' shortcut key is your friend.",
    url: "https://xph.us/2013/01/22/inbox-zero-for-life.html",
    label: "Read more tips & shortcuts",
  },
  {
    id: "qskiwa9h",
    tag: "opinion",
    author: {
      name: "Ryan Hoover",
      avatar: "twitter/rrhoover",
      bio: "Product Hunt Founder",
    },
    body:
      "I never understood inbox zero.\n\nEvery email isn’t more important than all the other commitments I’ve made.",
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
      "Multitasking kills productivity, and doing email in your browser is a recipe for disaster.\n\nBoxy Suite brings Gmail, Calendar and other G Suite apps to your Mac, with single-purpose apps that look and feel native.",
    preview_image: "https://superlinear-assets.s3.us-east-1.amazonaws.com/inboxzero/boxy-suite.png",
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
    body: `Inbox zero is a fool's errand.\n\nIt puts you on the treadmill of dealing with every email as soon as it comes in, and even make that appear like the organized, virtuous thing to do. But it's not.\n\n_All email is not important_. In fact, most of it is not important! I savor my [Mailbrews](https://mailbrew.com) exactly because they're not urgent. I don't try to read it all as soon as it hits my inbox.\n\nThis has been a primary mission for our new email product [Hey](https://hey.com) – get you off the inbox-zero treadmill, and back to loving email, because you're reading the important stuff urgently, and the leisurely stuff when you have time.\n\nNo stress, no shame.`,
  },
  {
    id: "imlnicr3",
    tag: "advice",
    author: {
      name: "Michael Waxman",
      avatar: "twitter/wxmn",
      bio: "Founder of Grouper",
    },
    body:
      "This widely circulated system for using Gmail from Andreas Klinger was the tipping point. It takes about 15 minutes to set up, and gives you a thoughtful, efficient system for plowing through your inbox.\n\nThe system itself is great, but I found that just having a system at all made it a lot easier to dive in to a full inbox.",
    source_url: "http://waxman.me/30-days-of-inbox-zero-how-i-did-it",
    url: "https://klinger.io/post/71640845938/dont-drown-in-email-how-to-use-gmail-more",
    label: "Read about this system",
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
      'Check and answer emails once per day.\n\nMark emails that can wait with a "fluff" label and answer them during the weekend.',
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
    id: "75yrc814",
    tag: "advice",
    author: {
      name: "Ja Raphael",
      avatar: "twitter/jrraphael",
      bio: "Writer Android Intelligence, Fast Company and more",
    },
    body:
      "For every email you encounter, choose from the following fast-triage options:\n\n* If a message requires no action on your behalf, archive it immediately.\n\n* If a message requires a simple reply that you can knock out in a minute or less, respond right then and there—and then archive it immediately.\n\n* If a message requires some level of thought or response that you can’t get to right away, snooze it to a time and date when you will be able to handle it—whether it’s later that same day, sometime the following week, or on a Friday two months down the road.",
    url: "https://www.fastcompany.com/40507663/the-7-step-guide-to-achieving-inbox-zero-and-staying-there-in-2018",
    label: "Read the guide to inbox zero",
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
    id: "of6jsxq1",
    tag: "tip",
    author: {
      name: "Tim Sneath",
      avatar: "twitter/timsneath",
      bio: "Product Manager for Flutter & Dart",
    },
    body:
      "Moving emails out of the inbox is no good if it simply hides them from sight. It’s critical that they’re visible.\n\nSo I rely on the [Multiple Inboxes feature](https://gsuite.google.com/learning-center/products/gmail/choose-inbox-type/#!/section-4) in Gmail to ensure that three key folders are in view:\n\n* Follow Up\n\n* Waiting\n\n* Read Through.\n\nMultiple Inboxes has been around for a while in Gmail, but only recently graduated from the experimental Labs area. You can enable it from the Advanced tab under Settings.",
    preview_image: "https://miro.medium.com/max/2000/1*M1DUvFWbHbX4JbUSSGhjYA.png",
    source_url: "https://medium.com/@timsneath/zero-inbox-94b326683183",
  },
  {
    id: "69l3kl5g",
    tag: "app",
    author: {
      name: "Diary Email",
      image: "https://diaryemail.com/favicon-96x96.png",
      bio: "Email as your diary.",
    },
    body:
      "Diary Email is a calm place to capture your life and share the best moments with your friends. No big brother is trying to get into your head to sell you more stuff.",
    preview_image: "https://diaryemail.com/card.png",
    offer: {
      title: "30% OFF",
      subtitle: `Enter "ZEROINBOX" during checkout`,
      url: "https://diaryemail.com/",
    },
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
    body: `The number one tool I use probably 20 times a day is FollowUpThen.\n\n I can forward any email I want right to them, specify when I want to follow up, and they will send it back then.`,
    url: "https://www.followupthen.com/",
    source_url: "https://www.gmass.co/gmailgenius/email-peter-shankman/",
  },
  {
    id: "43avkdi5",
    tag: "tip",
    author: {
      name: "Andrew Mellen",
      avatar: "twitter/andrewjmellen",
      bio: "Professional Organizer",
    },
    body: `Always _update the subject line when you’re changing thread_ or content. Don’t allow threads to carry over for months. With subject lines, always use complete information. Try to avoid being vague with phrases like “checking in” or “update,” instead write “update on the Jones project.” It’ll save you and the recipient time because you won’t have to guess what’s inside the email.`,
    source_url: "https://www.gmass.co/gmailgenius/how-i-email-andrew-mellen/",
  },
  {
    id: "2dnug8c1",
    tag: "tip",
    author: {
      name: "Brendan Hufford",
      avatar: "twitter/BrendanHufford",
      bio: "Creator, SEO for the Rest of Us",
    },
    body: `Emails are either answered immediately, starred for later, forwarded to a teammate, or deleted. Following the [Eisenhower Box](https://jamesclear.com/eisenhower-box).`,
    source_url: "https://www.gmass.co/gmailgenius/how-i-email-brendan-hufford/",
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
    color: "#4545A1",
  },
  extension: {
    value: "extension",
    name: "Extension",
    color: "#3576F2",
  },
};

export default content;
