import numpy as np
import matplotlib.pyplot as plt

def zaslavskii_rotation_map(x, y, a, k):
    x_new = x + y + k * np.sin(2 * np.pi * y)
    y_new = y - a * np.sin(2 * np.pi * x)
    return x_new, y_new

def plot_zaslavskii_map(a, k, iterations):
    # Başlangıç koordinatları
    x, y = 0.1, 0.1

    # Değerleri saklamak için dizi
    x_values, y_values = np.zeros(iterations+1), np.zeros(iterations+1)
    x_values[0], y_values[0] = x, y

    # İterasyonları yap
    for i in range(1, iterations+1):
        x, y = zaslavskii_rotation_map(x, y, a, k)
        x_values[i], y_values[i] = x, y

    # Sonuçları çiz
    plt.plot(x_values, y_values, 'b,', markersize=1)
    plt.title('Zaslavskii Rotation Map')
    plt.xlabel('x')
    plt.ylabel('y')
    plt.show()

# Örnek kullanım
plot_zaslavskii_map(a=0.1, k=0.1, iterations=10000)
