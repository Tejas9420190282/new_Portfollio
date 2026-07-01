// scrollTo.js

export default function scrollTo(id) {
  document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
}
