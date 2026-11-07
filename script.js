const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearNode = document.getElementById('year');

const articleMeta = {
  published: 'January 15, 2026',
  author: 'Santhakumar',
  category: 'Artificial Intelligence',
  tags: 'Azure AI, Azure OpenAI, Enterprise AI',
  readingTime: '6 min'
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const articleMetaNode = document.getElementById('article-meta');

if (articleMetaNode) {
  const metaItems = [
    { icon: '📅', label: 'Published', value: articleMeta.published },
    { icon: '✍️', label: 'Author', value: articleMeta.author },
    { icon: '📂', label: 'Category', value: articleMeta.category },
    { icon: '🏷️', label: 'Tags', value: articleMeta.tags },
    { icon: '⏱️', label: 'Reading Time', value: articleMeta.readingTime }
  ];

  articleMetaNode.innerHTML = metaItems
    .map((item) => `<span>${item.icon} ${item.label}: ${item.value}</span>`)
    .join('');
}
