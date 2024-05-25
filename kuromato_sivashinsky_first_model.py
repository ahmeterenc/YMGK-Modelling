import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_ivp


def kuramoto_sivashinsky(t, u, alpha, beta, L):
    du_dt = -alpha * np.fft.fftfreq(len(u)) ** 2 * np.fft.fft(u) - beta * 0.5j * np.fft.fftn(u) ** 2
    return np.real(np.fft.ifft(du_dt))


def solve_kuramoto_sivashinsky(alpha=1.0,
                               beta=-1.0,
                               L=22.0,
                               T=50.0,
                               N=128):
    x = np.linspace(0, L, N)
    u0 = np.sin(np.pi * x / L) + 0.5 * np.sin(2 * np.pi * x / L)
    sol = solve_ivp(kuramoto_sivashinsky, [0, T], u0, args=(alpha, beta, L), t_eval=np.linspace(0, T, 100))
    return sol.t, sol.y.T


def plot_solution(L=22.0, num_plots=10):
    t, u = solve_kuramoto_sivashinsky()
    x = np.linspace(0, L, len(u[0]))
    plot_indices = np.linspace(0, len(t) - 1, num_plots, dtype=int)
    for i in plot_indices:
        plt.plot(x, u[i], label='t = {:.2f}'.format(t[i]))
    plt.xlabel('x')
    plt.ylabel('u(x, t)')
    plt.title('Kuramoto-Sivashinsky Denklemi Modellemesi')
    plt.legend()
    plt.show()


plot_solution()
