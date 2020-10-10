var factz = [
    "you make me feel like i can do anything",
    "wow wow wow",
    "you're the top young home cook age 8-13 in the country",
    "you're not good... you're perfect",
    "you have an amazing singing voice",
    "your dance skillz are unparalleled",
    "you're pretty and i like ya",
    "i love how much you love your dogs",
    "you're super hot",
    "you make me really happy",
    "i'm so grateful for you",
    "you are so driven and it inspires me",
    "boto ;)",
  ];
  
  function randomFact() {
    var number = Math.floor(Math.random() * factz.length);
    document.getElementById("facts").innerHTML = factz[number];
  }
  