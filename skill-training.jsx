import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HOST, HOST_API } from "./utilities";

function skill() {
    return (
      <>
  {/*Project Details Start*/}
  <section className="project-details">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__left">
            <div className="project-details__img">
              <img
                src="assets/images/programs/social-integration.jpg"
                className="mb-3" alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="project-details__text-box">
            <h4 className="mb-2">
              Crafting Futures: Empowering Street and Tribal Rural Children
              through Skills and Dreams{" "}
            </h4>
            <p className="">
              In the tapestry of every child's life, skills and vocational
              training are the threads that weave dreams into reality. At our
              NGO, we believe in the transformative power of honing abilities
              and crafting futures. Let's explore the profound importance of
              skill and vocational training for street children and tribal rural
              children, unveiling an emotional journey of empowerment and
              change.
              <br />
              <br />
              We are partnered with NSDC (National Skill Development
              Corporation) and MSBSVET (Maharashtra State Board for Skilling,
              Vocational Education and Training) for providing following
              courses:
            </p>
            <ul className="mt-3">
              <li>Home Health Aide (HHA) </li>
              <li>General Duty Assistant (GDA) </li>
              <li>Electrician / Wireman </li>
              <li>Fitter </li>
              <li>Motor Vehicle Mechanic </li>
              <li>Beautician</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="project-details__bottom">
        <div className="row">
          <div className="col-xl-12">
            <div className="project-details__text-box">
              <h5 className="mb-2">
                The Importance of Skill and Vocational Training
              </h5>
              <h6 className="mb-2 mt-4"> Turning Potential into Proficiency</h6>
              <p>
                Skill and vocational training are the bridges that connect
                untapped potential to practical proficiency. For street and
                tribal rural children, it's a transformative journey where raw
                talents evolve into valuable, marketable skills, fostering
                self-reliance and independence.
              </p>
              <h6 className="mb-2 mt-4"> Breaking Economic Barriers </h6>
              <p>
                {" "}
                These training programs serve as catalysts for breaking economic
                barriers. By equipping children with practical skills, we
                provide them with tools to overcome financial hardships, opening
                doors to sustainable livelihoods and a future free from the
                shackles of poverty.
              </p>
              <h6 className="mb-2 mt-4"> Preserving Cultural Heritage</h6>
              <p>
                {" "}
                For tribal rural children, skills and vocational training become
                a means of preserving and celebrating their cultural heritage.
                Traditional crafts, agricultural practices, and artisanal skills
                are not just taught; they are cherished, ensuring that these
                valuable traditions are passed down through generations.
              </p>
              <h6 className="mb-2 mt-4">
                {" "}
                Boosting Confidence and Self-Esteem
              </h6>
              <p>
                {" "}
                Imagine the transformative moment when a child creates something
                with their own hands—a tangible manifestation of their
                capabilities. Skill training becomes a confidence booster,
                nurturing self-esteem and instilling a sense of pride in their
                unique abilities.
              </p>
              <h5 className="mb-2 mt-5">
                Changing Their Future: An Emotional Journey{" "}
              </h5>
              <h6 className="mb-2 mt-4">Step 1: Nurturing Potential</h6>
              <p>
                Witness the emotional resonance as we identify and nurture the
                unique potential within each child. It's a journey of
                discovering strengths, passions, and aspirations, laying the
                groundwork for a future filled with promise.
              </p>
              <h6 className="mb-2 mt-4">
                {" "}
                Step 2: Providing Tools of Transformation
              </h6>
              <p>
                Picture the joy in their eyes as we place tools of
                transformation in their hands—paintbrushes, gardening tools,
                crafting materials. These are not just instruments; they are
                vessels of hope, ready to shape dreams and carve out brighter
                tomorrows.
              </p>
              <h6 className="mb-2 mt-4">
                {" "}
                Step 3: Guiding Dreams into Reality
              </h6>
              <p>
                Embrace the emotional crescendo as dreams start taking tangible
                forms. Be it a traditional craft or a modern skill, every
                stroke, every cut, every creation becomes a testament to the
                unfolding potential within them.
              </p>
              <h6 className="mb-2 mt-4">
                Step 4: Fostering Community and Pride
              </h6>
              <p>
                {" "}
                Experience the emotional warmth of community building as these
                children come together to share skills, stories, and
                experiences. Skill and vocational training become not just about
                individual growth but about fostering a sense of community
                pride.
              </p>
              <h6 className="mb-2 mt-4">Step 5: Celebrating Achievements</h6>
              <p>
                Picture the emotional peaks as these children showcase their
                creations—be it a handmade craft, a thriving garden, or a
                culinary masterpiece. Each achievement is not just a skill honed
                but a future transformed.
              </p>
              <h5 className="mb-2 mt-5">Conclusion </h5>
              <p>
                In the realm of skill and vocational training, our NGO is not
                just imparting lessons; we are crafting dreams, forging futures,
                and sculpting destinies. We invite you to join us in this
                emotional journey, where every skill learned is a step toward
                independence, every creation is a testament to potential, and
                every child is a masterpiece in the making. Together, let's
                craft futures that are resilient, vibrant, and brimming with the
                artistry of endless possibilities.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Project Details End*/}
</>

    );
  }
  
  export default skill;