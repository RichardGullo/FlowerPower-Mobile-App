import React, {useState, createContext} from "react"
import {plantImages, myPlants, plantReminders2, users} from '../constants/plants'

// Create Context Object
export const GlobalContext = createContext();

// Create a provider for components to consume and subscribe to changes
export function GlobalContextProvider(props) {
    const [plantEntries, setPlantEntries] = useState([...plantReminders2]);
    const [userEntries, setUserEntries] = useState([...users])
    const [currentUser, setCurrentUser] = useState({username:"", password:"", email:""});
    const [myKeys, setMyKeys] = useState(0);
    
    
    return(
        <GlobalContext.Provider value = {{
                                            plantEntriesContext:[plantEntries,setPlantEntries], 
                                            usersContext:[userEntries,setUserEntries],
                                            currentUserContext:[currentUser, setCurrentUser],
                                            keyContext:[myKeys,setMyKeys]
                                        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

