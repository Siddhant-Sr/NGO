
import './index.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HOST, HOST_API } from "./utilities";

function Stories() {

  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(HOST_API+ "/success-stories?populate=*");
      const json = await response.json();
      setContent(json.data);
      console.log(content);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    console.log(content);
  }, [content]);

    return (
      <>
      <>
  {/*About One Start*/}
  <section className="about-one about-three">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 mb-5">
          <p>
            While some of our inmates came from dysfunctional homes plagued with
            abject poverty or abuse, others had no recollections of their
            origins or kin. They languished in the bottomless pit of
            destitution, desolation and substance abuse, leading animal-like
            existences. But after SUPPORT intervened and took them under its
            wings, they kicked their vices for good and embarked on the journey
            of self-realization. Each one of them reciprocated our efforts, made
            diametrical turns and laboured to reclaim their lives. We are proud
            to say that today most of them are educated and vocationally
            trained, gainfully employed and honestly contributing to the
            society. Their steadfast trust in us and their diligent efforts for
            their own transformation wove incredible and colourful stories that
            continue to inspire countless others. Here are some of them.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4> {content[0]?.attributes?.Name} </h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[0]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                {content[0]?.attributes?.story_para_one}
                <br />
                <br />
                 {content[0]?.attributes?.story_para_two}
              </p>
            </div>
            <div className="stories-list-col-3 mt-3">
              <p>
                 {content[0]?.attributes?.story_para_three} <br />
                <br />
                <strong>
                  Educational Qualification journey of Mr. Tappan as follows;
                </strong>
              </p>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>DEGREE</th>
                      <th>INSTITUTE</th>
                      <th>UNIVERSITY/BOARD</th>
                      <th>YEAR</th>
                      <th>PERCENTAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>SSC(X)</td>
                      <td>
                        Shree Chhatrapati Shivaji Shikshan Sanstha Madhyamik
                        vidya mandir
                      </td>
                      <td>Maharashtra State Board</td>
                      <td>2011</td>
                      <td>82.73%</td>
                    </tr>
                    <tr>
                      <td>ITESM</td>
                      <td>Government of Maharashtra</td>
                      <td>ITI Kurla Mumbai</td>
                      <td>2013</td>
                      <td>76.28%</td>
                    </tr>
                    <tr>
                      <td>DIPLOMA (Ind. Electronic)</td>
                      <td>K.J Somaiya polytechnic</td>
                      <td>Autonomous</td>
                      <td>2018</td>
                      <td>79.20%</td>
                    </tr>
                    <tr>
                      <td>B. E</td>
                      <td>Dr. D. Y. Patil school of Engineering academy</td>
                      <td>Pune University</td>
                      <td>2021</td>
                      <td>71.14%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                 {content[0]?.attributes?.story_para_four}
              </p>
            </div>
          </section>
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4>{content[1]?.attributes?.Name}</h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[1]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                 {content[1]?.attributes?.story_para_one}
                <br />
                <br />
                {content[1]?.attributes?.story_para_two}
                <br />
                <br />
               {content[1]?.attributes?.story_para_three}
              </p>
            </div>
            <div className="stories-list-col-3 mt-3">
              <p>
                {content[1]?.attributes?.story_para_four} <br />
                <br />
                {content[1]?.attributes?.story_para_five}
              </p>
            </div>
          </section>
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4>{content[2]?.attributes?.Name} </h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[2]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                {content[2]?.attributes?.story_para_one}
                <br />
                <br />
               {content[2]?.attributes?.story_para_two} <br />
                <br />
                {content[2]?.attributes?.story_para_three}
              </p>
            </div>
            <div className="stories-list-col-3 mt-3">
              <p>
                {content[2]?.attributes?.story_para_four}
                <br />
                <br />
                {content[2]?.attributes?.story_para_five}
              </p>
            </div>
          </section>
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4>{content[3]?.attributes?.Name} </h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[3]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                Manoj Tirki is 19 years old now. He is the third child among six
                children in the family. The family hails from Ranchi, Jharkhand.
                His parents were both daily wage earners and lived in dire
                poverty. They were alcoholics and died early. After the death of
                his parents, Manoj took a train and came to Mumbai where he
                stayed on the streets and got habituated to different addictive
                substances [sniffing glue, alcohol, tobacco etc.]. He begged on
                the streets, trains, collected and sold scrap materials for
                sustenance. He would eat in cheap eateries which would
                distribute free food at times. <br />
                <br />
                He used to visit SUPPORT’s day care center near the CST Railway
                station in Mumbai where he was gradually motivated and convinced
                to lead a dignified and drug free life. He agreed and was then
                enrolled for SUPPORT’s detoxification and rehabilitation
                programme. This was10 years ago! <br />
                <br />
                At SUPPORT, after completion of detoxification treatment, Manoj
                continued with the long term residential rehabilitation program.
                He was admitted into a local school. He took this opportunity
                and worked hard in school. He also began to participate in the
                school’s extra-curricular activities like scholarship
                examinations, sports, games, debates and dance. He appeared for
                his 10th grade examination (SSC) in March 2014 and passed with a
                glorious 73%! It is truly commendable for Manoj to come such a
                long way from the poverty stricken family to a youngster seeking
                education and a dignified life. He has now been shifted to
                SUPPORT’s vocational training centre where he is attending
                classes at ITI, Mulund to become an electrician. He now proudly
                says that he owes his success to SUPPORT, which is his home.
              </p>
            </div>
            <div className="stories-list-col-3 mt-3"></div>
          </section>
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4>{content[4]?.attributes?.Name} </h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[4]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                Ajay Ram Avatar Sahani is now 26 years old. He was born In
                Bihar. When he was seven years old, his parents passed away in
                an accident. Thereafter his uncle took him to Kolkatta where he
                stayed in an NGO for three years. Then he started working as a
                helper in a tea stall. He worked there for three years. One day
                he asked for money from his uncle to buy new clothes. On being
                denied the money, he ran away from home. He stayed on the
                platforms of Kolkatta railway station for six years and then
                spent three years on Dadar railway station platform. During this
                time he got addicted to various substances like ganja, beedi,
                cigarettes, tobacco and liquor. In order to sustain on the
                streets, he would collect and sell scrap and sometimes would
                also do odd jobs as a porter etc.
                <br />
                <br />
                In 2006, SUPPORT’s staff motivated Ajay to get off drugs and he
                was brought to our Centre for detoxification and vocational
                training programme. He also undertook peer educators’ training.
                Unfortunately within 10 months of the programme, he ran away
                from our Centre due to the pull of street and addiction.
                <br />
                <br />
                In 2009 however, SUPPORT outreach team found him on Dadar
                station platform and motivated him yet once again to quit drugs
                and lead a productive and dignified life. He agreed and this
                time round, he continued with his training to become a peer
                educator for the next four years. He worked hard this time and
                due to his dedication and commitment, he was made a staff of
                SUPPORT. During the course of his peer training, he also saved
                some money. Now he is one of our best resident staff at SUPPORT.
              </p>
            </div>
            <div className="stories-list-col-3 mt-3"></div>
          </section>
          <section className="stories-list">
            <div className="stories-list-col-3">
              <h4>{content[5]?.attributes?.Name} </h4>
            </div>
            <div className="stories-list-col-1 wow fadeInUp">
              <div className="stories-list-img">
                <img
                  src={ `${HOST}`+content[5]?.attributes?.photo?.data?.attributes?.url}
                  className="wow fadeInRight" alt=""
                />
              </div>
            </div>
            <div className="stories-list-col-2">
              <p>
                Hailing from Jabalpur, Madhya Pradesh, Kamlesh, a 45-year old
                has been working in 'Support' since 2005 as a staff member in
                the kitchen centre. He has speaking disability. <br />
                <br />
                An alcoholic, Kamlesh came to Mumbai in search of a job. He
                expressed in his interview that he was illiterate and had a
                speaking problem. People used to make fun of him when I tried to
                speak. He said he was frustrated with life I didn't know what to
                do.” <br />
                <br />
                In 2005 he came in contact with encourage centre, a
                rehabilitation centre. He got a job in dining hall.. But, his
                addiction was affecting his health and behaviour.
                <br />
                <br />
                When he came to 'Support'. He got help for his deaddiction
                through counselling and awareness sessions. Detoxification phase
                was a very difficult phase of his life. It made him feel pain
                and anger but as Kamlesh said, “I was fighting with myself only.
                This fight was against addiction. The peer supporters of support
                were always there for me. Vijay sir used to interact with me
                personally; he helped me to think about myself, my life, my
                goals and my dreams. I had felt guilty of my speaking inability,
                but I slowly started to work on it. Today I don’t feel guilty
                about it. Even if I can’t speak fluently, I now traet myself
                with the respect I deserve.”
              </p>
            </div>
            <div className="stories-list-col-3 mt-3">
              <p>
                This was a turning point in Kamlesh's life. In Support, he was
                not only doing a job but he got an opportunity to work on
                himself. He got motivation to de-addict himself. Kamlesh said;
                he got a path of self-exploration with the help of support.
                Although he is illiterate, he has leadership skills. Today he is
                handling kitchen staff in kitchen centre. <br />
                <br />
                In support training centre Kamlesh met his partner. A beautiful
                relationship took birth. In 2006 Kamlesh got marriedb to his
                beloved. They accepted each other with their struggling past and
                are living happily. Kamlesh is free from addiction now. It has
                been thirteen years he has not taken any alcohol or drugs.
                Support gave him various opportunities to develop his skills.
                Kamlesh completed a 6-month paraprofessional course. Recently he
                got appreciation award for staff performance. <br />
                <br />
                In Kamlesh life journey support members was always there to
                uplift him. Kamlesh says, “without support I would have never
                reached this point in my life. It was me only who didn’t want to
                change my habit of addiction. So, I told myself that I am the
                only one responsible for who i had become, not my friends. My
                motivation started rising when I met Vijay sir.”
                <br />
                <br />
                Today Kamlesh has his own house. As Kamlesh said, “support has
                taken efforts on me, on my skills. And today I am satisfied that
                I got an opportunity to work in support. The food we cook goes
                in detoxification centre and in rehabilitation centre too. I was
                also in a same place someday and someone was cooking for me.”
                <br />
                <br />
                In Kamlesh’s words,” I am working with support organization last
                15 years as a cook and my salary is Rs. 31460. I am thankful for
                support and its each and every staff member".
              </p>
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
  
  export default Stories;