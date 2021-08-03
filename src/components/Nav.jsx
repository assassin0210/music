import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons";

export const Nav=({libraryStatusHandler})=>{
    return(

                <nav onClick={libraryStatusHandler}>
                    <h1>Waves</h1>
                    <button>
                        library
                        <FontAwesomeIcon icon={faMusic}/>
                    </button>
                </nav>

    )
}
