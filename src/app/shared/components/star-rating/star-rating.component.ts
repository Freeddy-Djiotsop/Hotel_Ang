import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component({
    selector: 'app-star-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges
{
    public starWidth: number;
    

    @Input()//Important pour la communication entre le component parent et l'enfant
    public rating : number = 2;//Je viens de dire que rating sera modifier par le parent, et dans le parent hotel-list.component.html je vais modifier cette valeur
    
    @Output()
    public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();//On cree un nouvel objet

    ngOnChanges()
    {
        this.starWidth = this.rating * 125/5;
    }

    public sendRating(): void
    {
        this.starRatingClicked.emit(`Die Note beträgt ${this.rating}`);
    }
}