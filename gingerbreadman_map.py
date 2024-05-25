import matplotlib.pyplot as plt

# Atraktörler
a = 1
b = 1

# Başlangıç değerleri
x = 0.1
y = -0.1

# Çizim alanını oluştur
plt.figure(figsize=(8, 6))
plt.xlim(-10, 10)
plt.ylim(-10, 10)
plt.gca().set_aspect('equal', adjustable='box')
plt.title('Gingerbread Man Haritası')

# İterasyonlar
for _ in range(50000):
    dx = 1 - a * y + b * abs(x)
    dy = x

    x = dx
    y = dy

    plt.plot(x * 10, y * 10, 'b.', markersize=1)

# Sonuçları göster
plt.xlabel('x')
plt.ylabel('y')
plt.grid(True)
plt.show()
