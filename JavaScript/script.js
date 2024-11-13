const instructors = [
    { name: "Jonh Scrim", expertise: "Senior - Desenvolvimento Web", imageUrl: "../Imagens/imagem1.jpg" },
    { name: "Allana nadia", expertise: "Senior - Ciência de Dados", imageUrl: "../Imagens/imagem2.jpg" },
    { name: "Alan Yu", expertise: "Senior - Inteligência Artificial", imageUrl: "../Imagens/imagem3.jpg" },
    { name: "Murilo Apl", expertise: "Senior - Desenvolvimento Mobile", imageUrl: "../Imagens/imagem4.jpg" },
    { name: "Carlos Mendes", expertise: "Especialista em Python", imageUrl: "../Imagens/imagem5.jpg" },
    { name: "Letícia alem", expertise: "Especialista em Java", imageUrl: "../Imagens/imagem6.jpg" },
    { name: "Ramon dingo", expertise: "Especialista em React", imageUrl: "../Imagens/imagem7.jpg" },
    { name: "Maria lucia", expertise: "Especialista em Kotlin/swift", imageUrl: "../Imagens/imagem8.jpg" },
    { name: "Roger pedras", expertise: "Desenvolvimento de Jogos", imageUrl: "../Imagens/imagem9.jpg" },
    { name: "Leia star", expertise: "Especialista em Lua para Jogos", imageUrl: "../Imagens/imagem10.jpg" },
    { name: "Eduardo doris", expertise: "Especialista em C# para Jogos", imageUrl: "../Imagens/imagem11.jpg" },
    { name: "João pedro", expertise: "Expert em Desenvolvimento de jogos 3D", imageUrl: "../Imagens/imagem12.jpg" }
];

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const instructorGrid = document.getElementById('instructorGrid');

const itemsToShow = 4;

let currentGroup = 0;

function groupInstructors() {
    const groups = [];
    for (let i = 0; i < instructors.length; i += itemsToShow) {
        groups.push(instructors.slice(i, i + itemsToShow));
    }
    return groups;
}

function createInstructorCard(instructor) {
    const card = document.createElement('div');
    card.classList.add('instructor-card');

    const img = document.createElement('img');
    img.src = instructor.imageUrl;
    img.alt = instructor.name;

    const name = document.createElement('h3');
    name.textContent = instructor.name;

    const expertise = document.createElement('p');
    expertise.textContent = instructor.expertise;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(expertise);

    return card;
}

function generateInstructors() {
    const groups = groupInstructors();
    groups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('instructor-group');

        group.forEach(instructor => {
            const instructorCard = createInstructorCard(instructor);
            groupDiv.appendChild(instructorCard);
        });

        instructorGrid.appendChild(groupDiv);
    });
}

function updateCarousel() {
    const groups = document.querySelectorAll('.instructor-group');
    const totalGroups = groups.length;
    const newScrollPosition = currentGroup * instructorGrid.clientWidth;

    instructorGrid.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
    });

    prevBtn.disabled = currentGroup === 0;
    nextBtn.disabled = currentGroup === totalGroups - 1;

    if (currentGroup === totalGroups - 1) {
        const offset = (instructorGrid.clientWidth - groups[totalGroups - 1].clientWidth) / 2;
        instructorGrid.scroll
        instructorGrid.scrollTo({
            left: newScrollPosition + offset,
            behavior: 'smooth'
        });
    }
}

function next() {
    const groups = document.querySelectorAll('.instructor-group');
    if (currentGroup < groups.length - 1) {
        currentGroup++;
        updateCarousel();
    }
}

function prev() {
    if (currentGroup > 0) {
        currentGroup--;
        updateCarousel();
    }
}

function init() {
    generateInstructors();
    updateCarousel();

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev); 
}

init();