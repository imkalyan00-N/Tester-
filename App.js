import React, { useState } from 'react';
import { 
  BookOpen, Code2, Play, Copy, CheckCircle2, 
  ChevronDown, Layout, MonitorPlay, Sparkles, AlertCircle
} from 'lucide-react';

// Lohi papa, ikkada 34 programs data undi. Nuvvu adiginattu "Deep Telugu Explanation" add chesa.
const labPrograms = [
  {
    id: 1, category: "HTML", title: "1. Working of Lists (ul, ol, dl)",
    telugu: "Lohi, Lists ante simple ga mana pellilo bhojanalu menu anuko. \n\n1. Unordered List (<ul>): Items mundu chukkalu (bullets) vasthai. Order tho pani ledu.\n2. Ordered List (<ol>): Items mundu 1, 2, 3.. ani numbers vasthai. Rank lu ivvadaniki idi best.\n3. Description List (<dl>): Oka heading (dt) dani kinda chinna explanation (dd) ivvadaniki vadutham. Dictionary laaga annamata.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h3>Unordered List (Bullets)</h3>
  <ul>
    <li>Chicken Biryani</li>
    <li>Mutton Mandi</li>
  </ul>

  <h3>Ordered List (Numbers)</h3>
  <ol>
    <li>First Rank: Pushpa</li>
    <li>Second Rank: Rocky</li>
  </ol>

  <h3>Description List</h3>
  <dl>
    <dt>HTML</dt>
    <dd>Idi web page ki structure isthadi.</dd>
  </dl>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h3 className="font-bold mb-2">Unordered List (Bullets)</h3>
        <ul className="list-disc pl-5 mb-4"><li>Chicken Biryani</li><li>Mutton Mandi</li></ul>
        <h3 className="font-bold mb-2">Ordered List (Numbers)</h3>
        <ol className="list-decimal pl-5 mb-4"><li>First Rank: Pushpa</li><li>Second Rank: Rocky</li></ol>
        <h3 className="font-bold mb-2">Description List</h3>
        <dl><dt className="font-bold">HTML</dt><dd className="ml-4">Idi web page ki structure isthadi.</dd></dl>
      </div>
    )
  },
  {
    id: 2, category: "HTML", title: "2. Working of Hyperlinks",
    telugu: "Hyperlink ante 'Magic Door' bhayya. Oka page nunchi inko page ki jump aipovachu. \n\nDeeniki <a> (Anchor) tag vadutham. Ekkadaki vellali anedi 'href' lopal istham. \n\nOka chinna trick: target=\"_blank\" ani isthe, patha page alage unchi, kotha tab lo link open chesthadi. Idi lab lo pakka rayali!",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Hyperlinks Example</h2>
  
  <!-- External Link opening in new tab -->
  <a href="https://google.com" target="_blank">
    Click here to open Google
  </a>
  <br><br>
  
  <!-- Email Link -->
  <a href="mailto:principal@college.edu">
    Send an Email to Principal
  </a>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="text-xl font-bold mb-4">Hyperlinks Example</h2>
        <a href="#" className="text-blue-600 underline block mb-4">Click here to open Google</a>
        <a href="#" className="text-blue-600 underline block">Send an Email to Principal</a>
      </div>
    )
  },
  {
    id: 3, category: "HTML", title: "3. Images with Specific Height & Width",
    telugu: "Nee DP web page lo pettalante <img> tag kavali. Kani photo mari peddaga unte page asahyanga untadi.\n\nAnduke 'width' (vedalpu) mariyu 'height' (podavu) attributes vadutham. Ivi pixels lo istham. 'alt' tag endukante, okavela net slow ayyi photo load avvakapothe, akkada ee text kanipisthadi.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>My Profile & Friend Profile</h2>
  
  <p>My Photo (Width 200, Height 200):</p>
  <img src="myphoto.jpg" alt="My Image" width="200" height="200" border="2">
  
  <p>Friend Photo (Width 150, Height 300):</p>
  <img src="friend.jpg" alt="Friend Image" width="150" height="300" border="2">
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="font-bold mb-2">My Profile & Friend Profile</h2>
        <p>My Photo (Width 200, Height 200):</p>
        <div className="w-[200px] h-[200px] border-2 border-black bg-gray-200 flex items-center justify-center text-gray-500 mb-4">[My Photo]</div>
        <p>Friend Photo (Width 150, Height 300):</p>
        <div className="w-[150px] h-[300px] border-2 border-black bg-gray-200 flex items-center justify-center text-gray-500 text-center">[Friend Photo]</div>
      </div>
    )
  },
  {
    id: 4, category: "HTML", title: "4. Image Gallery (Thumbnails)",
    telugu: "Oka page lo 10 pedda bommalu pedithe, page load avvadaniki yugalu padtadi. \n\nAnduke 'Thumbnails' (chinna size photos) petti, daaniki hyperlink (<a> tag) istham. Chinnappudu click chesthe, pedda photo open avthadi. Deenne gallery antaru.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Mini Image Gallery</h2>
  <p>Click on the small image to see it full size!</p>
  
  <!-- Image 1 -->
  <a href="large_image1.jpg" target="_blank">
    <img src="thumb1.jpg" width="100" height="100" alt="Thumb 1" border="1">
  </a>
  
  <!-- Image 2 -->
  <a href="large_image2.jpg" target="_blank">
    <img src="thumb2.jpg" width="100" height="100" alt="Thumb 2" border="1">
  </a>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="font-bold mb-2">Mini Image Gallery</h2>
        <p className="mb-4">Click on the small image to see it full size!</p>
        <div className="flex gap-4">
          <div className="w-[100px] h-[100px] bg-blue-100 border border-blue-500 flex items-center justify-center cursor-pointer text-sm text-blue-800">Thumb 1</div>
          <div className="w-[100px] h-[100px] bg-green-100 border border-green-500 flex items-center justify-center cursor-pointer text-sm text-green-800">Thumb 2</div>
        </div>
      </div>
    )
  },
  {
    id: 5, category: "HTML", title: "5. Working of Tables",
    telugu: "Tables ante mana exam hall seating arrangement anuko. Rows (addanga) and Columns (niluvuga) untayi. \n\n<tr> = Table Row (Oka line)\n<th> = Table Header (Main heading, bold ga osthadi)\n<td> = Table Data (Lopala matter)\n\nBorder ivvakapothe geethalu ravu bhayya, adi gurtupettuko.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Student Marks Table</h2>
  <table border="1" cellpadding="10" cellspacing="0">
    <tr bgcolor="lightgray">
      <th>Roll Number</th>
      <th>Student Name</th>
      <th>Marks</th>
    </tr>
    <tr>
      <td>501</td>
      <td>Pushpa Raj</td>
      <td>95</td>
    </tr>
    <tr>
      <td>502</td>
      <td>Rocky Bhai</td>
      <td>88</td>
    </tr>
  </table>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="font-bold mb-2">Student Marks Table</h2>
        <table className="border-collapse border border-gray-800 w-full text-left">
          <thead className="bg-gray-200">
            <tr><th className="border border-gray-800 p-2">Roll Number</th><th className="border border-gray-800 p-2">Student Name</th><th className="border border-gray-800 p-2">Marks</th></tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-800 p-2">501</td><td className="border border-gray-800 p-2">Pushpa Raj</td><td className="border border-gray-800 p-2">95</td></tr>
            <tr><td className="border border-gray-800 p-2">502</td><td className="border border-gray-800 p-2">Rocky Bhai</td><td className="border border-gray-800 p-2">88</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 6, category: "HTML", title: "6. Time Table (Rowspan & Colspan)",
    telugu: "Idi star program! Timetable lo 'Lunch Break' anedi anni classes ki kalipi niluvuga okate untadi kada? Appudu 'rowspan' vadutham (rows ni kaluputhundi). \n\nAde rendu periods oke lab unte, addanga kalapali... appudu 'colspan' vadutham. Rowspan = Niluvu merge, Colspan = Addam merge.",
    code: `<!DOCTYPE html>
<html>
<body>
  <table border="1" cellpadding="10" width="100%">
    <tr bgcolor="lightblue">
      <th>Day</th><th>Period 1</th><th>Period 2</th><th>Break</th><th>Period 3</th>
    </tr>
    <tr align="center">
      <td>Monday</td>
      <td>HTML</td>
      <td>CSS</td>
      <!-- Rowspan: Merges 2 rows vertically -->
      <td rowspan="2" bgcolor="yellow"><b>LUNCH</b></td>
      <td>JS</td>
    </tr>
    <tr align="center">
      <td>Tuesday</td>
      <!-- Colspan: Merges 2 columns horizontally -->
      <td colspan="2" bgcolor="lightgreen">Full Stack Lab (2 Hrs)</td>
      <td>Theory</td>
    </tr>
  </table>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <table className="border-collapse border border-gray-800 w-full text-center text-sm">
          <thead><tr className="bg-blue-200"><th className="border border-gray-800 p-2">Day</th><th className="border border-gray-800 p-2">Period 1</th><th className="border border-gray-800 p-2">Period 2</th><th className="border border-gray-800 p-2">Break</th><th className="border border-gray-800 p-2">Period 3</th></tr></thead>
          <tbody>
            <tr><td className="border border-gray-800 p-2">Monday</td><td className="border border-gray-800 p-2">HTML</td><td className="border border-gray-800 p-2">CSS</td><td rowSpan={2} className="border border-gray-800 p-2 bg-yellow-200 font-bold">LUNCH</td><td className="border border-gray-800 p-2">JS</td></tr>
            <tr><td className="border border-gray-800 p-2">Tuesday</td><td colSpan={2} className="border border-gray-800 p-2 bg-green-200">Full Stack Lab (2 Hrs)</td><td className="border border-gray-800 p-2">Theory</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: 7, category: "HTML", title: "7. Working of Forms (Registration)",
    telugu: "User nunchi data theeskovali ante form eh gathi. \n\n- Textbox kosam: <input type='text'>\n- Password kosam: <input type='password'> (idi chukkalu laaga chupisthadi)\n- Gender lanti single choice kosam: <input type='radio'>\n- Dropdown kosam: <select> and <option>.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Student Registration</h2>
  <form>
    <label>Name:</label>
    <input type="text" placeholder="Enter full name"><br><br>

    <label>Password:</label>
    <input type="password"><br><br>

    <label>Gender:</label>
    <input type="radio" name="gender"> Male
    <input type="radio" name="gender"> Female<br><br>

    <input type="submit" value="Register Now">
  </form>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="font-bold mb-4">Student Registration</h2>
        <div className="space-y-3">
          <div><label className="mr-2">Name:</label><input type="text" placeholder="Enter full name" className="border p-1 rounded" /></div>
          <div><label className="mr-2">Password:</label><input type="password" value="12345" readOnly className="border p-1 rounded" /></div>
          <div><label className="mr-2">Gender:</label><input type="radio" name="g" defaultChecked/> Male <input type="radio" name="g" className="ml-2"/> Female</div>
          <button className="bg-gray-200 border border-gray-400 px-4 py-1 rounded shadow-sm">Register Now</button>
        </div>
      </div>
    )
  },
  {
    id: 8, category: "HTML", title: "8. Working of Frames (3 Parts)",
    telugu: "Oka pedda TV screen ni 3 mukkalu chesi, okko mukka lo okko channel pettinattu annamata! \n\nPatha rojullo <frameset> vadevalu. Kani ippudu latest HTML5 lo <iframe> leda simple ga CSS tho divide chestham. Lab kosam CSS tho divide cheyadam safe & correct.",
    code: `<!DOCTYPE html>
<html>
<style>
  body { display: flex; height: 100vh; margin: 0; }
  .left { width: 30%; background: #ffcccc; padding: 20px; }
  .middle { width: 40%; background: #ccffcc; padding: 20px; }
  .right { width: 30%; background: #ccccff; padding: 20px; }
</style>
<body>
  <div class="left">Part 1 (Left Menu)</div>
  <div class="middle">Part 2 (Main Content)</div>
  <div class="right">Part 3 (Ads)</div>
</body>
</html>`,
    output: (
      <div className="w-full h-[150px] flex border-2 border-gray-800">
        <div className="w-[30%] bg-red-200 p-2 flex items-center justify-center text-center text-sm">Part 1 (Left Menu)</div>
        <div className="w-[40%] bg-green-200 p-2 flex items-center justify-center text-center font-bold">Part 2 (Main Content)</div>
        <div className="w-[30%] bg-blue-200 p-2 flex items-center justify-center text-center text-sm">Part 3 (Ads)</div>
      </div>
    )
  },
  {
    id: 9, category: "HTML", title: "9. Semantic HTML5 Tags",
    telugu: "Semantic ante 'Meaning' ani artham. Pata rojullo anitiki <div> vadevalu. Kani Google ki idi title, idi footer ani theliyali kada?\n\nAnduke <header> (Top section), <footer> (Bottom), <nav> (Menu links), <article> (Main story), <aside> (Pakkana unde ads) kotha tags thecharu.",
    code: `<!DOCTYPE html>
<html>
<body>
  <header><h1>My Semantic Blog</h1></header>
  
  <nav>
    <a href="#">Home</a> | <a href="#">About</a>
  </nav>
  
  <main>
    <article>
      <h2>First Post</h2>
      <div>This is main content inside div.</div>
      <span>Author: Pushpa</span>
    </article>
    <aside>Related Ads here.</aside>
  </main>
  
  <footer>Copyright 2026</footer>
</body>
</html>`,
    output: (
      <div className="p-2 border border-gray-400 bg-white text-black text-sm">
        <header className="bg-gray-200 p-2 text-center font-bold">My Semantic Blog (Header)</header>
        <nav className="bg-gray-100 p-1 my-2">Home | About (Nav)</nav>
        <div className="flex gap-2">
          <article className="flex-[3] bg-gray-50 border p-2">
            <h2 className="font-bold">First Post (Article)</h2>
            <div>Content inside div</div>
            <span className="text-gray-500 italic">Author: Pushpa</span>
          </article>
          <aside className="flex-1 bg-yellow-50 border p-2">Ads (Aside)</aside>
        </div>
        <footer className="bg-gray-200 p-2 text-center mt-2">Copyright 2026 (Footer)</footer>
      </div>
    )
  },
  {
    id: 10, category: "HTML", title: "10. Embed Audio and Video",
    telugu: "Web page lo patalu, cinemalu pettadaniki <audio> and <video> tags. \n\nMukhyamaina vishayam: 'controls' ane padam rayakapothe, play button, volume penchadam lantivi emi kanipinchavu. Bomma matrame osthadi.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h3>Audio Player</h3>
  <!-- 'controls' shows play/pause buttons -->
  <audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser does not support audio.
  </audio>

  <h3>Video Player</h3>
  <video width="300" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h3 className="font-bold mb-2">Audio Player</h3>
        <div className="w-[250px] h-[40px] bg-gray-100 border rounded-full flex items-center px-4 mb-4">▶️ <div className="flex-1 mx-2 h-1 bg-gray-300"></div> 🔊</div>
        <h3 className="font-bold mb-2">Video Player</h3>
        <div className="w-[250px] h-[150px] bg-black text-white flex items-center justify-center relative">
          [Video Display]
          <div className="absolute bottom-0 w-full h-[30px] bg-white/20 flex items-center px-2">▶️</div>
        </div>
      </div>
    )
  },
  {
    id: 11, category: "CSS", title: "11. Apply 3 Types of CSS Levels",
    telugu: "HTML ki makeup veyadaniki 3 types CSS untadi.\n\n1. Inline: Tag lopalane 'style' petti veyadam.\n2. Internal: Head section lo <style> tag lopal rayadam.\n3. External: Vere file (style.css) lo rasi, daniki link ivvadam. \nIdi thelisthe CSS foundations thelisnatte.",
    code: `<!DOCTYPE html>
<html>
<head>
  <!-- 2. INTERNAL CSS -->
  <style>
    .internal-txt { color: blue; font-size: 20px; }
  </style>
  
  <!-- 3. EXTERNAL CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- 1. INLINE CSS -->
  <h2 style="color: red; background: yellow;">
    1. This is Inline CSS
  </h2>
  
  <p class="internal-txt">2. This is Internal CSS</p>
  
  <p class="external-txt">3. This uses External CSS</p>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 style={{color: 'red', backgroundColor: 'yellow'}} className="text-xl font-bold mb-4">1. This is Inline CSS</h2>
        <p style={{color: 'blue', fontSize: '20px'}} className="mb-4">2. This is Internal CSS</p>
        <p style={{color: 'green', fontStyle: 'italic'}}>3. This uses External CSS</p>
      </div>
    )
  },
  {
    id: 12, category: "CSS", title: "12. Simple Selectors (Element, Class, ID)",
    telugu: "Selector ante evarni pattukuni makeup veyyalo cheppedi.\n\n1. Element: Tag peru tho pilavadam (Ex: h2)\n2. Class (.): Dot petti pilustham. Idhi okate class chala mandiki ivvochu.\n3. ID (#): Hash petti pilustham. Idhi page mothaniki okkadike (unique) undali.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Element Selector */
    p { color: gray; }
    
    /* Class Selector (Dot) */
    .highlight { background-color: lightgreen; }
    
    /* ID Selector (Hash) */
    #main-title { color: red; text-decoration: underline; }
  </style>
</head>
<body>
  <h2 id="main-title">This uses ID Selector</h2>
  <p>Normal paragraph uses Element Selector.</p>
  <p class="highlight">This uses Class Selector.</p>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="text-red-600 underline font-bold text-xl mb-2">This uses ID Selector</h2>
        <p className="text-gray-500 mb-2">Normal paragraph uses Element Selector.</p>
        <p className="bg-green-200 mb-2 p-1">This uses Class Selector.</p>
      </div>
    )
  },
  {
    id: 14, category: "CSS", title: "14. Combinator Selectors",
    telugu: "Relations batti style apply chestham!\n\n1. Descendant (Space): `div p` ante div lopala ekkada 'p' unna select aithadi.\n2. Child (>): `ul > li` ante direct ga ul ki puttina 'li' matrame.\n3. Sibling (+): `h1 + p` ante h1 pakkana unna 'p' ki matrame apply aithadi.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Space = Any 'p' inside 'div' */
    div p { color: red; }
    
    /* '+' = Sibling directly after 'h2' */
    h2 + p { background-color: yellow; }
  </style>
</head>
<body>
  <div>
    <p>Inside div (Red)</p>
    <section><p>Deep inside div (Also Red)</p></section>
  </div>

  <h2>Main Heading</h2>
  <p>Directly after H2 (Yellow Bg)</p>
  <p>Normal text</p>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <div className="border border-gray-400 p-2 mb-4">
          <p className="text-red-500">Inside div (Red)</p>
          <p className="text-red-500 ml-4">Deep inside div (Also Red)</p>
        </div>
        <h2 className="font-bold text-lg">Main Heading</h2>
        <p className="bg-yellow-200">Directly after H2 (Yellow Bg)</p>
        <p>Normal text</p>
      </div>
    )
  },
  {
    id: 15, category: "CSS", title: "15. Pseudo Selectors",
    telugu: "Idi state ni pattukuntadi. Ante mouse button meeda petti click cheyanappudu (hover) oka color, click chesinappudu inko color ivvali ante Pseudo selectors (:) vadutham. \nEx: button:hover, p::first-letter.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* Hover state */
    button:hover { 
      background-color: black; 
      color: white; 
    }
    
    /* First letter styling */
    p::first-letter {
      font-size: 30px;
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <button style="padding:10px;">Hover Over Me!</button>
  <p>This paragraph has a huge first letter magically!</p>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <button className="bg-black text-white px-4 py-2 mb-4 rounded">Hover Over Me! (Simulated)</button>
        <p><span className="text-[30px] text-red-600 font-bold">T</span>his paragraph has a huge first letter magically!</p>
      </div>
    )
  },
  {
    id: 17, category: "CSS", title: "17. Reference a Color in CSS",
    telugu: "Rangu eyyali saar! Ela eyali? 3 ways unnayi bhayya:\n\n1. Name: Direct peru cheppadam (Red, Tomato).\n2. Hex Code: Hash petti code ivvadam (#FF0000).\n3. RGB: Red, Green, Blue lu entha mix cheyalo cheppadam rgb(255,0,0).",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    h1 { color: Tomato; }          /* By Name */
    h2 { color: #00FF00; }         /* By Hex (Green) */
    h3 { color: rgb(0, 0, 255); }  /* By RGB (Blue) */
  </style>
</head>
<body>
  <h1>1. Color by Name (Tomato)</h1>
  <h2>2. Color by Hex (#00FF00)</h2>
  <h3>3. Color by RGB (0,0,255)</h3>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-bold text-lg">
        <h1 style={{color: 'tomato'}}>1. Color by Name (Tomato)</h1>
        <h2 style={{color: '#00ff00'}}>2. Color by Hex (#00FF00)</h2>
        <h3 style={{color: 'rgb(0,0,255)'}}>3. Color by RGB (0,0,255)</h3>
      </div>
    )
  },
  {
    id: 20, category: "CSS", title: "20. CSS Box Model",
    telugu: "Idhi oka Amazon parcel dabba laaga uhinchuko. \n1. Content: Lopalunna item (Phone).\n2. Padding: Phone ki dabba ki madhya unde thermocol balls.\n3. Border: Cardboard dabba githalu.\n4. Margin: Dabba baita gaali (vere dabba tho gap).",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;           /* Content */
      padding: 20px;          /* Inside gap */
      border: 5px solid red;  /* Boundary */
      margin: 30px;           /* Outside gap */
      background: lightyellow;
    }
  </style>
</head>
<body>
  <div class="box">
    This is Box Model!<br>
    Padding -> Border -> Margin
  </div>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <div style={{width:'200px', padding:'20px', border:'5px solid red', margin:'30px', backgroundColor:'lightyellow', textAlign:'center'}}>
          This is Box Model!<br/>Padding {"->"} Border {"->"} Margin
        </div>
      </div>
    )
  },
  {
    id: 22, category: "JavaScript", title: "22 & 23. Different Ways for Output & Input",
    telugu: "Output ivvadaniki 3 main ways:\n1. Alert (pop-up osthadi)\n2. innerHTML (page lopaliki text thosthadi)\n3. console.log (inspect cheste kanipisthadi).\n\nInput theeskovadaniki: \n1. Prompt (aduguthundi)\n2. HTML Textbox nunchi .value tho theeskovadam.",
    code: `<!DOCTYPE html>
<html>
<body>
  <h2>Input & Output Demo</h2>
  <input type="text" id="uname" value="Pushpa">
  <button onclick="doAction()">Submit</button>

  <p id="out"></p>

  <script>
    function doAction() {
      // Input from HTML textbox
      let name = document.getElementById("uname").value;
      
      // Output to HTML (innerHTML)
      document.getElementById("out").innerHTML = "Hello " + name;
      
      // Output to Alert
      alert("Value is: " + name);
    }
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black">
        <h2 className="font-bold mb-2">Input & Output Demo</h2>
        <input type="text" value="Pushpa" readOnly className="border p-1 mr-2" />
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Submit</button>
        <p className="mt-4 font-bold text-green-600">Hello Pushpa</p>
        <div className="mt-4 border border-gray-300 bg-gray-100 p-2 w-48 text-center text-sm shadow-sm rounded">
          <b>Alert Box</b><br/>Value is: Pushpa<br/><button className="mt-2 bg-blue-500 text-white px-2 rounded">OK</button>
        </div>
      </div>
    )
  },
  {
    id: 24, category: "JavaScript", title: "24. Webpage with Dialogue Boxes",
    telugu: "JS lo moodu gajala dialogue lu:\n1. Alert: 'Danger' ani cheppadaniki. Just OK button untadi.\n2. Confirm: 'Delete cheyala vadda?' ani adagadaniki. OK / Cancel untai.\n3. Prompt: 'Nee peru enti?' ani adigi text theeskovadaniki.",
    code: `<!DOCTYPE html>
<html>
<body>
  <button onclick="alert('Warning!')">Alert</button>
  <button onclick="askConfirm()">Confirm</button>
  <button onclick="askPrompt()">Prompt</button>

  <script>
    function askConfirm() {
      let res = confirm("Do you want to proceed?");
      if(res) alert("You clicked OK!");
    }

    function askPrompt() {
      let age = prompt("Enter your age:", "18");
      if(age) alert("Your age is " + age);
    }
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black flex flex-col gap-4">
        <div className="flex gap-2">
          <button className="border px-2 py-1 bg-gray-100">Alert</button>
          <button className="border px-2 py-1 bg-gray-100">Confirm</button>
          <button className="border px-2 py-1 bg-gray-100">Prompt</button>
        </div>
        <div className="border border-gray-300 bg-gray-100 p-4 w-64 text-center shadow-md rounded">
          <b>Confirm</b><br/>Do you want to proceed?<br/><br/>
          <div className="flex justify-center gap-2">
            <button className="border px-2 bg-white">Cancel</button>
            <button className="bg-blue-500 text-white px-4 rounded">OK</button>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 25, category: "JavaScript", title: "25. Math, String, Date, Array Objects",
    telugu: "Ivi JS loni built-in features.\nMath: Calculations ki (Square root, Pi).\nString: Text len kanukkodaniki, uppercase cheyadaniki.\nDate: Eroju date or time theeyadaniki.\nArray: List of items store cheyadaniki. Push, join lanti methods untay.",
    code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // 1. Math Object
    document.write("PI: " + Math.PI + "<br>");
    
    // 2. String Object
    let text = "Hello";
    document.write("Length: " + text.length + "<br>");
    
    // 3. Date Object
    let d = new Date();
    document.write("Year: " + d.getFullYear() + "<br>");
    
    // 4. Array Object
    let arr = ["A", "B", "C"];
    document.write("Joined: " + arr.join("-"));
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-mono">
        PI: 3.141592653589793<br/>
        Length: 5<br/>
        Year: 2026<br/>
        Joined: A-B-C
      </div>
    )
  },
  {
    id: 26, category: "JavaScript", title: "26 & 27. Large Number & Switch Case",
    telugu: "Logic checking idhi!\nLarge Number: if-else vaadi, >= petti (ex: a>=b && a>=c) kanukkuntam.\nSwitch Case: Chala if-else lu rasthe visugu vastadi kabatti 'switch' vadutham. Break rayadam marchipothe anni execute aipothai jagratha!",
    code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // Largest of Three
    let a = 10, b = 25, c = 15;
    if(a >= b && a >= c) document.write(a + " is large<br>");
    else if(b >= a && b >= c) document.write(b + " is large<br>");
    else document.write(c + " is large<br>");

    // Switch Case (Weekdays)
    let day = 2;
    switch(day) {
      case 1: document.write("Sunday"); break;
      case 2: document.write("Monday"); break;
      default: document.write("Invalid");
    }
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-mono">
        25 is large<br/>
        Monday
      </div>
    )
  },
  {
    id: 28, category: "JavaScript", title: "28 & 29. Loops (For, While, Advanced)",
    telugu: "Oke pani malli malli cheyali ante Loops.\nFor loop: Starting point, ending point oke line lo.\nWhile: Condition check chesi lopaliki velthadi.\nFor-in: Object loni data theeyadaniki.\nFor-of: Array loni data theeyadaniki.",
    code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // 1. For Loop (1 to 5)
    for(let i=1; i<=5; i++) {
      document.write(i + " ");
    }
    document.write("<br>");

    // 2. For-Of Loop (Arrays)
    let arr = ["Apple", "Mango"];
    for(let fruit of arr) {
      document.write(fruit + " ");
    }
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-mono">
        1 2 3 4 5 <br/>
        Apple Mango 
      </div>
    )
  },
  {
    id: 30, category: "JavaScript", title: "30 & 31. Armstrong Number & Denominations",
    telugu: "Armstrong: 153 isthe, 1³ + 5³ + 3³ = 153 ravali. Modulo (%) vadi last digit theestham.\nDenomination: ATM logic. 2500 kodithe 2000 vi enni, 500 vi enni ani Math.floor vadi count chestham.",
    code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // Armstrong Check for 153
    let num = 153, sum = 0, temp = num;
    while(temp > 0) {
      let r = temp % 10;
      sum += (r * r * r);
      temp = parseInt(temp / 10);
    }
    if(sum === num) document.write("153 is Armstrong!<br>");

    // ATM Denomination
    let amt = 2500;
    let n2000 = Math.floor(amt / 2000); 
    amt = amt % 2000;
    let n500 = Math.floor(amt / 500);
    document.write("2000 notes: " + n2000 + ", 500 notes: " + n500);
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-mono">
        153 is Armstrong!<br/>
        2000 notes: 1, 500 notes: 1
      </div>
    )
  },
  {
    id: 33, category: "JavaScript", title: "33. Math Logic (Factorial, Prime, Palindrome)",
    telugu: "Factorial: 5! = 1*2*3*4*5.\nPrime: 1 tho inka aa number thone divide avvali.\nPalindrome: MADAM ni reverse chesina MADAM eh ravali. Reverse cheyadaniki .split('').reverse().join('') vadey simple ga aipothadi.",
    code: `<!DOCTYPE html>
<html>
<body>
  <script>
    // Factorial of 5
    let fact = 1;
    for(let i=1; i<=5; i++) fact *= i;
    document.write("5! = " + fact + "<br>");

    // Palindrome Check
    let str = "MADAM";
    let rev = str.split('').reverse().join('');
    if(str === rev) document.write(str + " is Palindrome!");
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black font-mono">
        5! = 120<br/>
        MADAM is Palindrome!
      </div>
    )
  },
  {
    id: 34, category: "JavaScript", title: "34. Registration Page Validation",
    telugu: "Last Program! College gate daggara watchman ID check chesinattu, form Submit ayye mundu JS tho validate chestham. Name empty unda? Password 6 letters thakkuva unda? Unte submit aapestham (return false).",
    code: `<!DOCTYPE html>
<html>
<body>
  <form onsubmit="return validate()">
    Name: <input type="text" id="uname"><br>
    Password: <input type="password" id="pwd"><br>
    <input type="submit" value="Register">
  </form>

  <script>
    function validate() {
      let n = document.getElementById("uname").value;
      let p = document.getElementById("pwd").value;
      
      if(n === "") {
        alert("Name cannot be empty!");
        return false;
      }
      if(p.length < 6) {
        alert("Password must be 6+ chars");
        return false;
      }
      alert("Success!"); return true;
    }
  </script>
</body>
</html>`,
    output: (
      <div className="p-4 bg-white text-black flex flex-col gap-2">
        <div>Name: <input type="text" className="border p-1" /></div>
        <div>Password: <input type="password" value="123" readOnly className="border p-1" /></div>
        <div><button className="bg-gray-200 border px-4 py-1">Register</button></div>
        <div className="mt-2 border border-red-300 bg-red-50 p-2 w-48 text-center text-sm shadow-sm rounded">
          <b>Alert</b><br/>Password must be 6+ chars<br/><button className="mt-2 bg-blue-500 text-white px-2 rounded">OK</button>
        </div>
      </div>
    )
  }
];

export default function App() {
  const [selectedId, setSelectedId] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const activeProg = labPrograms.find(p => p.id === selectedId);

  // Syntax highlighting helper
  const highlightHTML = (code) => {
    return code.split('\n').map((line, i) => {
      // Very basic highlighting for HTML tags
      let highlightedLine = line
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/(&lt;\/?\w+)/g, '<span class="text-pink-400">$1</span>')
        .replace(/(&gt;)/g, '<span class="text-pink-400">$1</span>')
        .replace(/([a-zA-Z\-]+)="/g, '<span class="text-emerald-400">$1</span>="')
        .replace(/"([^"]*)"/g, '"<span class="text-yellow-300">$1</span>"');
      
      return (
        <div key={i} className="flex hover:bg-slate-800">
          <span className="w-8 text-slate-600 select-none border-r border-slate-700 text-right pr-2 mr-3">{i + 1}</span>
          <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col md:flex-row">
      
      {/* Mobile Header & Dropdown Toggle */}
      <div className="md:hidden bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <Sparkles className="text-amber-400" size={20}/>
          <h1 className="font-bold text-white">Lab Cheat Sheet</h1>
        </div>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="bg-blue-600 px-3 py-1.5 rounded text-sm font-medium flex items-center gap-1"
        >
          <Layout size={16}/> Select Program
        </button>
      </div>

      {/* Sidebar List */}
      <aside className={`
        ${isSidebarOpen ? 'block' : 'hidden'} 
        md:block w-full md:w-[320px] bg-slate-800 border-r border-slate-700 overflow-y-auto h-[40vh] md:h-screen shrink-0 sticky top-0
      `}>
        <div className="hidden md:flex p-6 border-b border-slate-700 items-center gap-3">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
            <Sparkles className="text-white" size={24}/>
          </div>
          <div>
            <h1 className="font-bold text-white text-lg">1000 Rs Bet Edition</h1>
            <p className="text-xs text-slate-400">Pure React. No Mixups.</p>
          </div>
        </div>
        
        <div className="p-2">
          {labPrograms.map(prog => (
            <button
              key={prog.id}
              onClick={() => {
                setSelectedId(prog.id);
                setSidebarOpen(false); // close on mobile after selection
              }}
              className={`w-full text-left p-3 rounded mb-1 transition-all flex flex-col ${
                selectedId === prog.id 
                  ? 'bg-blue-600/20 border-l-4 border-blue-500 text-white' 
                  : 'hover:bg-slate-700 text-slate-300'
              }`}
            >
              <span className="text-[10px] uppercase font-bold text-blue-400 mb-1">{prog.category}</span>
              <span className="font-medium text-sm leading-tight">{prog.title}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-[#0f172a]">
        
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center gap-3">
            <BookOpen className="text-blue-400" size={24} />
            <h2 className="text-xl font-bold text-white">{activeProg.title}</h2>
          </div>

          {/* Deep Telugu Explanation Card */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-5 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle size={80} />
            </div>
            <h3 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
              <Sparkles size={18} /> Mana Oora Mass Tanglish Explanation
            </h3>
            <p className="text-amber-100/90 whitespace-pre-wrap leading-relaxed text-[15px] relative z-10">
              {activeProg.telugu}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            
            {/* Code Section */}
            <div className="bg-[#000] rounded-xl overflow-hidden border border-slate-700 shadow-xl flex flex-col h-[500px]">
              <div className="bg-[#111] p-3 border-b border-slate-800 flex justify-between items-center shrink-0">
                <span className="text-slate-400 font-mono text-sm flex items-center gap-2">
                  <Code2 size={16} className="text-pink-400"/> Code Snippet
                </span>
                <button 
                  onClick={() => navigator.clipboard.writeText(activeProg.code)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Copy size={14} /> Copy Lab Code
                </button>
              </div>
              <div className="p-4 font-mono text-[13px] overflow-auto flex-1">
                <pre>{highlightHTML(activeProg.code)}</pre>
              </div>
            </div>

            {/* Simulated Output Section */}
            <div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-300 shadow-xl flex flex-col h-[500px]">
              <div className="bg-slate-300 p-3 border-b border-slate-400 flex justify-between items-center shrink-0">
                <span className="text-slate-800 font-bold text-sm flex items-center gap-2">
                  <MonitorPlay size={16} className="text-blue-600"/> Browser Expected Output
                </span>
                <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                  Safe Simulation
                </span>
              </div>
              <div className="p-6 overflow-auto flex-1">
                {activeProg.output}
              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}
