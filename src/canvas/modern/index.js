import LamborghiniCanvas from "./lamborghini/LamborghiniCanvas";
import MachineGunsCanvas from "./machine_guns/MachineGunsCanvas";
import RocketCanvas from "./rocket/RocketCanvas";
import SpaceSatelliteCanvas from "./space_satellite/SpaceSatelliteCanvas";
import TelescopeCanvas from "./telescope/TelescopeCanvas";
import SpaceshipCanvas2 from "./spaceship/SpaceshipCanvas2";

const spaceship = { title: 'Spaceship', canvas: SpaceshipCanvas2, description: `A spaceship is a vehicle designed for travel in outer space, serving various purposes like exploration, transportation, and research. These spacecraft can be manned or unmanned and are crucial for missions to the Moon, Mars, and beyond. Spaceships like SpaceX's Starship aim to enable interplanetary travel and point-to-point transport on Earth. They often feature advanced technologies for propulsion, life support, and navigation.` }
const lamborghini = { title: 'Lamborghini Revuelto', canvas: LamborghiniCanvas, description: `The Lamborghini Revuelto is a high-performance hybrid super sports car that combines a new 6.5-liter V12 engine with three electric motors, delivering a total power output of 1015 CV. It features advanced technologies like the Lamborghini Integrated Vehicle Dynamics (LDVI) and a carbon fiber monocoque chassis for enhanced performance and safety. The Revuelto boasts a striking exterior design with classic Lamborghini proportions and sharp lines, embodying confidence and innovation.` }
const machineguns = { title: 'M20 Machine Guns', canvas: MachineGunsCanvas, description: `The M2 Browning, also known as the .50 Caliber Machine Gun, is a heavy machine gun designed by John Browning towards the end of World War I. It features a single receiver design that can be adapted into seven types of .50 caliber machine guns by changing barrels and components. The M2 is air-cooled, belt-fed, and fires the .50 BMG cartridge, known for its long range and stopping power.` }
const rocket = { title: 'M2 Rocket', canvas: RocketCanvas, description: `The ISRO GSLV Mk3 rocket, also known as the 'Fat Boy,' is a heavy launch capability launcher developed by the Indian Space Research Organisation. It enables India to conduct manned missions to space and launch 4-tonne class Geosynchronous satellites into orbit. This rocket features an indigenous cryogenic rocket stage, including the powerful C25 cryogenic engine and two Solid Rocket Boosters (S200) for lift-off. With a height of 43.43 meters, a lift-off mass of 640 tonnes, and advanced technology like the CE-20 engine, the GSLV Mk3 represents a significant advancement in India's space exploration capabilities.` }
const spacesatellite = { title: 'Voyager Space Satellite', canvas: SpaceSatelliteCanvas, description: `Voyager 1 is a space probe launched by NASA in 1977 to explore the outer Solar System and interstellar space, becoming the most distant human-made object from Earth. It conducted flybys of Jupiter, Saturn, and Titan, providing valuable data on weather, magnetic fields, and moons. Voyager 1 crossed the heliopause in 2012, entering interstellar space and confirming its robustness by enduring solar events.` }
const telescope = { title: 'Telescope', canvas: TelescopeCanvas, description: `A telescope is an optical instrument used to gather and focus light from distant objects, creating magnified images for observation or data collection. It comes in various types, including refracting telescopes that use lenses, reflecting telescopes that use mirrors, and catadioptric telescopes that combine lenses and mirrors. Telescopes can be used for activities like observational astronomy, birdwatching, and reconnaissance, providing detailed views of celestial bodies and terrestrial objects.` }

export {
    spaceship,
    spacesatellite,
    lamborghini,
    machineguns,
    rocket,
    telescope
}