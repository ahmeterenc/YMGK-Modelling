import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint

def lotka_volterra(alpha=1.0, beta=0.1, gamma=0.1, delta=1.0, prey_initial=40, predator_initial=9):
    # Zaman noktaları
    t = np.linspace(0, 100, 1000)

    # Başlangıç koşulları
    y0 = [prey_initial, predator_initial]

    # Lotka-Volterra diferansiyel denklemleri
    def model(y, t):
        prey, predator = y
        dydt = [alpha * prey - beta * prey * predator,
                gamma * prey * predator - delta * predator]
        return dydt

    # Diferansiyel denklemleri çöz
    sol = odeint(model, y0, t)

    # Grafik
    plt.figure(figsize=(10, 6))
    plt.plot(t, sol[:, 0], label='Av Popülasyonu')
    plt.plot(t, sol[:, 1], label='Yırtıcı Popülasyonu')
    plt.xlabel('Zaman')
    plt.ylabel('Popülasyon')
    plt.title('Lotka-Volterra Modeli: Yırtıcı ve Av Popülasyonları')
    plt.legend()
    plt.grid(True)
    plt.show()

# Fonksiyonu çağır
lotka_volterra()
