import React from 'react';
import { PlacesJumbotron } from "../component/PlacesJumbotron";
import MapContainer from '../component/MapContainer';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
const FB = '/F&B.jpg';
const Chiquto = '/Chiquto.jpg';
const HW = '/Hall&Woodhouse.jpg';
const PizzaHut = '/PizzaHut.jpg';
const Nandos = '/Nandos.jpg';
const Fratellos = '/Fratellos.jpg';






export const PlacesToGo = () =>(
    <div>
        <PlacesJumbotron/>
        <div>
            <MapContainer/>
        </div>

        <CardGroup style={{margin: 25}}>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Frankie & Benny's" name="Frankie & Benny's" >Frankie & Benny's</a></Card.Title>
                    <Card.Text>
                        Frankie & Benny's is a chain restaurant serving Italian and American comfort-food classics in a family-friendly atmosphere.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={FB}/>
                <Card.Footer className ="Pfooter">
                    <small>
                        <ul>
                            <b className="Bfooter">Address</b>
                                <p>Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <b className="Bfooter">Hours</b>
                            <p>
                                Friday	7:30am–11pm<br/>
                                Saturday	7:30am–11pm<br/>
                                Sunday	7:30am–10:30pm<br/>
                                Monday	9am–11pm<br/>
                                Tuesday	9am–11pm<br/>
                                Wednesday	9am–11pm<br/>
                                Thursday	9am–11pm<br/>
                            </p>
                            <b className="Bfooter">Menu</b>
                            <p><a href = "https://www.frankieandbennys.com/restaurants/swindon/menu" id={"FB_Link"}>frankieandbennys.com</a></p>
                            <b className="Bfooter">Phone</b>
                            <p>01793 613136</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Hall & Woodhouse" name="Hall & Woodhouse">Hall & Woodhouse</a></Card.Title>
                    <Card.Text>
                        Hall & Woodhouse in Wichelstowe is a brand new pub from Dorset Brewers of the same name. No matter what the occasion Hall & Woodhouse is perfect, whether you’re looking for a quick lunch, celebration dinner, business meeting or just a few drinks.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={HW} />
                <Card.Footer className ="Pfooter">
                    <small>
                        <ul>
                            <b className="Bfooter">Address</b>
                                <p>Hall & Woodhouse, Peglars Way, Swindon SN1 7DA</p>
                            <b className="Bfooter">Hours</b>
                            <p>
                                Friday	9am–11pm<br/>
                                Saturday	9am–11pm<br/>
                                Sunday	9am–10:30pm<br/>
                                Monday	9am–11pm<br/>
                                Tuesday	9am–11pm<br/>
                                Wednesday	9am–11pm<br/>
                                Thursday	9am–11pm<br/>
                            </p>
                            <b className="Bfooter">Menu</b>
                            <p><a href = "https://www.hall-woodhousewichelstowe.co.uk/dine/?utm_source=local&utm_medium=organic&utm_content=gmb" id={"HW_Link"}>hall-woodhousewichelstowe.co.uk</a></p>
                            <b className="Bfooter">Phone</b>
                            <p>01793 209207</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Chiquto" name="Chiquto">Chiquto</a></Card.Title>
                    <Card.Text>
                        Colourful chain restaurant dishing up a menu of Tex-Mex favourites, beer and cocktails.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={Chiquto} />
                <Card.Footer className ="Pfooter">
                    <small className>
                        <ul>
                            <b className="Bfooter">Address</b>
                            <p>Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <b className="Bfooter">Hours</b>
                            <p>
                                Friday	7:30am–11pm<br/>
                                Saturday	7:30am–11pm<br/>
                                Sunday	7:30am–10:30pm<br/>
                                Monday	9am–11pm<br/>
                                Tuesday	9am–11pm<br/>
                                Wednesday	9am–11pm<br/>
                                Thursday	9am–11pm<br/>
                            </p>
                            <b className="Bfooter">Menu</b>
                            <p><a href = "https://www.chiquito.co.uk/restaurants/south-west/swindon/swindon" id={"Chiq_Link"}>chiquito.co.uk</a></p>
                            <b className="Bfooter">Phone</b>
                            <p>01793 482830</p>
                        </ul>
                    </small>
                </Card.Footer>
            </Card>
        </CardGroup>
        <CardGroup style={{margin: 25}}>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Pizza Hut" name="Pizza Hut">Pizza Hut</a></Card.Title>
                    <Card.Text>
                        Family-friendly chain known for its made-to-order pizzas.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={PizzaHut} />
                <Card.Footer className ="Pfooter">
                    <small>
                        <ul>
                            <b className="Bfooter">Address</b>
                                <p>Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <b className="Bfooter">Hours</b>
                            <p>
                                Friday	11:30am–11pm<br/>
                                Saturday	11am–11pm<br/>
                                Sunday	12pm–10pm<br/>
                                Monday	11:30am–10:30pm<br/>
                                Tuesday	11:30am–10:30pm<br/>
                                Wednesday	11:30am–10:30pm<br/>
                                Thursday	11:30am–10:30pm<br/>
                            </p>
                            <b className="Bfooter">Menu</b>
                            <p><a href = "https://www.pizzahut.co.uk/restaurants/food/" id={"PH_Link"}>pizzahut.co.uk</a></p>
                            <b className="Bfooter"></b>
                            <b className="Bfooter">Phone</b>
                            <p>01793 422844</p>
                        </ul>
                    </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Nando's" name="Nando's">Nando's</a></Card.Title>
                    <Card.Text>
                        Afro-Portuguese chain restaurant serving flame-grilled chicken in spicy chilli sauce.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={Nandos} />
                <Card.Footer className = "Pfooter">
                    <small>
                        <ul>
                            <b className="Bfooter">Address</b>
                            <p>2, Regent Circus, Swindon SN1 1FA</p>
                        <b className="Bfooter">Hours</b>
                            <p>
                               Friday	11:30am–10:30pm<br/>
                                Saturday	11:30am–10:30pm<br/>
                                Sunday	11:30am–10pm<br/>
                                Monday	11:30am–10:30pm<br/>
                                Tuesday	11:30am–10:30pm<br/>
                                Wednesday	11:30am–10:30pm<br/>
                                Thursday	11:30am–10:30pm<br/>

                            </p>
                            <b className="Bfooter">Menu</b>
                            <p><a href = "https://www.nandos.co.uk/food/menu?utm_source=googlemaps&utm_medium=organic&utm_content=menu&utm_campaign=local" id={"Nan_Link"}>nandos.co.uk</a></p>
                            <b className="Bfooter">Phone</b>
                            <p>01793 480769</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title><a href="Fratello's" name="Fratello's">Fratello's</a></Card.Title>
                    <Card.Text>
                        Family-friendly Italian restaurant with a wood-burning pizza oven and a specials chalkboard.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="top" src={Fratellos} />
                <Card.Footer className="Pfooter">
                    <small><ul>
                        <b className="Bfooter">Address</b>
                        <p>12 Victoria Rd, Swindon SN1 3AJ</p>
                        <b className="Bfooter">Hours</b>
                        <p>
                            Friday	12pm-2pm,6pm-11pm<br/>
                            Saturday	12pm-11pm<br/>
                            Sunday	12pm-11pm<br/>
                            Monday	12pm-2pm,6pm-11pm<br/>
                            Tuesday	12pm-2pm,6pm-11pm<br/>
                            Wednesday	12pm-2pm,6pm-11pm<br/>
                            Thursday	12pm-2pm,6pm-11pm<br/>

                        </p>
                        <b className="Bfooter">Menu</b>
                        <p><a href = "http://www.fratellosswindon.co.uk/swindon/menu.html" id={"Frat_Link"}>fratellosswindon.co.uk</a></p>
                        <b className="Bfooter">Phone</b>
                        <p>01793 574444</p>
                    </ul></small>
                </Card.Footer>
            </Card>
        </CardGroup>



    </div>
)