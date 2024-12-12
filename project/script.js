
const brothers = [
    { name: "Fritz jean ", major: "Health Science,minor computer science" },
    { name: "Mariano mcgasky", major: "Computer Science" },
    { name: "Marquis Gilyard", major: "Sport managment" },
    { name: "Michael Bonsu", major: "Psychology" },
    { name: "Shakur Merritt", major: "Sport managment" },
    { name: "Desmond Ansah", major: "Biology" },
    { name: "Forlinf Amoamah-Antwi", major: "computer science" },
  ];
  
  const brotherList = document.getElementById('brother-list');
  
  brothers.forEach(brother => {
    const listItem = document.createElement('li');
    listItem.textContent = `${brother.name} - ${brother.major}`;
    brotherList.appendChild(listItem);
  });
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
    this.reset();
  });
  