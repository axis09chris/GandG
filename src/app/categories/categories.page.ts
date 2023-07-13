import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor() { }

  joboffer : any = [
    {
      title: "Wedding",
      description: "The Place G&G’s Catering Services and Restaurant will throw you a perfect wedding reception, fit only for your unforgettable and once in a lifetime day!",
      qualifications: [
        "Selection from a wide array of dishes",
        "Three-layered (3) fondant cake (only 1st layer is edible) following your motif color",
        "Refillable soft drinks or fruit punch or iced tea",
        "One (1) bottle of sparkling wine for the bride and groom's toast",
        "Scheduled food tasting for two (2) persons only",
        "Decorated bird cage with doves",
        "Signature frame",
        "Wedding guestbook",
        "Place cards for sponsors at the presidential table",
        "Elegant flowers for the whole entourage",
        "Floral centerpiece for the presidential or head table",
        "Elegant floral centerpieces and candles for each guest table",
        "Elegant floral centerpiece for the buffet table",
        "All tables dressed in floor length tablecloth, set with napkins",
        "Tiffany chairs",
        "Free giveaways for the first five (5) pairs at the presidential/head table (a special rate will be extended for additional giveaways)",
        "Free use of sound system",
        "Use of bridal car within city limits and maximum of 3 hours only (in excess of 3 hours, charge of PhP1,000.00/hr. to be paid directly to the driver)",
        "Program emcee for the reception",
        "FREE hotel room accommodation for two (2) persons"
      ]
    },
    {
      title: "Baptismal",
      description: "The Place G&G's Catering Services and Restaurant will throw you a perfect wedding reception, fit only for your unforgettable and once in a lifetime day!",
      qualifications: [
        "Selection from a wide array of dishes",
        "Floral centerpiece for the buffet table",
        "Floral centerpiece for each guest table",
        "All tables dressed in floor length table cloth, set with table napkins",
        "Chairs with white seat cover and accent ribbon in your motif color",
        "Waiter service",
        "Refillable iced tea or soft drinks",
        "Purified drinking water"
      ]
    },
    {
      title: "Debuts",
      description: "The Place G&G's Catering Services and Restaurant will throw you a perfect wedding reception, fit only for your unforgettable and once in a lifetime day!",
      qualifications: [
        "Selection from a wide array of dishes",
        "Three-layered (3) fondant cake (only 1st layer is edible) following motif color",
        "One (1) bottle of champagne for the debutant's family toast",
        "Refillable soft drinks or fruit punch",
        "Scheduled food tasting for two (2) persons only",
        "18 long-stemmed roses for the entourage",
        "18 candles for the entourage",
        "Corsage for the mother",
        "Wrist corsage for the debutant",
        "Special floral centerpiece for the presidential or head table",
        "Flower centerpieces and candles for each guest table",
        "Elegant floral centerpiece for the buffet table",
        "Signature frame",
        "Personalized guestbook",
        "Place cards and menu cards for the sponsors at the presidential table",
        "All tables dressed in floor length tablecloth, set with table napkins",
        "Tiffany chairs",
        "Free giveaways for the first five (5) pairs at the presidential/head table (a special rate will be extended for giveaways)",
        "Free use of sound system"
      ]
    },
  ]

  ngOnInit() {
  }
  isModalOpen = false;
  toBeDisplay : any = {}
  setOpen(isOpen: boolean, title: string){
    this.isModalOpen = isOpen;
    for(let i = 0; i < this.joboffer.length; i++){
        if(title == this.joboffer[i].title){
          this.toBeDisplay = this.joboffer[i]
        }
    }
  }
}
