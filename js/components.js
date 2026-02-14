const components = {
    navbar: `
    <nav class="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="text-2xl font-bold tracking-tighter text-[#0b2a4a]">
                        OPTO<span class="text-[#1e88e5]">TECH</span>
                    </a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="sunshade.html" class="text-[#0b2a4a] hover:text-[#1e88e5] px-3 py-2 text-sm font-medium transition-colors">Sunshade</a>
                        <div class="relative group">
                            <button class="flex items-center text-[#0b2a4a] hover:text-[#1e88e5] px-3 py-2 text-sm font-medium transition-colors">
                                Imported Brands
                                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <div class="py-1">
                                    <a href="rbs.html" class="block px-4 py-2 text-sm text-[#0b2a4a] hover:bg-gray-50 hover:text-[#1e88e5]">RBS</a>
                                    <a href="asahi-fuji.html" class="block px-4 py-2 text-sm text-[#0b2a4a] hover:bg-gray-50 hover:text-[#1e88e5]">Asahi Fuji</a>
                                    <a href="clex.html" class="block px-4 py-2 text-sm text-[#0b2a4a] hover:bg-gray-50 hover:text-[#1e88e5]">Clex</a>
                                </div>
                            </div>
                        </div>
                        <a href="fitting.html" class="text-[#0b2a4a] hover:text-[#1e88e5] px-3 py-2 text-sm font-medium transition-colors">Lens Fitting</a>
                        <a href="dealer.html" class="text-[#0b2a4a] hover:text-[#1e88e5] px-3 py-2 text-sm font-medium transition-colors">Become a Dealer</a>
                        <a href="about.html" class="text-[#0b2a4a] hover:text-[#1e88e5] px-3 py-2 text-sm font-medium transition-colors">About</a>
                    </div>
                </div>
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-[#0b2a4a] hover:text-[#1e88e5]">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="sunshade.html" class="block px-3 py-2 text-base font-medium text-[#0b2a4a] hover:text-[#1e88e5]">Sunshade</a>
                <div class="px-3 py-2 text-base font-medium text-[#0b2a4a]">Imported Brands</div>
                <a href="rbs.html" class="block pl-6 px-3 py-2 text-sm font-medium text-[#0b2a4a] hover:text-[#1e88e5]">RBS</a>
                <a href="asahi-fuji.html" class="block pl-6 px-3 py-2 text-sm font-medium text-[#0b2a4a] hover:text-[#1e88e5]">Asahi Fuji</a>
                <a href="clex.html" class="block pl-6 px-3 py-2 text-sm font-medium text-[#0b2a4a] hover:text-[#1e88e5]">Clex</a>
                <a href="fitting.html" class="block px-3 py-2 text-base font-medium text-[#0b2a4a] hover:text-[#1e88e5]">Lens Fitting</a>
                <a href="dealer.html" class="block px-3 py-2 text-base font-medium text-[#0b2a4a] hover:text-[#1e88e5]">Become a Dealer</a>
                <a href="about.html" class="block px-3 py-2 text-base font-medium text-[#0b2a4a] hover:text-[#1e88e5]">About</a>
            </div>
        </div>
    </nav>
    `,
    footer: `
    <footer class="bg-[#0b2a4a] text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 class="text-2xl font-bold mb-6">OPTO<span class="text-[#1e88e5]">TECH</span></h3>
                    <p class="text-gray-400 mb-6">Premium wholesale optical lens provider. Precision technology for the perfect vision.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-[#1e88e5] transition-colors"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-white hover:text-[#1e88e5] transition-colors"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="all-lenses.html" class="hover:text-white transition-colors">All Lenses</a></li>
                        <li><a href="coatings.html" class="hover:text-white transition-colors">Coatings & Materials</a></li>
                        <li><a href="fitting.html" class="hover:text-white transition-colors">Lens Fitting</a></li>
                        <li><a href="dealer.html" class="hover:text-white transition-colors">Become a Dealer</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold mb-6">Contact Us</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li class="flex items-center"><svg class="h-5 w-5 mr-3 text-[#1e88e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +94 112 XXX XXX</li>
                        <li class="flex items-center"><svg class="h-5 w-5 mr-3 text-[#1e88e5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 012 2v2z"></path></svg> WhatsApp: +94 77 XXX XXXX</li>
                        <li>
                            <div class="mt-4 flex space-x-2">
                                <a href="https://wa.me/94770000000" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center">
                                    WhatsApp Inquire
                                </a>
                                <a href="tel:+94112000000" class="bg-[#1e88e5] hover:bg-[#1565c0] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center">
                                    Call Now
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
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
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = components.footer;
    }
});
