import numpy as np
import matplotlib.pyplot as plt


def lorenz_poincare_plotter(x0=np.array([0.1, 0.1, 0.1]),
                            dt=0.01,
                            nt=10000):
    def lorenz(x, y, z, a=10, b=8 / 3, c=28):
        dx_dt = a * (y - x)
        dy_dt = x * (c - z) - y
        dz_dt = x * y - b * z
        return np.array([dx_dt, dy_dt, dz_dt])

        # Zaman dizisi ve faz uzayı

    t = np.arange(0, nt * dt, dt)
    x = np.zeros((nt, 3))
    x[0] = x0

    # Poincaré haritası
    poincare_map = []

    # Zaman entegrasyonu ve Poincaré haritası hesaplaması
    for i in range(1, nt):
        x[i] = x[i - 1] + dt * lorenz(*x[i - 1])
        # Poincaré kesiti y=0 düzlemi
        if x[i - 1, 1] > 0 and x[i, 1] <= 0:
            poincare_map.append(x[i])

    poincare_map = np.array(poincare_map)

    # Poincaré haritasını çiz
    plt.plot(poincare_map[:, 0], poincare_map[:, 2], 'bo', markersize=2)
    plt.xlabel('x')
    plt.ylabel('z')
    plt.title('Lorenz Denklemleri için Poincaré Haritası (y=0 düzlemi)')
    plt.grid(True)
    plt.show()


lorenz_poincare_plotter()