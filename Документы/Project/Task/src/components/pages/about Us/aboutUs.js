import css from "./aboutUs.module.css"
import img from "../../../img/img.jpg"
import { FaPhoneAlt , FaBirthdayCake ,FaLinkedin, FaGithubSquare} from "react-icons/fa";
import {MdLocationOn, MdMail} from "react-icons/md"
 

function AboutUs () {

    const skils = [
        "The main fields of study in computer science",
        "C++",
        "Low level programing nuances and approaches",
        "Javascript",
        "OOP",
        "Algorithms and data structures",
        "React.js",
        "Redux, Toolkit"
    ]

    return (
        <div className={css.parent_about_section}>
            <div className={css.about}>
                <div className={css.left_sec}>
                    <img src={img} alt="foto"></img>
                    <h2>Profile</h2>
                    <ul className={css.lists}>
                        <li><MdLocationOn/>Yerevan</li>
                        <li><FaBirthdayCake/>28-05-1998</li>
                        <li><MdMail/>karo.davtyan.98@mail.ru</li>
                        <li><FaPhoneAlt/>+37477283097</li>
                        <li><FaPhoneAlt/>+37441283097</li>
                        <li>
                            <a target="blank" href="https://www.linkedin.com/"><FaLinkedin/>Linked in</a>
                        </li>
                        <li>
                            <a target="blank" href="https://github.com/KaroDavtyan98"><FaGithubSquare/>Github</a>
                        </li>
                    </ul>
                </div>
                <div className={css.right_sec}>
                    <h1>Karapet Davtyan</h1>
                    <p>Hello I am highly motivated person in computer science field and i see 
                      myself with huge potential.I am looking for good and motivational enviroment
                      to develop my personal and professional life and to be a good team player.
                    </p>
                    <h2>Skills</h2>
                    <ul>
                        {skils.map((skil)=> {
                            return <li key={skil}>{skil}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutUs