import PlantCellCanvas from "./plantcell/PlantCellCanvas";
import HumanHeartCanvas2 from "./humanheart/HumanHeartCanvas2";
import DinosaurCanvas from "./dinosaur/DinosaurCanvas";
import HumanBrainCanvas from "./humanbrain/HumanBrainCanvas";
import MitochondriaCanvas from "./mitochondria/MitochondriaCanvas";
import HumanSkeletonCanvas from "./humanskeleton/HumanSkeletonCanvas";

const plantcell = { title: 'Plant Cell', canvas: PlantCellCanvas, description: `Plant cells are eukaryotic cells with a membrane-bound nucleus and organelles like chloroplasts and vacuoles. They have a cell wall made of cellulose, providing structural support and protection. Chloroplasts in plant cells are essential for photosynthesis, converting sunlight into energy. Large vacuoles maintain turgor pressure, aiding in rigidity and storage. Plant cells play a vital role in photosynthesis, nutrient transport, and maintaining the structure of plants.` };
const humanheart = { title: 'Human Heart', canvas: HumanHeartCanvas2, description: `The human heart is a four-chambered muscular organ, roughly the size of a closed fist, with two-thirds of its mass to the left of midline. It is enclosed in a pericardial sac and consists of the epicardium, myocardium, and endocardium layers. The heart's chambers include the right atrium, right ventricle, left atrium, and left ventricle, each serving specific functions in blood circulation.` };
const dinosaur = { title: 'Dinosaur', canvas: DinosaurCanvas, description: `Dinosaurs were dominant reptiles that lived on Earth for over 150 million years, with diverse species ranging from small to massive sizes. Fossils of dinosaurs provide insights into their appearance, behavior, and evolution, revealing features like feathers and unique bone structures. These ancient creatures lived in various environments worldwide, from forests to deserts, and exhibited different colors and adaptations.` };
const humanbrain = { title: 'Human Brain', canvas: HumanBrainCanvas, description: `The human brain is a complex organ divided into the cerebrum, cerebellum, and brainstem, controlling various body functions and cognitive processes. It consists of billions of neurons that communicate through synapses, enabling sensory processing, learning, memory, and motor coordination. The cerebrum, the largest part of the brain, is divided into two hemispheres with distinct functions like speech, language, and spatial awareness.` };
const mitochondria = { title: 'Mitochondria', canvas: MitochondriaCanvas, description: `Mitochondria are organelles found in most eukaryotic cells, responsible for generating energy in the form of adenosine triphosphate (ATP) through oxidative phosphorylation. They have a unique double-membrane structure with an inner membrane that houses the electron transport chain for ATP production. Mitochondria play crucial roles beyond energy production, including calcium storage, cell signaling, and cell growth regulation.` };
const humanskeleton = { title: 'Human Skeleton', canvas: HumanSkeletonCanvas, description: `The human skeleton is a framework of around 206 bones, providing support, protection, and facilitating movement. It consists of the axial skeleton (skull, vertebrae, ribs) and the appendicular skeleton (limbs and girdles). Bones are classified into long, short, flat, and irregular types based on shape and function. The skeleton plays vital roles in housing organs, producing blood cells, storing minerals, and regulating hormones. Its functions include support for the body, protection of vital organs like the brain and heart, and enabling motion through muscle-bone interactions.` };


export {
    plantcell,
    humanbrain,
    humanheart,
    humanskeleton,
    dinosaur,
    mitochondria
}