import './Chakras.css';
import Lottie from 'lottie-react';
import root from '../../animation/Root.json';
import sacral from '../../animation/Sacral.json';
import solar from '../../animation/Solar.json';
import heart from '../../animation/Heartc.json';
import throat from '../../animation/Throat.json';
import thirdeye from '../../animation/Thirdeye.json';
import crown from '../../animation/Crown.json';
import chacha from './images/bg.jpg';

const Chakras = () => {
    return ( 
        <div className="mainChakraSection">
           <div className="root common">
                <Lottie animationData={root} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Muladhara Chakra</h1></div>
                    <h4>Location: The base of the spine, in the tailbone area</h4>
                    <h4>Meaning: Physical Identity,Stability,Grounding</h4>
                    <h4>Color: Red</h4><br/>
                    <p>It is also known as Root Chakra.A blocked root chakra can manifest as physical issues like arthritis, constipation, and bladder or colon problems, or emotionally through feeling insecure about finances or our basic needs and well-being. When it's in alignment and open, we will feel grounded and secure, both physically and emotionally.</p>
                </div>
           </div>
           <div className="sacral common">
                <Lottie animationData={sacral} style={{height:350}} />
                <div className="details">
                    <div className="bar"><h1>Svadhisthana Chakra</h1></div>
                    <h4>Location: Two finger-widths above the Muladhara chakra</h4>
                    <h4>Meaning: Sexual and Creative Energy</h4>
                    <h4>Color: Orange </h4><br/>
                    <p>The sacral chakra is believed to be the second chakra in the human body. It's thought to govern how you experience sexuality, creative expression, emotions, and more. According to most traditions, it can become blocked and unbalanced, as can the other chakras in the body.</p>
                </div>
           </div>
           <div className="solar common">
                <Lottie animationData={solar} style={{height:350}} />
                <div className="details">
                    <div className="bar"><h1>Manipura Chakra</h1></div>
                    <h4>Location: Around your navel area of the body near your upper abdomen and breastbone</h4>
                    <h4>Meaning: Controls metabolism and digestion</h4>
                    <h4>Color: Bright Yellow</h4><br/>
                    <p>The Manipura Chakra is the centre of vitality. It controls our energy balance to strengthen and consolidate our health. This Chakra has an effect like a magnet, attracting Prana from the Cosmos. As the seat of digestive fire, this Chakra regulates the function of the Pancreas and digestive organs.</p>
                </div>
           </div>
           <div className="heart common">
                <Lottie animationData={heart} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Anahata Chakra</h1></div>
                    <h4>Location: In the centre of the chest at the height of the thymus gland</h4>
                    <h4>Meaning: Represents transformation and love energy</h4>
                    <h4>Color: Green</h4><br/>
                    <p>Anahata controls the love energy in the body. On a physical level, the heart chakra responds to the heart, lungs, immune system, and muscles of the upper body. On a spiritual level, opening the heart chakra fills you with love, forgiveness, and compassion.</p>
                </div>
           </div>
           <div className="throat common">
                <Lottie animationData={throat} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Vishuddha Chakra</h1></div>
                    <h4>Location: In the neck and the throat</h4>
                    <h4>Meaning: Truth, Clarity, and Responsibility</h4>
                    <h4>Color: Blue</h4><br/>
                    <p>The vishuddha or throat chakra acts as the body’s communication hub. It’s where you find your voice, speak your truth, and sing praises for yourself and others.This chakra is associated with speaking up and expressing yourself, but also with hearing and being heard.</p>
                </div>
           </div>
           <div className="thirdeye common">
                <Lottie animationData={thirdeye} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Ajna Chakra</h1></div>
                    <h4>Location: In the center of the forehead between the eyebrows</h4>
                    <h4>Meaning: Wisdom and Deep Inner Knowledge</h4>
                    <h4>Color: Indigo</h4><br/>
                    <p>The Third-Eye Chakra, also called the Ajna Chakra, is the center of perception, consciousness and intuition. It is pronounced as 'Agya Chakra' and is the focal point of concentration during asana or meditation practices. When the Ajna Chakra is awakened, it increases consciousness and transcends to a higher realm.</p>
                </div>
           </div>
           <div className="crown common">
                <Lottie animationData={crown} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Sahasrara Chakra</h1></div>
                    <h4>Location: Top of the head</h4>
                    <h4>Meaning: Individual’s center of spirit, enlightenment, wisdom, universal consciousness, and connection to higher guidance</h4>
                    <h4>Color: Violet</h4><br/>
                    <p>The Crown Chakra, is essentially the spiritual self. Working on the Crown Chakra is all about focusing on the higher self. Sahasrara is associated with the pursuit of spiritual peace, and connecting to higher consciousness or state of being. It is commonly pictured as concentric rings of flower petals, which represent the divine lotus.</p>
                </div>
           </div>
           <img src={chacha} className="chakras"/>
        </div>
     );
}
 
export default Chakras;