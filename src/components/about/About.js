import msPicture from "../../assets/ms-picture.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhoneSquare } from "@fortawesome/fontawesome-free-solid";
import { FaEnvelope, FaPhoneSquare } from "react-icons/fa";

function About() {
  return (
    // <section
    //   id="about"
    //   className="border flex flex-col justify-start items-center py-8 px-2 lg:px-8"
    // >
    <section id="about" className="flex flex-col justify-start items-center">
      <div style={{ height: "55px" }}></div>
      <h1 className="text-4xl mt-8 mb-16">About Me</h1>
      <div className="lg:px-2 flex flex-wrap lg:flex-nowrap justify-center items-center lg:gap-x-12 xl:gap-x-36 gap-y-20">
        <div className="">
          <img
            src={msPicture}
            alt="M. Saudagar pictue"
            className="min-w-[400px]"
            width="400"
            height="450"
          />
        </div>

        <div className="text-lg">
          <h3 className="text-2xl text-center mt-4 lg:mt-0 mb-4">
            Hi, I am Munawar from Toronto, Canada
          </h3>
          <div className="px-8">
            <p>
              I am a <span>frontend developer</span> with a good level of
              backend skills.
            </p>
            <p>
              I have three years of experience in developing responsive frontend
              applications using React and Bootstrap. I have advanced level
              expertise in Javascript and CSS. In addition I have good skills in
              Node, Express, NPM, GIT and Webpack. I am extremely passionate
              about Javascript based developement both for frontend and backend.
              I also have some knowledge of Python/ Flask.
            </p>

            <p>
              My qualifications includes a PhD in "Process Control" and MS and
              BE in "Chemical Engineering".{" "}
            </p>

            <p>
              Previously I extensively developed desktop applications using MS
              Excel/Powerpoint VBA, Matlab and Fortran.
            </p>
            <p>
              I have excellent communications and interpersonal skills. I am
              innovative, a quick learner, and a challenge-taker. I received a
              number of honors and awards throughout my career.
            </p>

            <p>
              Currently I am looking for a React-based frontend position that
              may require some Node-based backend development.
            </p>
            <div
              className="mt-5 flex flex-wrap justify-between items-between"
              style={{ height: "70px" }}
            >
              <span>
                <FaEnvelope className="inline" />
                {/* <FontAwesomeIcon icon={faEnvelope} className="" />{" "} */}:
                munawar.saudagar@gmail.com
              </span>
              <span>
                <FaPhoneSquare className="inline" />
                {/* <FontAwesomeIcon icon={faPhoneSquare} className="" />{" "} */}
                : +1-647-829-2233
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
