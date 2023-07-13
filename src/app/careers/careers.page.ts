import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.page.html',
  styleUrls: ['./careers.page.scss'],
})
export class CareersPage implements OnInit {

  constructor() { }

  joboffer : any = [
    {
      title: "Florist",
      description: "To ensure success as a florist, should demonstrate accurate, updated knowledge about flowers' nutritional requirements. Invariably, a terrific florist will craft robust packaging solutions to avoid preventable breakages.",
      qualifications: [
        "Male/Female", "At least High School Graduate", "Knowledge in making reports (inventories, receiving incidents)", "Atleast one year experience as Florist"
      ]
    },
    {
      title: "Catering Manager",
      description: "A Catering Manager is a professional who is responsible for monitoring the quality of food and service at their outlets. They ensure that all operations run smoothly, from cooking to serving customers, in order to achieve peak performance every day.",
      qualifications: [
        "Male/Female",
        "Graduate of Bachelor’s Degree preferably in Business Administration, Advertising, Marketing, Mass Communication and other related course",
        "At least 5 years working experience in sales", "With leadership, auditing and reportorial skills"
      ]
    },
    {
      title: "Accounts Executive",
      description: "To build relationships with new clients and manage relationships with existing ones. Account executive jobs exist across industries, serving as point of contact for clients and internal company teams, often interacting with both daily.",
      qualifications: [
        "Male/Female",
        "Graduate of Bachelor’s Degree preferably in Business Administration, Advertising, Marketing, Mass Communication and other related course",
        "Analytical, decision-making ang management skills",
        "Ability to develop lasting professional relationships with clients",
        "Strong communication, both written and verbal skills Experience on sales is a plus"
      ]
    },
    {
      title: "Marketing Staff",
      description: "Coordinating and producing all materials representing the business. It is the Marketing Department's job to reach out to prospects, customers, investors and/or the community, while creating an overarching image that represents your company in a positive light.",
      qualifications: [
        "Male/Female",
        "Graduate of Bachelor’s Degree preferably in Business Administration, Advertising, Marketing, Mass Communication and other related course",
        "Knowledge in using Adobe Photoshop",
        "With Photography Skills"
      ]
    },
    {
      title: "R&D Chef",
      description: "The Research and Development (R&D) Chef creates new recipes to improve food product from the organisation. He/She designs new recipes in consideration of ideas and market demand for new products. He/She improves his/her recipes and preparation methods to meet mass production and regulatory needs.",
      qualifications: [
        "Male or Female",
        "College graduate preferably HRM or any related course",
        "Work experience as Hot Kitchen Cook is an advantage",
        "At least 23 years old",
        "Has knowledge on photography and photoshop",
        "With good communication skills",
        "Team Player",
        "Preferably residing in nearby areas"
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