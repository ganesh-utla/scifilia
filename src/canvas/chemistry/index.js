import DiamondCanvas from "./diamond/DiamondCanvas";
import DNACanvas from "./dna/DNACanvas";
import PeriodicTableCanvas from "./periodic_table/PeriodicTableCanvas";
import TestTubeSetCanvas from "./testtubeset/TestTubeSetCanvas";
import TestTubeCanvas2 from "./testtube/TestTubeCanvas2";

const testtube = { title: 'Test Tube', canvas: TestTubeCanvas2, description: `A test tube is a common laboratory glassware used for various chemical and biological experiments, consisting of a finger-like length of glass or clear plastic tubing. It is open at the top and closed at the bottom, often placed in special-purpose racks for organization. Test tubes are made of materials like borosilicate glass or plastic, with different sizes and shapes available for specific applications.` }
const diamond = { title: 'Diamond', canvas: DiamondCanvas, description: `Diamonds are natural crystals of carbon formed under intense pressure and heat millions of years ago. They are the hardest known substance and are valued for their beauty and durability. Diamonds are found in kimberlite rock formations and are commonly used in jewelry due to their brilliance and transparency. While colorless diamonds are pure carbon, colored diamonds contain other elements. Beyond jewelry, diamonds are utilized in industrial applications like cutting tools and abrasives due to their exceptional hardness.` }
const dna = { title: 'DNA', canvas: DNACanvas, description: `DNA, or deoxyribonucleic acid, is a molecule that carries genetic information in living organisms. It consists of two strands that wind around each other in a double helix structure. DNA is composed of nucleotide bases: adenine (A), cytosine (C), guanine (G), and thymine (T). The sequence of these bases encodes biological information, determining traits and functions in organisms.` }
const periodictable = { title: 'Periodic Table', canvas: PeriodicTableCanvas, description: `The periodic table is an organized arrangement of chemical elements based on increasing atomic number. It consists of rows (periods) and columns (groups) that exhibit recurring patterns in properties. Dmitri Mendeleev's 1869 table was the first widely accepted version, predicting missing elements based on the periodic law. The table's structure highlights trends like metallic character increasing down a group and nonmetallic character increasing diagonally.` }
const testtubeset = { title: 'Test Tube Set', canvas: TestTubeSetCanvas, description: `A test tube set typically includes multiple test tubes, often made of glass or plastic, used for various scientific experiments and activities. These sets may come with caps to prevent spills and a stand or rack for organization. Test tube sets are commonly used in educational settings to engage students in hands-on learning experiences in chemistry and biology. They often include activity guides with experiment ideas to facilitate learning and exploration.` }

export {
    testtube,
    testtubeset,
    diamond,
    dna,
    periodictable
}