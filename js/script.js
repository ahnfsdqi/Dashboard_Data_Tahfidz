// Initialize Lucide Icons
        lucide.createIcons();

        // Navigation Active Tab Handler
        function setActiveNav(element, targetId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('glass-nav-item', 'text-brand-lime');
                btn.classList.add('text-gray-400', 'hover:text-white', 'hover:bg-brand-darkMuted');
            });

            element.classList.remove('text-gray-400', 'hover:text-white', 'hover:bg-brand-darkMuted');
            element.classList.add('glass-nav-item', 'text-brand-lime');
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
                    labels: ['Semester 1', 'Semester 3', 'Semester 5', 'Semester 7', 'Semester 9'],
                    datasets: [
                        {
                            label: '% Kehadiran',
                            data: [90.2, 66.7, 6.9, 13.8, 12.5],
                            backgroundColor: '#10B981', // Emerald Green
                            borderRadius: 6,
                            borderSkipped: false,
                            barThickness: 18
                        },
                        {
                            label: '% Tidak Hadir',
                            data: [9.8, 33.3, 93.1, 86.2, 87.5],
                            backgroundColor: '#EF4444', // Red
                            borderRadius: 6,
                            borderSkipped: false,
                            barThickness: 18
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 1400,
                        easing: 'easeOutQuart'
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                font: { family: 'Inter', size: 11, weight: '600' },
                                boxWidth: 12,
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
                                font: { family: 'Inter', size: 11 }
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
                    labels: ['Total Hadir (48.9%)', 'Total Tidak Hadir (51.1%)'],
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
                    cutout: '70%',
                    animation: {
                        duration: 1400,
                        easing: 'easeInOutQuart'
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: { family: 'Inter', size: 11, weight: '600' },
                                padding: 14,
                                usePointStyle: true
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.raw || 0;
                                    const total = 141;
                                    const percentage = ((value / total) * 100).toFixed(1);
                                    return ` ${label}: ${value} Mhs (${percentage}%)`;
                                }
                            }
                        }
                    }
                }
            });
        });
