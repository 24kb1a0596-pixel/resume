const name = "Chembeti Lokesh";
const age = 19;
const college = "NBKRIST";
const year = "3rd Year";
const email = "chembetilokesh777@gmail.com";
const phone = "9177538921";

const languages = [
    "C",
    "Java",
    "Python",
    "HTML",
    "JavaScript",
    "Basic Data Structures"
];

document.getElementById("resume").innerHTML = `
    <h1>${name}</h1>

    <p>
        <b>Age:</b> ${age}
    </p>

    <p>
        <b>Email:</b> ${email}
    </p>

    <p>
        <b>Phone:</b> ${phone}
    </p>

    <hr>

    <h2>Career Objective</h2>
    <p>
        To build a successful career in the software field by improving
        my technical skills and gaining practical experience.
    </p>

    <h2>Education</h2>
    <p>
        <b>College:</b> ${college}
    </p>

    <p>
        <b>Year:</b> ${year}
    </p>

    <h2>Technical Skills</h2>

    <ul>
        ${languages.map(language => `<li>${language}</li>`).join("")}
    </ul>

    <h2>Personal Details</h2>

    <p><b>Name:</b> ${name}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Languages Known:</b> C, Java, Python, HTML, JavaScript</p>

    <h2>Declaration</h2>
    <p>
        I hereby declare that the above information is true to the best
        of my knowledge.
    </p>
`;
