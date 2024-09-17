document.addEventListener("DOMContentLoaded", () => {

  // Check if a selection exists in localStorage
  const selectedDetailId = localStorage.getItem("selectedDetailId");

  setDefaultDetail();


});



function goToDetail(id) {
  const details = {
    1: {
      title: "Introduction",
      content: `<p>The Foundation Studies program is a general education program for all students at the Royal University of Phnom Penh, building their capacity for university study. All first-year students undertake general and specialized courses in subjects from all the faculties at RUPP, as well as courses in library use and academic research. In addition to these general courses, students undertake some specialized elective study relevant to their majors.</p>
                  <p>Students who successfully fulfill all course requirements and pass all subjects are awarded a Certificate of Foundation Year and promoted to second year. In case of failure, students are offered a supplementary examination. Students who fail one or more subjects at the supplementary examination must repeat the Foundation Studies program. Examination results are announced approximately 20 days after the examination date.</p>`
    },
    2: {
      title: "Background",
      content: `<p>The Foundation Year course was developed as a result of an edict issued by the Government of Cambodia to institute an accredited, quality-assured system of general education within the Cambodian Higher Education sector. In accordance with this edict, the Department of Foundation Studies at RUPP was established as an independent faculty responsible for the education of all first-year students in 2005. The Department has the full recognition of the Ministry of Education, Youth and Sport.</p>`
    },
    3: {
      title: "Mission",
      content: `<ul class="list-decimal *:ml-4 *:p-2"> 
                        <li>To promote students learning abilities by offering a new curriculum suitable for the development of curricula in the region.</li>
                        <li>To develop a new and modern curriculum which responds to the needs of students to enable them to continue their studies towards a Bachelors Degree.</li>
                        <li>To encourage the compiling and developing of more documents for all subject areas in the library.</li>
                        <li>To add more laboratory facilities for students in the field of science.</li>
                        <li>To examine and evaluate the existing curriculum.</li>
                    </ul>`
    },
    4: {
      title: "Objectives",
      content: `<ul class="list-decimal *:ml-4 *:p-2"> 
                        <li>To achieve a standard of education recognized by the Accreditation Committee of Cambodia</li>
                        <li>To provide a general foundation of knowledge enables students to continue their studies towards a Bachelors Degree</li>
                    </ul>`
    },
    5: {
      title: "Course Structure",
      content: `<p>Core Subjects:</p>
                  <p>Students study a combination of subjects outside their major area, in the sciences, humanities, social sciences and foreign languages.</p>
                  <p class="font-bold">Elective Course:</p>
                  <p>Students also complete the elective stream that is relevant to their degree. The elective stream consists of subjects orientated towards specific areas of study correlating to the degrees offered at RUPP.</p>`

    },
    6: {
      title: "Strategic Planning 2007-2011",
      content: `
                    <p>The following are the short-term strategic goals of the Department of Foundation Studies, developed in accordance with available human resources and materials:</p>
                    <ul class="list-decimal *:ml-4 *:p-2"> 
                        <li>To achieve a standard of education recognized by the Accreditation Committee of Cambodia</li>
                        <li>To provide a general foundation of knowledge enables students to continue their studies towards a Bachelors Degree</li>
                    </ul>`
    },
    7: {
      title: "Admission",
      content: `<p>Admission to all degrees at the Royal University of Phnom Penhis administered by the Ministry of Education, Youth and Sport, based on results in the High School Certificate. Those applying for study in the Department of Media and Communications or the Institute of Foreign Languages must also sit a separate entrance examination.</p>`
    },
    8: {
      title: "Assessment",
      content: `<p class="font-serif"><i>Faculty of Science and Faculty of Social Sciences and Humanities: Students are assessed through attendance (10%), research (10%), review test (20%), and an end of semester examination (60%).</i></p>
                       <p> <i>Institute of Foreign Languages: Students are assessed through homework and class participation (5%), review test (30%), research (15%), and end of semester examination (50%).</i></p>`
    },
    9: {
      title: "Grading System",
      content: `
           <p>Students are assessed based on the following grading </p>
            <table class="mt-4 w-full">
                <tbody class="*:text-center">
                <tr class="*:border-r w-full bg-[#CCC]">
                  <td><b>Percentage</b></td>
                  <td><b>Grade</b></td>
                  <td><b>Grade Point</b></td>
                  <td><b>Definition</b></td>
                </tr>
                <tr>
                  <td>85%-100%</td>
                  <td>A</td>
                  <td>4.00</td>
                  <td>Excellent</td>
                </tr>
                <tr>
                  <td>80%-84%</td>
                  <td>B+</td>
                  <td>3.50</td>
                  <td>Very Good</td>
                </tr>
                <tr>
                  <td>70%-79%</td>
                  <td>B</td>
                  <td>3.00</td>
                  <td>Good</td>
                </tr>
                <tr>
                  <td>65%-69%</td>
                  <td>C+</td>
                  <td>2.50.</td>
                  <td>Fairly Good</td>
                </tr>
                <tr>
                  <td>50%-64%</td>
                  <td>C</td>
                  <td>2.00</td>
                  <td>Fair</td>
                </tr>
                <tr>
                  <td>&lt;49%</td>
                  <td>D</td>
                  <td>1.50</td>
                  <td>Fail</td>
                </tr>
            </tbody></table>`
    },

    // Add more cases as needed
  };

  if (details[id]) {
    document.querySelector("#detailSection h2").innerHTML = details[id].title;
    document.querySelector("#detailSection .content").innerHTML = details[id].content;

    // Save the selected detail to localStorage
    localStorage.setItem("selectedDetailId", id);
  } else {
    document.querySelector("#detailSection h2").innerHTML = "Details not found";
    document.querySelector("#detailSection .content").innerHTML = "";
  }
}
function setDefaultDetail() {
  // Set the default heading and content for "Foundation Studies"
  document.querySelector("#detailSection h2").innerHTML = "Foundation Studies";

  // Clear the selection in localStorage
  localStorage.removeItem("selectedDetailId");
}


