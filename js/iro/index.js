
document.addEventListener("DOMContentLoaded", () => {

    // Check if a selection exists in localStorage
    const selectedDetailId = localStorage.getItem("selectedDetailId");


    setDefaultDetail();


});

function goToDetail(id) {
    const details = {
        1: {
            title: "General Background",
            content: `
                    <img src="../img/iro/mainrupp2.jpg" />
                    <p>The International Relations Office (IRO), officially established on 12 October 2010, provides a channel for international communication and interactions between the Royal University of Phnom Penh and international partners. As part of RUPP’s commitment to international cooperation, IRO promotes student mobility and student exchange programs through mutual understanding between partner universities and international networks. It is also the site of the advising services for scholarships and admission to the regional universities and universities in the USA and European countries.</p>
                    <p>The IRO is committed to increasing international collaboration through exchange cultural events, visits, conferences, trips abroad and opening up international conversations by encouraging university stakeholders to set up joint programs, joint research and projects, alumni societies, faculty exchange and internships for both local and international students.</p>`
        },
        2: {
            title: "Vision",
            content: `
                <img src="../img/iro/mainrupp1.jpg" />
                <p>The International Relations Office (IRO) will promote the RUPP programs internationally and expanding access for RUPP students and lecturers to research and study overseas.</p>`
        },
        3: {
            title: "Mission",
            content: `
                    <img src="../img/iro/mainrupp2.jpg" />
                    <p>The International Relations Office has the following missions:</p>
                    <ul class="list-decimal *:ml-4 *:p-2"> 
                          <li>Promoting the name and programs of the RUPP internationally;</li>
                          <li>Creating opportunities for student mobility and faculty exchange through international collaboration and scholarship;</li>
                          <li>Developing and exchanging cultural activities with students from partner universities;</li>
                          <li>Promoting collaborative faculty and student research activities between RUPP and overseas universities;</li>
                          <li>Offering assistance to international students and scholars; and</li>
                          <li>Providing a platform at RUPP for international discussions on issues of academic quality and institutional governance.</li>
                      </ul>`
        },
        4: {
            title: "Core Value: In-SPIRE",
            content: `
                    <img src="../img/iro/mainrupp1.jpg" />
                    <p>In-SPIRE = Information Services to Partners and International Relation Exchanges</p>`
        },
        5: {
            title: "Key Roles and Responsibilities",
            content: `<img src="../img/iro/mainrupp1.jpg" />
                    <p>The International Relations Office (IRO) of the Royal University of Phnom Penh supports University management in the following areas:</p>
                    <ul class="list-disc *:ml-4 *:p-2"> 
                          <li>Strengthening regional cooperation and people-to-people connectivity;</li>
                          <li>
<p>Providing a channel for international communication;</p>
</li>
<li>
<p>Liaising with relevant University stakeholders;</p>
</li>
<li>
<p>Assisting local and international students and/or expatriate lecturers to apply for or extend their visas;</p>
</li>
<li>
<p>Providing administration documents such as note verbal to respective embassies and/or other related paper work to support students and staff exchange;</p>
</li>
<li>
<p>Seeking scholarships or grants for outbound and inbound students and faculty;</p>
</li>
<li>
<p>Providing information regarding scholarships and exchange programs;</p>
</li>
<li>
<p>Consultation on study in the USA and other overseas universities;</p>
</li>
<li>
<p>Disseminating information on job opportunities for students;</p>
</li>
<li>
<p>Managing Key Performance Indicators (KPIs) for international collaborations;</p>
</li>
<li>
<p>Managing existing formal or informal collaboration and seeking new partnerships;</p>
</li>
<li>
<p>Developing ways to promote student mobility;</p>
</li>
<li>
<p>Providing ITP &amp; GRE tests for the public;</p>
</li>
<li>
<p>Organizing international events for international students and alumni and grant aid support ceremonies;</p>
</li>
<li>
<p>Promoting friendship and cultural understanding such as fun interactive events;</p>
</li>
<li>
<p>Processing formal support documents to MoEYS and Ministry of Foreign Affairs;</p>
</li>
<li>
<p>Working on the content of Memoranda of Understanding (MoU)/Letters of Intent(LoI)/ Memoranda of Agreement(MoA) for Vice-Rector and/or Rector;</p>
</li>
<li>
<p>Organizing Memoranda of Understanding signing ceremonies;</p>
</li>
<li>
<p>Consulting and assisting international and/or inbound students to find accommodation and security in terms of health care, health insurance, and safety living in Cambodia; and</p>
</li>
<li>
<p>Increasing quality enhancement and equality in opportunities for employability</p>
</li>
                      </ul>`
        },
        6: {
            title: "University's Network",
            content: `
                      <p>RUPP is one of the Board of Trustees (BOT) of the <strong>  ASEAN University Network (AUN).</strong></p>
                      <p>The purpose of cooperation and collaboration is to strengthen the existing network of cooperation among universities in ASEAN and beyond, promote collaborative study, research and educational programmes in the priority areas identified by ASEAN, promote cooperation and solidarity among scholars, academicians and researchers in the ASEAN Member States, and serve as the policy-oriented body in higher education in the ASEAN region. Programmes and activities under the AUN-led projects are embedded with the purpose to promote higher education cooperation and development in order to enhance regional integration in achieving global standards specifically on five areas: (1) Youth Mobility; (2) Academic Collaboration; (3) Standards, Mechanisms, 
                      Systems and Policies of Higher Education Collaboration; (4) Course and Programmes Development; & (5) Regional & Global Policy Platforms. For more information on the AUN, 
                      please visit the AUN website here: <a class="text-[#990000]" href="http://www.aunsec.org/"> http://www.aunsec.org/.</a></p>`
        },
        7: {
            title: "RUPP Cooperation & Partners",
            content: `<p>Admission to all degrees at the Royal University of Phnom Penhis administered by the Ministry of Education, Youth and Sport, based on results in the High School Certificate. Those applying for study in the Department of Media and Communications or the Institute of Foreign Languages must also sit a separate entrance examination.</p>`
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
    document.querySelector("#detailSection h2").innerHTML = `<div class="*:p-2">
                <h2>International Relations Office</h2>
                 <img src="../img/iro/mainrupp2.jpg" />
                <p class="text-[12px]">
                 The International Relations Office (IRO) provides a channel for international communication and interactions between the Royal University of Phnom Penh and international partners
                </p>
                <table class="w-full">
                  <tbody class="">
                    <tr
                      class="text-[13px] uppercase font-serif *:bg-[#d1cece] *:border-r"
                    >
                      <th>Document</th>
                      <th>Type</th>
                      <th>Download</th>
                    </tr>
                    <tr class="text-[13px] *:p-2">
                      <td>IRO Guidebook 2018</td>
                      <td>PDF</td>
                      <td>
                        <a
                          class="text-[#990000]"
                          href="document/RUPP SP2019-2023E3042019.pdf"
                          title="Strategic Plan 2019-2023 English"
                          target="_blank"
                          >Download</a
                        >
                      </td>
                    </tr>
                    <tr class="text-[13px] *:p-2">
                      <td>Rupp Prospectus 2018</td>
                      <td>PDF</td>
                      <td>
                        <a
                          class="text-[#990000]"
                          href="document/RUPP SP2019-2023KH3042019.pdf"
                          title="Strategic Plan 2019-2023 Khmer"
                          target="_blank"
                          >Download</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="html5-video-container" data-layer="0">
                <video
                  tabindex="-1"
                  class=""
                  webkit-playsinline=""
                  playsinline=""
                  controlslist="nodownload"
                  style="width: 685px; height: 385px; left: 0px; top: 15px"
                  src="https://www.youtube.com/watch?v=VPBxfqwwFDw&t=112s"
                ></video>
              </div>`;

    // Clear the selection in localStorage
    localStorage.removeItem("selectedDetailId");
}


