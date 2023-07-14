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
      ],
      services: [
        "Bridal Car Rental",
        "Photo and Video Coverage", 
        "Bridal and Entourage Attire",
        "Church and Entourage Flower Arrangement",
        "Live Entertainment",
        "Souvenir Items",
        "Invitations",
        "Wedding Consultancy",
        "Coordination and Emceeing",
        "Audio Equipment and other party needs"
      ],
      terms: [
        "Rates are subject to change without prior notice",
        "Other optional items and services mentioned above must be coordinated with the Account Executive in charge of the function at least one (1) week prior to the event.",
        "A non-refundable and non-transferrable reservation fee of PhP 10,000.00 is required and can be paid in cash, check, or any acceptable credit card.",
        "A 50% deposit of the estimated contract package will be required upon signing of the catering contract. Full payment shall be settled two (2) weeks prior to the event. Incidental charges incurred during the event must be settled immediately after the function in cash or credit card only. No checks will be accepted on the day of the function. Send Bill arrangement will not be honored."
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
      ],
      services: [
        "Buffet lunch/dinner Php 610.00 / person",
        "Buffet lunch/dinner Php 675.00 / person",
        "Buffet lunch/dinner Php 740.00 / person",
        "Buffet lunch/dinner Php 875.00 / person",
        "Children's party menu Php 350.00 / person",
      ],
      terms: [
        "Rates are subject to change without prior notice.",
        "Should the package rates quoted increase before the event day, the new rate will apply.",
        "Other optional items and services mentioned above must be coordinated with the Account Executive in charge of the function at least a week prior to the event.",
        "A NON-REFUNDABLE and NON-TRANSFERRABLE reservation fee of PhP 10,000.00 is REQUIRED and can be paid in cash or check. (Check payable to TAMAYO'S FRANCHISING CORP.)",
        "A 50% deposit of the estimated package cost will be required upon signing of catering contract. Full payment shall be settled two weeks prior to the vevent. Incidental charges incurred during the event must be settled immediately after the function in cash. No checks will be accepted on the day of the function. Send bill arrangement will not be honored.",
        "Replacing or removing amenities is not encouraged."
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
      ],
      services: [
        "Bridal Car Rental",
        "Photo and Video Coverage", 
        "Bridal and Entourage Attire",
        "Church and Entourage Flower Arrangement",
        "Live Entertainment",
        "Souvenir Items",
        "Invitations",
        "Wedding Consultancy",
        "Coordination and Emceeing",
        "Audio Equipment and other party needs"
      ],
      terms: [
        "Rates are subject to change without prior notice",
        "Other optional items and services mentioned above must be coordinated with the Account Executive in charge of the function at least one (1) week prior to the event.",
        "A non-refundable and non-transferrable reservation fee of PhP 10,000.00 is required and can be paid in cash, check, or any acceptable credit card.",
        "A 50% deposit of the estimated contract package will be required upon signing of the catering contract. Full payment shall be settled two (2) weeks prior to the event. Incidental charges incurred during the event must be settled immediately after the function in cash or credit card only. No checks will be accepted on the day of the function. Send Bill arrangement will not be honored.",
        "Replacing or removing amenities is not encouraged."
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
