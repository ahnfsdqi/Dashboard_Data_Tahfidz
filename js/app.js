// Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Drawer Overlay Toggle Logic
        function toggleMobileSidebar(isOpen) {
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('mobile-backdrop');

            if (isOpen) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        // Navigation Active Tab Handler
        function setActiveNav(element, targetId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('glass-nav-item', 'text-brand-lime');
                btn.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-brand-darkMuted');
            });

            element.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-brand-darkMuted');
            element.classList.add('glass-nav-item', 'text-brand-lime');

            // Close mobile menu on tab switch
            toggleMobileSidebar(false);
        }

        function setMobileBottomNav(element, targetId) {
            const links = element.parentElement.querySelectorAll('a');
            links.forEach(link => {
                link.classList.remove('text-brand-lime');
                link.classList.add('text-gray-400');
            });
            element.classList.remove('text-gray-400');
            element.classList.add('text-brand-lime');
        }

        // Animated Number Counter Effect
        function startCounterAnimations() {
            const counters = document.querySelectorAll('.count-up');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1000;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.innerText = target;
                        clearInterval(timer);
                    } else {
                        counter.innerText = Math.ceil(current);
                    }
                }, stepTime);
            });
        }

        // Initialize Chart.js Visualizations
        document.addEventListener('DOMContentLoaded', function() {
            startCounterAnimations();

            // 1. Bar Chart - Grouped (% Kehadiran vs % Tidak Hadir per Semester)
            const presenceCtx = document.getElementById('presenceChart').getContext('2d');
            new Chart(presenceCtx, {
                type: 'bar',
                data: {
                    labels: ['Sem 1', 'Sem 3', 'Sem 5', 'Sem 7', 'Sem 9'],
                    datasets: [
                        {
                            label: '% Kehadiran',
                            data: [90.2, 66.7, 6.9, 13.8, 12.5],
                            backgroundColor: '#10B981', // Emerald Green
                            borderRadius: 4,
                            borderSkipped: false,
                            barThickness: window.innerWidth < 640 ? 10 : 16
                        },
                        {
                            label: '% Tidak Hadir',
                            data: [9.8, 33.3, 93.1, 86.2, 87.5],
                            backgroundColor: '#EF4444', // Red
                            borderRadius: 4,
                            borderSkipped: false,
                            barThickness: window.innerWidth < 640 ? 10 : 16
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1200,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: { family: 'Inter', size: window.innerWidth < 640 ? 10 : 11, weight: '600' },
                                boxWidth: 10,
                                usePointStyle: true
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return ' ' + context.dataset.label + ': ' + context.raw + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: { color: '#f3f4f6' },
                            ticks: {
                                callback: function(value) { return value + '%'; },
                                font: { family: 'Inter', size: 10 }
                            }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { font: { family: 'Inter', size: 11, weight: '600' } }
                        }
                    }
                }
            });

            // 2. Doughnut Chart - Proporsi Overall Presence
            const overviewCtx = document.getElementById('overviewChart').getContext('2d');
            new Chart(overviewCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Hadir (48.9%)', 'Tidak Hadir (51.1%)'],
                    datasets: [{
                        data: [69, 72],
                        backgroundColor: ['#10B981', '#EF4444'],
                        borderWidth: 2,
                        borderColor: '#ffffff',
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '68%',
                    animation: {
                        duration: 1200,
                        easing: 'easeInOutQuart'
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: { family: 'Inter', size: 11, weight: '600' },
                                padding: 10,
                                usePointStyle: true
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const value = context.raw || 0;
                                    const percentage = ((value / 141) * 100).toFixed(1);
                                    return ` ${context.label}: ${value} Mhs (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
        });
