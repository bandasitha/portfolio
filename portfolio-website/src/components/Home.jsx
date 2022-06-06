import { Card, Jumbotron, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import profile from './profile.png'

export default function Home() {
    return (
        <div className="main">
                <div className="profileImage">
                    <p>
                        <Image width="150" height="150" src={profile} roundedCircle />
                    </p>
                    <p>She/Her</p>
                </div>
                <div className="About">
                    <h4>Hi! I'm Amber, </h4>
                    <p>and I'm currently located in the greater Portland surrounding area.
                        I've worked in the tech field for over 5 years with experience working in the public sector,
                        supporting worldwide retail network infrastructure, and deploying and supporting cloud services at AWS.
                        While most of my experience has been in System Engineering and DevOps, I've decided
                        to take a leap and work on a career shift to full stack development and have now
                        spent the better part of 2022 learning Javascript and React.

                        While not coding, I try to allocate my time between kayaking, hiking, playing board games, and playing Overwatch until my eyes burn.</p>
                </div>
        </div>
    );
};

