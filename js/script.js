const searchInput = document.getElementById('search');
const emailList = document.getElementById('email-list');

function displayEmails(emails) {
  emailList.innerHTML = '';
  emails.forEach(email => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${email.subject}</strong><br><em>From: ${email.customer}</em><br><p>${email.message}</p><hr>`;
    emailList.appendChild(li);
  });
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = emailData.filter(email =>
    email.subject.toLowerCase().includes(term) ||
    email.message.toLowerCase().includes(term) ||
    email.tags.some(tag => tag.toLowerCase().includes(term))
  );
  displayEmails(filtered);
});

displayEmails(emailData);
// Search functionality
document.getElementById('searchButton').addEventListener('click', function () {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.case-card');

  cards.forEach(card => {
    const title = card.querySelector('.case-title').textContent.toLowerCase();
    const description = card.querySelector('.case-description').textContent.toLowerCase();
    if (title.includes(keyword) || description.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Sort functionality
document.getElementById('sortSelect').addEventListener('change', function () {
  const sortOrder = this.value; // "most-recent" or "oldest"
  const container = document.getElementById('casesContainer');
  const cards = Array.from(container.querySelectorAll('.case-card'));

  cards.sort((a, b) => {
    const dateA = new Date(a.getAttribute('data-date'));
    const dateB = new Date(b.getAttribute('data-date'));
    return sortOrder === 'oldest' ? dateA - dateB : dateB - dateA;
  });

  cards.forEach(card => container.appendChild(card));
});

// Modal open
document.getElementById('addCaseBtn').addEventListener('click', function () {
  document.getElementById('caseModal').style.display = 'block';
});
