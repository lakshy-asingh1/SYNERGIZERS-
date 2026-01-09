if (!localStorage.getItem('loggedInUser') && !localStorage.getItem('currentUser')) {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const userElement = document.getElementById('username');
  function parseStoredUser(key){
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (err) { return { name: raw }; }
  }
  const stored = parseStoredUser('loggedInUser') || parseStoredUser('currentUser') || { name: 'User' };
  const displayName = stored.name || stored.username || (typeof stored === 'string' ? stored : 'User');
  if (userElement) userElement.innerText = displayName;
  window.logout = function(){
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  };

  /* ================= COURSE DATA ================= */
  const courses = [
    {
      id: 1,
      name: "Photoshop Basics",
      category: "Design",
      price: "₹1,299",
      video: "https://www.youtube.com/embed/9trhuOryOrU",
      description: "Learn the fundamentals of Photoshop: layers, tools, and editing basics.",
      quiz: [
        { question: "What is a layer?", options: ["Tool", "Canvas", "Stackable section", "Filter"], answer: "Stackable section" },
        { question: "Shortcut to copy?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], answer: "Ctrl+C" },
        { question: "Which tool is used for selection?", options: ["Move", "Marquee", "Brush", "Pen"], answer: "Marquee" },
        { question: "What does Ctrl+Z do?", options: ["Undo", "Redo", "Copy", "Paste"], answer: "Undo" },
        { question: "Default image format?", options: ["JPEG", "PSD", "PNG", "GIF"], answer: "PSD" },
        { question: "Which panel shows layers?", options: ["Toolbar", "Layer panel", "History", "Properties"], answer: "Layer panel" },
        { question: "Shortcut to crop?", options: ["C", "V", "M", "L"], answer: "C" },
        { question: "Opacity controls?", options: ["Visibility", "Layer type", "Filter", "History"], answer: "Visibility" },
        { question: "Magic wand selects?", options: ["Painting", "Selection", "Cropping", "Filter"], answer: "Selection" },
        { question: "Add text using?", options: ["T tool", "B tool", "E tool", "M tool"], answer: "T tool" }
      ]
    },
    {
      id: 2,
      name: "Illustrator Advanced",
      category: "Design",
      price: "₹1,999",
      video: "https://www.youtube.com/embed/dPNVcAobL4M?si=OvZsMzjXyWtZJCme",
      description: "Master advanced Illustrator techniques, vector graphics, and professional illustrations for web and print.",
      quiz: [
        { question: "What is the shortcut for Pen Tool?", options: ["P", "T", "V", "M"], answer: "P" },
        { question: "Vector graphics are?", options: ["Pixel based", "Resolution independent", "Only for images", "None"], answer: "Resolution independent" },
        { question: "What does Artboard do?", options: ["Creates layers", "Defines canvas area", "Applies filters", "Exports files"], answer: "Defines canvas area" },
        { question: "Shortcut to select all?", options: ["Ctrl+A", "Ctrl+C", "Ctrl+S", "Ctrl+X"], answer: "Ctrl+A" },
        { question: "Which panel shows layers?", options: ["Layers panel", "History panel", "Brush panel", "Properties panel"], answer: "Layers panel" },
        { question: "To convert text to shapes?", options: ["Create Outlines", "Rasterize", "Blend", "Mask"], answer: "Create Outlines" },
        { question: "What is Clipping Mask?", options: ["Masking one object", "Cropping image", "Filter effect", "None"], answer: "Masking one object" },
        { question: "Shortcut to Zoom In?", options: ["Z", "V", "P", "M"], answer: "Z" },
        { question: "Gradient Tool shortcut?", options: ["G", "R", "B", "L"], answer: "G" },
        { question: "Which file format is vector?", options: ["AI", "JPG", "PNG", "GIF"], answer: "AI" }
      ]
    },
    {
      id: 3, name: "UI/UX Design Fundamentals",
      category: "Design",
      price: "₹2,499",
      video: "https://www.youtube.com/embed/e_dv7GBHka8",
      description: "Learn UI/UX principles, wireframing, and prototyping to create user-friendly interfaces and experiences.",
      quiz: [
        { question: "UX stands for?", options: ["User Experience", "User Example", "User Extension", "Unique Experience"], answer: "User Experience" },
        { question: "UI focuses on?", options: ["Research", "Visual Design", "Testing", "Coding"], answer: "Visual Design" },
        { question: "Wireframe is?", options: ["Final design", "Code", "Low fidelity layout", "Animation"], answer: "Low fidelity layout" },
        { question: "Which tool is for UI/UX?", options: ["Figma", "Excel", "VS Code", "Notepad"], answer: "Figma" },
        { question: "Prototype means?", options: ["Final app", "Interactive mockup", "Database", "Logo"], answer: "Interactive mockup" },
        { question: "Usability means?", options: ["Beauty", "Ease of use", "Speed", "Security"], answer: "Ease of use" },
        { question: "Contrast helps in?", options: ["Speed", "Readability", "Security", "Storage"], answer: "Readability" },
        { question: "User persona is?", options: ["Logo", "Target user profile", "Font", "Color"], answer: "Target user profile" },
        { question: "UX starts with?", options: ["Coding", "Research", "Design", "Testing"], answer: "Research" },
        { question: "Responsive design means?", options: ["Fast", "Multi device support", "Secure", "Animated"], answer: "Multi device support" }
      ]
    },
    {
      id: 4, name: "Figma for Beginners", category: "Design", price: "₹1,599",
      video: "https://www.youtube.com/embed/Od7AfBvBwWo",
      description: "Start designing with Figma, create UI designs, and collaborate with real-time projects.",
      quiz: [
        { question: "Figma is?", options: ["Design tool", "Compiler", "Browser", "Database"], answer: "Design tool" },
        { question: "Figma works on?", options: ["Offline only", "Browser", "Terminal", "Mobile only"], answer: "Browser" },
        { question: "Frame is used for?", options: ["Color", "Layout", "Font", "Export"], answer: "Layout" },
        { question: "Component helps in?", options: ["Reuse", "Delete", "Export", "Animate"], answer: "Reuse" },
        { question: "Auto layout is used for?", options: ["Spacing", "Color", "Font", "Image"], answer: "Spacing" },
        { question: "Prototype is?", options: ["Static", "Interactive", "Code", "Server"], answer: "Interactive" },
        { question: "Constraints help in?", options: ["Responsive design", "Export", "Fonts", "Color"], answer: "Responsive design" },
        { question: "Figma collaboration is?", options: ["Offline", "Real time", "Manual", "Slow"], answer: "Real time" },
        { question: "Grid is used for?", options: ["Alignment", "Animation", "Font", "Export"], answer: "Alignment" },
        { question: "Shortcut to duplicate?", options: ["Ctrl+D", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], answer: "Ctrl+D" }
      ]

    },
    {
      id: 5, name: "Canva Masterclass", category: "Design", price: "₹999",
      video: "https://www.youtube.com/embed/Llnmf5BXLBA",
      description: "Create stunning graphics and social media posts easily using Canva.",
      quiz: [
        { question: "Canva is used for?", options: ["Design", "Coding", "Testing", "Hosting"], answer: "Design" },
        { question: "Canva is best for?", options: ["Quick designs", "Games", "APIs", "Servers"], answer: "Quick designs" },
        { question: "Template means?", options: ["Blank", "Pre designed layout", "Code", "Plugin"], answer: "Pre designed layout" },
        { question: "Drag & Drop feature?", options: ["Yes", "No", "Sometimes", "Rare"], answer: "Yes" },
        { question: "Canva supports?", options: ["Images", "Videos", "Docs", "All"], answer: "All" },
        { question: "Brand kit is used for?", options: ["Colors & fonts", "Coding", "Hosting", "Security"], answer: "Colors & fonts" },
        { question: "Export formats?", options: ["PNG", "JPG", "PDF", "All"], answer: "All" },
        { question: "Canva is beginner friendly?", options: ["Yes", "No", "Complex", "Paid only"], answer: "Yes" },
        { question: "Text alignment is?", options: ["Design option", "Security", "API", "Hosting"], answer: "Design option" },
        { question: "Canva works online?", options: ["Yes", "No", "Offline only", "Terminal"], answer: "Yes" }
      ]

    },

    // PROGRAMMING
    {
      id: 6, name: "C Programming", category: "Programming", price: "₹1,499",
      video: "https://www.youtube.com/embed/irqbmMNs2Bo",
      description: "Learn C programming from basics to advanced topics including pointers, arrays, and data structures.",
      quiz: [
        { question: "C is?", options: ["High level", "Low level", "Middle level", "Markup"], answer: "Middle level" },
        { question: "Who developed C?", options: ["Dennis Ritchie", "Bjarne", "Guido", "James"], answer: "Dennis Ritchie" },
        { question: "Extension of C?", options: [".c", ".cpp", ".java", ".py"], answer: ".c" },
        { question: "printf is used for?", options: ["Input", "Output", "Loop", "Condition"], answer: "Output" },
        { question: "scanf is used for?", options: ["Output", "Input", "Loop", "Array"], answer: "Input" },
        { question: "Which is loop?", options: ["for", "if", "switch", "break"], answer: "for" },
        { question: "Array index starts from?", options: ["0", "1", "-1", "2"], answer: "0" },
        { question: "Pointer stores?", options: ["Value", "Address", "Char", "Array"], answer: "Address" },
        { question: "int size?", options: ["2 or 4 bytes", "1 byte", "8 bytes", "16 bytes"], answer: "2 or 4 bytes" },
        { question: "Header file?", options: ["stdio.h", "main.c", "loop.h", "run.c"], answer: "stdio.h" }
      ]

    },
    {
      id: 7, name: "JavaScript Mastery", category: "Programming", price: "₹2,199",
      video: "https://www.youtube.com/embed/I1V9YWqRIeI",
      description: "Become proficient in JavaScript, DOM manipulation, and modern web development.",
      quiz: [
        { question: "JavaScript is?", options: ["Compiled", "Interpreted", "Machine", "Assembly"], answer: "Interpreted" },
        { question: "Used for?", options: ["Web interaction", "Database", "OS", "Compiler"], answer: "Web interaction" },
        { question: "Variable keyword?", options: ["let", "int", "float", "char"], answer: "let" },
        { question: "DOM stands for?", options: ["Document Object Model", "Data Object Model", "Design Object Model", "None"], answer: "Document Object Model" },
        { question: "Which is loop?", options: ["for", "if", "else", "switch"], answer: "for" },
        { question: "Array starts from?", options: ["0", "1", "-1", "2"], answer: "0" },
        { question: "== checks?", options: ["Value", "Type", "Both", "None"], answer: "Value" },
        { question: "=== checks?", options: ["Value only", "Type only", "Both", "None"], answer: "Both" },
        { question: "alert() is used for?", options: ["Popup", "Input", "Loop", "Debug"], answer: "Popup" },
        { question: "JS runs in?", options: ["Browser", "Server", "Compiler", "OS"], answer: "Browser" }
      ]

    },
    {
      id: 8, name: "Python for Beginners", category: "Programming", price: "₹1,799",
      video: "https://www.youtube.com/embed/K5KVEU3aaeQ",
      description: "Start Python programming from scratch with projects and exercises.",
      quiz: [
        { question: "Python is?", options: ["Compiled", "Interpreted", "Low level", "Markup"], answer: "Interpreted" },
        { question: "Creator of Python?", options: ["Guido", "Dennis", "James", "Bjarne"], answer: "Guido" },
        { question: "File extension?", options: [".py", ".c", ".js", ".java"], answer: ".py" },
        { question: "Used for?", options: ["AI", "Web", "Automation", "All"], answer: "All" },
        { question: "Print function?", options: ["print()", "echo()", "printf()", "cout"], answer: "print()" },
        { question: "List is?", options: ["Mutable", "Immutable", "Fixed", "None"], answer: "Mutable" },
        { question: "Tuple is?", options: ["Mutable", "Immutable", "Dynamic", "None"], answer: "Immutable" },
        { question: "Indentation is?", options: ["Mandatory", "Optional", "Ignored", "Error"], answer: "Mandatory" },
        { question: "Loop keyword?", options: ["for", "repeat", "loop", "foreach"], answer: "for" },
        { question: "Python is case sensitive?", options: ["Yes", "No", "Sometimes", "Never"], answer: "Yes" }
      ]

    },
    {
      id: 9, name: "Java Full Stack", category: "Programming", price: "₹2,999",
      video: "https://www.youtube.com/embed/F4zr1aMevB4",
      description: "Learn full stack development with Java, Spring Boot, and front-end frameworks.",
      quiz: [
        { question: "Java is?", options: ["Platform independent", "Platform dependent", "Low level", "Script"], answer: "Platform independent" },
        { question: "JVM stands for?", options: ["Java Virtual Machine", "Java Variable Method", "Joint VM", "None"], answer: "Java Virtual Machine" },
        { question: "Backend uses?", options: ["Spring", "HTML", "CSS", "Bootstrap"], answer: "Spring" },
        { question: "Frontend uses?", options: ["HTML/CSS", "Java", "JVM", "API"], answer: "HTML/CSS" },
        { question: "Database example?", options: ["MySQL", "HTML", "CSS", "JS"], answer: "MySQL" },
        { question: "API stands for?", options: ["Application Programming Interface", "App Program", "Applied Interface", "None"], answer: "Application Programming Interface" },
        { question: "OOP concept?", options: ["Encapsulation", "Loop", "Condition", "Array"], answer: "Encapsulation" },
        { question: "Servlet is?", options: ["Server component", "Frontend", "DB", "OS"], answer: "Server component" },
        { question: "Spring Boot advantage?", options: ["Fast dev", "Slow", "Complex", "Manual"], answer: "Fast dev" },
        { question: "Full stack means?", options: ["Frontend + Backend", "Backend only", "Frontend only", "Design"], answer: "Frontend + Backend" }
      ]

    },
    {
      id: 10, name: "Web Development Bootcamp", category: "Programming", price: "₹3,499",
      video: "https://www.youtube.com/embed/zJSY8tbf_ys",
      description: "Complete web development course covering HTML, CSS, JavaScript, Node.js and React.",
      quiz: [
        { question: "HTML is?", options: ["Markup", "Language", "Compiler", "DB"], answer: "Markup" },
        { question: "CSS is used for?", options: ["Styling", "Logic", "DB", "API"], answer: "Styling" },
        { question: "JS adds?", options: ["Interactivity", "Design", "Storage", "Security"], answer: "Interactivity" },
        { question: "Responsive design?", options: ["Multi device", "Fast", "Secure", "Animated"], answer: "Multi device" },
        { question: "Bootstrap is?", options: ["CSS framework", "DB", "API", "JS engine"], answer: "CSS framework" },
        { question: "Frontend includes?", options: ["HTML CSS JS", "Java", "Python", "C"], answer: "HTML CSS JS" },
        { question: "Backend example?", options: ["Node.js", "HTML", "CSS", "Figma"], answer: "Node.js" },
        { question: "API connects?", options: ["Frontend & backend", "Images", "Fonts", "Servers"], answer: "Frontend & backend" },
        { question: "Version control?", options: ["Git", "Chrome", "VS Code", "Linux"], answer: "Git" },
        { question: "Hosting platform?", options: ["Netlify", "Paint", "Excel", "Word"], answer: "Netlify" }
      ]

    },
    {
      id: 11, name: "Data Structures & Algorithms", category: "Programming", price: "₹2,699",
      video: "https://www.youtube.com/embed/8hly31xKli0",
      description: "Master DSA with practice problems, coding techniques, and real-world applications.",
      quiz: [
        { question: "DSA stands for?", options: ["Data Structures & Algorithms", "Data System App", "Design Software App", "None"], answer: "Data Structures & Algorithms" },
        { question: "Array is?", options: ["Linear DS", "Non-linear DS", "Tree", "Graph"], answer: "Linear DS" },
        { question: "Stack works on?", options: ["LIFO", "FIFO", "Random", "Priority"], answer: "LIFO" },
        { question: "Queue works on?", options: ["FIFO", "LIFO", "Random", "Stack"], answer: "FIFO" },
        { question: "Binary search works on?", options: ["Sorted array", "Unsorted array", "Stack", "Queue"], answer: "Sorted array" },
        { question: "Time complexity of binary search?", options: ["O(log n)", "O(n)", "O(n²)", "O(1)"], answer: "O(log n)" },
        { question: "Linked list stores?", options: ["Data + address", "Only data", "Only address", "Index"], answer: "Data + address" },
        { question: "Tree root has?", options: ["No parent", "One parent", "Two parents", "Many"], answer: "No parent" },
        { question: "Hashing used for?", options: ["Fast access", "Sorting", "Looping", "Traversal"], answer: "Fast access" },
        { question: "Graph traversal?", options: ["BFS & DFS", "Push & Pop", "Sort & Merge", "None"], answer: "BFS & DFS" }
      ]

    },

    // SOFT SKILL
    {
      id: 12, name: "Communication Skills", category: "Soft Skill", price: "₹999",
      video: "https://www.youtube.com/embed/HAnw168huqA",
      description: "Improve your communication and interpersonal skills for personal and professional growth.",
      quiz: [
        { question: "Communication is?", options: ["Exchange of ideas", "Talking", "Writing", "Listening"], answer: "Exchange of ideas" },
        { question: "Verbal communication includes?", options: ["Speech", "Gestures", "Posture", "Silence"], answer: "Speech" },
        { question: "Non-verbal includes?", options: ["Body language", "Email", "Calls", "Chats"], answer: "Body language" },
        { question: "Active listening means?", options: ["Understanding speaker", "Ignoring", "Interrupting", "Talking"], answer: "Understanding speaker" },
        { question: "Eye contact shows?", options: ["Confidence", "Fear", "Anger", "Confusion"], answer: "Confidence" },
        { question: "Tone affects?", options: ["Meaning", "Grammar", "Spelling", "Speed"], answer: "Meaning" },
        { question: "Good communication improves?", options: ["Relationships", "Conflicts", "Errors", "Stress"], answer: "Relationships" },
        { question: "Barriers include?", options: ["Noise", "Clarity", "Focus", "Interest"], answer: "Noise" },
        { question: "Feedback is?", options: ["Response", "Command", "Error", "Silence"], answer: "Response" },
        { question: "Communication skill is?", options: ["Learnable", "Born only", "Useless", "Fixed"], answer: "Learnable" }
      ]

    },
    {
      id: 13, name: "Interview Preparation", category: "Soft Skill", price: "₹1,199",
      video: "https://www.youtube.com/embed/-JNjsOX0N0c",
      description: "Prepare for interviews, learn common questions, and ace technical and HR rounds.",
      quiz: [
        { question: "Interview tests?", options: ["Skills & attitude", "Luck", "Marks", "Speed"], answer: "Skills & attitude" },
        { question: "HR round checks?", options: ["Personality", "Coding", "Math", "Design"], answer: "Personality" },
        { question: "STAR method used for?", options: ["Answering questions", "Coding", "Designing", "Testing"], answer: "Answering questions" },
        { question: "Resume should be?", options: ["Clear", "Long", "Colorful", "Complex"], answer: "Clear" },
        { question: "First impression depends on?", options: ["Body language", "Marks", "Salary", "Luck"], answer: "Body language" },
        { question: "Mock interviews help in?", options: ["Confidence", "Fear", "Confusion", "Failure"], answer: "Confidence" },
        { question: "Strength question expects?", options: ["Honest answer", "Story", "Joke", "Lie"], answer: "Honest answer" },
        { question: "Weakness answer should be?", options: ["Improving", "Negative", "Fake", "Avoided"], answer: "Improving" },
        { question: "Eye contact shows?", options: ["Confidence", "Fear", "Anger", "Confusion"], answer: "Confidence" },
        { question: "Interview follow-up?", options: ["Thank you mail", "Ignore", "Call", "Message"], answer: "Thank you mail" }
      ]

    },
    {
      id: 14, name: "Public Speaking Mastery", category: "Soft Skill", price: "₹1,499",
      video: "https://www.youtube.com/embed/dHAbmoFHqgA",
      description: "Gain confidence in public speaking and presentation skills.",
      quiz: [
        { question: "Public speaking is?", options: ["Speaking to audience", "Talking alone", "Reading", "Writing"], answer: "Speaking to audience" },
        { question: "Confidence comes from?", options: ["Practice", "Luck", "Talent", "Fear"], answer: "Practice" },
        { question: "Body language helps?", options: ["Engagement", "Fear", "Error", "Silence"], answer: "Engagement" },
        { question: "Eye contact builds?", options: ["Trust", "Fear", "Anger", "Confusion"], answer: "Trust" },
        { question: "Stage fear is called?", options: ["Glossophobia", "Anxiety", "Stress", "None"], answer: "Glossophobia" },
        { question: "Clear voice needs?", options: ["Breathing", "Speed", "Shouting", "Silence"], answer: "Breathing" },
        { question: "Speech structure?", options: ["Intro Body Conclusion", "Random", "Ending only", "Start only"], answer: "Intro Body Conclusion" },
        { question: "Pause is used for?", options: ["Emphasis", "Error", "Fear", "Noise"], answer: "Emphasis" },
        { question: "Practice improves?", options: ["Delivery", "Mistakes", "Fear", "Confusion"], answer: "Delivery" },
        { question: "Audience engagement needs?", options: ["Interaction", "Silence", "Reading", "Speed"], answer: "Interaction" }
      ]

    },
    {
      id: 15, name: "Leadership & Teamwork", category: "Soft Skill", price: "₹1,899",
      video: "https://www.youtube.com/embed/kHqotfdgNdw",
      description: "Learn how to lead teams effectively and collaborate efficiently.",
      quiz: [
        { question: "Leader role?", options: ["Guide team", "Control", "Command", "Ignore"], answer: "Guide team" },
        { question: "Good leader shows?", options: ["Empathy", "Ego", "Fear", "Anger"], answer: "Empathy" },
        { question: "Teamwork means?", options: ["Working together", "Working alone", "Competition", "Conflict"], answer: "Working together" },
        { question: "Delegation means?", options: ["Assign tasks", "Avoid work", "Control", "Ignore"], answer: "Assign tasks" },
        { question: "Conflict resolution needs?", options: ["Communication", "Anger", "Silence", "Force"], answer: "Communication" },
        { question: "Trust builds?", options: ["Strong team", "Conflict", "Fear", "Stress"], answer: "Strong team" },
        { question: "Feedback should be?", options: ["Constructive", "Harsh", "Ignored", "Delayed"], answer: "Constructive" },
        { question: "Motivation improves?", options: ["Performance", "Stress", "Errors", "Delay"], answer: "Performance" },
        { question: "Decision making requires?", options: ["Clarity", "Fear", "Ego", "Luck"], answer: "Clarity" },
        { question: "Leadership skill is?", options: ["Learnable", "Born only", "Fixed", "Useless"], answer: "Learnable" }
      ]

    },
    {
      id: 16, name: "Time Management Skills", category: "Soft Skill", price: "₹899",
      video: "https://www.youtube.com/embed/p4ZfkezDTXQ",
      description: "Master your time, improve productivity, and organize tasks efficiently.",
      quiz: [
        { question: "Time management means?", options: ["Using time effectively", "Working more", "Sleeping less", "Rushing"], answer: "Using time effectively" },
        { question: "Priority means?", options: ["Important task", "Easy task", "Small task", "Late task"], answer: "Important task" },
        { question: "To-do list helps?", options: ["Organization", "Stress", "Delay", "Confusion"], answer: "Organization" },
        { question: "Procrastination means?", options: ["Delaying work", "Planning", "Executing", "Finishing"], answer: "Delaying work" },
        { question: "Pomodoro technique uses?", options: ["25 min focus", "2 hr work", "No break", "Random"], answer: "25 min focus" },
        { question: "Multitasking causes?", options: ["Low focus", "Speed", "Accuracy", "Success"], answer: "Low focus" },
        { question: "Deadlines help?", options: ["Discipline", "Fear", "Confusion", "Delay"], answer: "Discipline" },
        { question: "Planning saves?", options: ["Time", "Money", "Energy", "All"], answer: "All" },
        { question: "Time wasters include?", options: ["Distractions", "Focus", "Goals", "Plans"], answer: "Distractions" },
        { question: "Good habit?", options: ["Prioritize", "Delay", "Ignore", "Rush"], answer: "Prioritize" }
      ]

    },

    // SCIENCE
    {
      id: 17, name: "Physics Fundamentals", category: "Science", price: "₹1,799",
      video: "https://www.youtube.com/embed/ZffEvgEE-hc",
      description: "Understand key physics concepts with experiments and problem-solving.",
      quiz: [
        { question: "Physics studies?", options: ["Matter & energy", "Plants", "Numbers", "Chemicals"], answer: "Matter & energy" },
        { question: "SI unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: "Newton" },
        { question: "Speed formula?", options: ["Distance/Time", "Time/Distance", "Mass/Time", "Force/Area"], answer: "Distance/Time" },
        { question: "Gravity acts?", options: ["Downward", "Upward", "Side", "None"], answer: "Downward" },
        { question: "Energy unit?", options: ["Joule", "Newton", "Watt", "Volt"], answer: "Joule" },
        { question: "Light speed is?", options: ["Constant", "Variable", "Slow", "Infinite"], answer: "Constant" },
        { question: "Motion needs?", options: ["Force", "Mass", "Volume", "Density"], answer: "Force" },
        { question: "Heat transfer modes?", options: ["3", "2", "1", "4"], answer: "3" },
        { question: "Electric current unit?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: "Ampere" },
        { question: "Physics is?", options: ["Experimental", "Theoretical", "Practical", "All"], answer: "All" }
      ]

    },
    {
      id: 18, name: "Chemistry Basics", category: "Science", price: "₹1,599",
      video: "https://www.youtube.com/embed/bka20Q9TN6M",
      description: "Learn chemistry fundamentals, reactions, and formulas with examples.",
      quiz: [
        { question: "Chemistry studies?", options: ["Matter", "Energy", "Numbers", "Forces"], answer: "Matter" },
        { question: "Atom smallest unit?", options: ["Yes", "No", "Sometimes", "Never"], answer: "Yes" },
        { question: "Water formula?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
        { question: "pH < 7 means?", options: ["Acidic", "Basic", "Neutral", "Salt"], answer: "Acidic" },
        { question: "pH = 7?", options: ["Neutral", "Acidic", "Basic", "Strong"], answer: "Neutral" },
        { question: "Periodic table has?", options: ["Elements", "Compounds", "Mixtures", "Solutions"], answer: "Elements" },
        { question: "Chemical reaction shows?", options: ["Change", "Stability", "Rest", "Pause"], answer: "Change" },
        { question: "NaCl is?", options: ["Salt", "Acid", "Base", "Gas"], answer: "Salt" },
        { question: "Catalyst?", options: ["Speeds reaction", "Stops", "Slows", "Ends"], answer: "Speeds reaction" },
        { question: "Chemistry used in?", options: ["Daily life", "Lab only", "School", "Books"], answer: "Daily life" }
      ]

    },
    {
      id: 19, name: "Mathematics for Engineers", category: "Science", price: "₹2,299",
      video: "https://www.youtube.com/embed/QM0ATZRlbKQ",
      description: "Mathematics concepts tailored for engineering students including calculus and linear algebra.",
      quiz: [
        { question: "Engineering math includes?", options: ["Calculus", "History", "Geography", "Biology"], answer: "Calculus" },
        { question: "Derivative means?", options: ["Rate of change", "Area", "Volume", "Distance"], answer: "Rate of change" },
        { question: "Integration gives?", options: ["Area", "Slope", "Point", "Line"], answer: "Area" },
        { question: "Matrix used for?", options: ["Solving equations", "Writing", "Drawing", "Counting"], answer: "Solving equations" },
        { question: "Determinant shows?", options: ["Uniqueness", "Color", "Size", "Speed"], answer: "Uniqueness" },
        { question: "Linear equations are?", options: ["Degree 1", "Degree 2", "Degree 3", "Degree 0"], answer: "Degree 1" },
        { question: "Vector has?", options: ["Magnitude & direction", "Value", "Only direction", "Only magnitude"], answer: "Magnitude & direction" },
        { question: "Complex number has?", options: ["Real & imaginary", "Only real", "Only imaginary", "None"], answer: "Real & imaginary" },
        { question: "Probability range?", options: ["0 to 1", "1 to 10", "0 to 100", "-1 to 1"], answer: "0 to 1" },
        { question: "Math improves?", options: ["Problem solving", "Confusion", "Fear", "Errors"], answer: "Problem solving" }
      ]

    },
    {
      id: 20, name: "Data Science Foundations", category: "Science", price: "₹3,199",
      video: "https://www.youtube.com/embed/ua-CiDNNj30",
      description: "Introduction to data science, analysis, and visualization using Python.",
      quiz: [
        { question: "Data science uses?", options: ["Data", "Paint", "Books", "Music"], answer: "Data" },
        { question: "Data types?", options: ["Structured & Unstructured", "Only numbers", "Only text", "Images only"], answer: "Structured & Unstructured" },
        { question: "Python library?", options: ["Pandas", "React", "Spring", "Laravel"], answer: "Pandas" },
        { question: "Data visualization tool?", options: ["Matplotlib", "HTML", "CSS", "C"], answer: "Matplotlib" },
        { question: "CSV file means?", options: ["Comma separated", "Code file", "Compiled", "Compressed"], answer: "Comma separated" },
        { question: "Cleaning data removes?", options: ["Errors", "Values", "Columns", "Rows"], answer: "Errors" },
        { question: "Machine learning is?", options: ["Subset of AI", "Database", "UI", "Backend"], answer: "Subset of AI" },
        { question: "Model training needs?", options: ["Data", "Design", "HTML", "CSS"], answer: "Data" },
        { question: "Accuracy measures?", options: ["Correct predictions", "Speed", "Memory", "Time"], answer: "Correct predictions" },
        { question: "Data science used in?", options: ["All industries", "None", "School only", "Research only"], answer: "All industries" }
      ]

    },
    {
      id: 21, name: "Artificial Intelligence Basics", category: "Science", price: "₹3,499",
      video: "https://www.youtube.com/embed/JMUxmLyrhSk",
      description: "Learn AI fundamentals, machine learning basics, and practical applications.",
      quiz: [
        { question: "AI stands for?", options: ["Artificial Intelligence", "Automatic Input", "Advanced Interface", "None"], answer: "Artificial Intelligence" },
        { question: "AI mimics?", options: ["Human intelligence", "Animals", "Plants", "Machines"], answer: "Human intelligence" },
        { question: "ML is?", options: ["Subset of AI", "Language", "Tool", "Database"], answer: "Subset of AI" },
        { question: "Example of AI?", options: ["Chatbot", "Calculator", "Notepad", "Paint"], answer: "Chatbot" },
        { question: "Training data is?", options: ["Used to learn", "Deleted", "Ignored", "Hidden"], answer: "Used to learn" },
        { question: "Neural network inspired by?", options: ["Human brain", "Computer", "Math", "Logic"], answer: "Human brain" },
        { question: "AI needs?", options: ["Data", "Paint", "Music", "Books"], answer: "Data" },
        { question: "Narrow AI means?", options: ["Task specific", "General", "Human", "None"], answer: "Task specific" },
        { question: "Self driving cars use?", options: ["AI", "HTML", "CSS", "C"], answer: "AI" },
        { question: "Future of AI?", options: ["Growing", "Ending", "Static", "Unknown"], answer: "Growing" }
      ]

    }
  ];

  let enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const courseList = document.getElementById("courseList");
  const title = document.getElementById("courseTitle");
  const popularCards = document.querySelectorAll(".popular-card");

  function clearActiveCategory() {
    popularCards.forEach(card => card.classList.remove("active"));
  }

  window.displayCourses = function (list) {
    courseList.innerHTML = "";

    if (list.length === 0) {
      courseList.innerHTML = "<p>No courses found</p>";
      return;
    }

    list.forEach(course => {
      const isEnrolled = enrolledCourses.includes(course.id);

      courseList.innerHTML += `
        <div class="course-card">
          <div class="course-top">
            <span class="badge">${course.category}</span>
          </div>

          <h4>${course.name}</h4>
          <p class="desc">
            ${course.description}
          </p>

          <div class="course-footer">
            <div class="price">${course.price}</div>
            <button class="enroll-btn" 
              onclick="${isEnrolled ? `openCourse(${course.id})` : `enrollCourse(${course.id})`}">
              ${isEnrolled ? "Open" : "Enroll Now"}
            </button>
          </div>
        </div>
      `;
    });
  };

    window.enrollCourse = function(courseId){
    courseId = Number(courseId);
    if (!enrolledCourses.includes(courseId)){
      enrolledCourses.push(courseId);
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
    displayCourses(courses);
  };
  
  window.showDashboard = function(){
    title.innerText = 'Dashboard - Your Enrolled Courses';
    clearActiveCategory();
    const set = new Set(enrolledCourses.map(Number));
    const enrolledList = courses.filter(c => set.has(Number(c.id)));
    displayCourses(enrolledList);
  };

  window.openCourse = function (courseId) {
    localStorage.setItem("currentCourseId", courseId);
    localStorage.setItem("allCourses", JSON.stringify(courses));
    window.location.href = "enrolled.html";
  };


  window.filterCategory = function (category) {
    title.innerText = `${category} Courses`;
    clearActiveCategory();
    popularCards.forEach(card => {
      if (card.innerText.toLowerCase().includes(category.toLowerCase())) {
        card.classList.add("active");
      }
    });

    displayCourses(courses.filter(course => course.category === category));
  };

  window.showAllCourses = function () {
    title.innerText = "All Courses";
    clearActiveCategory();
    displayCourses(courses);
  };

  window.showDashboard = function () {
  title.innerText = "Dashboard - Your Enrolled Courses";
  clearActiveCategory();
  const enrolledList = courses.filter(c => enrolledCourses.includes(c.id));
  displayCourses(enrolledList);
};
  window.showProgress = function () {
  window.location.href = "progress.html";
};

  showDashboard();
});
