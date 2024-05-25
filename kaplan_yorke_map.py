import matplotlib.pyplot as plt
import numpy as np

# Sabit
alpha = 0.2

# Başlangıç değerleri
x = 0.367812
y = 0.667751

# Çizim alanını oluştur
plt.figure(figsize=(8, 6))
plt.title('Kaplan-Yorke Haritası')

# İterasyonlar
for _ in range(10000):
    _x = (2 * x) % 0.99995
    _y = alpha * y + np.cos(4 * np.pi * x)

    x = _x
    y = _y

    plt.plot(x * 100, y * 100, 'b.', markersize=1)

# Sonuçları göster
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()
