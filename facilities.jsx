import React from "react";
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function facilities() {
    return (
      <>
      <>
  {/*About One Start*/}
  <section className="about-one about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 mb-5">
          <p className="about-one__text">
            SUPPORT has set up different centers in various parts of Mumbai for
            administering different services. Each center performs its set
            function like identification of potential inmates, their rescue,
            nutrition to overcome malnutrition, expert counselling, complete
            medical diagnosis and treatment along with psychological
            reinforcement, recreational activities, observation, education
            (academic, personal and social), skill training, placement and
            eventual rehabilitation and absorption into the mainstream of the
            society. All centers work in conjunction with one another like the
            parts of well-maintained Swiss watch.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <section className="facilities-list">
            <div className="facilities-list-col-1 wow fadeInUp">
              <span id="F1" className="anchor" />
              <h4> Day Care Center</h4>
              <p>
                SUPPORT’s Day Care Centre at Mahul Gaon in Chembur, Mumbai is
                the first contact point for substance-addicted street children
                and youth. During field visits, SUPPORT staff sincerely and
                endearingly interact with them and gently motivate them to avail
                our de-addiction program through detoxification and
                rehabilitation. Children participate in one-to-one interactive
                sessions and informal education classes at Day Care Centres.
                <br />
                <br />
                Detoxification is the primary process of 15 to 21 days wherein
                children undergo medical intervention to detoxify themselves of
                the substances accumulated in their bodies over time. After
                this, they are sent to SUPPORT’s Residential Rehabilitation
                Centres
              </p>
            </div>
            <div className="facilities-list-col-2">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/1.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-3 wow fadeInUp">
              <span id="F2" className="anchor" />
              <h4> Detoxification Center</h4>
              <p>
                The Detoxification camp is of 21 to 28 days wherein the
                physiological dependency of the child on drugs is dealt with.
                The withdrawal symptoms are medically treated. The planning and
                execution of the detoxification process is based on Doctors’
                advice and approval, and it is strictly adhered to. At the
                initial contact at the detox camp, the children/youth undergo
                mandatory diagnostic investigations such as blood and urine
                tests, X-Rays and certain other specific medical investigations
                according to doctors’ advice.
              </p>
            </div>
            <div className="facilities-list-col-4">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/2.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-1 wow fadeInUp">
              <span id="F3" className="anchor" />
              <h4> Medical Facilities</h4>
              <p>
                SUPPORT has the latest medical facilities for holistic
                assistance of children and youth. Under the watchful eye and
                professional guidance of qualified and experienced doctors, our
                medical team carries out essential investigations and medical
                check-ups in the beginning of the detoxification program. If and
                when investigations reveal any other medical problem/s, they are
                treated alongside detoxification. Monthly follow-up body
                check-ups keep track of their health status, which invariably
                show gradual improvement with increased immunity power.
                Simultaneously, the team also keep temptations and other health
                hurdles at bay, ensuring that nothing gets in the way of their
                progress under rehabilitation. Along with wholesome food,
                residential children are given nutritional and vitamin
                supplements as needed. Thus our team efficiently ensures smooth
                functioning of the program under the in-house Doctors’
                supervision.
              </p>
            </div>
            <div className="facilities-list-col-2">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/3.jpg"
                  className="wow fadeInRight"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-3 wow fadeInUp">
              <span id="F4" className="anchor" />
              <h4> Residential Rehabilitation Center</h4>
              <p>
                At its separate residential centres for boys and girls,
                SUPPORT’s Residential Rehabilitation Program focuses on
                behaviour transformation through changed habits, self-reflection
                and practice drug-free life with dignity. Children are taught
                socializing, community living, hygiene and personal care, basic
                manners and other vital life skills through carefully designed
                and scheduled recreational activities and sessions. Thus SUPPORT
                offers each inmate the same sense of being wanted, belonging,
                purpose and security as in a family. This enables them to
                perceive themselves and their lives differently and make efforts
                to uphold their newfound hope and fulfilment.
              </p>
            </div>
            <div className="facilities-list-col-4">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/4.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-1 wow fadeInUp">
              <span id="F5" className="anchor" />
              <h4> Skill Development Centre </h4>
              <p>
                SUPPORT is registered with Government Affiliated Trades in
                National Skill Development Corporation, Maharashtra State Skill
                Development Corporation and Maharashtra State Centre for
                Vocational Training. Inmate students from our rehabilitation
                program learn vocational trades from these agencies and become
                financially independent and socially useful.
              </p>
            </div>
            <div className="facilities-list-col-2">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/5.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-3 wow fadeInUp">
              <h4> Community Kitchen</h4>
              <p>
                As a visionary philanthropist, founding trustee of SUPPORT Mr.
                Pradeep Agarwal took up cudgels against the pressing issues of
                hunger and malnutrition among street children and homeless youth
                in Mumbai. His initiative named ‘ANSH’ is a community kitchen
                with state-of-the-art facilities to scale up our kitchen output
                and serve Agreeable Nutrition for Sustainable Health food to a
                thousand beneficiaries (especially Children). We currently run
                ANSH for a small number, but your valuable support in cash or
                kind will go a long way in filling the plates of the needy.
                <br />
                <br />
                You can scan the QR code to help us reach our goal!
              </p>
            </div>
            <div className="facilities-list-col-4">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/6.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
          <section className="facilities-list">
            <div className="facilities-list-col-1 wow fadeInUp">
              <h4> Ambulance &amp; Emergency Services</h4>
              <p>
                In these times of uncertainty and peril, an AMBULANCE is
                critical to reach the nearest hospital during any crisis or
                emergency. To this end, SUPPORT pioneered and ventured into a
                CSR tie-up with SBI Mutual Funds, who benevolently provided us
                with a hi-tech patient-transport service ambulance. We offer it
                free of charge to everyone on need basis in the areas adjoining
                Vakola and Santacruz. Those in need can get in touch with us
                directly to avail this service.
              </p>
            </div>
            <div className="facilities-list-col-2">
              <div className="facilities-list-img">
                <img
                  src="assets/images/Facilities/7.jpg"
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  {/*About One End*/}
</>

      </>
    );
  }
  
  export default facilities;