const services = [
    {
      image: "comsimages/BHM.jpeg",
      description: "For Black History Month, our community service project at the local school aims to educate and inspire students about the rich and diverse history of African Americans. The presentation will highlight key figures, events, and cultural contributions that have shaped the nation. Through engaging stories, historical images, and interactive activities, we will celebrate the achievements and resilience of African American leaders, artists, scientists, and everyday heroes. Our goal is to foster a deeper understanding, appreciation, and respect for the significant role Black history plays in American history and culture. By sharing these stories, we hope to empower the next generation to continue the legacy of equality, justice, and progress."
    },
    {
      image: "comsimages/school.jpeg",
      description: "Our brother recently volunteered at a local elementary school, where we spent the day helping students with their lessons and activities. We assisted teachers by working with small groups, helping students with reading, math, and other classroom tasks. During recess and lunch, we organized fun games and activities, ensuring the children had a safe and enjoyable time.It was a fulfilling experience to connect with the students and contribute to their learning and growth. By offering support and encouragement, we helped create a positive and engaging environment that allowed the children to feel confident in their abilities. The day not only allowed us to make a difference in the students' lives but also reminded us of the importance of kindness, patience, and community involvement."
    },
    {
      image: "comsimages/fooddrive2.jpeg",
      description: "Our brothers recently participated in a community food drive, where we dedicated our time and efforts to gathering and distributing vital food supplies to those facing hunger in our area. We worked together to collect donations, sort non-perishable items, and pack food packages that would be delivered to local families and individuals in need. The experience was both fulfilling and eye-opening, as it allowed us to directly address food insecurity and make a tangible difference in the lives of others.Through this initiative, we not only helped provide nourishment to those struggling to make ends meet but also fostered a sense of solidarity and empathy among the volunteers. The act of coming together for a common cause strengthened our bonds as a team and reminded us of the power of community. Our collective efforts were a small but meaningful step toward supporting those in need and making a lasting, positive impact in our neighborhood."
    },
    {
      image: "comsimages/clothedrive.jpeg",
      description: "During our community service event at a clothing drive, volunteers collected, sorted, and distributed clothing to those in need. We organized donations into categories, ensured items were in good condition, and made them available to individuals and families who rely on these resources. The event was a collaborative effort that brought our community together to make a positive impact."
    },
    {
      image: "comsimages/IMG_7980.jpeg",
      description: "we recently volunteered at a local shelter, where we dedicated our time and efforts to support those in need. We assisted with various tasks, including preparing and serving meals, organizing donations, and engaging with the residents through conversations and activities. Our goal was to provide a sense of community and comfort, and we were grateful for the opportunity to make a positive impact on the lives of the shelter's residents. This experience not only helped those we served but also fostered a sense of unity and social responsibility among our team members."
    },
    {
      image: "comsimages/fooddrive1.jpeg",
      description: "Our team recently participated in a community food drive, where we collectively worked to gather and distribute essential food items to those in need. We volunteered our time to sort donations, pack food baskets, and help distribute them to local families and individuals. This initiative not only helped address food insecurity in our community but also fostered a sense of unity and compassion among the volunteers. Our efforts were a small step towards making a positive impact and supporting those who require our help."
    },
    {
      image: "comsimages/thanksgiving.jpeg",
      description: "On Thanksgiving, our brothers came together for a heartfelt community service event where we prepared and distributed cooked meals to those in need. Volunteers cooked a variety of traditional Thanksgiving dishes, packaged them, and handed them out to members of the community who might otherwise go without a holiday meal. This event was a meaningful way to show appreciation and care for our neighbors, fostering a sense of community and gratitude during the holiday season. "
    },
    {
      image: "comsimages/thanksgiving2.jpeg",
      description: "This Thanksgiving, our brothers came together in a spirit of unity and compassion for a community service event that touched the hearts of many. Volunteers spent hours in the kitchen preparing a diverse array of traditional dishes, from roasted turkey and mashed potatoes to pumpkin pie, ensuring that each meal was a reflection of the love and care we wanted to share. Once the meals were ready, they were carefully packaged with gratitude and distributed to those in need, including elderly neighbors, struggling families, and individuals facing hardship.The event was more than just about providing food it was a way to connect with our community and foster a sense of belonging. As we handed out the meals, we were reminded of the power of small acts of kindness to make a significant difference in people’s lives. The joy and appreciation expressed by those receiving the meals were a testament to the impact of coming together as one to serve others. It was a Thanksgiving to remember, one that deepened our sense of gratitude and strengthened the bonds that hold us all together."
    }
  ];
  


const container = document.querySelector('.container');


services.forEach(service => {
  const card = document.createElement('div');
  card.classList.add('service-card');

  const image = document.createElement('img');
  image.src = service.image;
  image.alt = "Community Service";
  image.classList.add('service-image');

  const description = document.createElement('p');
  description.textContent = service.description;
  description.classList.add('service-description');

  const button = document.createElement('a');  
  button.textContent = "Learn More";
  button.classList.add('service-button');
  button.href = "https://www.instagram.com/caldwell_iotas?igsh=NTVhNGFpNjdrdmVy&utm_source=qr";  
  button.target = "_blank";  

  card.appendChild(image);
  card.appendChild(description);
  card.appendChild(button);

  container.appendChild(card);
});
