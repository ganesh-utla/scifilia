import AsteroidCanvas from "./asteroid/AsteroidCanvas";
import EarthCanvas from "./earth/EarthCanvas";
import MoonCanvas from "./moon/MoonCanvas";
import SolarSystemCanvas from "./solar_system/SolarSystemCanvas";
import AtomCanvas2 from './atom/AtomCanvas2';

const asteroid = { title: 'Asteroid', canvas: AsteroidCanvas, description: 'Asteroids are small, rocky objects that orbit the Sun, primarily found in the main asteroid belt between Mars and Jupiter. They vary in size, shape, and composition, with some as small as pebbles and others as large as hundreds of miles in diameter. These space rocks provide valuable insights into the history of our solar system and planets. NASA has conducted various missions to study asteroids, such as NEAR Shoemaker, Dawn, OSIRIS-REx, Lucy, and Psyche. While asteroids pose no known impact threats currently, they have played a significant role in shaping the geological history of planets and life on Earth.'};
const atom = { title: 'Atom', canvas: AtomCanvas2, description: `An atom is the smallest unit of matter, composed of a nucleus containing protons and neutrons, surrounded by electrons. The number of protons in the nucleus determines the element's identity, while electrons orbit in shells around the nucleus. Atoms are electrically neutral when the number of protons equals electrons but can become ions by gaining or losing electrons.`};
const earth = { title: 'Earth', canvas: EarthCanvas, description: `Earth is the third planet from the Sun in our solar system, known for its diverse ecosystems and abundant water. It has a diameter of about 12,742 kilometers and is the only known planet to support life. Earth orbits the Sun at an average distance of about 93 million miles, taking approximately 365.25 days to complete one orbit. The planet's atmosphere consists mainly of nitrogen and oxygen, crucial for sustaining life. Earth has a unique magnetic field that protects it from solar winds and cosmic radiation.`};
const moon = { title: 'Moon', canvas: MoonCanvas, description: `The Moon is Earth's only natural satellite, orbiting at an average distance of 384,400 kilometers. It plays a crucial role in Earth's tides due to its gravitational pull. The Moon's surface is marked by craters, lunar dust, and dark maria formed by ancient lava flows. With a diameter of about 3,474 kilometers, the Moon has a surface gravity about one-sixth of Earth's. Its phases, caused by sunlight reflection, create varying appearances as seen from Earth.`};
const solarsystem = { title: 'Solar System', canvas: SolarSystemCanvas, description: `The solar system consists of the Sun, eight planets, and various smaller celestial bodies like asteroids, comets, and dwarf planets. Planets orbit the Sun, with Earth being the only known planet supporting life. The solar system also includes moons, rings around some giant planets, and extends beyond the eight planets to regions like the Kuiper Belt and the Oort Cloud. Our solar system formed about 4.5 billion years ago from a collapsing cloud of interstellar gas and dust, giving birth to the Sun and planets.`};

export {
    asteroid,
    atom,
    earth,
    moon,
    solarsystem
}