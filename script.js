document.getElementById("year").textContent=new Date().getFullYear();
const nav=document.querySelector(".nav"),hamb=document.querySelector(".hamb");hamb.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll(".nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
const fs=document.querySelectorAll(".filters button"),cards=document.querySelectorAll(".card");
fs.forEach(b=>b.onclick=()=>{fs.forEach(x=>x.classList.remove("active"));b.classList.add("active");let f=b.dataset.filter;cards.forEach(c=>c.classList.toggle("hide",f!="all"&&!c.dataset.tags.split(" ").includes(f)))});
document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();let d=new FormData(e.target);let body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`);location.href=`mailto:your.email@example.com?subject=${encodeURIComponent(d.get("subject"))}&body=${body}`;document.getElementById("status").textContent="Opening your email client…"};
