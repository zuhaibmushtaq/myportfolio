document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const topbar = document.querySelector(".topbar");
toggle.addEventListener("click", () => topbar.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => topbar.classList.remove("open")));

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    projects.forEach(project => {
      project.classList.toggle("hidden", value !== "all" && !project.dataset.tags.split(" ").includes(value));
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(e.target);
  const subject = encodeURIComponent(data.get("subject"));
  const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
});

function downloadResume(e){
  e.preventDefault();
  const a=document.createElement("a");
  a.href="resume.pdf";
  a.download="Zuhaib-Mushtaq-Resume.pdf";
  a.click();
}
