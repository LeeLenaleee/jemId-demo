import React, {ChangeEventHandler, Component, Fragment, SyntheticEvent} from "react"
import ApiService from "../../shared/Api.service"
import { emptyProps, PlantItem, ItemListState } from "../../shared/Interfaces";
import TextField from "@material-ui/core/TextField";
import './ItemsList.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Redirect } from "react-router-dom";

export default class ItemsList extends Component<emptyProps, ItemListState> {
    allItems: [] | PlantItem[] = [];
    filteredItems: [] | PlantItem[] = [];

    constructor (props: emptyProps) {
        super(props);
        this.state = {
            allItems: [],
            filteredItems: [],
            singlePot: null,
            redirect: false,
            minimumPotSize: 0
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

    updateFilter(e: SyntheticEvent) {
        const t = e.target as HTMLInputElement
        const value= Number(t.value);

        this.filteredItems = this.allItems.filter(item => (item.PotmaatNumeriek >= value));


        this.setState({
            filteredItems: this.filteredItems,
            minimumPotSize: value
        });
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
                <div className={'inputMinPotSize'}>
                    <TextField onChange={this.updateFilter.bind(this)} type={'number'} value={this.state.minimumPotSize} label={'Minimale potmaat'}/>
                </div>
               {
                this.filteredItems.length === 0 ? this.allItems.length === 0 ? <p className={'centerText'}>Geen items beschikbaar</p> : <p className={'centerText'}>Geen items beschikbaar met huidige filters</p> :
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

