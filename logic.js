var factz = [
    "you make me feel like i can do anything",
    "wow wow wow",
    "you're super cute",
    "you're the top young home cook age 8-13 in the country",
    "you're not good... you're perfect",
    "you have an amazing singing voice",
    "you're like such a good dancer",
    "you're pretty and i like ya",
    "i love how much you love alice and lady",
    "even tho i never say it i think you're like super hot",
    "you make me really happy",
    "i'm so grateful for you",
    "you are so driven and it inspires me",
    "boto ;p",
    "i appreciate that you drink all the mango trulys",
    "i love that you try talk pidgin at me",
    "you super podagee",
    "thank you for everything you do to support me",
    "you notice all the little things i do and that means a lot to me",
    "you've for real changed my life and i'm so happy i met you",
  ];
  
  function randomFact() {
    var number = Math.floor(Math.random() * factz.length);
    document.getElementById("facts").innerHTML = factz[number];
  }
  