import React, { useContext } from "react";
import ChatContext from "../../context/chatContext";


const AboutUs = () => {

    const chatContext = useContext(ChatContext);
    const properties = chatContext.properties;


    return (

        <div>
            {properties["chatapp.aboutUs.content"]}
        </div>

    );

}

export default AboutUs;