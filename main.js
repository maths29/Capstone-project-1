window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.close-button');
  const menuItems = document.querySelectorAll('.mobile-menu-item');
  function toggleMenu() {
    if (mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
    }
  }
  hamburger.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);
  window.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.style.display = 'none';
    }
  });
  for (let i = 0; i < menuItems.length; i += 1) {
    menuItems[i].addEventListener('click', toggleMenu);
  }
});

const featureData = [
  {
    name: 'Ryan Merkley',
    image: 'assets/images/speaker_06.png',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    archievement:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },

  {
    name: 'Kilnam Chon',
    image: 'assets/images/speaker_04.png',
    position:
      'Senior Program Officer, Digital Capabilities Bill & Melinda Gates Foundation',
    archievement:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },

  {
    name: 'Yochai Benkler',
    image: 'assets/images/speaker_01.png',
    position:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    archievement:
      'Berkman studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },

  {
    name: 'Ryan Merkley',
    image: 'assets/images/speaker_06.png',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    archievement:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },

  {
    name: 'Ryan Merkley',
    image: 'assets/images/speaker_06.png',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    archievement:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },

  {
    name: 'Ryan Merkley',
    image: 'assets/images/speaker_06.png',
    position: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    archievement:
      'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

const featureSect = document.querySelector('#featured-speakers');

const featHead = document.createElement('h2');
featHead.classList.add('featHead');
featHead.textContent = 'Featured Speakers';
featureSect.appendChild(featHead);

const branch = document.createElement('div');
branch.classList.add('featureLine');
featureSect.appendChild(branch);

const featureContan = document.createElement('div');
featureContan.classList.add('featureContan');
featureSect.appendChild(featureContan);

for (let i = 0; i < featureData.length; i++) {
  const data = featureData[i];

  const featureCard = document.createElement('div');
  featureCard.classList.add('featureCard');
  featureContan.appendChild(featureCard);

  const featureImage = document.createElement('img');
  featureImage.src = data.image;
  featureImage.classList.add('featureImage');
  featureCard.appendChild(featureImage);

  const featureDescription = document.createElement('div');
  featureDescription.classList.add('featureDescription');
  featureCard.appendChild(featureDescription);

  const featureName = document.createElement('h2');
  featureName.classList.add('featureName');
  featureName.textContent = data.name;
  featureDescription.appendChild(featureName);

  const featureparag1 = document.createElement('p');
  featureparag1.classList.add('featureparag1');
  featureparag1.textContent = data.position;
  featureDescription.appendChild(featureparag1);

  const branch2 = document.createElement('div');
  branch2.classList.add('branch2');
  featureDescription.appendChild(branch2);

  const featureparag2 = document.createElement('p');
  featureparag2.classList.add('featureparag2');
  featureparag2.textContent = data.archievement;
  featureDescription.appendChild(featureparag2);

  if (i > 1) {
    featureCard.classList.add('hiddenCard');
  }
}

const btn = document.createElement('button');
btn.classList.add('btnMore');
btn.textContent = 'MORE ▽';
featureContan.appendChild(btn);
