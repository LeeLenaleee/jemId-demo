import React, {Component, Fragment} from "react"
import { Carousel } from "react-responsive-carousel";
import { Belading, Eigenschap, LocationStateSinglePot, PlantItem } from "../../shared/Interfaces";
import "./SinglePotItem.css"


export default class SinglePotItem extends Component <LocationStateSinglePot> {
    potDetails: PlantItem = this.props.location.state.pot;

    render () {
        return (
            <div className={"gridContainer"}>
                <div className={"gridCarousel"}>
                    <Carousel>
                        {this.potDetails.Fotos.map(foto => (<img className={'carouselImg'} key={foto.ID} src={foto.UrlOrigineel} />))}
                    </Carousel>
                </div>
                <div>
                    <div className={"gridTitle"}>
                    <h2>{this.potDetails.Naam}</h2>
                    </div>

                    <div className={"gridDetailsContainer"}>
                        <div className={"gridPropertys"}>
                            <p>Eigenschappen:</p>
                            <ul>
                            {this.potDetails.Eigenschappen.map((eigenschap: Eigenschap) => (
                                <li key={eigenschap.ID}>{eigenschap.EigenschapNaam}: {eigenschap.Waarde}</li>
                            ))}
                            </ul>
                        </div>

                        <div className={"gridLoads"}>
                            <p>Beladingen:</p>
                            <ul>
                                {this.potDetails.Beladingen.map((belading: Belading) => (
                                    <li>
                                        <p>FustOmschrijving: {belading.FustOmschrijving}</p>
                                        <p>Ladingdrager: {belading.Ladingdrager}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}