document.addEventListener("DOMContentLoaded", function () {
  const headerElement = document.getElementById("header");

  if (headerElement) {
    headerElement.innerHTML = `
        <div class="bg-white">
          <div class="max-w-[1000px] mx-auto pt-2">
            <div class="p-2 flex justify-between items-center">
              <div class="img">
                <img src="../../img/logo/rupp-logo.png" alt="RUPP Logo" />
              </div>
              <div>
                <ul class="flex text-[11px] font-sans border-b border-dotted border-red-400 text-[#990000]">
                  <li><a class="hover:text-black" href="../../index.html">HOME</a> |</li>
                  <li><a class="hover:text-black" href="../../header/about.html">ABOUT</a> |</li>
                  <li><a class="hover:text-black" href="../../header/project.html">PROJECT</a> |</li>
                  <li><a class="hover:text-black" href="../../header/management.html">MANAGEMENT</a> |</li>
                  <li><a class="hover:text-black" href="../../header/foundation.html">FOUNDATION STUDIES</a> |</li>
                  <li><a class="hover:text-black" href="../../header/iro.html">IRO</a> |</li>
                  <li><a class="hover:text-black" href="../../header/graduate.html">GRADUATE PROGRAMS</a> |</li>
                  <li><a class="hover:text-black" href="../../header/contact.html">CONTACT</a> |</li>
                  <li>
                    <a class="hover:text-black" href="https://login.live.com/" target="_blank">MAIL</a> |
                  </li>
                  <li><a class="hover:text-black" href="../../header/library.html">E-LIBRARY</a> |</li>
                </ul>
                <div class="pt-5">
                  <h4 class="pb-4 text-[20px]">សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h4>
                  <h4 class="text-[12px]">ROYAL UNIVERSITY OF PHNOM PENH</h4>
                </div>
                <h4 class="text-[12px] text-right text-[#990000]">
                  Education, Research, and Service to Society
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[#990000]">
          <div class="max-w-[1020px] mx-auto">
            <ul class="text-white uppercase flex text-[11px] *:p-2">
              <li class="hover:bg-[rgb(198,112,0)] flex items-center justify-center">
                <a href="../../header/fs.html">Faculty of Science</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/fssh.html">Faculty of Social Science and Humanities</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/fe.html">Faculty of Engineering</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/fds.html">Faculty of Development Studies</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/fed.html">Faculty of Education</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/ifl.html">Institute of Foreign Languages</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/iispp.html">Institute for International Studies and Public Policy</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/center.html">Centers</a>
              </li>
              <li class="hover:bg-[#c67000] flex items-center justify-center">
                <a href="../../header/offices.html">Offices</a>
              </li>
            </ul>
          </div>
        </div>
      `;
  }
});
