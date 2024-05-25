import numpy as np
import matplotlib.pyplot as plt

def generate_and_plot_tent_map(x0, r, iterations):
    sequence = [x0]
    for _ in range(iterations - 1):
        x0 = tent_map(x0, r)
        sequence.append(x0)

    plt.figure(figsize=(10, 6))
    plt.plot(sequence, 'b-', linewidth=0.5, marker='o', markersize=2)
    plt.title('Tent Map: r = {}'.format(r))
    plt.xlabel('İterasyon')
    plt.ylabel('Değer')
    plt.grid(True)
    plt.show()

def tent_map(x, r):
    if x < 0.5:
        return r * x
    else:
        return r * (1 - x)

# Example usage:
generate_and_plot_tent_map(x0=0.1, r=1.65, iterations=100)
