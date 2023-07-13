import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  joboffer : any = [
    {
      title: "Event1",
      description: "Marie & Juan Wedding",
      qualifications: [
        "Marie and Juan's wedding reception was a memorable and enchanting event held in a charming garden venue. The atmosphere was romantic, with beautiful floral arrangements and fascinating paintings and wallpapers. Guests were warmly welcomed and seated at elegantly decorated tables. The evening featured delicious food, heartfelt speeches, and a lively dance floor. The couple's first dance brought everyone together in celebration. Marie and Juan personally thanked each guest, creating a sense of appreciation. The night ended with a vibrant atmosphere and farewell wishes. It was an unforgettable celebration of their love, filled with joy and lasting memories."
      ]
    },
    {
      title: "Event2",
      description: "John Doe 7th Birthday",
      qualifications: [
        "John Doe's 7th birthday celebration reception was a lively and colorful event filled with entertainment and fun. The venue was beautifully decorated with balloons and streamers, setting a festive atmosphere. Guests enjoyed face painting, balloon animals, and a bounce house. Delicious treats and a themed birthday cake delighted everyone. John's grand entrance sparked excitement, and interactive entertainment kept the children engaged. Party games, crafts, and a photo booth added to the enjoyment. Kid-friendly food options were served, and party favors were given as a token of appreciation. It was a joyful celebration that created lasting memories for John and his loved ones."
      ]
    },
    {
      title: "Event3",
      description: "Jane Doe 18th Birthday",
      qualifications: [
        "Jane Doe's 18th debut birthday celebration reception was an elegant and sophisticated event held in a glamorous ballroom. Guests were greeted with a red carpet entrance and enjoyed a luxurious atmosphere. Jane made a grand entrance, looking radiant in her gown, and heartfelt speeches were given in her honor. The evening featured a delectable feast, live music, and special performances. A lavish dessert spread delighted guests, and Jane personally thanked each attendee. It was a memorable celebration of Jane's transition into adulthood, filled with elegance, love, and cherished memories."
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
