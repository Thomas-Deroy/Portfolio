/* ---------- 3D Card Tilt ---------- */
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();

        // Mouse position inside the card
        const xPct = (e.clientX - rect.left) / rect.width;
        const yPct = (e.clientY - rect.top) / rect.height;

        const xRot = (0.5 - yPct) * 10;
        const yRot = (xPct - 0.5) * 10;

        card.style.transform =
            `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});


/* ---------- Project Modal ---------- */
const modal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.modal-close');
const triggers = document.querySelectorAll('.modal-trigger');

const mTitle = document.getElementById('m-title');
const mDesc = document.getElementById('m-desc');
const mImg = document.getElementById('m-img');
const mTags = document.getElementById('m-tags');
const mLogo = document.getElementById('m-logo');

const mGithub = document.getElementById('m-github');
const mYoutube = document.getElementById('m-youtube');
const mSteam = document.getElementById('m-steam');
const mGodot = document.getElementById('m-godot');

triggers.forEach(item => {
    item.addEventListener('click', () => {
        // Read project data
        const title = item.getAttribute('data-title');
        const descId = item.getAttribute('data-desc-id');

        let desc = projectDescriptions?.[descId]
            || item.getAttribute('data-desc')
            || '';

        const img = item.getAttribute('data-img');
        const logo = item.getAttribute('data-logo');
        const github = item.getAttribute('data-github');
        const youtube = item.getAttribute('data-youtube');
        const steam = item.getAttribute('data-steam');
        const godot = item.getAttribute('data-godot');
        const tags = item.getAttribute('data-tags')?.split(',') || [];

        // Populate modal
        mTitle.innerText = title;

        desc = desc
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '<hr class="desc-divider">');

        mDesc.innerHTML = desc;
        mImg.src = img;

        if (logo) {
            mLogo.src = logo;
            mLogo.style.display = 'block';
        } else {
            mLogo.style.display = 'none';
        }

        // Reset action buttons
        [mGithub, mYoutube, mSteam, mGodot].forEach(btn => {
            btn.style.display = 'none';
        });

        // Show available links
        if (github && github !== '#') {
            mGithub.href = github;
            mGithub.style.display = 'inline-flex';
        }

        if (youtube && youtube !== '#') {
            mYoutube.href = youtube;
            mYoutube.style.display = 'inline-flex';
        }

        if (steam && steam !== '#') {
            mSteam.href = steam;
            mSteam.style.display = 'inline-flex';
        }

        if (godot && godot !== '#') {
            mGodot.href = godot;
            mGodot.style.display = 'inline-flex';
        }

        // Build tags
        mTags.innerHTML = '';

        tags.forEach(tag => {
            if (!tag.trim()) return;

            const span = document.createElement('span');
            span.className = 'modal-tag';
            span.innerText = tag.trim();
            mTags.appendChild(span);
        });

        // Show modal
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
    });
});

function hideModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

closeBtn.addEventListener('click', hideModal);

window.addEventListener('click', e => {
    if (e.target === modal) hideModal();
});


/* ---------- Art Gallery ---------- */
const artBtn = document.getElementById('toggleArt');
const artGal = document.getElementById('artGallery');
const artFilters = document.getElementById('artFilters');
const filterBtns = document.querySelectorAll('.filter-btn');
const artBricks = document.querySelectorAll('.art-brick');

if(artBtn) {
    artBtn.addEventListener('click', () => {
        // Toggle the gallery grid
        artGal.classList.toggle('hidden-gallery');
        
        // Toggle the filter buttons sliding in
        artFilters.classList.toggle('hidden-filters');
        
        // Swap button styling and text
        if (artGal.classList.contains('hidden-gallery')) {
            artBtn.innerText = "Expand Gallery";
            artBtn.classList.remove('btn-primary');
            artBtn.classList.add('btn-outline');
            
            // Reset filters when closing
            resetFilters();
        } else {
            artBtn.innerText = "Close Gallery";
            artBtn.classList.remove('btn-outline');
            artBtn.classList.add('btn-primary');
        }
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Swap active button class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Get the filter type (all, art, animation)
        const filterType = btn.getAttribute('data-filter');

        // Apply the dimming effect
        artBricks.forEach(brick => {
            const brickType = brick.getAttribute('data-type');
            
            if (filterType === 'all' || filterType === brickType) {
                brick.classList.remove('dimmed');
            } else {
                brick.classList.add('dimmed');
            }
        });
    });
});

function resetFilters() {
    filterBtns.forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    artBricks.forEach(brick => brick.classList.remove('dimmed'));
}
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.zoom-trigger img').forEach(img => {
    img.parentElement.addEventListener('click', () => {
        lightboxImg.src = img.src;

        const caption =
            img.parentElement.querySelector('.art-caption')?.innerText || '';

        if (lightboxCaption) {
            lightboxCaption.innerText = caption;
        }

        lightbox.classList.add('active');
    });
});

lightboxClose?.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox?.addEventListener('click', e => {
    // Keep lightbox open when clicking image or caption
    if (e.target !== lightboxImg && e.target !== lightboxCaption) {
        lightbox.classList.remove('active');
    }
});


/* ---------- Fade-In Animation ---------- */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Animate once
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});