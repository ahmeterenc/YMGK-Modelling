const chaos_maps = [
    {
        id: "bernoulli_map",
        name: "Bernoulli Map",
        description: "Kaostatik Bernoulli haritası, kaotik dinamik sistemler alanında önemli bir yere sahip olan basit bir ayrık zamanlı haritadır. Bu harita, basit doğrusal bir dönüşüm uygulayarak kaotik davranış sergiler.",
        inputs: [
            "r",
            "x0",
            "num_iterations",
        ],
        input_ranges: {
            r: {
                min: 0,
                max: 1,
            },
            x0: {
                min: 0,
                max: 1,
            },
            num_iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "generate_and_save_gingerbread_man",
        name: "Gingerbreadman Map",
        description: "Gingerbreadman metodu, karmaşıklık teorisi ve kaotik sistemlerin matematiksel analizinde önemli bir araç olarak kullanılır. Analizler, sistemlerin doğasını daha iyi anlamamıza ve belirli koşullar altında nasıl davrandıklarını öngörmemize yardımcı olabilir.",
        inputs: [
            "x_start",
            "y_start",
            "iterations",
        ],
        input_ranges: {
            x_start: {
                min: 0,
                max: 1,
            },
            y_start: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "generate_and_save_tent_map",
        name: "Tent Map",
        description: "Çadır haritası, dinamik sistemleri temsil etmek için kullanılan matematiksel bir kavramdır. Özellikle kaos teorisini incelemek için oldukça kullanışlıdır. Çadır haritası, bir boyutta uygulanan parça doğrusal bir fonksiyondur. Kullanılan μ parametresine bağlı olarak karmaşık davranışlar gösterebilir. Görsel olarak fonksiyonun grafiği bir çadır şeklini andırır, bu nedenle bu isimle anılır.",
        inputs: [
            "x",
            "r",
            "iterations"
        ],
        input_ranges: {
            x: {
                min: 0,
                max: 1,
            },
            r: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "generate_and_save_zaslavskii_map",
        name: "Zaslavskii Map",
        description: "Zaslavskii haritası, George M. Zaslavsky tarafından tanıtılan ayrık zamanlı bir dinamik sistemdir. Kaotik davranış sergileyen dinamik bir sistem örneğidir. Zaslavskii haritası uçakta bir noktayı alır ve onu yeni bir noktaya eşler",
        inputs: [
            "a",
            "k",
            "iterations"
        ],
        input_ranges: {
            a: {
                min: 0,
                max: 1,
            },
            k: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "generate_and_save_tinkerbell_map",
        name: "Tinkerbell Map",
        description: "Tinkerbell haritası, basit bir matematiksel modeldir. Kaos teorisinin temel ilkelerini göstermek için kullanılabilir. Görsel olarak çekici ve ilgi çekici bir modeldir ve karmaşık ve kaotik davranışları göstermek için kullanılabilir.",
        inputs: [
            "a",
            "b",
            "c",
            "d",
            "width",
            "height",
            "iterations"
        ],
        input_ranges: {
            a: {
                min: -1,
                max: 1,
            },
            b: {
                min: -1,
                max: 1,
            },
            c: {
                min: -1,
                max: 1,
            },
            d: {
                min: -1,
                max: 1,
            },
            width: {
                min: 1,
                max: 1000,
            },
            height: {
                min: 1,
                max: 1000,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "lorenz96_map",
        name: "Lorenz96 Map",
        description: "Lorenz96 modeli, atmosferik ve okyanus bilimlerinde kullanılan bir modeldir. Basit bir hava modeli olan Lorenz96, belirli bir uzunluktaki bir hava kolonunu temsil eder ve bu kolon içindeki farklı noktalar arasındaki etkileşimleri modeller. Bu model, karmaşık hava sistemlerinin bazı özelliklerini anlamak için kullanılır ve atmosferik dinamiğin temel prensiplerini göstermek için önemli bir araçtır.",
        inputs: [
            "N",
            "F",
            "dt",
            "num_steps"
        ],
        input_ranges: {
            N: {
                min: 1,
                max: 100,
            },
            F: {
                min: 0,
                max: 20,
            },
            dt: {
                min: 0,
                max: 100,
            },
            num_steps: {
                min: 1,
                max: 10000,
            },
        }
    },
    {
        id: "generate_logistic_map",
        name: "Logistic Map",
        description: "Logistic haritası, bir populasyonun zaman içindeki değişimini modellemek için kullanılan bir matematiksel modeldir. İlk olarak 1976'da Robert May tarafından tanıtılmıştır. Bu model, belirli bir populasyonun gelecekteki durumunu tahmin etmek için kullanılırken, kaotik davranışları da gösterebilir.",
        inputs: [
            "r",
            "x0",
            "iterations"
        ],
        input_ranges: {
            r: {
                min: 0,
                max: 4,
            },
            x0: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    // {
    //     id: "generate_and_save_henon_map",
    //     name: "Henon Map",
    //     description: "Henon haritası, dinamik sistemlerin ve kaotik davranışın matematiksel modellenmesinde kullanılan bir sistemdir. Çift haneleli bir denkleme dayanır ve karelerin geri dönüşümü ile tanımlanır.",
    //     inputs: [
    //         "a",
    //         "b"
    //     ],
    //     input_ranges: {
    //         a: {
    //             min: -1.4,
    //             max: 1.4,
    //         },
    //         b: {
    //             min: -0.5,
    //             max: 0.5,
    //         },
    //     }
    // },
    // {
    //     id: "generate_and_save_butterfly_map",
    //     name: "Butterfly Map",
    //     description: "Kelebek haritası, kaos teorisinde ve dinamik sistemlerin modellenmesinde kullanılan bir modeldir. Doğal süreçlerin matematiksel modellemesi için kullanışlıdır ve kelebek etkisi olarak adlandırılan bir olguyla ilişkilidir.",
    //     inputs: [
    //         "x",
    //         "y",
    //         "a",
    //         "b",
    //         "iterations"
    //     ],
    //     input_ranges: {
    //         x: {
    //             min: -10,
    //             max: 10,
    //         },
    //         y: {
    //             min: -10,
    //             max: 10,
    //         },
    //         a: {
    //             min: -10,
    //             max: 10,
    //         },
    //         b: {
    //             min: -10,
    //             max: 10,
    //         },
    //         iterations: {
    //             min: 1,
    //             max: 1000,
    //         },
    //     }
    // },
    {
        id: "generate_and_save_gauss_map",
        name: "Gauss Map",
        description: "Gauss haritası, matematikte bir yüzeyin her noktasına bir birim normal vektörü atayan bir fonksiyondur. Bu normal vektör, o noktada yüzeyin eğimine ve yönelimine ilişkin bilgi taşır. Gauss haritası, genellikle diferansiyel geometri ve topoloji gibi alanlarda kullanılır.",
        inputs: [
            "r",
            "x0",
            "iterations"
        ],
        input_ranges: {
            r: {
                min: 0,
                max: 4,
            },
            x0: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "generate_and_save_lotka_volterra_map",
        name: "Lotka Volterra Map",
        description: "Lotka-Volterra Haritası, biyolojide popülasyon dinamiklerini modellemek için kullanılan bir matematiksel araçtır. Bu harita, bir yırtıcı ve bir av türünün etkileşimini tanımlar. Yırtıcı ve av popülasyonlarının her birinin büyüme oranları ve birbirlerine olan etkileşimleri, bu harita üzerindeki noktaların konumlarına bağlı olarak belirlenir.",
        inputs: [
            "alpha",
            "beta",
            "gamma",
            "delta",
            "prey_initial",
            "predator_initial"
        ],
        input_ranges: {
            alpha: {
                min: 0,
                max: 1,
            },
            beta: {
                min: 0,
                max: 1,
            },
            gamma: {
                min: 0,
                max: 1,
            },
            delta: {
                min: 0,
                max: 1,
            },
            prey_initial: {
                min: 0,
                max: 100,
            },
            predator_initial: {
                min: 0,
                max: 100,
            },
        }
    },
    {
        id: "generate_and_save_ikeda_attractor",
        name: "Ikeda Attractor Map",
        description: "Fizik ve matematikte Ikeda haritası, karmaşık harita tarafından verilen ayrık zamanlı dinamik bir sistemdir.",
        inputs: [
            "x0",
            "y0",
            "u",
            "iterations"
        ],
        input_ranges: {
            x0: {
                min: 0,
                max: 1,
            },
            y0: {
                min: 0,
                max: 1,
            },
            u: {
                min: 0,
                max: 1,
            },
            iterations: {
                min: 1,
                max: 1000,
            },
        }
    },
    {
        id: "arnoldcat_map",
        name: "Arnoldcat Map",
        description: "Matematikte, Arnold'un kedi haritası torustan kendi içine kaotik bir haritadır ve adını 1960'larda bir kedi resmi kullanarak etkilerini gösteren Vladimir Arnold'dan almıştır, dolayısıyla adı da buradan gelmektedir. Hiperbolik toral otomorfizmler için basit ve pedagojik bir örnektir.",
        inputs: [
            "image_data",
            "iterations",
            "keep_all"
        ],
        input_ranges: {
            image_data: {
                min: 0,
                max: 100,
            },
            iterations: {
                min: 0,
                max: 1000,
            },
            keep_all: {
                min: 0,
                max: 100,
            }
        }
    },
    {
        id: "generate_and_save_genetic_algorithm_map",
        name: "Genetic Algorithm Map",
        description: "Genetik algoritma tabanlı kaotik analiz sisteminde, genetik algoritma popülasyon tabanlı bir arama yöntemi kullanarak kaotik sistemlerin davranışlarını analiz eder. Her birey, kaotik sistemin belirli bir parametre setini temsil eder ve popülasyonlar, uygunluk fonksiyonuna göre evrimleşir. Bu süreçte, çaprazlama ve mutasyon gibi genetik işlemler kullanılarak daha iyi çözümler bulunur ve kaotik dinamikler haritalandırılır.",
        inputs: [
            "population",
            "generations",
            "plaintext"
        ],
        input_ranges: {
            population: {
                min: 0,
                max: 1000,
            },
            generations: {
                min: 0,
                max: 1000,
            },
            plaintext: {
                min: 0,
                max: 1000,
            }
        }
    },
    {
        id: "generate_and_save_complex_squaring_map",
        name: "Complex Squaring Map",
        description: "Complex-Squaring Haritası, matematikte ikinci dereceden bir polinom haritalaması olan karmaşık kare alma haritası, dinamik sistemlerdeki kaosun basit ve erişilebilir bir gösterimidir.",
        inputs: [
            "real_range",
            "image_range",
            "num_points"
        ],
        input_ranges: {
            real_range: {
                min: 0,
                max: 1000,
            },
            image_range: {
                min: 0,
                max: 1000,
            },
            num_points: {
                min: 0,
                max: 1000,
            }
        }
    },
    {
        id: "lorenz_map",
        name: "Lorenz Map",
        description: "Lorenz haritası, Edward Lorenz tarafından tanıtılan ve hava durumu modellemesinde kullanılan kaotik bir modeldir. Üç diferansiyel denklemden oluşur ve kaotik davranış sergiler.",
        inputs: [
            "sigma",
            "beta",
            "rho",
            "num_steps",
            "dt"
        ],
        input_ranges: {
            sigma: {
                min: 0,
                max: 100
            },
            beta: {
                min: 0,
                max: 10
            },
            rho: {
                min: 0,
                max: 100
            },
            num_steps: {
                min: 1,
                max: 10000
            },
            dt: {
                min: 0.001,
                max: 1
            }
        }
    },
    {
        id: "generate_poincare_map",
        name: "Poincare Map",
        description: "Poincare haritası, dinamik sistemlerde önemli bir rol oynayan ve sistemin geçişlerini incelemek için kullanılan bir tekniktir. Bu harita, sistemin belirli bir kesitini analiz ederek sistemin davranışını anlamamıza yardımcı olabilir.",
        inputs: [
            "omega",
            "F",
            "phi",
            "t_max",
            "dt"
        ],
        input_ranges: {
            omega: {
                min: 0,
                max: 10
            },
            F: {
                min: 0,
                max: 10
            },
            phi: {
                min: 0,
                max: 2 * Math.PI
            },
            t_max: {
                min: 0,
                max: 1000
            },
            dt: {
                min: 0.001,
                max: 1
            }
        }
    },
    {
        id: "generate_bifurcation_diagram",
        name: "Bifurcation Map",
        description: "Bifurkasyon analizi, dinamik sistemlerde bir parametrenin değiştirilmesinin sistemin davranışını nasıl etkilediğini inceleyen bir tekniktir. Bu analiz, sistemin kaotik davranışını anlamamıza ve belirli bir davranış sergilemesini sağlayan koşulları tanımlamamıza yardımcı olabilir.",
        inputs: [
            "r_min",
            "r_max",
            "num_r",
            "iterations",
            "last"
        ],
        input_ranges: {
            r_min: {
                min: 0,
                max: 10
            },
            r_max: {
                min: 0,
                max: 10
            },
            num_r: {
                min: 1,
                max: 10000
            },
            iterations: {
                min: 1,
                max: 10000
            },
            last: {
                min: 1,
                max: 1000
            }
        }
    }
];


export default chaos_maps