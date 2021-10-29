const particlesConfig = {
  particles: {
    startSlide: "first",
    endSlide: "last",
    zIndex: "1",
    particles: {
    number: {value: 80},
    color: {value: "#000000"},
    shape: {
    type: "circle",
    stroke: {
    width: 0,
    color: "#000000",
    opacity: 1
    },
    image: {src: ""}
    },
    opacity: {
    value: 0.5,
    random: true,
    min: 0.25,
    anim: {
    enable: false,
    speed: 3,
    opacity_min: 0,
    sync: false
    }
    },
    size: {
    value: 2,
    random: false,
    min: 1,
    anim: {
    enable: false,
    speed: 40,
    size_min: 1,
    sync: false
    }
    },
    line_linked: {
    enable: true,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1
    },
    move: {
    enable: true,
    speed: 6,
    direction: "none",
    random: true,
    min_speed: 6,
    straight: false,
    out_mode: "out"
    }
    },
    interactivity: {
    events: {
    onhover: {
    enable: false,
    mode: "repulse"
    },
    onclick: {
    enable: false,
    mode: "repulse"
    }
    },
    modes: {
    grab: {
    distance: 400,
    line_linked: {opacity: 0.5}
    },
    bubble: {
    distance: 400,
    size: 40,
    opacity: 0.4
    },
    repulse: {distance: 100}
    }
    }
    },
    retina_detect: true
  };

export default particlesConfig