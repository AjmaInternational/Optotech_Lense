const components = {
    navbar: `
    <nav class="fixed w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-xl border-b border-gray-100 py-2">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div class="flex justify-between items-center h-24">
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="block">
                        <img src="LOGO.png" alt="OPTO TECH" class="h-14 w-auto object-contain">
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="all-lenses.html" class="text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">Products</a>
                        <a href="sunshade.html" class="text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">Sunshade</a>
                        <div class="relative group">
                            <button class="flex items-center text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">
                                Imported Brands
                                <svg class="ml-1.5 h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-56 rounded-xl shadow-2xl bg-white/95 backdrop-blur-md ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-2">
                                <a href="rbs.html" class="block px-4 py-3 text-sm text-[#0b1120] hover:bg-gray-50 hover:text-[#2563eb] rounded-lg transition-colors">RBS</a>
                                <a href="asahi-fuji.html" class="block px-4 py-3 text-sm text-[#0b1120] hover:bg-gray-50 hover:text-[#2563eb] rounded-lg transition-colors">Asahi Fuji</a>
                                <a href="clex.html" class="block px-4 py-3 text-sm text-[#0b1120] hover:bg-gray-50 hover:text-[#2563eb] rounded-lg transition-colors">Clex</a>
                            </div>
                        </div>
                        <a href="fitting.html" class="text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">Lens Fitting</a>
                        <a href="dealer.html" class="text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">Become a Dealer</a>
                        <a href="about.html" class="text-[#0b1120] hover:text-[#2563eb] px-3 py-2 text-sm font-semibold tracking-wide transition-colors">About</a>
                    </div>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-[#0b1120] hover:text-[#2563eb]">
                        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-100">
            <div class="px-4 pt-4 pb-8 space-y-2">
                <a href="all-lenses.html" class="block px-4 py-3 text-lg font-medium text-[#0b1120] hover:bg-gray-50">Products</a>
                <a href="sunshade.html" class="block px-4 py-3 text-lg font-medium text-[#0b1120] hover:bg-gray-50">Sunshade</a>
                <div class="px-4 py-3 text-lg font-bold text-[#0b1120] border-t border-gray-100 mt-2">Imported Brands</div>
                <a href="rbs.html" class="block pl-8 py-3 text-base font-medium text-[#0b1120] hover:bg-gray-50">RBS</a>
                <a href="asahi-fuji.html" class="block pl-8 py-3 text-base font-medium text-[#0b1120] hover:bg-gray-50">Asahi Fuji</a>
                <a href="clex.html" class="block pl-8 py-3 text-base font-medium text-[#0b1120] hover:bg-gray-50">Clex</a>
                <a href="fitting.html" class="block px-4 py-3 text-lg font-medium text-[#0b1120] hover:bg-gray-50 border-t border-gray-100">Lens Fitting</a>
                <a href="dealer.html" class="block px-4 py-3 text-lg font-medium text-[#0b1120] hover:bg-gray-50">Become a Dealer</a>
                <a href="about.html" class="block px-4 py-3 text-lg font-medium text-[#0b1120] hover:bg-gray-50">About</a>
            </div>
        </div>
    </nav>
    <div class="h-24"></div> <!-- Initial gap for fixed navbar -->
    `,
    footer: `
    <footer class="bg-[#0b1120] text-white py-24">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
                <div>
                    <img src="LOGO.png" alt="OPTO TECH" class="h-12 w-auto mb-8 brightness-0 invert">
                    <p class="text-gray-400 text-lg leading-relaxed mb-8">Premium wholesale optical lens provider. Precision technology for the perfect vision care professional.</p>
                    <div class="flex space-x-6">
                        <a href="#" class="text-white hover:text-[#3b82f6] transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                        <a href="#" class="text-white hover:text-[#3b82f6] transition-colors"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.288.93.92 1.217 2.138 1.284 3.594.058 1.266.07 1.646.07 4.849s-.012 3.584-.07 4.85c-.066 1.455-.354 2.674-1.284 3.593-.933.933-2.152 1.22-3.608 1.288-1.265.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.288-.93-.92-1.217-2.138-1.284-3.594-.058-1.266-.07-1.646-.07-4.849s.012-3.584.07-4.85c.066-1.455.354-2.674 1.284-3.593.933-.933 2.152-1.22-3.608-1.288-1.265-.058-1.646-.07-4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.617 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.349-2.619-6.78-6.98-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-8">Quick Links</h4>
                    <ul class="space-y-5 text-gray-400 text-lg">
                        <li><a href="all-lenses.html" class="hover:text-white transition-colors">All Lenses</a></li>
                        <li><a href="coatings.html" class="hover:text-white transition-colors">Coatings & Materials</a></li>
                        <li><a href="fitting.html" class="hover:text-white transition-colors">Lens Fitting</a></li>
                        <li><a href="dealer.html" class="hover:text-white transition-colors">Become a Dealer</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold mb-8">Contact Us</h4>
                    <ul class="space-y-5 text-gray-400 text-lg">
                        <li class="flex items-center"><svg class="h-6 w-6 mr-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +94 112 XXX XXX</li>
                        <li class="flex items-center"><svg class="h-6 w-6 mr-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994-1.414-.586m0 0L11 14h4a2 2 0 012 2v2z"></path></svg> WhatsApp: +94 77 XXX XXXX</li>
                        <li>
                            <div class="mt-8 flex space-x-4">
                                <a href="https://wa.me/94770000000" class="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-base font-bold transition-all flex items-center shadow-lg hover:scale-105">
                                    Inquire Now
                                </a>
                                <a href="tel:+94112000000" class="bg-[#0b1120] hover:bg-black text-white px-8 py-4 rounded-full text-base font-bold transition-all flex items-center shadow-lg hover:scale-105">
                                    Call Now
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-24 pt-10 border-t border-gray-800 text-center text-gray-500 text-base">
                <p>&copy; 2024 OPTO TECH (Pvt) Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = components.navbar;

        // Mobile menu toggle
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Scroll effect
        window.addEventListener('scroll', () => {
            const nav = navPlaceholder.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-0', 'shadow-xl');
                nav.classList.remove('py-2');
            } else {
                nav.classList.add('py-2');
                nav.classList.remove('py-0', 'shadow-xl');
            }
        });
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = components.footer;
    }
});
