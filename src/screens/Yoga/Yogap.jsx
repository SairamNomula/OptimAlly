import './Yogap.css';
import Header from './Header';
import BMIcalculator from '../BMI/BMIcalculator';
import Lottie from 'lottie-react';
import sukh from '../../animation/sukh.json';
import cobrapose from '../../animation/cobrapose.json';
import halasana from '../../animation/halasana.json';
import vrikshasana from '../../animation/vrikshasana.json';
const Yogap = () => {
    return ( 
        <div className="mainYogaSection">
           <Header/>
          <BMIcalculator/>
           <div className="yoga common">
                <Lottie animationData={sukh} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Sukhasana </h1></div>
                    <h3>Sukhasana ,a comfortable, cross-legged, seated position, and one of the most basic poses used in yoga practice and meditation.</h3><br/>
                    <p>Sit with the legs straight. Bend both legs and place the right foot under the left thigh and the left foot under, or in front of, the right calf on the floor. If it is more comfortable cross the legs in the opposite way. If it is difficult to keep the body upright then sit on a cushion at an appropriate height to make the posture comfortable. This sitting posture is recommended for those who have difficulty sitting for a long period of time in Siddhasana, Vajrasana or Padmasana.<br/><br/>NOTE: People suffering from backaches or any kind of spinal problems should not practice this.</p>
                </div>
           </div>
           <div className="cobrapose common">
                <Lottie animationData={cobrapose} style={{height:350}} />
                <div className="details">
                    <div className="bar"><h1>Bhujangasana</h1></div>
                    <h3>Bhujangasana or Cobra Pose is a reclining back-bending asana in hatha yoga and modern yoga as exercise.It is commonly performed in a cycle of asanas in Surya Namaskar (Salute to the Sun) as an alternative to Urdhva Mukha Svanasana (Upwards Dog Pose).</h3><br/>
                    <p>The pose may be entered from a prone position or from Downward Dog. The palms are placed under the shoulders, pushing down until the hips lift slightly. The backs of the feet rest on the ground, the legs outstretched; the gaze is directed forwards, giving the preparatory pose. For the full pose, the back is arched until the arms are straight, and the gaze is directed straight upwards or a little backwards. The legs remain on the ground, unlike in the similar Upward Dog pose.</p>
                </div>
           </div>
           <div className="halasana common">
                <Lottie animationData={halasana} style={{height:270}} />
                <div className="details">
                    <div className="bar"><h1>Halasana</h1></div>
                    <h3>Halasana,a full-body stretch that positions your body upside down with your feet over your head.</h3><br/>
                    <p>This is also known as plough pose. This asana reduces backache and can help you get to sleep; Strengthens and opens up the neck, shoulders, abs and back muscles; Calms the nervous system, reduces stress and fatigue; Helps women during menopause
</p>
                </div>
           </div>
           <div className="vrikshasana common">
                <Lottie animationData={vrikshasana} style={{height:400}} />
                <div className="details">
                    <div className="bar"><h1>Vrikshasana</h1></div>
                    <h3>Vrikshasana is primarily a balancing posture, it aids in improving balance – both physical and emotional.</h3><br/>
                    <p>Start at the ground and feel where weight is concentrated on your standing foot. Now move up your standing leg and feel the muscles engaged with a micro-bend in your knee.When you get it right and can balance, you'll see how your body should be aligned to stay strong. If reaching your toe is too challenging, you can still get the benefits of this pose by keeping your leg bent and holding on to your knee.This posture aims to keep your body and mind from wandering and stay balanced.<br/><br/>NOTE: Pregnant women can practice vrikshasana till their second trimester but should avoid it in their last trimester OR if anyone suffers from vertigo or migraine issues, then avoid doing this asana.
</p>
                </div>
           </div>
        </div>
     );
}
 
export default Yogap;