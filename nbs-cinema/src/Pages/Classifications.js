import React from "react";

import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";

import ClassNames from "classnames";

import Jumbotron from "react-bootstrap/Jumbotron";

import style from "../styles/styleclass.css";

import { ClassificationsJumbotron } from "../component/ClassificationsJumbotron";

import '../styles/style.css';



export default class Classifications extends React.Component {

    constructor(props) {

        super(props);



        this.toggle = this.toggle.bind(this);

        this.state = {

            activeTab: "1"

        };

    }



    toggle(tab) {

        if (this.state.activeTab !== tab) {

            this.setState({

                activeTab: tab

            });

        }

    }



    handleClick = (e) => {

        e.preventDefault();

        // console.log("The link was clicked.");

    };

    render() {

        return (

            <div>

                <ClassificationsJumbotron/>

                <br/>

                <hr />

                <br/>

                <br/>

                <Row>

                    <Col xs="6" sm="4" md="4">

                        <Nav tabs vertical pills>

                            <NavItem>

                                <NavLink

                                    className={ClassNames({active: this.state.activeTab === "1"})}

                                    onClick={() => {

                                        this.toggle("1");

                                    }}

                                >

                                    <p className={"RatingsInfoHead"}> Ratings info </p>

                                </NavLink>

                            </NavItem>

                            <NavItem>

                                <NavLink

                                    className={ClassNames({active: this.state.activeTab === "2"})}

                                    onClick={() => {

                                        this.toggle("2");

                                    }}

                                >

                                    <img src="/ClassificationImages/U.png"></img>

                                </NavLink>

                            </NavItem>

                            <NavItem>

                                <NavLink

                                    className={ClassNames({active: this.state.activeTab === "3"})}

                                    onClick={() => {

                                        this.toggle("3");

                                    }}

                                >

                                    <img src="/ClassificationImages/12.png" />

                                    <img src="/ClassificationImages/12A.png" />

                                </NavLink>

                            </NavItem>

                            <NavItem>

                                <NavLink

                                    className={ClassNames({active: this.state.activeTab === "4"})}

                                    onClick={() => {

                                        this.toggle("4");

                                    }}

                                >

                                    <img src="/ClassificationImages/15.png"/>

                                </NavLink>

                            </NavItem>

                            <NavItem>

                                <NavLink

                                    className={ClassNames({active: this.state.activeTab === "5"})}

                                    onClick={() => {

                                        this.toggle("5");

                                    }}

                                >

                                    <img src="/ClassificationImages/18.png"/>

                                </NavLink>

                            </NavItem>

                        </Nav>

                    </Col>

                    <Col xs="6" sm="6" md="6">

                        <TabContent activeTab={this.state.activeTab}>

                            <TabPane tabId="1">

                                <h2>Ratings Info</h2>



                                <p className={"ScreenDesc"}>This page will answer the following questions:</p>

                                <p className={"ScreenDesc"}>o What are the standard film classifications? </p>



                                <p className={"ScreenDesc"}>o What are the rules and conditions relating to each classification?</p>

                                <br/>

                                <p className={"ScreenDesc"}>For more information, click <a class="one" href="/bbfc" target="_blank" onClick={this.props.handleClick}>here.</a></p>

                            </TabPane>

                            <TabPane tabId="2">



                                <h2>U Universal – Suitable for all</h2>

                                <p className={"ScreenDesc"}>

                                    A U film should be suitable for audiences aged four years and over, although it is impossible to predict what might upset any particular child.

                                </p>

                                <p className={"ScreenDesc"}>

                                    U films should be set within a positive framework and should offer reassuring counterbalances to any violence, threat or horror. If a work is particularly suitable for pre-school children, this will be indicated in the ratings info.

                                </p>

                                <p className={"ScreenDesc"}>Dangerous behaviour

                                    Potentially dangerous or anti-social behaviour which young children may copy must be clearly disapproved of. No emphasis on realistic or easily accessible weapons.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Discrimination

                                    Discriminatory language or behaviour is unlikely to be acceptable unless clearly disapproved of.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Drugs

                                    References to illegal drugs or drug misuse must be infrequent and innocuous, or have a clear educational purpose or anti-drug message suitable for young children.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Language

                                    Infrequent use only of very mild bad language.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Nudity

                                    Occasional nudity, with no sexual context.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Sex

                                    Only very mild sexual behaviour (for example, kissing) and references to such behaviour.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Threat and horror

                                    Scary or potentially unsettling sequences should be mild, brief and unlikely to cause undue anxiety to young children. The outcome should be reassuring.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Violence

                                    Violence will generally be very mild. Mild violence may be acceptable if it is justified by context (for example, comedic, animated, wholly unrealistic)

                                </p>

                                <p className={"ScreenDesc"}>

                                    How can I find out more about a specific U film?

                                    Please check the Rating info for the film or video you are thinking of watching. Rating info is available on this website, on our free App, as well as on film posters, DVD and Blu-ray packaging, and on some listings. It provides comprehensive information on exactly why a film or video has been given a particular category. All the issues are discussed in detail and parents in particular can use this information to make informed decisions when choosing viewing material for their children.

                                </p>

                            </TabPane>

                            <TabPane tabId="3">

                                <h2>12 and 12A</h2>

                                <p className={"ScreenDesc"}>12A/12 – Suitable for 12 years and over

                                    Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. No one younger than 12 may see a 12A film in a cinema unless accompanied by an adult. Adults planning to take a child under 12 to view a 12A film should consider whether the film is suitable for that child. To help them decide, we recommend that they check the Ratings info for that film in advance. No one younger than 12 may rent or buy a 12 rated video work.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Dangerous behaviour

                                    No promotion of potentially dangerous behaviour which children are likely to copy. No glamorisation of realistic or easily accessible weapons such as knives. No endorsement of anti-social behaviour.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Discrimination

                                    Discriminatory language or behaviour must not be endorsed by the work as a whole. Aggressive discriminatory language or behaviour is unlikely to be acceptable unless clearly condemned.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Drugs

                                    Misuse of drugs must be infrequent and should not be glamorised or give detailed instruction.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Language

                                    There may be moderate bad language. Strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Nudity

                                    There may be nudity, but in a sexual context it must be brief and discreet.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Sex

                                    Sexual activity may be briefly and discreetly portrayed. Moderate sex references are permitted, but frequent crude references are unlikely to be acceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Threat and horror

                                    There may be moderate physical and psychological threat and horror sequences. Although some scenes may be disturbing, the overall tone should not be. Horror sequences should not be frequent or sustained.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Violence

                                    There may be moderate violence but it should not dwell on detail. There should be no emphasis on injuries or blood, but occasional gory moments may be permitted if justified by the context.

                                </p>

                                <p className={"ScreenDesc"}>

                                    How can I find out more about a specific 12 or 12A work?

                                    Please check the Ratings info for the film or video you are thinking of watching. Ratings info is available on this website, on our free App, as well as on film posters, DVD and Blu-ray packaging, and on some listings. It provides comprehensive information on exactly why a film or video has been given a particular category. All the issues are discussed in detail and parents in particular can use this information to make informed decisions when choosing viewing material for their children.</p>

                            </TabPane>

                            <TabPane tabId="4">

                                <h2>15</h2>

                                <p className={"ScreenDesc"}>15 – Suitable only for 15 years and over

                                    No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Dangerous behaviour

                                    Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Discrimination

                                    The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Drugs

                                    Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Language

                                    There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Nudity

                                    There are no constraints on nudity in a non-sexual or educational context. Sexual nudity may be permitted but strong detail is likely to be brief or presented in a comic context.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Sex -

                                    Sexual activity may be portrayed, but usually without strong detail. There may be strong verbal references to sexual behaviour. Repeated very strong references, particularly those using pornographic language, are unlikely to be acceptable. Works whose primary purpose is sexual arousal are unacceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Sexual violence and sexual threat -

                                    There may be strong verbal references to sexual violence but any depiction of the stronger forms of sexual violence, including rape, must not be detailed or prolonged. A strong and sustained focus on sexual threat is unacceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Threat and horror -

                                    There may be strong threat and horror. A sustained focus on sadistic threat is unlikely to be acceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Violence -

                                    Violence may be strong but should not dwell on the infliction of pain or injury. The strongest gory images are unlikely to be acceptable. Strong sadistic violence is also unlikely to be acceptable.

                                </p>

                                <p className={"ScreenDesc"}>

                                    How can I find out more about a specific 15 film?

                                    Please check the Ratings info for the film or video you are thinking of watching. Ratings info is available on this website, on our free App, as well as on film posters, DVD and Blu-ray packaging, and on some listings. It provides comprehensive information on exactly why a film or video has been given a particular category. All the issues are discussed in detail and parents in particular can use this information to make informed decisions when choosing viewing material for their children.</p>

                            </TabPane>

                            <TabPane tabId="5">

                                <h2>18</h2>

                                <p className={"ScreenDesc"}>18 – Suitable only for adults

                                    No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.

                                </p>

                                <p className={"ScreenDesc"}>

                                    Adults should be free to choose their own entertainment. Exceptions are most likely in the following areas:

                                </p>

                                <p className={"ScreenDesc"}>

                                    where the material is in breach of the criminal law, or has been created through the commission of a criminal offence

                                    where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug use, which may cause harm to public health or morals. This may include portrayals of sadistic violence, rape or other non-consensual sexually violent behaviour which make this violence look appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour or other harmful violent activities

                                    where there are more explicit images of sexual activity in the context of a sex work (see right) In the case of video works, which may be more accessible to younger viewers, intervention may be more frequent than for cinema films.</p>

                                <p className={"ScreenDesc"}>

                                    Sex works at 18

                                    Sex works are works whose primary purpose is sexual arousal or stimulation. Sex works containing only material which may be simulated are generally passed 18. Sex works containing clear images of real sex, strong fetish material, sexually explicit animated images, or other very strong sexual images will be confined to the R18 category. Material which is unacceptable in a sex work at R18 is also unacceptable in a sex work at 18.

                                </p>

                                <p className={"ScreenDesc"}>

                                    How can I find out more about a specific 18 film?

                                    Please check the Ratings info for the film or video you are thinking of watching. Ratings info is available on this website, on our free App as well as on film posters, DVD and Blu-ray packaging, and on some listings. It provides comprehensive information on exactly why a film or video has been given a particular category. All the issues are discussed in detail and parents in particular can use this information to make informed decisions when choosing viewing material for their children.</p>

                            </TabPane>

                        </TabContent>

                    </Col>

                </Row>

                <br/>

                <br/>

                <br/>

                <br/>

                <br/>

            </div>

        )

    }

}

