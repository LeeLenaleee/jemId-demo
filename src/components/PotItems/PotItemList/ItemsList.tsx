import React, {Component, Fragment} from "react"
import ApiService from "../../shared/Api.service"
import { emptyProps, PlantItem, ItemListState } from "../../shared/Interfaces";
import './ItemsList.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Redirect } from "react-router-dom";

export default class ItemsList extends Component<emptyProps, ItemListState> {
    allItems: [] | [PlantItem] = [];
    filteredItems: [] | [PlantItem] = [];

    constructor (props: emptyProps) {
        super(props);
        this.state = {
            allItems: [],
            filteredItems: [],
            singlePot: null,
            redirect: false
        };

    }

    componentDidMount() {
        ApiService.get('/artikel?relatieid=215').then((res) => (res.json()))
        .then((res) => {
            this.allItems = res;
            this.filteredItems = res;
            this.updateState();
        },
        (err) => {});
    }

    updateState() {
        this.setState({
            allItems: this.allItems,
            filteredItems: this.filteredItems
        })
    }

    toSinglePotInfo (pot: PlantItem, e: React.MouseEvent) {
        const evtTarget = e.target as HTMLElement;

        if (evtTarget.tagName.toLowerCase() === 'button' || evtTarget.tagName.toLowerCase() === 'li') {
            return
        }

        this.setState({
            redirect: true,
            singlePot: pot
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: '/singlePot',
                state: {pot: this.state.singlePot}
            }}/>

        }

        return(
            <div>
               {
                this.filteredItems.length === 0 ? this.allItems.length === 0 ? <p>No items available</p> : <p>No items available with current filters</p> :
                    <Fragment>
                        {this.filteredItems.map(item => (
                            <div key={item.ID} className={'potItem'} onClick={(e) => this.toSinglePotInfo(item, e)}>
                                <h3>{item.Naam}</h3>
                                <div className={'wrapper'}>
                                    <div className={"info"}>
                                        <p>Hoogte: {item.Hoogte}</p>
                                        <p>Potmaat: {item.Potmaat}</p>
                                    </div>
                                    <div className={'images'}>
                                        <Carousel showThumbs={false}>
                                            {item.Fotos.map(foto => (
                                                <img src={foto.UrlThumb220} alt={item.Naam}/>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                }
            </div>
        )
    }
}

