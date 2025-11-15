
const SECONDARIES = [
    {
        id: 'green-ryb',
        label: 'Green (RYB)',
        css: '#2ecc71',
        primaries: [
            { name: 'Blue', css: '#3b82f6' },
            { name: 'Yellow', css: '#f59e0b' }
        ]
    },
    {
        id: 'orange-ryb',
        label: 'Orange',
        css: '#ff7a18',
        primaries: [
            { name: 'Red', css: '#ef4444' },
            { name: 'Yellow', css: '#f59e0b' }
        ]
    },
    {
        id: 'purple-ryb',
        label: 'Purple',
        css: '#8b5cf6',
        primaries: [
            { name: 'Red', css: '#ef4444' },
            { name: 'Blue', css: '#3b82f6' }
        ]
    },

    
];

const secondaryList = document.getElementById('secondaryList');
const pickedTitle = document.getElementById('pickedTitle');
const primariesContainer = document.getElementById('primaries');
const blendInfo = document.getElementById('blendInfo');
const clearBtn = document.getElementById('clearBtn');
const detailPanel = document.getElementById('detailPanel');

// Initially hide the entire detail panel
detailPanel.style.display = 'none';

// Create secondary color buttons
SECONDARIES.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'sec-btn';
    btn.innerHTML = `
      <span class="swatch" style="background:${item.css}"></span>
      ${item.label}
    `;
    btn.addEventListener('click', () => pickSecondary(item));
    secondaryList.appendChild(btn);
});

// Handle clicking secondary color
function pickSecondary(item) {
    pickedTitle.textContent = item.label + ' — Primaries';

    primariesContainer.innerHTML = '';

    item.primaries.forEach(p => {
        const card = document.createElement('div');
        card.className = 'primary-card';
        card.innerHTML = `
        <div class="primary-swatch" style="background:${p.css}"></div>
        <div>
          <strong>${p.name}</strong><br>
          <span>Primary color</span>
        </div>
      `;
        primariesContainer.appendChild(card);
    });    blendInfo.textContent = `Primary colors: ${item.primaries.map(p => p.name).join(' + ')}`;
    
    // Show the entire detail panel when a color is selected
    detailPanel.style.display = 'block';
}

// Clear button
clearBtn.addEventListener('click', () => {
    pickedTitle.textContent = "Select a secondary color";
    primariesContainer.innerHTML = "";
    blendInfo.textContent = "";
    
    // Hide the entire detail panel when cleared
    detailPanel.style.display = 'none';
});
  