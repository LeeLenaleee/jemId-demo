export interface AanbodRegel {
    AantalStuks: number,
    ArtikelInfoID: number,
    EindDatum: string,
    ID: number,
    PeriodeOmschrijving: string,
    StartDatum: string,
    VanafPrijs: Number
}

export interface ArtikelGroep {
    Code: string,
    ID: number,
    Naam: string
}

export interface Belading {
    AantalFustPerLaag: number,
    AantalLagenPerDrager: number,
    AantalStuksPerFust: number,
    ArtikelinfoID: number,
    FustCode: string,
    FustOmschrijving: string,
    ID: number,
    Ladingdrager: string,
    omschrijving: string
}

export interface Eigenschap {
    ArtikelInfoID: number,
    EigenschapCode: string,
    EigenschapNaam: string,
    ID: number,
    Waarde: string
}

export interface foto {
    ArtikelInfoID: number,
    ID: number,
    UrlOrigineel: string,
    UrlThumb50: string,
    UrlThumb220: string,
    UrlThumb360: string,
    UrlThumb600: string
}

export interface PlantItem {
    AanbodRegels: [] | [AanbodRegel]
    ArtikelGroep: ArtikelGroep,
    ArtikelGroepNaam: string,
    Beladingen: [] | [Belading],
    Code: string,
    Eigenschappen: [] | [Eigenschap],
    Fotos: [] | [foto],
    Hoogte: string,
    ID: number,
    Naam: string,
    Potmaat: string,
    PotmaatNumeriek: number,
    VbnProductCode: string,
    VbnsProductNaam: string
}

export interface emptyProps {}

export interface ItemListState {
    allItems: [] | PlantItem[],
    filteredItems: [] | PlantItem[],
    singlePot: null | PlantItem,
    redirect: boolean,
    minimumPotSize: number,
}

export interface LocationStateSinglePot {
    location: {
        state: {
            pot: PlantItem
        }
    }
}