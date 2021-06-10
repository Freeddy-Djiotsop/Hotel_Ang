import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import {IHotel} from "./hotel-list.module";

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrls: ['./hotel-list.component.css']
  })

export class HotelListComponent implements OnInit
{

    public title = "Hotelliste";

    public hotels: IHotel[] =
    [
        {
            hotelId: 1,
            hotelName: 'Buea sweet life',
            beschreibung: 'Belle vue au bord de la mer',
            preis: 230.5,
            imageUrl: 'assets/img/hotel-room.jpg',
            rating: 3.5
        },

        {
            hotelId: 2,
            hotelName: 'Marakech',
            beschreibung: 'Profitez de la vue sur les montagnes',
            preis: 145.5,
            imageUrl: 'assets/img/the-interior.jpg',
            rating: 5
        },

        {
            hotelId: 3,
            hotelName: 'Buea sweet life',
            beschreibung: 'Belle vue au bord de la mer',
            preis: 120.12,
            imageUrl: 'assets/img/indoors.jpg',
            rating: 4
        },

        {
            hotelId: 4,
            hotelName: 'Cape town city',
            beschreibung: 'Magnifique cadre pour votre sejour',
            preis: 135.12,
            imageUrl: 'assets/img/window.jpg',
            rating: 2
        },
    ];

    public showBadge: boolean;//default false
    private _hotelFilter = 'Stichwort';

    public filteredHotels: IHotel[] = [];

    public receivedRating: string;

    public toggleIsNewBadge(): void {
        this.showBadge = !this.showBadge;
    }

    ngOnInit()
    {
        this.filteredHotels = this.hotels;
        this.hotelFilter = '';
    }

    public get hotelFilter():string
    {
        return this._hotelFilter;
    }

    public set hotelFilter(filter: string)
    {
        this._hotelFilter = filter;
        this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
    }

    private filterHotels(kriterium: string): IHotel[]
    {
        kriterium = kriterium.toLocaleLowerCase();

        //memberfunktion von Arrays
        const ergebnis = this.hotels.filter(
            (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(kriterium)!=-1
        );

        return ergebnis;
    }

   public receiveRatingClicked(message: string): void
   {
    this.receivedRating = message;
   }
}