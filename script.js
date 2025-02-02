const crimes = {
    english: [
        { 
            crime: "Theft", 
            law: "Section 378 IPC", 
            description: "Defines theft as dishonestly taking movable property out of possession without consent of the owner." 
        },
        { 
            crime: "Murder", 
            law: "Section 302 IPC", 
            description: "Punishes murder with life imprisonment or the death penalty based on the severity of the crime." 
        },
        { 
            crime: "Fraud", 
            law: "Section 420 IPC", 
            description: "Covers cheating and dishonestly inducing delivery of property, punishable by up to 7 years imprisonment." 
        },
        { 
            crime: "Assault", 
            law: "Section 351 IPC", 
            description: "Defines assault as an attempt or threat to apply physical force to another person unlawfully." 
        },
        { 
            crime: "Kidnapping", 
            law: "Section 363 IPC", 
            description: "Punishes kidnapping of minors or persons from lawful guardianship with imprisonment up to 7 years." 
        },
        { 
            crime: "Rape", 
            law: "Section 376 IPC", 
            description: "Punishes sexual assault, with imprisonment not less than 7 years, extendable to life imprisonment or death penalty." 
        },
        { 
            crime: "Domestic Violence", 
            law: "Protection of Women from Domestic Violence Act, 2005", 
            description: "Covers physical, emotional, sexual, or financial abuse against women within a domestic setup." 
        },
        { 
            crime: "Cyberstalking", 
            law: "Section 354D IPC", 
            description: "Punishes persistent tracking or stalking of a person online, leading to fear or harm." 
        },
        { 
            crime: "Child Labour", 
            law: "Child Labour Prohibition and Regulation Act, 1986", 
            description: "Prohibits employing children below 14 in hazardous occupations, ensuring their right to education." 
        },
        { 
            crime: "Drunk Driving", 
            law: "Section 185 Motor Vehicles Act, 1988", 
            description: "Punishes driving under the influence of alcohol or drugs with fines and/or imprisonment." 
        },
        { 
            crime: "Defamation", 
            law: "Section 499 IPC", 
            description: "Covers harming someone's reputation by spoken or written words, punishable by imprisonment or fine." 
        },
        { 
            crime: "Dowry Harassment", 
            law: "Section 498A IPC", 
            description: "Punishes harassment of a woman for dowry by her husband or in-laws, with imprisonment up to 3 years." 
        },
        { 
            crime: "Bribery", 
            law: "Prevention of Corruption Act, 1988", 
            description: "Punishes giving or taking bribes in exchange for undue favors in public or private sectors." 
        },
        { 
            crime: "Human Trafficking", 
            law: "Section 370 IPC", 
            description: "Punishes illegal trading or exploitation of persons for forced labor, prostitution, or other exploitative purposes." 
        },
        { 
            crime: "Adultery", 
            law: "Section 497 IPC (Now decriminalized)", 
            description: "Adultery is no longer a criminal offense but remains grounds for divorce under civil laws." 
        },
        { 
            crime: "Hate Speech", 
            law: "Section 153A IPC", 
            description: "Punishes promoting enmity between groups on grounds of religion, race, or other differences." 
        },
        { 
            crime: "Poaching", 
            law: "Wildlife Protection Act, 1972", 
            description: "Punishes illegal hunting or capturing of protected wild animals, with fines and imprisonment." 
        },
        { 
            crime: "Counterfeiting Currency", 
            law: "Section 489 IPC", 
            description: "Punishes manufacturing or distributing counterfeit currency with imprisonment for up to life and a fine." 
        },
        { 
            crime: "Rioting", 
            law: "Section 147 IPC", 
            description: "Defines unlawful assembly with intent to use force, punishable by imprisonment or fines." 
        },
        { 
            crime: "Trespass", 
            law: "Section 441 IPC", 
            description: "Punishes unlawful entry onto someone’s property with intent to commit an offense or cause harm." 
        },
        { 
            crime: "Animal Cruelty", 
            law: "Prevention of Cruelty to Animals Act, 1960", 
            description: "Prohibits inflicting unnecessary pain or suffering on animals, punishable with fines or imprisonment." 
        },
        { 
            crime: "Cheating", 
            law: "Section 415 IPC", 
            description: "Punishes deceiving someone to cause harm or wrongful loss to their property or rights." 
        },
        { 
            crime: "Public Nuisance", 
            law: "Section 268 IPC", 
            description: "Defines acts causing annoyance or harm to the public as a punishable offense." 
        },
        { 
            crime: "Illegal Possession of Arms", 
            law: "Arms Act, 1959", 
            description: "Punishes illegal possession or use of firearms without a valid license or authorization." 
        },
        { 
            crime: "Acid Attack", 
            law: "Section 326A IPC", 
            description: "Punishes intentionally causing harm by throwing acid, with imprisonment not less than 10 years." 
        },
    ],
    hindi:   [
        { 
            crime: "चोरी", 
            law: "धारा 378 आईपीसी", 
            description: "चोरी को बिना अनुमति मालिक की संपत्ति को बेईमानी से लेने के रूप में परिभाषित करता है।" 
        },
        { 
            crime: "हत्या", 
            law: "धारा 302 आईपीसी", 
            description: "हत्या के लिए आजीवन कारावास या अपराध की गंभीरता के आधार पर मृत्युदंड का प्रावधान करता है।" 
        },
        { 
            crime: "धोखाधड़ी", 
            law: "धारा 420 आईपीसी", 
            description: "संपत्ति की बेईमानी से डिलीवरी कराने के लिए धोखाधड़ी और छल का अपराध।" 
        },
        { 
            crime: "हमला", 
            law: "धारा 351 आईपीसी", 
            description: "हमले को किसी व्यक्ति पर शारीरिक बल के अवैध प्रयोग के प्रयास या धमकी के रूप में परिभाषित करता है।" 
        },
        { 
            crime: "अपहरण", 
            law: "धारा 363 आईपीसी", 
            description: "अवैध अभिरक्षा से नाबालिगों का अपहरण करने के लिए 7 साल तक की सजा।" 
        },
        { 
            crime: "बलात्कार", 
            law: "धारा 376 आईपीसी", 
            description: "यौन हमले के लिए 7 साल से कम नहीं, आजीवन कारावास या मृत्युदंड का प्रावधान।" 
        },
        { 
            crime: "घरेलू हिंसा", 
            law: "घरेलू हिंसा से महिलाओं की सुरक्षा अधिनियम, 2005", 
            description: "महिलाओं पर घरेलू सेटअप में शारीरिक, भावनात्मक, यौन या वित्तीय दुर्व्यवहार।" 
        },
        { 
            crime: "साइबर स्टॉकिंग", 
            law: "धारा 354डी आईपीसी", 
            description: "ऑनलाइन किसी व्यक्ति को डराने या नुकसान पहुंचाने के लिए लगातार ट्रैकिंग।" 
        },
        { 
            crime: "बाल श्रम", 
            law: "बाल श्रम निषेध और विनियमन अधिनियम, 1986", 
            description: "खतरनाक कार्यों में 14 साल से कम उम्र के बच्चों को रोजगार देने पर रोक।" 
        },
        { 
            crime: "नशे में गाड़ी चलाना", 
            law: "धारा 185 मोटर वाहन अधिनियम, 1988", 
            description: "शराब या नशीले पदार्थों के प्रभाव में वाहन चलाने पर जुर्माना या सजा।" 
        },
        { 
            crime: "मानहानि", 
            law: "धारा 499 आईपीसी", 
            description: "किसी की प्रतिष्ठा को नुकसान पहुंचाने वाले शब्दों के लिए सजा का प्रावधान।" 
        },
        { 
            crime: "दहेज उत्पीड़न", 
            law: "धारा 498ए आईपीसी", 
            description: "दहेज के लिए महिला पर उत्पीड़न करने वाले पति या ससुराल वालों के लिए 3 साल तक की सजा।" 
        },
        { 
            crime: "घूसखोरी", 
            law: "भ्रष्टाचार निवारण अधिनियम, 1988", 
            description: "अनुचित लाभ के लिए रिश्वत देने या लेने का अपराध।" 
        },
        { 
            crime: "मानव तस्करी", 
            law: "धारा 370 आईपीसी", 
            description: "किसी व्यक्ति के शोषण के उद्देश्य से अवैध व्यापार या तस्करी।" 
        },
        { 
            crime: "व्यभिचार", 
            law: "धारा 497 आईपीसी (अब अपराध नहीं)", 
            description: "व्यभिचार अब आपराधिक नहीं है लेकिन तलाक का आधार बना रहता है।" 
        },
        { 
            crime: "हेट स्पीच", 
            law: "धारा 153ए आईपीसी", 
            description: "धर्म, जाति या अन्य आधारों पर समूहों के बीच वैमनस्य फैलाने पर सजा।" 
        },
        { 
            crime: "शिकार", 
            law: "वन्यजीव संरक्षण अधिनियम, 1972", 
            description: "संरक्षित जानवरों का अवैध शिकार या पकड़ने के लिए जुर्माना और सजा।" 
        },
        { 
            crime: "नकली मुद्रा", 
            law: "धारा 489 आईपीसी", 
            description: "जाली मुद्रा बनाने या वितरित करने के लिए आजीवन कारावास और जुर्माना।" 
        },
        { 
            crime: "दंगा", 
            law: "धारा 147 आईपीसी", 
            description: "उपद्रवी इरादे से अवैध रूप से एकत्रित होने वाले समूह के लिए दंड।" 
        },
        { 
            crime: "अनधिकार प्रवेश", 
            law: "धारा 441 आईपीसी", 
            description: "किसी संपत्ति में अवैध रूप से घुसने के लिए सजा।" 
        },
        { 
            crime: "जानवरों पर क्रूरता", 
            law: "पशु क्रूरता निवारण अधिनियम, 1960", 
            description: "जानवरों को अनावश्यक पीड़ा या नुकसान पहुंचाने पर सजा।" 
        },
        { 
            crime: "धोखा", 
            law: "धारा 415 आईपीसी", 
            description: "धोखे से किसी व्यक्ति को हानि या हानि पहुंचाने के लिए अपराध।" 
        },
        { 
            crime: "सार्वजनिक उपद्रव", 
            law: "धारा 268 आईपीसी", 
            description: "सार्वजनिक स्थान पर हानि या असुविधा फैलाने वाले कार्य।" 
        },
        { 
            crime: "अवैध हथियार रखना", 
            law: "शस्त्र अधिनियम, 1959", 
            description: "बिना लाइसेंस के हथियार रखने या उपयोग करने पर सजा।" 
        },
        { 
            crime: "तेजाब हमला", 
            law: "धारा 326ए आईपीसी", 
            description: "तेजाब से जानबूझकर किसी को नुकसान पहुंचाने के लिए 10 साल से कम की सजा नहीं।" 
        }
    ]

    
};

function searchCrime() {
    const language = "english"; // Default language for now
    const search = document.getElementById("search").value.toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear previous results

    if (crimes[language]) {
        const crimeList = crimes[language].filter(item => 
            item.crime.toLowerCase().includes(search)
        );
        if (crimeList.length > 0) {
            crimeList.forEach(item => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <strong>${item.crime}</strong> - <em>${item.law}</em>
                    <p class="details" onclick="toggleDetails(this)">More Details</p>
                    <div class="details-content">${item.description}</div>
                `;
                results.appendChild(div);
            });
        } else {
            results.innerHTML = "<div>No results found.</div>";
        }
    }
}

function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
}
