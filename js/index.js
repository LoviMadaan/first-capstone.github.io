const speakers = [
  {
    name: 'Vikas Khanna',
    profile:
        'Vikas Khanna is an Indian chef, restaurateur, cookbook writer, filmmaker and humanitarian.',
    about:
        'He is one of the judges of MasterChef India.',
    avatarURL: './assets/images/vikas.jpg',
  },
  {
    name: 'Sanjeev Kapoor',
    profile:
        'SchooSanjeev Kapoor is an Indian celebrity chef, entrepreneur and television personality.',
    about:
        'Kapoor hosted the TV show Khana Khazana, the longest running show of its kind in Asia which was broadcast in 120',
    avatarURL: './assets/images/sanjeev.jpg',
  },
  {
    name: 'Madhur Jaffrey',
    profile:
        'Madhur Jaffrey CBE is an Indian-British-American actress, food and travel writer, and television personality.',
    about:
        'Madhur Jaffrey CBE is an Indian-British-American actress, food and travel writer, and television personality.',
    avatarURL: './assets/images/Madhur-Jaffrey.jpg',
  },
  {
    name: 'Vineet Bhatia',
    profile:
        'President of Young Pirates of EuropVineet Bhatia MBE is an Indo British chef, restaurateur, author, and media personality.',
    about:
        'He was the first chef of Indian origin to be awarded a Michelin stare',
    avatarURL: './assets/images/vineet.jpg',
  },
  {
    name: 'Ranveer Brar',
    profile:
        'Ranveer Singh Brar is a Lucknow-born and bred Indian celebrity chef, Masterchef India judge, author and restaurateur.',
    about:
        'Ranveer Singh Brar is a Lucknow-born and bred Indian celebrity chef, Masterchef India judge, author and restaurateur.',
    avatarURL: './assets/images/pic.jpg',
  },
  {
    name: 'Vicky Ratnani',
    profile:
        'CEO of Creative Commons, COO of the Mozilla Vicky Ratnani is an Indian chef',
    about:
        'He has a cooking show on NDTV called Vicky Goes Veg, as well as a cookbook by the same name.',
    avatarURL: './assets/images/vicky.jpg',
  },
];

const speakersDisplayState = {
  isExpanded: false,
};

const ul = document.querySelector('.speakers');

const displaySpeakers = (speaker, index) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'speaker');

  const div1 = document.createElement('div');
  div1.setAttribute('class', 'images');

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'grid');
  img1.setAttribute('src', './assets/images/grid2.png');
  img1.setAttribute('alt', `speaker ${index + 1} image design`);
  div1.appendChild(img1);

  const img2 = document.createElement('img');
  img2.setAttribute('class', 'speaker-image');
  img2.setAttribute('src', speaker.avatarURL);
  img2.setAttribute('alt', `speaker ${index + 1} avatar`);
  div1.appendChild(img2);

  li.appendChild(div1);

  const div2 = document.createElement('div');
  div2.setAttribute('class', 'speaker-profile');

  const heading = document.createElement('h2');
  heading.setAttribute('class', 'name');
  heading.textContent = speaker.name;
  div2.appendChild(heading);

  const p1 = document.createElement('p');
  p1.setAttribute('class', 'profile');
  p1.textContent = speaker.profile;
  div2.appendChild(p1);

  const hr = document.createElement('hr');
  hr.setAttribute('class', 'short-underline');
  div2.appendChild(hr);

  const p2 = document.createElement('p');
  p2.setAttribute('class', 'intro');
  p2.textContent = speaker.about;
  div2.appendChild(p2);
  li.appendChild(div2);

  ul.appendChild(li);
};

const smartShowSpeakers = (start, stop) => {
  speakers.forEach((speaker, index) => {
    if (index + 1 >= start && index + 1 <= stop) {
      displaySpeakers(speaker, index);
    }
  });
};

const moreSpeakersButton = document.querySelector('.button-container');

const showSpeakers = () => {
  const { isExpanded } = speakersDisplayState;

  if (window.innerWidth <= 768 && isExpanded) {
    document.querySelector('.speakers').innerHTML = '';
    smartShowSpeakers(1, 2);
    speakersDisplayState.isExpanded = false;
    moreSpeakersButton.children[0].innerHTML = 'MORE <i class="fa fa-chevron-down"></i>';
  } else if (window.innerWidth <= 768 && !isExpanded) {
    smartShowSpeakers(3, speakers.length);
    speakersDisplayState.isExpanded = true;
    moreSpeakersButton.children[0].innerHTML = 'LESS <i class="fa fa-chevron-up"></i>';
  } else if (!window.innerWidth <= 768 && isExpanded) {
    document.querySelector('.speakers').innerHTML = '';
    smartShowSpeakers(1, 4);
    speakersDisplayState.isExpanded = false;
    moreSpeakersButton.children[0].innerHTML = 'MORE <i class="fa fa-chevron-down"></i>';
  } else if (!window.innerWidth <= 768 && !isExpanded) {
    smartShowSpeakers(5, speakers.length);
    speakersDisplayState.isExpanded = true;
    moreSpeakersButton.children[0].innerHTML = 'LESS <i class="fa fa-chevron-up"></i>';
  }
};

document.querySelector('.speakers').innerHTML = '';

if (window.innerWidth <= 768) {
  smartShowSpeakers(1, 2);
} else if (window.innerWidth > 768) {
  smartShowSpeakers(1, 4);
}

moreSpeakersButton.addEventListener('click', () => {
  showSpeakers();
});