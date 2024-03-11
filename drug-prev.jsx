import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function drug() {
    return (
      <>
      <>
  {/*Project Details Start*/}
  <section className="project-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__left">
            <div className="project-details__img">
              <img
                src="assets/images/programs/drug-prevention.jpg"
                className="mb-3" alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__text-box">
            <h4 className="mb-2">
              Empowering Futures: Unveiling the Truth about Drug Abuse in
              Educational Institutions
            </h4>
            <p className="project-details__text-1">
              In today's fast-paced world, the surge in drug addiction among our
              youth is alarming. Our schools and colleges, once considered safe
              havens for nurturing young minds, are now grappling with the
              pervasive issue of drug abuse. The influence of media, shifting
              family dynamics, and evolving societal norms has created a
              breeding ground for this menace. It's time to take action and
              initiate a Prevention &amp; Awareness Program that not only
              educates but also emotionally connects with our students.
            </p>
          </div>
        </div>
      </div>
      <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__text-box">
              <h5 className="mb-2">Section 1: The Influence of Media</h5>
              <p>
                In an era dominated by technology, media wields unparalleled
                power in shaping our thoughts and behaviors. Films, television,
                advertisements, books, and magazines play a pivotal role in
                influencing the vulnerable minds of our youth. Advertisements
                glamorizing addictive substances like cigarettes, gutka, and
                paan masalas subtly create the illusion of a high social status.
                Our challenge is to break through these illusions and present a
                reality that resonates with the emotions and aspirations of our
                students.
              </p>
              <h5 className="mb-2 mt-4">Section 2: Erosion of Family Values</h5>
              <p>
                The traditional joint family system, once the cornerstone of
                imparting strong values, is fading away in urban areas. The
                fast-paced, self-centered lifestyle has contributed to a
                breakdown in the value system within families. To combat this,
                we must rekindle the importance of shared values and family
                support. By fostering an environment that encourages open
                communication, we aim to rebuild the family as a foundation for
                moral strength and resilience.
              </p>
              <h5 className="mb-2 mt-4">Section 3: Changing Status of Women</h5>
              <p>
                The changing role of women in society has brought about
                significant transformations. While empowering women is crucial
                for societal progress, it also comes with challenges. With
                economic independence, women have gained a voice in
                decision-making processes. However, the newfound freedom also
                exposes them to societal pressures, making them more susceptible
                to smoking, drinking, and drug use. Our program strives to
                empower both genders, encouraging informed choices and promoting
                a healthy, substance-free lifestyle.
              </p>
              <h5 className="mb-2 mt-4">Conclusion</h5>
              <p>
                In the face of these challenges, our schools and colleges must
                become beacons of awareness and resilience. It's imperative to
                instill in our students the ability to make informed decisions,
                be responsible for their actions, and comprehend the
                consequences of drug abuse. Let's join hands to say 'No' to
                drugs and addictive substances, fostering an environment where
                our youth can lead normal, healthy lives. Together, we can
                empower futures and create a generation that thrives on
                awareness, resilience, and emotional well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Project Details End*/}
</>


      </>
    );
  }
  
  export default drug;