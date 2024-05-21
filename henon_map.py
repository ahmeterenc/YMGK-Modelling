import numpy as np
import matplotlib.pyplot as plt


def henon_map(x0 = 0.1, y0 = 0.1, a = 1.4, b = 0.3, num_iterations = 10000):
    # Initial values
    x = np.zeros(num_iterations)
    y = np.zeros(num_iterations)
    x[0], y[0] = x0, y0

    # Iterate Henon map equations
    for n in range(1, num_iterations):
        x[n] = 1 - a * x[n - 1] ** 2 + y[n - 1]
        y[n] = b * x[n - 1]

    plt.figure(figsize=(10, 6))
    plt.plot(x, y, ',k', alpha=0.5)
    plt.title("Henon Map")
    plt.xlabel("$x$")
    plt.ylabel("$y$")
    plt.show()

    return x, y

henon_map()
