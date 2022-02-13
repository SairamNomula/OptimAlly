import style from "../Navbar/BottomNav.module.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GiCartwheel } from "react-icons/gi";
import { GiMeditation } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const BottomNav = () => {
    return (
        <>
            <nav className={style.bottomNav}>
                <div className={style.nav}>
                    <div className={style.link}>
                        <Link to="/">
                            <AiOutlineHome color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/Chakras">
                            <GiCartwheel color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/Meditation">
                            <GiMeditation color="#000000" size="2rem" />
                        </Link>
                    </div>
                    <div className={style.link}>
                        <Link to="/Yoga">
                            <GrYoga color="#000000" size="2rem" />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default BottomNav;
