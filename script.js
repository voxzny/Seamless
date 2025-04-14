
  const form = document.getElementById('workout-form');
  const list = document.getElementById('tracked-workouts');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('workout-name').value;
    const type = document.getElementById('workout-type').value;
    const time = document.getElementById('workout-time').value;

    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
      <div class="title">${name}</div>
      <div class="info">${type} • ${time} mins</div>
    `;

    list.appendChild(card);
    form.reset();
  });

