import React from 'react';
import MapContainer from '../component/MapContainer';
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import FB from '../images/F&B.jpg';
import Chiquto from '../images/Chiquto.jpg';
import HW from '../images/Hall&Woodhouse.jpg';
import PizzaHut from '../images/PizzaHut.jpg';
import Nandos from '../images/Nandos.jpg';
import Fratellos from '../images/Fratellos.jpg';




export const PlacesToGo = () =>(
    <div>
        <div>
            <MapContainer/>
        </div>

        <CardGroup style={{margin: 25}}>
            <Card>
                <Card.Img variant="top" src={FB}/>
                <Card.Body>
                    <Card.Title><a name="Frankie & Benny's">Frankie & Benny's</a></Card.Title>
                    <Card.Text>
                        Frankie & Benny's is a chain restaurant serving Italian and American comfort-food classics in a family-friendly atmosphere.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <ul>
                            <p>Address: Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <p>Hours:
                                <li>Friday	7:30am–11pm</li>
                                <li>Saturday	7:30am–11pm</li>
                                <li>Sunday	7:30am–10:30pm</li>
                                <li>Monday	9am–11pm</li>
                                <li>Tuesday	9am–11pm</li>
                                <li>Wednesday	9am–11pm</li>
                                <li>Thursday	9am–11pm</li>
                            </p>
                            <p>Menu: <a href = "https://www.frankieandbennys.com/restaurants/swindon/menu">frankieandbennys.com</a></p>
                            <p>Phone: 01793 613136</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={HW} />
                <Card.Body>
                    <Card.Title><a name="Hall & Woodhouse">Hall & Woodhouse</a></Card.Title>
                    <Card.Text>
                        Hall & Woodhouse in Wichelstowe is a brand new pub from Dorset Brewers of the same name. No matter what the occasion Hall & Woodhouse is perfect, whether you’re looking for a quick lunch, celebration dinner, business meeting or just a few drinks.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <ul>
                            <p>Address: Hall & Woodhouse, Peglars Way, Swindon SN1 7DA</p>
                            <p>Hours:
                                <li>Friday	9am–11pm</li>
                                <li>Saturday	9am–11pm</li>
                                <li>Sunday	9am–10:30pm</li>
                                <li>Monday	9am–11pm</li>
                                <li>Tuesday	9am–11pm</li>
                                <li>Wednesday	9am–11pm</li>
                                <li>Thursday	9am–11pm</li>
                            </p>
                            <p>Menu: <a href = "https://www.hall-woodhousewichelstowe.co.uk/dine/?utm_source=local&utm_medium=organic&utm_content=gmb">hall-woodhousewichelstowe.co.uk</a></p>
                            <p>Phone: 01793 209207</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Chiquto} />
                <Card.Body>
                    <Card.Title><a name="Chiquto">Chiquto</a></Card.Title>
                    <Card.Text>
                        Colourful chain restaurant dishing up a menu of Tex-Mex favourites, beer and cocktails.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <ul>
                            <p>Address: Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <p>Hours:
                                <li>Friday	7:30am–11pm</li>
                                <li>Saturday	7:30am–11pm</li>
                                <li>Sunday	7:30am–10:30pm</li>
                                <li>Monday	9am–11pm</li>
                                <li>Tuesday	9am–11pm</li>
                                <li>Wednesday	9am–11pm</li>
                                <li>Thursday	9am–11pm</li>
                            </p>
                            <p>Menu: <a href = "https://www.chiquito.co.uk/restaurants/south-west/swindon/swindon">chiquito.co.uk</a></p>
                            <p>Phone: 01793 482830</p>
                        </ul>
                    </small>
                </Card.Footer>
            </Card>
        </CardGroup>
        <CardGroup style={{margin: 25}}>
            <Card>
                <Card.Img variant="top" src={PizzaHut} />
                <Card.Body>
                    <Card.Title><a name="Pizza Hut">Pizza Hut</a></Card.Title>
                    <Card.Text>
                        Family-friendly chain known for its made-to-order pizzas.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <ul>
                            <p>Address: Greenbridge Retail Park, Drakes Way, Swindon SN3 3SQ</p>
                            <p>Hours:
                                <li>Friday	11:30am–11pm</li>
                                <li>Saturday	11am–11pm</li>
                                <li>Sunday	12pm–10pm</li>
                                <li>Monday	11:30am–10:30pm</li>
                                <li>Tuesday	11:30am–10:30pm</li>
                                <li>Wednesday	11:30am–10:30pm</li>
                                <li>Thursday	11:30am–10:30pm</li>
                            </p>
                            <p>Menu: <a href = "https://www.pizzahut.co.uk/restaurants/food/">pizzahut.co.uk</a></p>
                            <p>Phone: 01793 422844</p>
                        </ul>
                    </small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Nandos} />
                <Card.Body>
                    <Card.Title><a name="Nando's">Nando's</a></Card.Title>
                    <Card.Text>
                        Afro-Portuguese chain restaurant serving flame-grilled chicken in spicy chilli sauce.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <ul>
                            <p>Address: 2, Regent Circus, Swindon SN1 1FA</p>
                            <p>Hours:
                                <li>Friday	11:30am–10:30pm</li>
                                <li>Saturday	11:30am–10:30pm</li>
                                <li>Sunday	11:30am–10pm</li>
                                <li>Monday	11:30am–10:30pm</li>
                                <li>Tuesday	11:30am–10:30pm</li>
                                <li>Wednesday	11:30am–10:30pm</li>
                                <li>Thursday	11:30am–10:30pm</li>

                            </p>
                            <p>Menu: <a href = "https://www.nandos.co.uk/food/menu?utm_source=googlemaps&utm_medium=organic&utm_content=menu&utm_campaign=local">nandos.co.uk</a></p>
                            <p>Phone: 01793 480769</p>
                        </ul></small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={Fratellos} />
                <Card.Body>
                    <Card.Title><a name="Fratello's">Fratello's</a></Card.Title>
                    <Card.Text>
                    Family-friendly Italian restaurant with a wood-burning pizza oven and a specials chalkboard.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><ul>
                        <p>Address: 12 Victoria Rd, Swindon SN1 3AJ</p>
                        <p>Hours:
                            <li>Friday	12pm-2pm,6pm-11pm</li>
                            <li>Saturday	12pm-11pm</li>
                            <li>Sunday	12pm-11pm</li>
                            <li>Monday	12pm-2pm,6pm-11pm</li>
                            <li>Tuesday	12pm-2pm,6pm-11pm</li>
                            <li>Wednesday	12pm-2pm,6pm-11pm</li>
                            <li>Thursday	12pm-2pm,6pm-11pm</li>

                        </p>
                        <p>Menu: <a href = "http://www.fratellosswindon.co.uk/swindon/menu.html">fratellosswindon.co.uk</a></p>
                        <p>Phone: 01793 574444</p>
                    </ul></small>
                </Card.Footer>
            </Card>
        </CardGroup>



    </div>
)