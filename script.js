document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuContainer = document.getElementById('menu-container');
    const bookingForm = document.getElementById('booking-form');

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('is-active');
        });
    }

    // Menu Data
    const menuData = {
        coffee: [
            { name: "Signature Latte", price: "$5.50", desc: "House-made lavender syrup with choice of oat or dairy milk." },
            { name: "Pour Over", price: "$6.00", desc: "Rotating single-origin beans, brewed with precision." },
            { name: "Flat White", price: "$4.75", desc: "Velvety micro-foam over a double shot of espresso." },
            { name: "Cold Brew", price: "$5.00", desc: "Steeped for 18 hours for a smooth, chocolatey finish." }
        ],
        tea: [
            { name: "Matcha Latte", price: "$5.75", desc: "Ceremonial grade matcha whisked with steamed milk." },
            { name: "Earl Grey Reserve", price: "$4.50", desc: "Bergamot-infused black tea with a hint of cornflower." },
            { name: "Hibiscus Cooler", price: "$5.00", desc: "Tart and refreshing herbal tea served over ice." },
            { name: "Chai Spice", price: "$5.25", desc: "Authentic Indian spices simmered with black tea." }
        ],
        pastries: [
            { name: "Butter Croissant", price: "$4.00", desc: "Flaky, golden layers made with French butter." },
            { name: "Almond Danishes", price: "$4.50", desc: "Filled with rich almond marzipan and topped with slivers." },
            { name: "Avocado Toast", price: "$9.00", desc: "Sourdough, smashed avocado, chili flakes, and radish." },
            { name: "Lemon Poppy Muffin", price: "$3.75", desc: "Daily baked with fresh zest and a light glaze." }
        ]
    };

    // Tab Switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
    });

    function renderMenu(category) {
        const items = menuData[category];
        menuContainer.innerHTML = '';
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'menu-item fade-in';
            div.innerHTML = `
                <div class="item-header">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p>${item.desc}</p>
            `;
            menuContainer.appendChild(div);
        });
    }

    // Booking Form Submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Processing...';

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerText = 'Reservation Confirmed!';
                submitBtn.style.backgroundColor = '#2ecc71';
                bookingForm.reset();

                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }

    // Initialize Menu
    renderMenu('coffee');
});
