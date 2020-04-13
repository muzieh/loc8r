import {Component, Input, OnInit} from '@angular/core';
import {Loc8rDataService} from "../loc8r-data.service";
import {Location, Review} from "../location";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() location: Location;

  public googleApiKey: string = "AIzaSyB8ZfaJ79cVCWKdpT0SNx_iXhLmvM75QN4";
  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };
  public formVisible: boolean = false;

  constructor(private loc8rDataService: Loc8rDataService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  private formIsValid(): boolean {
    if(this.newReview.reviewText && this.newReview.author && this.newReview.rating) {
      return true;
    }
    return false;
  }

  onReviewSubmit() {
    this.formError = '';
    this.newReview.author = this.getUserName();
    if(this.formIsValid()) {
      console.log(this.newReview);
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
        .then((review: Review) => {
          console.log("review saved");
          let reviews = this.location.reviews.slice(0);
          reviews.unshift(review);
          this.location.reviews = reviews;
          this.resetAndHideRevewForm();
        });``
    } else {
      this.formError = 'All fields are required';
    }
  }
  public formError: string;

  private resetAndHideRevewForm() {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  public getUserName(): string {
    const {name} = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }
}
