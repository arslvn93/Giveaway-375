const config = {
  "modalQuestions": [
    {
      "id": "favorite_local_events",
      "questionText": "Which type of local events do you enjoy attending most in Toronto?",
      "options": [
        { "value": "major_league_sports_games", "text": "Major league sports games" },
        { "value": "food_and_wine_festivals", "text": "Food and wine festivals" },
        { "value": "music_concerts", "text": "Music concerts" },
        { "value": "art_exhibitions", "text": "Art exhibitions" }
      ]
    },
    {
      "id": "lifestyle_preferences",
      "questionText": "On a typical weekend, how do you prefer to spend your time?",
      "options": [
        { "value": "exploring_real_estate", "text": "Exploring new real estate developments or open houses" },
        { "value": "relaxing_with_friends_family", "text": "Relaxing at home with friends and family" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or biking" },
        { "value": "dining_out", "text": "Dining at trendy restaurants or cafes" }
      ]
    },
    {
      "id": "travel_habits",
      "questionText": "How do you typically spend your vacations?",
      "options": [
        { "value": "international_travel", "text": "Traveling to international destinations" },
        { "value": "local_attractions", "text": "Visiting local attractions around Toronto" },
        { "value": "staycations", "text": "Taking staycations in luxury accommodations" },
        { "value": "road_trips", "text": "Going on road trips to explore new areas" }
      ]
    },
    {
      "id": "community_engagement",
      "questionText": "How involved are you in community activities or neighborhood associations?",
      "options": [
        { "value": "very_involved", "text": "Very involved, I attend meetings and events regularly" },
        { "value": "somewhat_involved", "text": "Somewhat involved, I participate occasionally" },
        { "value": "not_very_involved", "text": "Not very involved, but I’m interested in what's happening" },
        { "value": "not_involved", "text": "Not involved at all" }
      ]
    }
  ],
  "giveaway": {
    "name": "Toronto Blue Jays Tickets Giveaway",
    "heroHeadline": "Win Tickets to a <span class='highlight'>Toronto Blue Jays Game</span>!",
    "heroSubheadline": "Celebrate Canada Day with us on July 1st — enter the draw to win tickets worth $100!",
    "promotionDates": "Promotion runs from June 18, 2025 until July 1, 2025.",
    "endDate": "2025-07-02T23:59:59",
    "heroBackgroundImageUrl": "https://api.typeform.com/responses/files/4d70b80ce239ac7cb2403d6b95dd028bdd857cb5c8f1881dd46254015f5d135c/Screenshot_20250616_142200_Canva.jpg",
    "heroCtaText": "Enter Now for Your Chance to Win!",
    "entryFormCtaText": "Count Me In!",
    "successModalHeaderText": "🎉 You're In! 🎉",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Tickets Giveaway</strong> has been successfully submitted. Best of luck!",
    "successModalEmailPrompt": "Winner will be announced on July 2, 2025 via email. Keep an eye on your inbox!"
  },
  "prize": {
    "name": "Toronto Blue Jays Tickets",
    "value": "$100 Value",
    "description": "Win tickets to enjoy an exhilarating Toronto Blue Jays game this summer. Experience the atmosphere, live action, and create unforgettable memories with friends or family at Toronto's beloved ballpark.",
    "images": [
      {
        "src": "https://cdn.torontosun.com/wp-content/uploads/2020/08/Blue-Jays-game.mp4-2019812324.jpg",
        "alt": "Toronto Blue Jays Game"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-ticket-alt", "text": "Tickets for a live Blue Jays game worth $100" },
      { "icon": "fas fa-users", "text": "Perfect for family or friends to enjoy together" },
      { "icon": "fas fa-calendar-day", "text": "Experience the Canada Day event excitement" },
      { "icon": "fas fa-check-circle", "text": "No purchase necessary to enter" },
      { "icon": "fas fa-bolt", "text": "Fast, simple online entry at our booth" }
    ],
    "limitedTimeOfferText": "🎁 Limited Time Canada Day Giveaway!",
    "ctaButtonText": "I WANT TO WIN!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-map-marker-alt",
        "title": "Visit Our Booth",
        "description": "Come find us at the Canada Day event on July 1st."
      },
      {
        "icon": "fas fa-pen",
        "title": "Fill the Survey",
        "description": "Complete our quick, fun survey to enter the draw."
      },
      {
        "icon": "fas fa-calendar-check",
        "title": "Wait for the Draw",
        "description": "Winner will be announced on July 2nd via email."
      }
    ],
    "highlights": [
      { "icon": "fas fa-baseball-ball", "text": "Exclusive Blue Jays Tickets Giveaway" },
      { "icon": "fas fa-sun", "text": "Celebrate Summer Fun" },
      { "icon": "fas fa-smile", "text": "Easy to Enter & No Cost" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a chance to win Blue Jays tickets!",
    "entryCountText": "Join dozens of baseball fans already entered!",
    "socialSharePrompt": "Share this exciting giveaway with friends:",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Blue Jays Tickets for Canada Day!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair & Transparent Winner Selection",
      "text": "The winner will be selected at random using a certified random number generator, ensuring fairness to all participants."
    },
    "importantNotice": {
      "title": "Winner Announcement & Notification",
      "text": "The winner will be contacted via the email address submitted. Please check all email folders after the draw date."
    },
    "faq": [
      {
        "q": "Who can enter?",
        "a": "Open to legal residents of the local area aged 18 or older."
      },
      {
        "q": "When does the giveaway run?",
        "a": "From June 18, 2025 until July 1, 2025, entries accepted until midnight."
      },
      {
        "q": "How is the winner chosen?",
        "a": "One winner is randomly drawn from all eligible entries."
      },
      {
        "q": "When will the winner be notified?",
        "a": "Notification will occur on or about July 2, 2025 via email."
      },
      {
        "q": "How many entries per person?",
        "a": "One entry per person/email during the promotion."
      },
      {
        "q": "Is my data safe?",
        "a": "Your information is securely used only for this giveaway and follows our privacy policy."
      }
    ],
    "tips": [
      "Verify your email before submitting.",
      "Add our contact email to your address book.",
      "Follow Sky Group on social media for updates."
    ]
  },
  "footerContact": {
    "organizerName": "Sky Group",
    "organizerLogoUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/777776b6-d7a4-424e-8ea4-333ed3be7501/The_Sky_Group_X_Property.ca_cobranded_logo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WZSPVYT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T211553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGbToy7dJ8kIx25lI8o6iZMr6tPuYv44mCtCamRJUMxtAiEA%2Fdv7KvFSjmIBP4Kncl50di%2FKfxRwA2dzeNbzYft3AJwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDIwSomVv6y%2BBtdYqDircA2xeBLD4ERn8QS6Q4MhI0Lerr9C2Clx5WyP2dSN3i3SeEG7ysRvrFOR6%2BOT%2Fc29lkYUifFst1XBcKY85yKJ%2BBXlQulCbEVvWBzUArrL%2FmT0i4Iy8rV1yfN7nv6R5MKE9vKMqPZwNbOn%2FKuB6AwZMckJHOSiwEDwdam62vfCuFIJPKuUGRx8hF1qMPs2u%2FUUqATPxzKoR9rMYMSa7wiV5q8%2FqpskGnv%2F%2BkfPvTtIpJUVbZEQKa48nsJTYMYuoZxPpOBkU4I5TcYH%2BBJdljcWmaRAYGdrC1zHrWkEN9GUqw8FzcLKjzw9ZfZSiaiSQCDhcFXp8CShzkpm%2BkZO5fSUpWnlkwNRnzYoZG5eN9qd9R12dO%2BiS2LbLIHJGfnatbc%2BktvCknTWA2HL5%2F4z1A6c2j2DP1vC6u266lckCv8hQkONFBS%2Fc5c90ezLK0xR8SBH80Lcn%2F0DOBXX4KChyVanFwRtaLoma%2FWxbUW8r%2BYmhp1zAfYE8kvpMO5A3b2cdjSOnTy2cQ7%2FPb7jc9j4a%2Bd0Z0mB%2BNilVky2t%2FIeqE%2FW6KKf%2B0RTxiGOLWkiSazqlLxdTtinlj8JYSeND6uZeXTa8ROOm7fevp3ySaG%2BA82DU9u0WsRrwHKw864OcZ5kMKmOwsIGOqUBCWEuEmyr9TeharwkX2k3ZKQHerEM%2FJGslID6Wk%2B%2BEJDHI3MvPLlnAPnR6d%2FuguYtSQuUPwtJF9L8CXGKj0f8YGIYH9C2vrBIminNFIMm0lgz18aIgX0wOlGxs80r1XOGcRj6AUqYm%2FNsBKHqN6VFGAYh0ApgqkWQKpn2rrUEjl7aZXLZKlFFkv1nwyhcEMDEB8xOj15RmWKF3NsC7KUXVxQi3OAi&X-Amz-Signature=e0eb26e182bdc95ef5750a2672b96f25db441a930397b66cca4db35f74be3ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
    "email": "shar@theskygroup.ca",
    "phone": "1 647 887 4996",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "social": {
      "facebook": "https://www.facebook.com/theskygroupre",
      "instagram": "https://www.instagram.com/theskygroup_re"
    },
    "copyrightOwner": "Sky Group"
  },
  "meta": {
    "pageTitle": "Toronto Blue Jays Tickets Giveaway – Win Big This Canada Day!",
    "navBrandLogoText": "Sky Group",
    "privacyPolicyLink": "https://www.mls.theskygroup.ca/privacy-policy"
  },
  "settings": {
    "ghlWebhookUrl": "",
    "theme": "dark",
    "confettiColors": ["#005293", "#FFFFFF", "#FF0000", "#003366"],
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-375",
    "repoUrl": "https://github.com/arslvn93/Giveaway-375",
    "tag": "Toronto Blue Jays Canada Day 2025",
    "netlifyUrl": "http://Giveaway-375.netlify.app",
    "netlifyId": "1003271246"
  }
};