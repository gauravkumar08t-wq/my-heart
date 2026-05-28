export default function RomanticApologyWebsite() {
  const holdStart = () => {
    const fill = document.getElementById("forgiveFill");
    const text = document.getElementById("forgiveText");

    let width = 0;
    const interval = setInterval(() => {
      width += 2;
      if (fill) fill.style.width = `${width}%`;

      if (text) {
        if (width < 30) text.innerText = "Still holding...? 🥺";
        else if (width < 60) text.innerText = "You’re so cute even when angry 💕";
        else if (width < 90) text.innerText = "Almost there babyyy ❤️";
        else text.innerText = "Thank you for holding 🫶";
      }

      if (width >= 100) {
        clearInterval(interval);
        alert("YAYYYY ❤️ Thank you for forgiving me 🥺✨.... I love so much❤️ mmmmuuuuuaaaahhhh😘");
      }
    }, 80);

    const stop = () => clearInterval(interval);

    window.addEventListener("mouseup", stop, { once: true });
    window.addEventListener("touchend", stop, { once: true });
  };
  const reasons = [
    "Because your smile fixes my worst days ❤️",
    "Because you make life feel softer and happier 🌸",
    "Because our talks mean everything to me ✨",
    "Because I love you every single day 💕",
    "Because you are my comfort person 🫶",
    "Because I never want to lose us 🥺",
    "Because your laugh is my favorite sound 😊",
    "Because loving you feels like home 💖",
    "Because you are you -- my Laadoo ✨🫂",
    "Because I can't imagine a day without you",
  ];

  const memories = [
    {
      title: "The First Time We Talked",
      text: "?...aa skte discord?...Aa rhe...I didn’t know that one conversation would become my favorite part of life.",
    },
    {
      title: "Our Funniest Moment",
      text: "There are many... me wearing saree...On 12th February at the university… all those moments, conversations, and feelings still stay in my heart. Still smiling thinking about our silly jokes.",
    },
    {
      title: "The Day I Realized",
      text: "01-01-2026..(usse phele bhi aapke bare mai hi sochte thai)I realized you became the person I think about before sleeping and after waking up.",
    },
  ];

  const futurePlans = [
    "Late night talks and walks 🌃",
    "Matching hoodies 🧥",
    "Movie dates 🍿",
    "Random food trips 🍕",
    "Watching sunrise together 🌅",
    "Growing together🫂 and many more",
  ];

  const randomReason = () => {
    const text = reasons[Math.floor(Math.random() * reasons.length)];
    const element = document.getElementById("reasonBox");
    if (element) {
      element.innerText = text;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-pink-950 to-black text-white overflow-hidden relative font-sans">
      {/* Floating Hearts + Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-white opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 6 + 4}px`,
            }}
          >
            ✦
          </div>
        ))}

        {[...Array(20)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-400 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 10}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

{/* Floating Apology Notes */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
  {[
    "I’m sorry 🥺",
    "I love you ❤️",
    "Please smile once ❤️",
    "I miss you 🌙",
    "You mean everything to me 💕",
    "Still yours ✨",
    "Come back to me 💌",
  ].map((note, index) => {
    const positions = [
      { left: "5%", top: "12%" },
      { left: "10%", top:"50%" },
      { left: "55%", top: "88%" },
      { left: "18%", top: "52%" },
      { left: "50%", top: "78%" },
      { left: "35%", top: "75%" },
      { left: "82%", top: "88%" },
    ];

    return (
      <div
        key={index}
        className="absolute bg-pink-500/20 backdrop-blur-md border border-pink-200/30 rounded-2xl px-5 py-3 text-pink-50 text-sm md:text-base shadow-xl animate-[float_6s_ease-in-out_infinite]"
        style={{
          left: positions[index].left,
          top: positions[index].top,
          animationDelay: `${index * 1.5}s`,
        }}
      >
        {note}
      </div>
    );
  })}
</div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <div className="w-40 h-40 rounded-full border-4 border-pink-400 flex items-center justify-center text-6xl mb-8 animate-pulse shadow-2xl bg-pink-500/10 backdrop-blur-lg">
          ❤️
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
           My Love💖
        </h1>

        <p className="max-w-2xl text-lg md:text-2xl text-pink-100 leading-relaxed">
          I know I hurt you, and I hate the thought of making the person I love feel sad.
          This little website is only for you… because you mean everything to me.
        </p>

        <button
          onClick={() => {
            document.getElementById("letter")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 px-8 py-4 bg-pink-500 hover:bg-pink-400 transition rounded-full text-xl shadow-2xl"
        >
          Open My Heart ❤️
        </button>
      </section>

      {/* Letter Section */}
      <section
        id="letter"
        className="py-24 px-6 flex justify-center relative z-10"
      >
        <div className="max-w-3xl bg-white/10 backdrop-blur-lg border border-pink-400/20 rounded-3xl p-10 shadow-2xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-pink-300">
            A Letter💌 For You Laadoo✨🫂 
          </h2>

          <p className="text-lg leading-9 text-pink-50">
            I know sorry alone cannot magically fix everything, but I truly want you to know
            that you are precious to me. I miss your smile, your voice, your tiny reactions,
            and even your cute anger.
            <br /><br />
            I don’t want misunderstandings, or mistakes to become bigger than us.
            I still want us, our memories, and all the little moments.
            <br /><br />
            No matter what happens, loving you has been one of the best things in my life.
          </p>
        </div>
      </section>

      {/* Memories */}
      <section className="py-24 px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-pink-300">
          Our Memories ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-pink-300/20 hover:scale-105 transition duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-pink-200">
                {memory.title}
              </h3>
              <p className="text-pink-50 leading-8">{memory.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons Generator */}
      <section className="py-24 px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-10 text-pink-300">
          Reasons I Love You 💖
        </h2>

        <div
          id="reasonBox"
          className="max-w-2xl mx-auto bg-white/10 rounded-3xl p-10 text-2xl backdrop-blur-lg border border-pink-300/20 min-h-[140px] flex items-center justify-center"
        >
          Click the button below ❤️
        </div>

        <button
          onClick={randomReason}
          className="mt-10 px-8 py-4 bg-pink-500 hover:bg-pink-400 transition rounded-full text-xl shadow-2xl"
        >
          Show Me Another Reason 🌸
        </button>
      </section>

      {/* Future */}
      <section className="py-24 px-6 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 text-pink-300">
          Our Future Together 🌙
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {futurePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-pink-500/10 border border-pink-300/20 rounded-3xl p-8 text-center text-2xl hover:scale-105 transition duration-300"
            >
              {plan}
            </div>
          ))}
        </div>
      </section>

      {/* Forgive Button */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-pink-300">
          One More Thing 🥺
        </h2>

        <p className="max-w-2xl text-xl text-pink-100 leading-8 mb-10">
          I know you’re hurt, but I hope this little effort shows how much you mean to me.
          No matter what, I’ll always love you.
        </p>

        <div className="w-full max-w-xl mx-auto">
          <div className="w-full h-16 bg-white/10 rounded-full overflow-hidden border border-pink-300/20 relative">
            <div
              id="forgiveFill"
              className="absolute left-0 top-0 h-full bg-pink-500 transition-all duration-75"
              style={{ width: "0%" }}
            ></div>

            <div
              id="forgiveText"
              className="absolute inset-0 flex items-center justify-center text-lg z-10"
            >
              Press and Hold to Forgive Me 💕
            </div>
          </div>

          <button
            onMouseDown={holdStart}
            onTouchStart={holdStart}
            className="mt-8 px-12 py-5 bg-pink-500 hover:bg-pink-400 rounded-full text-2xl shadow-2xl transition duration-300 hover:scale-110"
          >
            Hold Here ❤️
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-pink-200 relative z-10">
        Made with love for you Bhargwi and a whole lot of missing you ❤️
      </footer>
    </div>
  );
}
